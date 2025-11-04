<template>
  <q-layout view="lHh Lpr lFf" class="landing-layout">
    <!-- Header con language switcher -->
    <q-header elevated class="landing-header bg-transparent">
      <q-toolbar class="container">
        <q-toolbar-title class="text-white">
          <div class="logo-container">
            <q-icon name="account_balance_wallet" size="32px" />
            <span class="logo-text">MyCrisisFamily</span>
          </div>
        </q-toolbar-title>

        <q-space />

        <!-- Language Switcher -->
        <div class="language-switcher">
          <q-btn-toggle
            v-model="currentLanguage"
            @update:model-value="changeLanguage"
            toggle-color="primary"
            text-color="white"
            unelevated
            :options="[
              { label: 'IT', value: 'it-IT' },
              { label: 'EN', value: 'en-US' }
            ]"
            class="language-toggle"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="landing-page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { LocalStorage } from 'quasar'

const router = useRouter()
const route = useRoute()
const { locale } = useI18n()

// Determina la lingua corrente dal route o dal locale
const currentLanguage = ref(locale.value)

// Watch route changes per aggiornare la lingua
watch(() => route.meta.locale, (newLocale) => {
  if (newLocale && newLocale !== currentLanguage.value) {
    currentLanguage.value = newLocale
    locale.value = newLocale
    LocalStorage.set('user-locale', newLocale)
  }
}, { immediate: true })

// Cambia lingua e naviga al route corretto
const changeLanguage = (newLang) => {
  if (newLang === currentLanguage.value) return

  // Aggiorna i18n locale
  locale.value = newLang
  LocalStorage.set('user-locale', newLang)

  // Naviga al route con la nuova lingua
  const langPath = newLang === 'it-IT' ? '/it' : '/en'
  if (route.path !== langPath) {
    router.push(langPath)
  }
}
</script>

<style lang="scss" scoped>
.landing-layout {
  background: var(--mcf-bg-primary);
  min-height: 100vh;
}

.landing-header {
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.3) !important;

  .q-toolbar {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
  }
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;

  .logo-text {
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
  }
}

.language-switcher {
  .language-toggle {
    border-radius: 8px;
    overflow: hidden;

    :deep(.q-btn) {
      font-weight: 500;
      font-size: 14px;
      padding: 8px 16px;

      &.q-btn--active {
        background: var(--q-primary) !important;
      }
    }
  }
}

.landing-page-container {
  background: transparent;
  padding: 0;
  margin: 0;
}
</style>