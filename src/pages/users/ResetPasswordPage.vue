<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center ticket-page">
        <div class="ticket-container">
          <!-- Ticket Card -->
          <div class="ticket-card shadow-24">
            <!-- Header Section -->
            <div class="ticket-header">
              <div class="ticket-logo">
                <img src="~/assets/wallet-icon-only.svg" alt="Logo" class="logo-img" />
                <div class="brand-section">
                  <div class="brand-badge">
                    <span class="logo-text">MyCrisisFamily</span>
                  </div>
                  <svg class="barcode" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="3" height="30" fill="#000"/>
                    <rect x="5" y="0" width="2" height="30" fill="#000"/>
                    <rect x="9" y="0" width="4" height="30" fill="#000"/>
                    <rect x="15" y="0" width="2" height="30" fill="#000"/>
                    <rect x="19" y="0" width="3" height="30" fill="#000"/>
                    <rect x="24" y="0" width="2" height="30" fill="#000"/>
                    <rect x="28" y="0" width="5" height="30" fill="#000"/>
                    <rect x="35" y="0" width="2" height="30" fill="#000"/>
                    <rect x="39" y="0" width="3" height="30" fill="#000"/>
                    <rect x="44" y="0" width="2" height="30" fill="#000"/>
                    <rect x="48" y="0" width="4" height="30" fill="#000"/>
                    <rect x="54" y="0" width="2" height="30" fill="#000"/>
                    <rect x="58" y="0" width="3" height="30" fill="#000"/>
                    <rect x="63" y="0" width="5" height="30" fill="#000"/>
                    <rect x="70" y="0" width="2" height="30" fill="#000"/>
                    <rect x="74" y="0" width="3" height="30" fill="#000"/>
                    <rect x="79" y="0" width="2" height="30" fill="#000"/>
                    <rect x="83" y="0" width="4" height="30" fill="#000"/>
                    <rect x="89" y="0" width="2" height="30" fill="#000"/>
                    <rect x="93" y="0" width="3" height="30" fill="#000"/>
                    <rect x="98" y="0" width="2" height="30" fill="#000"/>
                    <rect x="102" y="0" width="5" height="30" fill="#000"/>
                    <rect x="109" y="0" width="2" height="30" fill="#000"/>
                    <rect x="113" y="0" width="4" height="30" fill="#000"/>
                  </svg>
                </div>
              </div>
              <div class="checkin-code">
                <img src="~/assets/wallet-icon-only.svg" alt="Logo" class="logo-img-right" />
              </div>
            </div>

            <!-- Token Error -->
            <div v-if="tokenError" class="event-info">
              <div class="info-label">{{ $t('auth.errorLabel') }}</div>
              <div class="error-box">
                <p class="error-text">{{ tokenError }}</p>
                <router-link to="/forgot-password" class="reset-link">
                  {{ $t('auth.requestNewLink') }}
                </router-link>
              </div>
            </div>

            <!-- Success message -->
            <div v-else-if="showSuccess" class="event-info">
              <div class="info-label">{{ $t('auth.successLabel') }}</div>
              <div class="success-box">
                <p class="success-text">{{ $t('auth.passwordChangedSuccess') }}</p>
                <p class="success-subtext">{{ $t('auth.canLoginNow') }}</p>
                <router-link to="/login" class="reset-link">
                  {{ $t('auth.goToLogin') }}
                </router-link>
              </div>
            </div>

            <!-- Reset Form -->
            <q-form v-else @submit.prevent="handleSubmit" class="event-info">
              <div class="info-label">{{ $t('auth.newPassword').toUpperCase() }}</div>
              <q-input
                v-model="formData.new_password"
                type="password"
                outlined
                dense
                class="reset-input"
                :placeholder="$t('auth.newPasswordPlaceholder')"
                :error="!!errors.new_password"
                :error-message="errors.new_password"
              />

              <div class="info-label">{{ $t('auth.confirmPassword').toUpperCase() }}</div>
              <q-input
                v-model="formData.new_password2"
                type="password"
                outlined
                dense
                class="reset-input"
                :placeholder="$t('auth.confirmNewPasswordPlaceholder')"
                :error="!!errors.new_password2"
                :error-message="errors.new_password2"
              />

              <div class="form-actions">
                <q-btn
                  type="submit"
                  flat
                  icon-right="arrow_forward"
                  class="submit-btn"
                  :loading="loading"
                  :disable="!isFormValid"
                >
                  {{ $t('auth.changePassword').toUpperCase() }}
                </q-btn>
              </div>
            </q-form>

            <!-- Dashed Line Separator -->
            <div class="ticket-separator">
              <div class="dashed-line"></div>
            </div>

            <!-- Bottom Section -->
            <div class="ticket-bottom">
              <div class="bottom-left">
                <div class="info-label">{{ $t('auth.havePassword').toUpperCase() }}</div>
                <router-link to="/login" class="info-value reset-link">{{ $t('auth.login').toUpperCase() }}</router-link>
              </div>
              <div class="bottom-right">
                <div class="info-label">{{ $t('auth.security') }}</div>
                <div class="seat-number">
                  <q-icon name="lock_reset" size="48px" />
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="ticket-footer">
              <div class="footer-text">MUMBLE.GROUP</div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usersAPI } from 'src/services/api/users.js'
import { useSnackbar } from 'src/composables/useSnackbar'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const snackbar = useSnackbar()
const { t } = useI18n()

// Form data
const formData = ref({
  token: '',
  new_password: '',
  new_password2: ''
})

const errors = ref({})
const loading = ref(false)
const showSuccess = ref(false)
const tokenError = ref('')

// Computed
const isFormValid = computed(() => {
  return formData.value.new_password &&
         formData.value.new_password2 &&
         formData.value.new_password === formData.value.new_password2
})

// Methods
const handleSubmit = async () => {
  if (!isFormValid.value) {
    if (formData.value.new_password !== formData.value.new_password2) {
      errors.value.new_password2 = t('auth.passwordMismatch')
    }
    return
  }

  loading.value = true
  errors.value = {}

  try {
    await usersAPI.confirmPasswordReset({
      token: formData.value.token,
      new_password: formData.value.new_password,
      new_password2: formData.value.new_password2
    })

    showSuccess.value = true
    snackbar.success(t('auth.passwordChangedSuccess'))

    // Redirect to login after 3 seconds
    setTimeout(() => {
      router.push('/login')
    }, 3000)

  } catch (error) {
    console.error('Password reset confirm error:', error)

    if (error.response?.data) {
      const errorData = error.response.data

      if (typeof errorData === 'object') {
        // Field-specific errors
        errors.value = errorData

        // Handle token-specific errors
        if (errorData.token) {
          tokenError.value = Array.isArray(errorData.token)
            ? errorData.token[0]
            : errorData.token
        }
      } else {
        snackbar.error(errorData.detail || t('auth.passwordResetError'))
      }
    } else {
      snackbar.error(t('auth.passwordResetNetworkError'))
    }
  } finally {
    loading.value = false
  }
}

// Get token from URL on mount
onMounted(() => {
  const token = route.query.token
  if (!token) {
    tokenError.value = t('auth.tokenMissing')
  } else {
    formData.value.token = token
  }
})
</script>

<style lang="scss" scoped>
.ticket-page {
  background: linear-gradient(135deg, #f0f4f8 0%, #e8eef3 100%);
  min-height: 100vh;
  padding: 40px 0;
}

.ticket-container {
  width: 100%;
  max-width: 100%;
  margin: 0;

  @media (min-width: 1024px) {
    max-width: 500px;
    margin: 0 auto;
  }
}

.ticket-card {
  background: #f5f5f5;
  border-radius: 20px;
  padding: 25px 20px;
  position: relative;
  overflow: visible;

  @media (min-width: 768px) {
    padding: 30px 25px;
  }

  @media (min-width: 1024px) {
    /* Create notches with mask */
    -webkit-mask-image:
      radial-gradient(circle 13px at 0 63%, transparent 0, transparent 13px, black 13px),
      radial-gradient(circle 13px at 100% 63%, transparent 0, transparent 13px, black 13px);
    mask-image:
      radial-gradient(circle 13px at 0 63%, transparent 0, transparent 13px, black 13px),
      radial-gradient(circle 13px at 100% 63%, transparent 0, transparent 13px, black 13px);
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
  }
}

/* Header */
.ticket-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  margin-left: -20px;
  margin-right: -20px;
  padding-left: 20px;
  padding-right: 20px;
}

.ticket-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: -20px;
}

.logo-img {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-left: 20px;
}

.brand-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.brand-badge {
  background: #2a5f82;
  padding: 4px 10px;
  border-radius: 4px;
  display: inline-block;
  align-self: flex-start;
  margin-left: -40px;
  padding-left: 20px;
}

.logo-text {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.5px;
}

.barcode {
  width: 100px;
  height: 20px;
  margin-left: -40px;
  padding-left: 20px;
}

.checkin-code {
  text-align: right;
  margin-right: -10px;
  padding-right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}

.logo-img-right {
  width: 80px;
  height: 80px;
  margin-top: -20px;
  position: relative;
  filter: brightness(0) saturate(100%) invert(32%) sepia(38%) saturate(863%) hue-rotate(162deg) brightness(93%) contrast(87%);
  border: 1px solid #2a5f82;
  border-radius: 25px;
}

/* Event Info */
.event-info {
  margin-bottom: 20px;
}

.info-label {
  font-size: 9px;
  font-weight: 600;
  color: #666666;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }
}

.info-value {
  font-size: 16px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 0.5px;
  line-height: 1.3;
}

.reset-link {
  text-decoration: none;
  color: #000000;
  display: block;
  transition: opacity 0.2s;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-top: 5px;

  &:hover {
    opacity: 0.7;
  }
}

.reset-input {
  margin-bottom: 6px;

  :deep(.q-field__control) {
    background: #ffffff;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    min-height: 40px;
  }

  :deep(.q-field__native) {
    font-weight: 500;
    color: #000000;
  }

  :deep(input::placeholder) {
    color: #999999;
    font-weight: 400;
  }
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

.submit-btn {
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 16px;
  color: #000000;
}

/* Error & Success Boxes */
.error-box,
.success-box {
  background: #ffffff;
  border-radius: 8px;
  padding: 15px;
  margin-top: 5px;
}

.error-text {
  font-size: 14px;
  font-weight: 600;
  color: #d32f2f;
  margin: 0 0 10px 0;
}

.success-text {
  font-size: 14px;
  font-weight: 600;
  color: #2e7d32;
  margin: 0 0 5px 0;
}

.success-subtext {
  font-size: 13px;
  color: #666666;
  margin: 0 0 10px 0;
}

/* Dashed Separator */
.ticket-separator {
  margin: 20px -20px;
  padding: 0 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    background: #B4B8BB;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 20;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    background: #B4B8BB;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 20;

    @media (min-width: 1024px) {
      display: none;
    }
  }
}

.dashed-line {
  width: 100%;
  height: 2px;
  background-image: repeating-linear-gradient(
    to right,
    #cccccc 0,
    #cccccc 8px,
    transparent 8px,
    transparent 16px
  );
}

/* Bottom Section */
.ticket-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
}

.bottom-left {
  flex: 1;
}

.bottom-right {
  text-align: right;
}

.seat-number {
  font-size: 48px;
  font-weight: 900;
  color: #000000;
  line-height: 1;
  letter-spacing: -2px;
}

/* Footer */
.ticket-footer {
  text-align: center;
}

.footer-text {
  font-size: 14px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 0.5px;
}
</style>