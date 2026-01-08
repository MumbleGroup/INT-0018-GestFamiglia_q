<template>
  <q-page class="mcf-calendar-page">
    <div class="mcf-calendar-content">
      <!-- Header navigazione mese -->
      <div class="mcf-calendar-header">
        <q-btn
          flat
          round
          dense
          icon="chevron_left"
          color="primary"
          @click="previousMonth"
        />
        <div class="mcf-month-label">
          {{ currentMonthLabel }}
        </div>
        <q-btn
          flat
          round
          dense
          icon="chevron_right"
          color="primary"
          @click="nextMonth"
        />
        <q-btn
          flat
          round
          dense
          icon="today"
          color="grey-7"
          @click="goToToday"
          class="q-ml-sm"
        >
          <q-tooltip>{{ $t('calendar.today') }}</q-tooltip>
        </q-btn>
      </div>

      <!-- Totale mese -->
      <div class="mcf-month-total">
        <span class="mcf-total-label">{{ $t('calendar.monthTotal') }}</span>
        <span class="mcf-total-amount">{{ formatCurrency(monthTotal) }}</span>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="mcf-loading-container">
        <q-spinner-dots color="primary" size="40px" />
        <div class="mcf-loading-text">{{ $t('common.loading') }}</div>
      </div>

      <!-- Timeline verticale -->
      <div v-else class="mcf-calendar-timeline">
        <div
          v-for="day in daysInMonth"
          :key="day.date"
          class="mcf-day-row"
          :class="{
            'mcf-day-row--today': day.isToday,
            'mcf-day-row--weekend': day.isWeekend,
            'mcf-day-row--has-expenses': day.expenses.length > 0
          }"
        >
          <!-- Day marker (timeline style) -->
          <div class="mcf-day-marker">
            <div class="mcf-day-number" :class="{ 'mcf-day-number--today': day.isToday }">
              {{ day.dayNumber }}
            </div>
            <div class="mcf-day-name">{{ day.dayName }}</div>
          </div>

          <!-- Day content area -->
          <div class="mcf-day-content">
            <!-- Spese di questo giorno -->
            <div
              v-for="expense in day.expenses"
              :key="expense.id"
              class="mcf-calendar-expense-item"
            >
              <div class="mcf-expense-info">
                <span class="mcf-expense-description">{{ expense.description }}</span>
                <span v-if="expense.category_detail" class="mcf-expense-category">
                  {{ expense.category_detail.name }}
                </span>
              </div>
              <span class="mcf-expense-amount">{{ formatCurrency(expense.amount) }}</span>
            </div>

            <!-- Bottone aggiungi spesa -->
            <div
              class="mcf-quick-add-trigger"
              @click="openQuickAdd(day.date)"
            >
              <q-icon name="add_circle_outline" size="18px" />
              <span>{{ $t('calendar.addExpense') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Add Form Modal -->
    <CalendarQuickExpenseForm
      v-model="showQuickForm"
      :selected-date="selectedDate"
      @save="handleQuickSave"
      @cancel="closeQuickForm"
    />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'
import { expensesAPI } from 'src/services/api/expenses.js'
import CalendarQuickExpenseForm from 'src/components/calendar/CalendarQuickExpenseForm.vue'

const { t, locale } = useI18n()
const $q = useQuasar()

// State
const loading = ref(false)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const expenses = ref([])
const showQuickForm = ref(false)
const selectedDate = ref(null)

// Computed: label del mese corrente
const currentMonthLabel = computed(() => {
  const date = new Date(currentYear.value, currentMonth.value, 1)
  return date.toLocaleDateString(locale.value, {
    month: 'long',
    year: 'numeric'
  })
})

// Computed: totale spese del mese
const monthTotal = computed(() => {
  return expenses.value.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0)
})

// Computed: genera i giorni del mese con le spese associate
const daysInMonth = computed(() => {
  const days = []
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  for (let d = 1; d <= lastDay.getDate(); d++) {
    const date = new Date(currentYear.value, currentMonth.value, d)
    const dateString = formatDateISO(date)

    days.push({
      date: dateString,
      dayNumber: d,
      dayName: date.toLocaleDateString(locale.value, { weekday: 'short' }),
      isToday: date.getTime() === today.getTime(),
      isWeekend: date.getDay() === 0 || date.getDay() === 6,
      // Confronta solo i primi 10 caratteri (YYYY-MM-DD) per gestire vari formati data
      expenses: expenses.value.filter(e => e.date && e.date.substring(0, 10) === dateString)
    })
  }

  return days
})

// Helpers
const formatDateISO = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const formatCurrency = (amount) => {
  return new Intl.NumberFormat(locale.value, {
    style: 'currency',
    currency: 'EUR'
  }).format(amount || 0)
}

// Methods
const loadExpenses = async () => {
  loading.value = true
  try {
    const startDate = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-01`
    const endDay = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
    const endDate = `${currentYear.value}-${String(currentMonth.value + 1).padStart(2, '0')}-${String(endDay).padStart(2, '0')}`

    const response = await expensesAPI.getExpenses({
      date_from: startDate,
      date_to: endDate
    })

    expenses.value = response.results || response || []
  } catch (error) {
    console.error('Error loading expenses:', error)
    $q.notify({
      type: 'negative',
      message: t('calendar.loadError'),
      position: 'top'
    })
    expenses.value = []
  } finally {
    loading.value = false
  }
}

const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const goToToday = () => {
  const today = new Date()
  currentMonth.value = today.getMonth()
  currentYear.value = today.getFullYear()
}

const openQuickAdd = (date) => {
  selectedDate.value = date
  showQuickForm.value = true
}

const closeQuickForm = () => {
  showQuickForm.value = false
  selectedDate.value = null
}

const handleQuickSave = () => {
  closeQuickForm()
  loadExpenses()
}

// Watch per ricaricare quando cambia il mese
watch([currentMonth, currentYear], () => {
  loadExpenses()
})

// Load initial data
onMounted(() => {
  loadExpenses()
})
</script>

<style lang="scss" scoped>
.mcf-calendar-page {
  background: var(--mcf-bg-primary, #fafcfd);
  min-height: 100vh;
}

.mcf-calendar-content {
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 24px;
  }
}

// Header navigazione mese
.mcf-calendar-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  padding: 12px 16px;
  background: var(--mcf-bg-surface, #ffffff);
  border-radius: var(--mcf-radius-lg, 12px);
  border: 1px solid var(--mcf-border-light, #e5e7eb);
  box-shadow: var(--mcf-shadow-sm, 0 1px 2px rgba(0,0,0,0.05));
}

.mcf-month-label {
  font-size: 18px;
  font-weight: 600;
  color: var(--mcf-text-primary, #1a1a1a);
  min-width: 180px;
  text-align: center;
  text-transform: capitalize;
}

// Totale mese
.mcf-month-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--mcf-primary, #239db0) 0%, var(--mcf-secondary, #2a5f82) 100%);
  border-radius: var(--mcf-radius-md, 8px);
  color: white;
}

.mcf-total-label {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
}

.mcf-total-amount {
  font-size: 20px;
  font-weight: 700;
}

// Loading state
.mcf-loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  gap: 16px;
}

.mcf-loading-text {
  font-size: 14px;
  color: var(--mcf-text-muted, #6b7280);
}

// Timeline verticale
.mcf-calendar-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mcf-day-row {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid var(--mcf-border-light, #e5e7eb);

  &:last-child {
    border-bottom: none;
  }

  &--today {
    background: linear-gradient(135deg, rgba(35, 157, 176, 0.08) 0%, rgba(35, 157, 176, 0.04) 100%);
    border-radius: var(--mcf-radius-md, 8px);
    margin: 0 -8px;
    padding: 12px 8px;
    border-bottom-color: transparent;
  }

  &--weekend {
    .mcf-day-name {
      color: var(--mcf-primary, #239db0);
    }
  }
}

.mcf-day-marker {
  flex-shrink: 0;
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding-top: 2px;
}

.mcf-day-number {
  font-size: 16px;
  font-weight: 700;
  color: var(--mcf-text-primary, #1a1a1a);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &--today {
    background: var(--mcf-primary, #239db0);
    color: white;
    border-radius: 50%;
  }
}

.mcf-day-name {
  font-size: 11px;
  font-weight: 500;
  color: var(--mcf-text-muted, #6b7280);
  text-transform: uppercase;
}

.mcf-day-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.mcf-calendar-expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  background: var(--mcf-bg-surface, #ffffff);
  border: 1px solid var(--mcf-border-light, #e5e7eb);
  border-radius: var(--mcf-radius-md, 8px);
  gap: 12px;

  .mcf-expense-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .mcf-expense-description {
    font-size: 14px;
    font-weight: 500;
    color: var(--mcf-text-primary, #1a1a1a);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .mcf-expense-category {
    font-size: 12px;
    color: var(--mcf-text-muted, #6b7280);
  }

  .mcf-expense-amount {
    font-size: 14px;
    font-weight: 700;
    color: var(--mcf-secondary, #2a5f82);
    flex-shrink: 0;
  }
}

.mcf-quick-add-trigger {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  color: var(--mcf-text-muted, #6b7280);
  cursor: pointer;
  border-radius: var(--mcf-radius-md, 8px);
  transition: all 0.2s ease;
  border: 1px dashed var(--mcf-border-light, #e5e7eb);

  &:hover {
    color: var(--mcf-primary, #239db0);
    background: rgba(35, 157, 176, 0.05);
    border-color: var(--mcf-primary, #239db0);
  }

  span {
    font-size: 13px;
    font-weight: 500;
  }
}
</style>
