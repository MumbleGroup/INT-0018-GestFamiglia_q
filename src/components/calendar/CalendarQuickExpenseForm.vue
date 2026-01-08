<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    position="bottom"
    transition-show="slide-up"
    transition-hide="slide-down"
  >
    <q-card class="mcf-quick-expense-card">
      <q-card-section class="mcf-quick-header">
        <div class="mcf-quick-title">
          {{ $t('calendar.newExpense') }}
        </div>
        <div class="mcf-quick-date">
          {{ formatDate(selectedDate) }}
        </div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleSubmit" class="q-gutter-sm">
          <!-- Importo (campo principale, grande) -->
          <q-input
            v-model.number="form.amount"
            :label="$t('expenses.amountRequired')"
            type="number"
            step="0.01"
            prefix="EUR"
            outlined
            dense
            autofocus
            :rules="[val => val > 0 || $t('expenses.invalidAmount')]"
            class="mcf-amount-input"
          />

          <!-- Descrizione -->
          <q-input
            v-model="form.description"
            :label="$t('expenses.descriptionRequired')"
            outlined
            dense
            :rules="[val => !!val || $t('validation.required')]"
          />

          <!-- Categoria -->
          <CategorySelect
            v-model="form.category"
            :label="$t('expenses.categoryRequired')"
            hide-subcategory
            @category-changed="onCategoryChanged"
          />
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="q-px-md q-pb-md">
        <q-btn
          flat
          :label="$t('common.cancel')"
          color="grey"
          @click="handleCancel"
        />
        <q-btn
          unelevated
          color="primary"
          :label="$t('common.save')"
          :loading="saving"
          @click="handleSubmit"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import CategorySelect from 'src/components/CategorySelect.vue'
import { expensesAPI } from 'src/services/api/expenses.js'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  selectedDate: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue', 'save', 'cancel'])

const { t, locale } = useI18n()
const $q = useQuasar()

const saving = ref(false)
const form = ref({
  amount: null,
  description: '',
  category: null
})

const onCategoryChanged = (categoryId) => {
  form.value.category = categoryId
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString(locale.value, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const resetForm = () => {
  form.value = {
    amount: null,
    description: '',
    category: null
  }
}

const handleSubmit = async () => {
  // Validazione
  if (!form.value.amount || form.value.amount <= 0) {
    $q.notify({
      type: 'warning',
      message: t('expenses.invalidAmount'),
      position: 'top'
    })
    return
  }

  if (!form.value.description) {
    $q.notify({
      type: 'warning',
      message: t('validation.required'),
      position: 'top'
    })
    return
  }

  if (!form.value.category) {
    $q.notify({
      type: 'warning',
      message: t('validation.required'),
      position: 'top'
    })
    return
  }

  saving.value = true
  try {
    const expenseData = {
      amount: form.value.amount,
      description: form.value.description,
      category: form.value.category,
      date: props.selectedDate,
      notes: ''
    }

    await expensesAPI.createExpense(expenseData)

    $q.notify({
      type: 'positive',
      message: t('expenses.expenseCreated'),
      position: 'top'
    })

    emit('save')
    emit('update:modelValue', false)
    resetForm()
  } catch (error) {
    console.error('Error creating expense:', error)
    $q.notify({
      type: 'negative',
      message: t('common.error'),
      position: 'top'
    })
  } finally {
    saving.value = false
  }
}

const handleCancel = () => {
  emit('cancel')
  emit('update:modelValue', false)
  resetForm()
}

// Reset form quando il dialog si chiude
watch(() => props.modelValue, (val) => {
  if (!val) {
    resetForm()
  }
})
</script>

<style lang="scss" scoped>
.mcf-quick-expense-card {
  width: 100%;
  max-width: 500px;
  border-radius: var(--mcf-radius-xl, 16px) var(--mcf-radius-xl, 16px) 0 0 !important;

  @media (min-width: 600px) {
    border-radius: var(--mcf-radius-xl, 16px) !important;
  }
}

.mcf-quick-header {
  border-bottom: 1px solid var(--mcf-border-light, #e5e7eb);
  padding-bottom: 12px;
}

.mcf-quick-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--mcf-text-primary, #1a1a1a);
}

.mcf-quick-date {
  font-size: 14px;
  color: var(--mcf-text-muted, #6b7280);
  margin-top: 4px;
  text-transform: capitalize;
}

.mcf-amount-input {
  :deep(.q-field__prefix) {
    color: var(--mcf-text-muted, #6b7280);
    font-weight: 500;
  }

  :deep(input) {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
