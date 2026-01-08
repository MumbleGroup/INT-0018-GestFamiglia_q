const routes = [
  // Landing page - Root redirect with language detection
  {
    path: '/',
    redirect: () => {
      // Check for saved locale preference
      const savedLocale = localStorage.getItem('user-locale')
      if (savedLocale === 'en-US') {
        return '/en'
      }

      // Check browser language
      const browserLang = navigator.language || navigator.userLanguage
      if (browserLang.startsWith('en')) {
        return '/en'
      }

      // Default to Italian
      return '/it'
    }
  },

  // Landing page - Italian
  {
    path: '/it',
    component: () => import('layouts/LandingLayout.vue'),
    meta: { locale: 'it-IT' },
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },

  // Landing page - English
  {
    path: '/en',
    component: () => import('layouts/LandingLayout.vue'),
    meta: { locale: 'en-US' },
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },

  // Old landing pages (per riferimento sviluppo)
  {
    path: '/landing-vue',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }
    ]
  },

  {
    path: '/landing2-vue',
    component: () => import('layouts/LandingLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage2.vue') }
    ]
  },

  // Login route (no layout) - for Vue.js app
  {
    path: '/login',
    component: () => import('pages/users/LoginPage.vue')
  },

  // Login old route (backup)
  {
    path: '/login-old',
    component: () => import('pages/users/LoginPage-old.vue')
  },

  // Register route (no layout) - for Vue.js app
  {
    path: '/register',
    component: () => import('pages/users/RegisterPage.vue')
  },

  // Forgot password route (no layout)
  {
    path: '/forgot-password',
    component: () => import('pages/users/ForgotPasswordPage.vue')
  },

  // Reset password route (no layout)
  {
    path: '/reset-password',
    component: () => import('pages/users/ResetPasswordPage.vue')
  },

  // Main app routes (with layout)
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/DashboardPage.vue') }
    ]
  },
  {
    path: '/expenses',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/expenses/ExpensesPage.vue') },
      { path: 'add', component: () => import('pages/expenses/ExpensesPage.vue') }
    ]
  },
  {
    path: '/calendar',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/expenses/CalendarPage.vue') }
    ]
  },
  {
    path: '/budget',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/reports/SpendingPlanPage.vue') }
    ]
  },
  {
    path: '/spending-plans',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/reports/SpendingPlanPage.vue') },
      { path: ':id', component: () => import('pages/reports/PlannedExpenseDetailPage.vue') }
    ]
  },
  {
    path: '/scanner',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/expenses/ScannerPage.vue') }
    ]
  },
  {
    path: '/ocr-test',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/expenses/OCRTestPage.vue') }
    ]
  },
  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/users/SettingsPage.vue') }
    ]
  },
  {
    path: '/help',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HelpPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
