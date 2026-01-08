<template>
  <q-drawer
    v-model="isOpen"
    show-if-above
    :width="280"
    class="mcf-sidebar"
  >
    <!-- Sidebar Header -->
    <div class="mcf-sidebar-header">
      <div class="mcf-sidebar-brand">
        <div class="mcf-sidebar-icon">
          <img
            src="~/assets/wallet-logo.svg"
            alt="MyCrisisFamily Logo"
            class="mcf-sidebar-logo"
          />
        </div>
        <div class="mcf-sidebar-title">
          <div class="mcf-sidebar-name">{{ $t('layout.appName') }}</div>
          <div class="mcf-sidebar-subtitle">
            {{ $t('layout.appSubtitle') }}
            <div v-if="currentUser" class="mcf-user-info">
              {{ currentUser.first_name }} {{ currentUser.last_name }}
              <div class="mcf-user-chips">
                <q-chip
                  v-if="currentUser.profile?.role"
                  :label="formatRole(currentUser.profile.role)"
                  size="xs"
                  color="primary"
                  text-color="white"
                  class="mcf-role-chip"
                />
                <q-chip
                  v-if="currentUser.family?.name || currentUser.family_name"
                  :label="currentUser.family?.name || currentUser.family_name"
                  size="xs"
                  color="secondary"
                  text-color="white"
                  class="mcf-family-chip"
                  icon="family_restroom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Menu -->
    <div class="mcf-sidebar-content">
      <q-list class="mcf-nav-list">
        <div class="mcf-nav-section">
          <div class="mcf-nav-section-title">{{ $t('layout.menu.sections.main') }}</div>
          <EssentialLink
            v-for="link in mainLinks"
            :key="link.title"
            v-bind="link"
            class="mcf-nav-item"
          />
        </div>

        <div class="mcf-nav-section">
          <div class="mcf-nav-section-title">{{ $t('layout.menu.sections.tools') }}</div>
          <EssentialLink
            v-for="link in toolLinks"
            :key="link.title"
            v-bind="link"
            class="mcf-nav-item"
          />
        </div>

        <div class="mcf-nav-section">
          <div class="mcf-nav-section-title">{{ $t('layout.menu.sections.settings') }}</div>
          <EssentialLink
            v-for="link in settingsLinks"
            :key="link.title"
            v-bind="link"
            class="mcf-nav-item"
          />
        </div>
      </q-list>
    </div>
  </q-drawer>
</template>

<script setup>
import { computed } from 'vue'
import EssentialLink from './EssentialLink.vue'
import { useAuthStore } from 'src/stores/auth'
import { useI18n } from 'vue-i18n'

const authStore = useAuthStore()
const { t } = useI18n()

const currentUser = computed(() => {
  return authStore.user
})

const formatRole = (role) => {
  const roleKey = `users.roles.${role}`
  return t(roleKey)
}

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// Organized navigation links (computed to be reactive to language changes)
const mainLinks = computed(() => [
  {
    title: t('layout.menu.dashboard.title'),
    caption: t('layout.menu.dashboard.caption'),
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: t('layout.menu.expenses.title'),
    caption: t('layout.menu.expenses.caption'),
    icon: 'receipt_long',
    link: '/expenses',
  },
  {
    title: t('layout.menu.calendar.title'),
    caption: t('layout.menu.calendar.caption'),
    icon: 'calendar_month',
    link: '/calendar',
  },
  {
    title: t('layout.menu.spendingPlans.title'),
    caption: t('layout.menu.spendingPlans.caption'),
    icon: 'list_alt',
    link: '/budget',
  },
])

const toolLinks = computed(() => [
  {
    title: t('layout.menu.scanner.title'),
    caption: t('layout.menu.scanner.caption'),
    icon: 'document_scanner',
    link: '/scanner',
  },
  {
    title: t('layout.menu.help.title'),
    caption: t('layout.menu.help.caption'),
    icon: 'help_outline',
    link: '/help',
  },
])

const settingsLinks = computed(() => [
  {
    title: t('layout.menu.settings.title'),
    caption: t('layout.menu.settings.caption'),
    icon: 'settings',
    link: '/settings',
  },
])
</script>

<style lang="scss">
// Stili NON scoped per il q-drawer
.mcf-sidebar {
  background: #ffffff !important;

  .q-drawer__content {
    overflow-x: hidden;
    background: #ffffff !important;
  }

  .mcf-sidebar-header {
    background: #ffffff !important;
    border-radius: 0 0 16px 16px !important;
    padding: 24px 20px;
    border-bottom: 1px solid var(--mcf-border-light);

    .mcf-sidebar-name {
      color: #239db0 !important;
    }

    .mcf-sidebar-subtitle {
      color: #239db0 !important;
    }

    .mcf-user-info {
      color: #239db0 !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.mcf-sidebar {
  background: #ffffff !important;
  border-right: 1px solid var(--mcf-border-light);
}

.mcf-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mcf-sidebar-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  flex-shrink: 0;
}

.mcf-sidebar-logo {
  width: 48px;
  height: 48px;
  border-radius: 12px;
}

.mcf-sidebar-title {
  flex: 1;

  .mcf-sidebar-name {
    font-size: 16px;
    font-weight: bold !important;
    line-height: 1.2;
  }

  .mcf-sidebar-subtitle {
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    margin-top: 2px;
  }
}

.mcf-user-info {
  font-size: 12px;
  margin-top: 4px;
  opacity: 0.9;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mcf-user-chips {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.mcf-role-chip {
  :deep(.q-chip__content) {
    font-size: 9px;
    font-weight: 600;
    padding: 2px 6px;
  }
}

.mcf-family-chip {
  :deep(.q-chip__content) {
    font-size: 9px;
    font-weight: 600;
    padding: 2px 6px;
  }

  :deep(.q-chip__icon) {
    font-size: 12px;
    margin-right: 2px;
  }
}

.mcf-sidebar-content {
  padding: 16px 0;
  flex: 1;
  overflow-y: auto;
}

.mcf-nav-list {
  padding: 0;
}

.mcf-nav-section {
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
}

.mcf-nav-section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--mcf-text-muted);
  padding: 0 20px 8px 20px;
  margin-bottom: 4px;
}

:deep(.mcf-nav-item) {
  margin: 0 12px 4px 12px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  .q-item {
    padding: 12px 16px;
    border-radius: 8px;

    &:hover {
      background-color: var(--mcf-bg-secondary);
    }

    &.text-primary {
      background-color: var(--mcf-primary-light);
      color: var(--mcf-primary);

      .q-icon {
        color: var(--mcf-primary);
      }
    }
  }

  .q-item__section--avatar {
    min-width: 40px;

    .q-icon {
      font-size: 20px;
      color: var(--mcf-text-secondary);
    }
  }

  .q-item__section--main {
    .q-item__label {
      font-size: 14px;
      font-weight: 500;
      color: var(--mcf-text-primary);
    }

    .q-item__label--caption {
      font-size: 12px;
      color: var(--mcf-text-muted);
      margin-top: 2px;
    }
  }
}
</style>
