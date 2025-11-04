<template>
  <q-page class="mcf-page-container-fullwidth">
    <div class="budget-page-content">

      <!-- Action Button -->
      <div class="mcf-action-header">
        <q-btn
          icon="add"
          :label="$t('budget.newSpendingPlan')"
          class="mcf-btn-primary mcf-btn-fullwidth"
          @click="showCreateDialog = true"
        />
      </div>

      <!-- Lista Budget -->
      <div class="container">
        <MCFLoading
          v-if="loading"
          :message="$t('budget.loadingBudgets')"
          :submessage="$t('budget.loadingBudgetsSubtitle')"
        />

        <div v-else-if="budgets.length === 0" class="empty-state">
          <q-icon
            name="account_balance_wallet"
            size="80px"
            color="grey-4"
          />
          <h3>{{ $t('budget.noBudgetCreated') }}</h3>
          <p>{{ $t('budget.noBudgetDescription') }}</p>
          <q-btn
            icon="add"
            :label="$t('budget.createFirstPlan')"
            class="mcf-btn-primary"
            size="lg"
            @click="showCreateDialog = true"
          />
        </div>

        <!-- Grid dei Budget -->
        <div v-else class="budget-grid">
          <div
            v-for="budget in budgets"
            :key="budget.id"
            class="budget-card"
          >
            <!-- Header della card -->
            <div class="budget-header">
              <div class="budget-main">
                <div class="budget-name">{{ budget.name }}</div>
                <div class="budget-period">
                  {{ formatDate(budget.start_date) }} - {{ formatDate(budget.end_date) }}
                </div>
                <div v-if="budget.description" class="budget-description">
                  {{ budget.description }}
                </div>
              </div>
              <div class="budget-actions">
                <q-btn-dropdown
                  flat
                  round
                  icon="more_vert"
                  size="sm"
                  class="text-grey-6"
                >
                  <q-list>
                    <q-item clickable v-close-popup @click="editBudget(budget)">
                      <q-item-section avatar>
                        <q-icon name="edit" />
                      </q-item-section>
                      <q-item-section>{{ $t('budget.modify') }}</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="deleteBudget(budget)">
                      <q-item-section avatar>
                        <q-icon name="delete" color="red" />
                      </q-item-section>
                      <q-item-section class="text-red">{{ $t('budget.delete') }}</q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>

            <!-- Importo e Progressi -->
            <div class="budget-progress">
              <div class="budget-amounts">
                <div class="amount-item">
                  <div class="amount-label">{{ $t('budget.totalBudget') }}</div>
                  <div class="amount-value primary">€{{ formatAmount(budget.total_amount) }}</div>
                </div>
                <div class="amount-item">
                  <div class="amount-label">{{ $t('budget.spent') }}</div>
                  <div class="amount-value">€{{ formatAmount(budget.spent_amount || 0) }}</div>
                </div>
                <div class="amount-item">
                  <div class="amount-label">{{ $t('budget.remaining') }}</div>
                  <div class="amount-value" :class="remainingClass(budget)">
                    €{{ formatAmount(budget.total_amount - (budget.spent_amount || 0)) }}
                  </div>
                </div>
              </div>

              <div class="progress-bar-container">
                <q-linear-progress
                  :value="getProgressValue(budget)"
                  size="12px"
                  :color="getProgressColor(budget)"
                  track-color="grey-3"
                  class="progress-bar"
                />
                <div class="progress-text">
                  {{ Math.round(getProgressValue(budget) * 100) }}% {{ $t('budget.used') }}
                </div>
              </div>
            </div>

            <!-- Badge del tipo -->
            <div class="budget-badges">
              <q-chip
                :color="getBudgetTypeColor(budget.budget_type)"
                text-color="white"
                size="sm"
                :label="getBudgetTypeLabel(budget.budget_type)"
              />
              <q-chip
                v-if="budget.is_current"
                color="green"
                text-color="white"
                size="sm"
                :label="$t('budget.active')"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dialog Creazione Budget -->
    <q-dialog
      v-model="showCreateDialog"
      persistent
      :full-width="$q.screen.lt.md"
      :full-height="$q.screen.lt.md"
    >
      <q-card :style="$q.screen.lt.md ? '' : 'min-width: 500px; max-width: 600px;'">
        <q-card-section>
          <div class="text-h6">{{ $t('budget.newPlanDialogTitle') }}</div>
          <div class="text-caption text-grey-6">{{ $t('budget.newPlanDialogSubtitle') }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-form @submit.prevent="createBudget" class="q-gutter-sm">
            <MCFInput
              v-model="newBudget.name"
              :label="$t('budget.planName')"
              required
              :placeholder="$t('budget.planNamePlaceholder')"
              :rules="[val => val && val.length > 0 || t('budget.nameRequired')]"
            />

            <MCFInput
              v-model="newBudget.description"
              :label="$t('budget.descriptionOptional')"
              type="textarea"
              rows="2"
              :placeholder="$t('budget.descriptionPlaceholder')"
            />

            <MCFSelect
              v-model="newBudget.budget_type"
              :options="budgetTypeOptions"
              :label="$t('budget.planType')"
              emit-value
              map-options
            />

            <div class="row q-gutter-sm">
              <div class="col">
                <MCFDatePicker
                  v-model="newBudget.start_date"
                  :label="$t('budget.startDate')"
                  required
                  :rules="[val => val && val.length > 0 || t('budget.startDateRequired')]"
                />
              </div>
              <div class="col">
                <MCFDatePicker
                  v-model="newBudget.end_date"
                  :label="$t('budget.endDate')"
                  required
                  :rules="[val => val && val.length > 0 || t('budget.endDateRequired')]"
                />
              </div>
            </div>

            <MCFInput
              v-model.number="newBudget.total_amount"
              :label="$t('budget.totalAmount')"
              type="number"
              step="0.01"
              min="0"
              required
              prefix="€"
              :rules="[val => val > 0 || t('budget.amountGreaterThanZero')]"
            />
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('common.cancel')" v-close-popup @click="resetForm" />
          <q-btn
            flat
            :label="$t('budget.createPlan')"
            color="primary"
            @click="createBudget"
            :loading="saving"
            :disable="!canCreateBudget"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useSnackbar } from 'src/composables/useSnackbar'
import { reportsAPI } from 'src/services/api/reports.js'
import { useAuthStore } from 'stores/auth.js'
import MCFLoading from 'src/components/MCFLoading.vue'
import MCFInput from 'src/components/forms/MCFInput.vue'
import MCFSelect from 'src/components/forms/MCFSelect.vue'
import MCFDatePicker from 'src/components/MCFDatePicker.vue'

const $q = useQuasar()
const { t } = useI18n()
const snackbar = useSnackbar()

// Stato reattivo
const budgets = ref([])
const loading = ref(false)
const saving = ref(false)
const showCreateDialog = ref(false)

// Form nuovo budget
const newBudget = ref({
  name: '',
  description: '',
  budget_type: 'custom',
  start_date: '',
  end_date: '',
  total_amount: null
})

// Computed
const budgetTypeOptions = computed(() => [
  { label: t('budget.planTypes.monthly'), value: 'monthly' },
  { label: t('budget.planTypes.seasonal'), value: 'seasonal' },
  { label: t('budget.planTypes.event'), value: 'event' },
  { label: t('budget.planTypes.yearly'), value: 'yearly' },
  { label: t('budget.planTypes.custom'), value: 'custom' }
])

const canCreateBudget = computed(() => {
  return newBudget.value.name &&
         newBudget.value.start_date &&
         newBudget.value.end_date &&
         newBudget.value.total_amount > 0
})

// Metodi
const loadBudgets = async () => {
  try {
    loading.value = true
    const response = await reportsAPI.getBudgets()
    budgets.value = response.results || response || []
    console.log('📊 Budget caricati:', budgets.value.length)
  } catch (error) {
    console.error('Errore nel caricamento dei budget:', error)
    snackbar.error(t('budget.errorLoadingBudgets'))
  } finally {
    loading.value = false
  }
}

const createBudget = async () => {
  if (!canCreateBudget.value) return

  saving.value = true
  try {
    await reportsAPI.createBudget(newBudget.value)

    snackbar.success(t('budget.budgetCreatedSuccess'))

    showCreateDialog.value = false
    resetForm()
    await loadBudgets()

  } catch (error) {
    console.error('Errore nella creazione del budget:', error)

    let errorMessage = t('budget.errorCreatingBudget')
    if (error.response?.data?.detail) {
      errorMessage = error.response.data.detail
    } else if (error.message) {
      errorMessage = error.message
    }

    snackbar.error(errorMessage)
  } finally {
    saving.value = false
  }
}

const resetForm = () => {
  newBudget.value = {
    name: '',
    description: '',
    budget_type: 'custom',
    start_date: '',
    end_date: '',
    total_amount: null
  }
}

// eslint-disable-next-line no-unused-vars
const editBudget = (budget) => {
  // TODO: Implementare modifica budget
  snackbar.info(t('budget.featureInDevelopment'))
}

const deleteBudget = (budget) => {
  $q.dialog({
    title: t('budget.confirmDeleteBudget'),
    message: t('budget.confirmDeleteBudgetMessage', { name: budget.name }),
    cancel: true,
    persistent: true
  }).onOk(async () => {
    try {
      await reportsAPI.deleteBudget(budget.id)

      snackbar.success(t('budget.budgetDeletedSuccess'))

      await loadBudgets()
    } catch (error) {
      console.error('Errore nell\'eliminazione del budget:', error)
      snackbar.error(t('budget.errorDeletingBudget'))
    }
  })
}

// Utility functions
const formatDate = (dateString) => {
  if (!dateString) return ''
  try {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  } catch {
    return dateString
  }
}

const formatAmount = (amount) => {
  return parseFloat(amount).toFixed(2)
}

const getProgressValue = (budget) => {
  if (!budget.total_amount || budget.total_amount === 0) return 0
  const spent = budget.spent_amount || 0
  return Math.min(spent / budget.total_amount, 1)
}

const getProgressColor = (budget) => {
  const progress = getProgressValue(budget)
  if (progress >= 1) return 'red'
  if (progress >= 0.8) return 'orange'
  return 'green'
}

const remainingClass = (budget) => {
  const remaining = budget.total_amount - (budget.spent_amount || 0)
  if (remaining < 0) return 'text-red'
  if (remaining < budget.total_amount * 0.2) return 'text-orange'
  return 'text-green'
}

const getBudgetTypeLabel = (type) => {
  const option = budgetTypeOptions.value.find(opt => opt.value === type)
  return option ? option.label : type
}

const getBudgetTypeColor = (type) => {
  switch (type) {
    case 'monthly': return 'blue'
    case 'seasonal': return 'green'
    case 'event': return 'purple'
    case 'yearly': return 'orange'
    default: return 'grey'
  }
}

// Lifecycle
onMounted(async () => {
  // Verifica autenticazione prima di caricare i dati
  const authStore = useAuthStore()
  if (authStore.isAuthenticated) {
    await loadBudgets()
  }
})
</script>

<style lang="scss" scoped>
.budget-page-content {
  width: 100%;
  margin: 0;
  padding: 16px 12px;

  @media (min-width: 768px) {
    padding: 24px 16px;
  }

  @media (min-width: 1200px) {
    max-width: 1400px;
    margin: 0 auto;
    padding: 24px 32px;
  }
}

.mcf-page-container-fullwidth {
  background-color: var(--mcf-bg-primary);
  min-height: 100vh;
  padding: 0 !important;
  margin: 0 !important;
  width: 100% !important;
}

// === ACTION HEADER ===
.mcf-action-header {
  margin-bottom: 20px;
  padding: 0;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
}

.mcf-btn-fullwidth {
  width: 100%;
  justify-content: center;
  padding: 12px 16px;

  @media (min-width: 768px) {
    padding: 14px 20px;
  }

  :deep(.q-btn__content) {
    justify-content: center;
    width: 100%;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

.header-main {
  flex: 1;
}

.page-title {
  font-size: 28px;
  font-weight: 700;
  color: var(--mcf-text-primary);
  margin: 0 0 8px 0;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 32px;
  }
}

.page-subtitle {
  font-size: 16px;
  color: var(--mcf-text-secondary);
  margin: 0;
  line-height: 1.4;
}


.empty-state {
  text-align: center;
  padding: 80px 20px;

  h3 {
    font-size: 24px;
    color: var(--mcf-text-primary);
    margin: 24px 0 12px 0;
  }

  p {
    font-size: 16px;
    color: var(--mcf-text-secondary);
    margin: 0 0 32px 0;
  }
}

// === BUDGET GRID ===
.budget-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}

.budget-card {
  background: var(--mcf-bg-surface);
  border: 1px solid var(--mcf-border-light);
  border-radius: 16px;
  box-shadow: var(--mcf-shadow-sm);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--mcf-shadow-md);
    border-color: var(--mcf-primary);
  }
}

// === BUDGET HEADER ===
.budget-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  gap: 16px;
}

.budget-main {
  flex: 1;
  min-width: 0;
}

.budget-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--mcf-text-primary);
  line-height: 1.3;
  margin-bottom: 4px;
}

.budget-period {
  font-size: 13px;
  color: var(--mcf-text-secondary);
  font-weight: 500;
  margin-bottom: 8px;
}

.budget-description {
  font-size: 14px;
  color: var(--mcf-text-muted);
  line-height: 1.3;
}

// === BUDGET PROGRESS ===
.budget-progress {
  padding: 0 20px 20px 20px;
}

.budget-amounts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

.amount-item {
  text-align: center;
}

.amount-label {
  font-size: 12px;
  color: var(--mcf-text-muted);
  margin-bottom: 4px;
  font-weight: 500;
}

.amount-value {
  font-size: 16px;
  font-weight: 700;
  color: var(--mcf-text-primary);
  font-feature-settings: 'tnum';

  &.primary {
    color: var(--mcf-primary);
  }
}

.progress-bar-container {
  margin-top: 16px;
}

.progress-bar {
  border-radius: 6px;
  margin-bottom: 8px;
}

.progress-text {
  font-size: 12px;
  color: var(--mcf-text-secondary);
  text-align: center;
  font-weight: 500;
}

// === BUDGET BADGES ===
.budget-badges {
  display: flex;
  gap: 8px;
  padding: 0 20px 20px 20px;
  flex-wrap: wrap;
}

// === RESPONSIVE ===
@media (max-width: 600px) {
  .budget-amounts {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .amount-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .amount-label {
    margin-bottom: 0;
  }
}
</style>
