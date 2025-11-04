export default {
  // Common
  common: {
    appName: 'MyCrisisFamily',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    close: 'Close',
    confirm: 'Confirm',
    back: 'Back',
    next: 'Next',
    search: 'Search',
    filter: 'Filter',
    loading: 'Loading...',
    noData: 'No data available',
    yes: 'Yes',
    no: 'No',
    add: 'Add',
    create: 'Create',
    update: 'Update',
    view: 'View',
    download: 'Download',
    upload: 'Upload',
    select: 'Select',
    all: 'All',
    none: 'None',
    other: 'Other',
    total: 'Total',
    date: 'Date',
    description: 'Description',
    amount: 'Amount',
    category: 'Category',
    status: 'Status',
    actions: 'Actions',
    details: 'Details',
    settings: 'Settings',
    help: 'Help',
    logout: 'Logout',
    success: 'Success',
    error: 'Error'
  },

  // Authentication
  auth: {
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    resetPassword: 'Reset Password',
    rememberMe: 'Remember Me',
    loginWith: 'Login with',
    loginWithPin: 'Login with PIN',
    loginWithEmail: 'Login with Email',
    enterPin: 'Enter PIN',
    insertPin: 'INSERT PIN',
    insertEmail: 'INSERT EMAIL',
    insertPassword: 'INSERT PASSWORD',
    useEmail: 'Use Email',
    usePin: 'Use PIN',
    setupPin: 'Setup PIN',
    changePin: 'Change PIN',
    deletePin: 'Delete PIN',
    pinSetup: 'PIN Setup',
    welcomeBack: 'Welcome Back!',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    dontHaveAccount: 'Don\'t have an account?',
    loginSuccess: 'Login successful',
    loginError: 'Login error',
    logoutSuccess: 'Logout successful',
    registerSuccess: 'Registration successful',
    invalidCredentials: 'Invalid credentials',
    passwordMismatch: 'Passwords do not match',
    weakPassword: 'Password too weak',
    emailRequired: 'Email required',
    passwordRequired: 'Password required',
    emailPlaceholder: 'your.email@example.com',
    passwordPlaceholder: 'Enter your password',
    pinIncorrect: 'Incorrect PIN',
    pinDeleteError: 'Error deleting PIN',
    enterEmailPassword: 'Enter email and password',
    pinSetupSuccess: 'PIN set successfully!',
    pinSetupError: 'Error setting up PIN',
    appVersion: 'APP VERSION',
    passwordPlaceholderCreate: 'Create a password',
    passwordPlaceholderRepeat: 'Repeat password',
    invitationCode: 'Family invitation code (optional)',
    invitationCodePlaceholder: 'Invitation code',
    acceptTerms: 'I accept the terms',
    registerError: 'Registration error. Please try again.',
    emailAlreadyRegistered: 'Email already registered',
    invalidInvitationCode: 'Invalid invitation code',
    recoverPassword: 'Recover password',
    recoverPasswordDescription: 'Enter your email to receive the password reset link',
    sendLink: 'Send link',
    emailSentSuccess: 'Email sent successfully!',
    emailSentCheck: 'Email sent! Check your inbox.',
    emailSendError: 'Error sending email. Please try again.',
    remembered: 'Remembered?',
    errorLabel: 'ERROR',
    successLabel: 'SUCCESS',
    requestNewLink: 'Request a new link',
    passwordChangedSuccess: 'Password changed successfully!',
    canLoginNow: 'You can now log in.',
    goToLogin: 'Go to Login →',
    newPassword: 'New password',
    newPasswordPlaceholder: 'Enter new password',
    confirmNewPasswordPlaceholder: 'Confirm new password',
    changePassword: 'Change password',
    havePassword: 'Already have your password?',
    security: 'SECURITY',
    passwordResetError: 'Error resetting password',
    passwordResetNetworkError: 'Network error during password reset',
    tokenMissing: 'Token missing in URL'
  },

  // Users & Family
  users: {
    profile: 'Profile',
    familyMembers: 'Family Members',
    firstName: 'First Name',
    firstNamePlaceholder: 'Your first name',
    lastName: 'Last Name',
    lastNamePlaceholder: 'Your last name',
    username: 'Username',
    role: 'Role',
    roles: {
      father: 'Father',
      mother: 'Mother',
      son: 'Son',
      daughter: 'Daughter',
      other: 'Other'
    },
    changePassword: 'Change Password',
    currentPassword: 'Current Password',
    newPassword: 'New Password',
    passwordChanged: 'Password changed',
    preferences: 'Preferences',

    // Family Management
    familyManagement: 'Family Management',
    currentFamily: 'Current Family',
    members: 'members',
    administrator: 'Administrator',
    member: 'Member',
    familyMembersList: 'Family members',
    inviteMember: 'Invite Member',
    sentInvitations: 'Sent Invitations',
    manageFamily: 'Manage Family',
    sentInvitationsTitle: 'Sent invitations',
    refreshInvitations: 'Refresh invitations',
    invitationEmail: 'Invitation email',
    invitationRole: 'Role',
    invitationDate: 'Date',
    invitationExpires: 'Expires',
    invitationCode: 'Code',

    // No Family State
    noFamily: 'You are not part of any family',
    noFamilyDescription: 'Create a new family or join an existing one using an invitation code.',
    createFamily: 'Create Family',
    joinWithCode: 'Join with Code',

    // Received Invitations
    receivedInvitations: 'Received Invitations',
    refreshReceivedInvitations: 'Refresh received invitations',
    invitedBy: 'Invited by',
    invitedByLabel: 'From',
    accept: 'Accept',

    // Create Family Dialog
    createFamilyTitle: 'Create New Family',
    familyName: 'Family Name *',
    familyNamePlaceholder: 'e.g. Smith Family, Johnson Family...',
    familyDescription: 'Description (optional)',
    familyDescriptionPlaceholder: 'A brief description of the family...',

    // Join Family Dialog
    joinFamilyTitle: 'Join a Family',
    inviteCode: 'Invitation Code *',
    inviteCodePlaceholder: 'e.g. FAM-ABC123',
    join: 'Join',

    // Manage Family Dialog
    manageFamilyTitle: 'Manage Family',
    familySettings: 'Family Settings',
    deleteFamily: 'Delete Family',
    deleteFamilyConfirm: 'Delete Family',
    deleteFamilyMessage: 'Are you sure you want to delete the family? This action cannot be undone.',
    saveChanges: 'Save Changes',

    // Invite Member Dialog
    inviteMemberTitle: 'Invite a Member',
    inviteDescription: 'Invite a new member to your family by sending them a link or sharing the invitation code.',
    newMemberEmail: 'New member email *',
    newMemberEmailPlaceholder: 'e.g. sarah@email.com',
    generateInviteCode: 'Generate Invitation Code',
    inviteLink: 'Invitation link',
    copy: 'Copy',
    share: 'Share',

    // Invitation Status
    invitationStatus: {
      pending: 'Pending',
      accepted: 'Accepted',
      declined: 'Declined',
      expired: 'Expired'
    }
  },

  // Expenses
  expenses: {
    // General
    expenses: 'Expenses',
    expense: 'Expense',
    newExpense: 'New Expense',
    addExpense: 'Add Expense',
    editExpense: 'Edit Expense',
    deleteExpense: 'Delete Expense',
    expenseDetails: 'Expense Details',

    // Add methods
    manualEntry: 'Manual Entry',
    manualEntryCaption: 'Enter expense data manually',
    scanReceipt: 'Scan Receipt',
    scanReceiptCaption: 'Use camera to scan',
    takePhoto: 'Take Photo',
    takePhotoCaption: 'Photograph receipt',

    // Search & Filters
    searchPlaceholder: 'Search by name or category...',
    all: 'All',
    more: 'more',
    less: 'less',
    loading: 'Loading expenses...',
    loadingSubtitle: 'Please wait while expenses are loaded',
    count: '{n} expense | {n} expenses',

    // Form fields
    description: 'Description',
    descriptionRequired: 'Description *',
    descriptionPlaceholder: 'e.g. Grocery shopping',
    amount: 'Amount',
    amountRequired: 'Amount *',
    amountPlaceholder: 'e.g. 25.50',
    category: 'Category',
    categoryRequired: 'Category *',
    subcategory: 'Subcategory',
    date: 'Date',
    dateRequired: 'Date *',
    dueDate: 'Due Date',
    notes: 'Notes',
    notesOptional: 'Notes (optional)',
    spendingPlan: 'Spending Plan',
    paymentMethod: 'Method',
    paymentMethodRequired: 'Method *',
    paymentSource: 'Source',
    paymentSourceRequired: 'Source *',
    sharedWithFamily: 'Expense shared with family',
    uncategorized: 'To Categorize',

    // Quick form
    whatBought: 'What did you buy? *',
    howMuchSpent: 'How much did you spend? *',
    saveQuick: 'Quick Save',

    // Recurring
    makeRecurring: 'Make this expense recurring',
    frequency: 'Frequency',
    frequencyRequired: 'Frequency *',
    startDateRecurring: 'Recurring start date *',
    endDateRecurring: 'Recurring end date (optional)',
    totalInstallments: 'Total installments (optional)',
    installmentsHint: 'E.g.: 12 for monthly payments over a year',
    generateImmediately: 'Generate future expenses immediately',

    // Frequency options
    frequencyOptions: {
      daily: 'Daily',
      weekly: 'Weekly',
      biweekly: 'Bi-Weekly',
      monthly: 'Monthly',
      bimonthly: 'Bi-Monthly',
      quarterly: 'Quarterly',
      semiannual: 'Semi-Annual',
      annual: 'Annual'
    },

    // Attachments
    attachments: 'Attachments',
    addAttachment: 'Add Attachment',
    noAttachments: 'No attachments',
    uploadFile: 'Upload file',
    uploadReceipt: 'Upload receipt',
    uploadImage: 'Upload Image',
    removeAttachment: 'Remove attachment',
    uploading: 'Uploading...',

    // Actions
    cancel: 'Cancel',
    save: 'Save Expense',
    saveChanges: 'Save Changes',
    edit: 'Edit',
    delete: 'Delete',
    pay: 'Pay Expense',
    close: 'Close',
    confirm: 'Confirm',
    back: 'Back',

    // Delete confirmation
    confirmDelete: 'Confirm deletion',
    confirmDeleteMessage: 'Are you sure you want to delete this expense? This action cannot be undone.',
    confirmDeleteRecurring: 'Delete recurring expense',
    confirmDeleteRecurringMessage: 'This is a recurring expense. Do you want to delete only this instance or all future expenses?',
    deleteOnlyThis: 'Delete only this',
    deleteAll: 'Delete all',

    // Messages
    expenseCreated: 'Expense created successfully',
    expenseUpdated: 'Expense updated successfully',
    expenseDeleted: 'Expense deleted successfully',
    errorCreating: 'Error creating expense',
    errorUpdating: 'Error updating expense',
    errorDeleting: 'Error deleting expense',
    errorLoading: 'Error loading expenses',
    invalidAmount: 'Amount must be greater than zero',
    invalidDate: 'Invalid date',
    requiredFields: 'Please fill in all required fields',

    // Empty state
    noExpenses: 'No expenses found',
    noExpensesDescription: 'Start tracking your expenses by adding your first one',
    addFirstExpense: 'Add first expense',

    // Legacy - keeping for backwards compatibility
    recurringExpense: 'Recurring Expense',
    recurringExpenses: 'Recurring Expenses',
    oneTimeExpense: 'One-Time Expense',
    sharedExpense: 'Shared Expense',
    personalExpense: 'Personal Expense',
    sharedWith: 'Shared with',
    paidBy: 'Paid by',
    splitBetween: 'Split between',
    equalSplit: 'Equal Split',
    customSplit: 'Custom Split',
    myShare: 'My Share',
    installments: 'Installments',
    installment: 'Installment',
    installmentNumber: 'Installment Number',
    paidInstallments: 'Paid Installments',
    pendingInstallments: 'Pending Installments',
    createInstallments: 'Create Installments',
    markAsPaid: 'Mark as Paid',
    markAsUnpaid: 'Mark as Unpaid',
    totalExpenses: 'Total Expenses',
    monthlyExpenses: 'Monthly Expenses',
    yearlyExpenses: 'Yearly Expenses',
    status: {
      pending: 'Pending',
      paid: 'Paid',
      partiallyPaid: 'Partially Paid',
      overdue: 'Overdue',
      cancelled: 'Cancelled'
    }
  },

  // Categories
  categories: {
    categories: 'Categories',
    category: 'Category',
    subcategories: 'Subcategories',
    addCategory: 'Add Category',
    editCategory: 'Edit Category',
    deleteCategory: 'Delete Category',
    categoryName: 'Category Name',
    categoryType: 'Category Type',
    types: {
      necessary: 'Necessary',
      extra: 'Extra'
    },
    monthlyBudget: 'Monthly Budget',
    icon: 'Icon',
    color: 'Color',
    categoryCreated: 'Category created',
    categoryUpdated: 'Category updated',
    categoryDeleted: 'Category deleted',
    noCategories: 'No categories found',

    // Predefined category names (IT -> EN mapping)
    names: {
      'Casa e Abitazione': 'Home & Housing',
      'Alimentari e Bevande': 'Food & Beverages',
      'Trasporti': 'Transportation',
      'Salute e Benessere': 'Health & Wellness',
      'Assicurazioni': 'Insurance',
      'Tasse e Imposte': 'Taxes',
      'Educazione e Formazione': 'Education & Training',
      'Tempo Libero': 'Leisure Time',
      'Viaggi e Vacanze': 'Travel & Holidays',
      'Abbigliamento': 'Clothing',
      'Elettronica e Tecnologia': 'Electronics & Technology',
      'Casa Extra': 'Home Extra',
      'Sport e Fitness': 'Sports & Fitness',
      'Regali e Eventi': 'Gifts & Events',
      'Animali Domestici': 'Pets'
    }
  },

  // Budget & Planning
  budget: {
    budget: 'Budget',
    budgets: 'Budgets',
    monthlyBudget: 'Monthly Budget',
    yearlyBudget: 'Yearly Budget',
    currentBudget: 'Current Budget',
    createBudget: 'Create Budget',
    editBudget: 'Edit Budget',
    deleteBudget: 'Delete Budget',
    budgetDetails: 'Budget Details',
    totalBudget: 'Total Budget',
    spent: 'Spent',
    remaining: 'Remaining',
    exceeded: 'Exceeded',
    percentageUsed: 'Percentage Used',
    budgetByCategory: 'Budget by Category',
    copyToNextMonth: 'Copy to Next Month',
    budgetCreated: 'Budget created',
    budgetUpdated: 'Budget updated',
    budgetDeleted: 'Budget deleted',
    noBudgets: 'No budgets found',
    spendingPlan: 'Spending Plan',
    spendingPlans: 'Spending Plans',
    plannedExpenses: 'Planned Expenses',
    unplannedExpenses: 'Unplanned Expenses',
    pinPlan: 'Pin Plan',
    unpinPlan: 'Unpin Plan',
    hiddenPlans: 'Hidden Plans',

    // BudgetPage specific
    newSpendingPlan: 'New Spending Plan',
    loadingBudgets: 'Loading spending plans...',
    loadingBudgetsSubtitle: 'Retrieving budget and planning data',
    noBudgetCreated: 'No Spending Plan Created',
    noBudgetDescription: 'Start by creating your first custom spending plan!',
    createFirstPlan: 'Create First Plan',
    modify: 'Edit',
    delete: 'Delete',
    active: 'Active',
    used: 'used',
    planName: 'Spending Plan Name *',
    planNamePlaceholder: 'e.g. October 2025, Summer 2026, Christmas 2025...',
    nameRequired: 'Name required',
    descriptionOptional: 'Description (optional)',
    descriptionPlaceholder: 'Describe what this spending plan is for...',
    planType: 'Plan Type *',
    startDate: 'Start Date *',
    startDateRequired: 'Start date required',
    endDate: 'End Date *',
    endDateRequired: 'End date required',
    totalAmount: 'Total Amount *',
    amountGreaterThanZero: 'Amount must be greater than 0',
    createPlan: 'Create Plan',
    newPlanDialogTitle: 'New Spending Plan',
    newPlanDialogSubtitle: 'Create a custom spending plan for your preferred period',
    confirmDeleteBudget: 'Confirm Deletion',
    confirmDeleteBudgetMessage: 'Are you sure you want to delete the spending plan "{name}"?',
    budgetDeletedSuccess: 'Spending plan deleted successfully',
    budgetCreatedSuccess: 'Spending plan created successfully!',
    errorCreatingBudget: 'Error creating spending plan',
    errorDeletingBudget: 'Error deleting budget',
    errorLoadingBudgets: 'Error loading budgets',
    featureInDevelopment: 'Feature in development',

    // Spending Plans Page
    addPlan: 'Add Plan',
    contribution: 'Contribution',
    personalPlansAvailable: 'Personal Plans Available',
    createPersonalPlansDescription: 'You can create personal plans to organize your expenses. To share plans with other members,',
    joinFamily: 'create or join a family',
    filters: 'Filters',
    period: 'Period',
    threeMonths: '3 Months',
    visibility: 'Visibility',
    visible: 'Visible',
    hidden: 'Hidden',
    cashAvailability: 'Cash Availability',
    refreshBalance: 'Refresh balance',
    plansCounterDisplay: 'Displayed {filtered} of {total} plans',
    loadingPlans: 'Loading spending plans...',
    loadingPlansSubtitle: 'Retrieving plans and future expenses',
    startPlanning: 'Start Planning',
    firstPlanDescription: 'Create your first spending plan to better organize your finances. Perfect for events, vacations, or monthly expenses!',
    organizeByPeriod: 'Organize by period',
    clonePlans: 'Clone plans',
    monitorProgress: 'Monitor progress',

    // Plan Types
    planTypes: {
      monthly: 'Monthly',
      seasonal: 'Seasonal',
      event: 'Event/Occasion',
      quarterly: 'Quarterly',
      semester: 'Semester',
      yearly: 'Yearly',
      custom: 'Custom'
    },

    // Messages
    personalPlan: 'Personal Plan',
    familyPlan: 'Family Plan',
    planCreatedSuccess: '{type} created successfully!',
    planUpdatedSuccess: 'Spending plan updated successfully!',
    planDeletedSuccess: 'Plan deleted successfully',
    planClonedSuccess: 'Plan "{name}" cloned successfully!',
    planPinned: 'Plan pinned successfully',
    planUnpinned: 'Plan unpinned successfully',
    errorLoadingPlans: 'Error loading spending plans',
    errorCreatingPlan: 'Error creating plan',
    errorUpdatingPlan: 'Error updating plan',
    errorDeletingPlan: 'Error deleting plan',
    confirmDeletePlan: 'Confirm Deletion',
    confirmDeletePlanMessage: 'Are you sure you want to delete the plan "{name}"?'
  },

  // Reports
  reports: {
    reports: 'Reports',
    generateReport: 'Generate Report',
    monthlySummary: 'Monthly Summary',
    yearlySummary: 'Yearly Summary',
    expensesByCategory: 'Expenses by Category',
    expensesByMember: 'Expenses by Member',
    expensesByPeriod: 'Expenses by Period',
    savingGoals: 'Saving Goals',
    savingGoal: 'Saving Goal',
    targetAmount: 'Target Amount',
    currentAmount: 'Current Amount',
    progress: 'Progress',
    achieved: 'Achieved',
    inProgress: 'In Progress',
    exportReport: 'Export Report',
    exportPdf: 'Export PDF',
    exportExcel: 'Export Excel',
    fromDate: 'From Date',
    toDate: 'To Date',
    period: 'Period',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',
    thisYear: 'This Year',
    lastYear: 'Last Year',
    custom: 'Custom'
  },

  // Contributions
  contributions: {
    contributions: 'Contributions',
    contribution: 'Contribution',
    myContributions: 'My Contributions',
    familyContributions: 'Family Contributions',
    addContribution: 'Add Contribution',
    newContribution: 'New Contribution',
    contributionAmount: 'Contribution Amount',
    contributedBy: 'Contributed by',
    totalContributions: 'Total Contributions',
    monthlyContributions: 'Monthly Contributions',
    contributionHistory: 'Contribution History',
    dashboard: 'Contributions Dashboard',
    contributionsList: 'Contributions List',
    fullList: 'Full List',
    manageIncomeDescription: 'Manage family income and contributions',
    insufficientBalance: 'Insufficient family balance',
    availableBalance: 'Available balance',
    contributionAddedSuccess: 'Contribution added successfully!'
  },

  // Payments & Quotes
  payments: {
    payment: 'Payment',
    payments: 'Payments',
    quote: 'Quote',
    quotes: 'Quotes',
    dueDate: 'Due Date',
    dueSoon: 'Due Soon',
    overdue: 'Overdue',
    paid: 'Paid',
    unpaid: 'Unpaid',
    paymentStatus: 'Payment Status',
    paymentMethod: 'Payment Method',
    paymentHistory: 'Payment History',
    calendarView: 'Calendar View',
    listView: 'List View',
    quoteSummary: 'Quote Summary',
    methods: {
      card: 'Credit/Debit Card',
      cash: 'Cash',
      transfer: 'Bank Transfer',
      paypal: 'PayPal',
      applePay: 'Apple Pay',
      googlePay: 'Google Pay',
      other: 'Other'
    },
    sources: {
      personal: 'Personal Funds',
      contribution: 'From Family Contribution'
    }
  },

  // Settings
  settings: {
    settings: 'Settings',
    generalSettings: 'General Settings',
    accountSettings: 'Account Settings',
    systemSettings: 'System Settings',
    language: 'Language',
    selectLanguage: 'Select Language',
    languageChanged: 'Language changed',
    theme: 'Theme',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    autoMode: 'Auto Mode',
    notifications: 'Notifications',
    enableNotifications: 'Enable Notifications',
    emailNotifications: 'Email Notifications',
    pushNotifications: 'Push Notifications',
    currency: 'Currency',
    dateFormat: 'Date Format',
    timeFormat: 'Time Format',
    forceUpdate: 'Force Update',
    forceUpdateDescription: 'Clear cache and reload application',
    checkUpdates: 'Check Updates',
    version: 'Version',
    appVersion: 'App Version',
    backupRestore: 'Backup & Restore',
    exportData: 'Export Data',
    importData: 'Import Data',
    privacy: 'Privacy',
    termsOfService: 'Terms of Service',
    about: 'About',
    copyright: 'Copyright © 2025 MUMBLE.GROUP',

    // Settings Page
    pageTitle: 'Settings',
    pageDescription: 'Configure the app, view system information and manage preferences.',

    // Security & Account
    securityAccount: 'Security & Account',
    changePasswordTitle: 'Change Password',
    changePasswordDescription: 'Update your password to keep your account secure',
    changePasswordButton: 'Change Password',
    currentPasswordRequired: 'Current Password *',
    newPasswordRequired: 'New Password *',
    confirmNewPasswordRequired: 'Confirm New Password *',

    // System Information
    systemInformation: 'System Information',
    apiServer: 'API Server',
    publicIP: 'Public IP',
    deviceIP: 'Device IP',
    platform: 'Platform',
    refreshInfo: 'Refresh information',
    serverStatus: {
      checking: 'Checking...',
      connected: 'Connected',
      unreachable: 'Unreachable',
      testing: 'Testing...'
    },

    // Display Settings
    displaySettings: 'Display',
    displayDescription: 'Customize screen orientation for a better tablet experience.',
    landscapeMode: 'Landscape Mode',
    landscapeModeDesc: 'Lock orientation in landscape for tablets',

    // Updates
    updates: 'Updates',
    updatesDescription: 'Check and install application updates to always have the latest features.',
    checkForUpdates: 'Check for Updates',
    currentVersion: 'Current version',

    // Download APK
    androidApp: 'Android App',
    betterExperience: 'Better experience',
    downloadAPK: 'Download APK',

    // Force Refresh
    forceRefresh: 'Force Update',
    forceRefreshDescription: 'Fixes PWA cache issues',
    forceRefreshButton: 'Force Refresh',

    // Font Settings (hidden)
    fontSettings: 'Font Settings',
    fontDescription: 'Customize application fonts to improve your reading experience.',
    resetFonts: 'Reset Default Fonts'
  },

  // Help
  help: {
    // Basic labels
    help: 'Help',
    documentation: 'Documentation',
    faq: 'FAQ',
    support: 'Support',
    contactUs: 'Contact Us',
    userGuide: 'User Guide',
    tutorial: 'Tutorial',
    gettingStarted: 'Getting Started',
    tips: 'Tips',
    troubleshooting: 'Troubleshooting',

    // Header
    header: {
      title: 'Help & Documentation',
      subtitle: 'Everything you need to know to get the most out of the expense management app'
    },

    // Sections
    sections: {
      // 1. Getting Started
      gettingStarted: {
        title: 'Getting Started',
        caption: 'How to start using the app',
        q1: {
          question: 'How do I register a new account?',
          answer: 'To register:',
          steps: [
            'Go to the login page',
            'Click "Register"',
            'Enter your name, email and password',
            'Select your family role (Father, Mother, Child, Other)',
            'Confirm the registration'
          ]
        },
        q2: {
          question: 'How do I add other family members?',
          answer1: 'Each family member must register independently with their own account. You cannot add other users from your profile for security reasons.',
          answer2: 'Once registered, you can share expenses among yourselves.'
        },
        q3: {
          question: 'What do I see on the main dashboard?',
          answer: 'The dashboard shows you:',
          items: [
            'Current month expense summary',
            'Latest entered expenses',
            'Upcoming payments',
            'Monthly budget and how much you\'ve spent',
            'Charts of most used categories'
          ]
        }
      },

      // 2. Expense Management
      expenseManagement: {
        title: 'Expense Management',
        caption: 'How to enter and manage your expenses',
        q1: {
          question: 'How do I enter a new expense?',
          answer: 'To add an expense:',
          steps: [
            'Go to the "Expenses" section',
            'Click the "New Expense" button',
            'Enter the description (e.g., "Grocery shopping")',
            'Choose the amount',
            'Select the category',
            'Choose the date (default is today)',
            'If you want, add a note',
            'Save the expense'
          ]
        },
        q2: {
          question: 'How do I share an expense with others?',
          answer: 'During expense creation:',
          steps: [
            'In the "Share with" section, select family members',
            'The amount will be automatically divided among all selected',
            'Each person will see their share in the "My shares" section'
          ],
          example: 'Example: €100 expense shared among 4 people = €25 each'
        },
        q3: {
          question: 'How do recurring expenses work?',
          answer: 'Recurring expenses are perfect for bills, rent, subscriptions:',
          steps: [
            'Create a "Recurring Expense"',
            'Set the frequency (weekly, monthly, annual)',
            'The app will automatically create expenses on the set dates',
            'You can modify or stop the recurrence at any time'
          ]
        },
        q4: {
          question: 'How does installment payment work?',
          answer: 'For large expenses you want to pay in installments:',
          steps: [
            'Enter the expense normally',
            'Click "Create Payments" in the expense',
            'Choose number of installments and due dates',
            'Mark as paid as you make payments'
          ],
          note: 'The app will remind you of upcoming installments on the dashboard.'
        }
      },

      // 3. Categories & Budget
      categoriesBudget: {
        title: 'Categories & Budget',
        caption: 'How to organize expenses by type',
        q1: {
          question: 'What categories are available?',
          answer: 'The app includes predefined categories for Italian families:',
          necessary: {
            title: 'Necessary Categories:',
            items: [
              'Home & Housing',
              'Food & Beverages',
              'Transportation',
              'Health & Wellness',
              'Insurance',
              'Taxes',
              'Education & Training'
            ]
          },
          extra: {
            title: 'Extra Categories:',
            items: [
              'Leisure Time',
              'Travel & Holidays',
              'Clothing',
              'Electronics & Technology',
              'Home Extra',
              'Sports & Fitness',
              'Gifts & Events',
              'Pets'
            ]
          }
        },
        q2: {
          question: 'How do I set a monthly budget?',
          answer: 'To manage the budget:',
          steps: [
            'Go to the "Budget" section',
            'Click "New Budget"',
            'Set the total monthly amount',
            'Distribute the amount among various categories',
            'The app will show you how much you\'ve spent vs budget'
          ],
          note: 'The budget is automatically renewed every month.'
        },
        q3: {
          question: 'How do I see if I\'m exceeding the budget?',
          answer: 'The app alerts you in several ways:',
          items: [
            'Colored progress bars on the dashboard',
            'Notifications when you exceed 80% of budget',
            'Red colors for over-budget categories',
            'Detailed monthly reports'
          ]
        }
      },

      // 4. Spending Plans
      spendingPlans: {
        title: 'Spending Plans',
        caption: 'Plan future expenses for events or projects',
        q1: {
          question: 'What are spending plans?',
          answer: 'Spending plans help you organize future expenses for:',
          items: [
            'Vacations (hotels, flights, restaurants)',
            'Events (weddings, parties, birthdays)',
            'Home projects (renovations, furniture)',
            'Seasonal expenses (back to school, Christmas)'
          ],
          note: 'You can see the progress and keep everything under control.'
        },
        q2: {
          question: 'How do I create a spending plan?',
          steps: [
            'Go to the "Spending Plans" section',
            'Click "New Spending Plan"',
            'Give the plan a name (e.g., "Summer Vacation 2025")',
            'Choose the type (Monthly, Seasonal, Event, etc.)',
            'Set start and end dates',
            'Add an optional description'
          ]
        },
        q3: {
          question: 'How do I add expenses to a plan?',
          answer: 'There are two ways:',
          method1: 'From the plans list: Click on the plan and add planned expenses',
          method2: 'During expense entry: Select the plan in the designated field',
          note: 'Planned expenses are estimates - when you actually spend them, they will be marked as completed.'
        }
      },

      // 5. Recurring Expenses (in plans)
      recurringExpenses: {
        title: 'Recurring Expenses',
        caption: 'Manage installment expenses with visual status control',
        q1: {
          question: 'What are recurring expenses in plans?',
          answer: 'Recurring expenses in spending plans allow you to plan installment payments:',
          items: [
            'Installment purchases: Appliances, furniture, technology',
            'Deferred payments: Courses, enrollments, subscriptions',
            'Phased projects: Renovation, wedding, vacations',
            'Seasonal expenses: Taxes, insurance, annual payments'
          ],
          note: 'Each installment has a due date and you can monitor payment progress.'
        },
        q2: {
          question: 'How do I create a recurring expense?',
          steps: [
            'Go to the desired spending plan',
            'Click "New Planned Expense"',
            'Fill in description, amount, category and due date',
            'Enable the "Recurring expense" option',
            'Choose the total number of installments (from 2 to 120)',
            'Select the frequency (monthly, bimonthly, quarterly)',
            'Save the expense - only the first installment will be created'
          ],
          note: 'Note: Initially only the first installment is created, then you generate the others when needed.'
        },
        q3: {
          question: 'How do I generate subsequent installments?',
          answer: 'After creating the first installment, you can generate all the others:',
          steps: [
            'Find the recurring expense in the list (it has the "RECURRING 1/X" badge)',
            'Click the orange "🔄" icon to generate installments',
            'The app will automatically create all remaining installments',
            'Each installment will have the correct date based on the chosen frequency'
          ],
          desktop: 'Desktop: The 🔄 icon appears after the main buttons',
          mobile: 'Mobile: The 🔄 icon appears among the action buttons'
        },
        q4: {
          question: 'How do visual indicators work?',
          answer: 'Recurring expenses have visual indicators to check status at a glance:',
          indicators: {
            paid: '☑️ Green Checkbox: Already paid/completed installments',
            current: '☐ Blue Checkbox: Current installment (due now)',
            future: '☐ Gray Checkbox: Future installments yet to be paid'
          },
          desktop: 'Desktop: Checkboxes appear inline after the chevron button',
          mobile: 'Mobile: Tap the chevron icon to expand and see details'
        },
        q5: {
          question: 'How do I see installment details?',
          answer: 'You can see all installment details in an expandable view:',
          steps: [
            'Click the chevron button (▽) next to the checkboxes',
            'A section will open with all details:'
          ],
          details: [
            'Installment number (1, 2, 3...)',
            'Status (Paid, To pay, Partial)',
            'Amount of each installment',
            'Colored checkboxes for visual status'
          ],
          step3: 'Click the chevron again to hide details',
          note: 'This view is available on both desktop and mobile with the same layout.'
        },
        q6: {
          question: 'Can I modify a recurring expense?',
          answer: 'Yes! In the edit modal you can:',
          options: [
            'Enable recurrence: On already created regular expenses',
            'Change number of installments: Increase or decrease total installments',
            'Modify frequency: From monthly to quarterly, etc.',
            'Disable recurrence: Return to single expense'
          ],
          warning: 'Warning: If you\'ve already generated installments, changes will only affect the current installment. For major changes, consider creating a new recurring expense.'
        },
        q7: {
          question: 'How do I mark an installment as paid?',
          answer: 'To mark an installment payment:',
          steps: [
            'Click "Add Payment" on the current installment',
            'Enter the paid amount and date',
            'Confirm the payment',
            'The checkbox will turn green automatically',
            'The next installment will turn blue (current)'
          ],
          note: 'The system automatically updates visual indicators and the overall plan progress.'
        }
      },

      // 6. Reports & Analysis
      reportsAnalysis: {
        title: 'Reports & Analysis',
        caption: 'Monitor your finances with charts and statistics',
        q1: {
          question: 'What type of reports can I see?',
          answer: 'The app offers different types of reports:',
          types: [
            'Monthly Report: Total monthly expenses by category',
            'Annual Report: Expense trends during the year',
            'Budget Comparison: How much you spent vs what you planned',
            'User Analysis: Who spends the most in the family',
            'Category Trends: Which categories cost the most'
          ]
        },
        q2: {
          question: 'How do I change the analysis period?',
          answer: 'In the Reports section you can:',
          options: [
            'Select specific month and year',
            'Compare multiple months',
            'View annual trends',
            'Filter by specific categories',
            'Filter by family members'
          ]
        },
        q3: {
          question: 'Can I export data?',
          answer: 'Yes! You can export:',
          formats: [
            'Expense list in CSV format',
            'Monthly reports in PDF',
            'Charts and statistics as images'
          ],
          note: 'Useful for sharing with accountant or personal backups.'
        }
      },

      // 7. Settings & Security
      settingsSecurity: {
        title: 'Settings & Security',
        caption: 'Customize the app and protect your data',
        q1: {
          question: 'Is my data secure?',
          answer: 'Security is a priority:',
          features: [
            'All data is encrypted',
            'Passwords protected with secure hashes',
            'Sessions with automatic timeout',
            'Automatic database backups',
            'Protected access via authentication'
          ]
        },
        q2: {
          question: 'How do I change my password?',
          steps: [
            'Go to your user profile',
            'Click "Change Password"',
            'Enter your current password',
            'Enter the new password (min 8 characters)',
            'Confirm the change'
          ]
        },
        q3: {
          question: 'How do I manage notifications?',
          answer: 'In settings you can configure:',
          types: [
            'Notifications for upcoming payments',
            'Budget overspending alerts',
            'Reminders for recurring expenses',
            'Automatic monthly summaries'
          ],
          note: 'You can enable/disable each type of notification.'
        },
        q4: {
          question: 'How do I install the app on my phone?',
          iphone: {
            title: 'On iPhone:',
            steps: [
              'Open the app with Safari',
              'Tap the share button',
              'Select "Add to Home Screen"',
              'Confirm the installation'
            ]
          },
          android: {
            title: 'On Android:',
            steps: [
              'Open the app with Chrome',
              'Tap the menu (3 dots)',
              'Select "Install app"',
              'Confirm the installation'
            ]
          }
        }
      },

      // 8. Troubleshooting
      troubleshooting: {
        title: 'Troubleshooting',
        caption: 'Solutions to common problems',
        q1: {
          question: 'The app is not syncing',
          answer: 'Try these steps:',
          steps: [
            'Check internet connection',
            'Close and reopen the app',
            'Logout and login again',
            'Update browser/app'
          ],
          note: 'If the problem persists, contact support.'
        },
        q2: {
          question: 'I see an error while saving',
          answer: 'Common errors:',
          errors: [
            'Required fields: Check that you have filled in all required fields',
            'Invalid amount: Use period for decimals (e.g., 10.50)',
            'Invalid date: Check that the date is in the correct format',
            'Expired session: Login again'
          ]
        },
        q3: {
          question: 'How do I update the app?',
          answer: 'The app updates automatically! When available:',
          steps: [
            'Reload the page in the browser',
            'Or close and reopen the installed app',
            'You will see a notification for new features'
          ]
        },
        q4: {
          question: 'I accidentally deleted an expense',
          answer: 'If you just deleted the expense:',
          steps: [
            'Check if there is an "Undo" button in the notification',
            'Otherwise, you will have to recreate the expense manually',
            'For the future, the app always asks for confirmation before deleting'
          ],
          tip: 'Tip: Instead of deleting, you can edit an existing expense.'
        }
      }
    },

    // Footer
    footer: {
      title: 'Still need help?',
      text: 'This documentation didn\'t answer your question? Contact technical support for personalized assistance.'
    }
  },

  // Validation & Errors
  validation: {
    required: 'Required field',
    invalidEmail: 'Invalid email',
    invalidDate: 'Invalid date',
    invalidAmount: 'Invalid amount',
    minLength: 'Minimum length {min} characters',
    maxLength: 'Maximum length {max} characters',
    minValue: 'Minimum value {min}',
    maxValue: 'Maximum value {max}',
    mustMatch: 'Fields must match',
    uniqueField: 'This value already exists'
  },

  errors: {
    genericError: 'An error occurred',
    networkError: 'Network error',
    serverError: 'Server error',
    notFound: 'Resource not found',
    unauthorized: 'Unauthorized',
    forbidden: 'Access denied',
    timeout: 'Request timeout',
    badRequest: 'Bad request',
    tryAgain: 'Try again',
    contactSupport: 'Contact support',
    authStateInvalid: 'Invalid auth state after login',
    tokenLost: 'Token lost after delay'
  },

  // Messages
  messages: {
    confirmDelete: 'Are you sure you want to delete this item?',
    confirmAction: 'Are you sure you want to proceed?',
    unsavedChanges: 'You have unsaved changes',
    actionSuccess: 'Action completed successfully',
    actionFailed: 'Action failed',
    noInternetConnection: 'No internet connection',
    dataLoaded: 'Data loaded',
    dataSaved: 'Data saved',
    updateAvailable: 'Update available',
    updateDownloading: 'Downloading update...',
    updateInstalled: 'Update installed',
    warning: 'Warning',
    developmentFeature: 'Feature in Development',

    // Settings Page Messages
    clearingCacheRestart: '🔄 Clearing cache and restarting...',
    errorForceRefresh: '❌ Error during forced refresh',
    languageChangedIt: 'Lingua modificata in Italiano',
    languageChangedEn: 'Language changed to English',
    errorChangingLanguage: 'Error changing language',
    errorRefreshingInfo: 'Error during refresh',
    errorOrientationUpdate: 'Error updating orientation',

    // Family Messages
    familyCreated: 'Family created successfully!',
    familyUpdated: 'Family updated successfully',
    familyDeleted: 'Family deleted successfully',
    familyJoined: 'You have joined the family successfully!',
    inviteCodeGenerated: 'Invitation code generated!',
    inviteCodeCopied: 'Invitation code copied to clipboard',
    invitationAccepted: 'Invitation accepted successfully!',
    errorCreatingFamily: 'Error creating family',
    errorUpdatingFamily: 'Error updating family',
    errorDeletingFamily: 'Error deleting family',
    errorJoiningFamily: 'Invalid or expired invitation code',
    errorGeneratingInvite: 'Error generating invitation code',
    errorLoadingInvitations: 'Error loading invitations',
    errorLoadingReceivedInvitations: 'Error loading received invitations',
    errorAcceptingInvitation: 'Error accepting invitation',

    // Share
    shareTitle: 'Family Invitation - MyCrisisFamily'
  },

  // Time & Dates
  time: {
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    thisWeek: 'This Week',
    lastWeek: 'Last Week',
    thisMonth: 'This Month',
    lastMonth: 'Last Month',
    thisYear: 'This Year',
    lastYear: 'Last Year',
    days: 'Days',
    weeks: 'Weeks',
    months: 'Months',
    years: 'Years',
    ago: 'ago',
    from: 'from',
    to: 'to',
    between: 'between',
    and: 'and',
    // Days of the week
    weekdays: {
      sunday: 'Sunday',
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday'
    },
    // Months
    monthNames: {
      january: 'January',
      february: 'February',
      march: 'March',
      april: 'April',
      may: 'May',
      june: 'June',
      july: 'July',
      august: 'August',
      september: 'September',
      october: 'October',
      november: 'November',
      december: 'December'
    }
  },

  // Layout & Navigation
  layout: {
    appName: 'MyCrisisFamily',
    appSubtitle: 'Expense Management',
    menu: {
      sections: {
        main: 'Main',
        tools: 'Tools',
        settings: 'Settings'
      },
      dashboard: {
        title: 'Dashboard',
        caption: 'General overview'
      },
      expenses: {
        title: 'Expenses',
        caption: 'Manage expenses'
      },
      spendingPlans: {
        title: 'Spending Plans',
        caption: 'Organize your expenses'
      },
      scanner: {
        title: 'Scanner',
        caption: 'Scan receipts'
      },
      help: {
        title: 'Help',
        caption: 'Guide and support'
      },
      settings: {
        title: 'Settings',
        caption: 'Configure the app'
      }
    },
    bottomNav: {
      home: 'Home',
      expenses: 'Expenses',
      plans: 'Plans',
      scanner: 'Scanner',
      settings: 'Settings'
    }
  },

  // Dashboard
  dashboard: {
    title: 'Dashboard',
    loading: 'Loading dashboard...',
    loadingSubtitle: 'Preparing financial data',
    errorLoading: 'Error loading data',
    greeting: {
      morning: 'Good morning',
      afternoon: 'Good afternoon',
      evening: 'Good evening'
    },
    quickActions: {
      newExpense: 'New expense',
      scan: 'Scan',
      spendingPlans: 'Spending Plans',
      manualExpense: 'Manual expense'
    },
    stats: {
      spendingPlans: 'Spending Plans',
      spentThisMonth: 'Spent in {month}',
      totalSpent: 'Spent'
    },
    recentExpenses: {
      title: 'Recent expenses',
      viewAll: 'View all',
      noExpenses: 'No expenses recorded',
      startAdding: 'Start by adding your first expense'
    },
    expenseStatus: {
      paid: 'Paid',
      pending: 'Pending',
      unpaid: 'To Pay'
    }
  },

  // Landing Page
  landing: {
    hero: {
      title: 'MyCrisisFamily',
      subtitle: 'Family expense management has never been easier',
      downloadBtn: 'Download App',
      demoBtn: 'Try Demo',
      features: {
        family: 'Share with family',
        budget: 'Smart budgets',
        recurring: 'Recurring expenses'
      }
    },
    featuresSection: {
      title: 'Why choose MyCrisisFamily?',
      family: {
        badge: 'Family',
        title: 'Family Management',
        description: 'Involve all family members. Share expenses, budgets and plans in real-time with customized roles.',
        highlights: [
          'Multiple profiles for each member',
          'Instant synchronization',
          'Roles and permissions system'
        ],
        stats: {
          members: 'Members',
          shared: 'Shared'
        }
      },
      budget: {
        badge: 'Smart',
        title: 'Smart Budgets',
        description: 'Complete categorization system with 15 main categories and 93 subcategories for precise and detailed management.',
        highlights: [
          '15 categories + 93 subcategories',
          'Automatic progress monitoring',
          'Advanced reports and analytics'
        ],
        stats: {
          categories: 'Categories',
          subcategories: 'Subcategories'
        }
      },
      recurring: {
        badge: 'Auto',
        title: 'Recurring Expenses',
        description: 'Fully automate bills, installments and subscriptions. The system automatically generates deadlines and notifies you in time.',
        highlights: [
          'Scheduled automatic generation',
          'Integrated notifications and reminders',
          'Multiple installments and payment plans management'
        ],
        stats: {
          frequencies: 'Frequencies',
          installments: 'Installments'
        }
      },
      mobile: {
        badge: 'Mobile',
        title: 'Mobile First',
        description: 'Native Android app with receipt scanner, advanced OCR and automatic OTA updates. Everything always at hand.',
        highlights: [
          'Receipt scanner with integrated AI',
          'Automatic OCR for digitization',
          'Automatic OTA updates'
        ],
        stats: {
          native: 'Native',
          updates: 'Updates'
        }
      }
    },
    statsSection: {
      title: 'The ideal family for your finances',
      categories: 'Predefined Categories',
      sharing: 'Family Sharing',
      sync: 'Synchronization',
      expenses: 'Trackable Expenses'
    },
    ctaSection: {
      title: 'Ready to get started?',
      description: 'Join the families who have already chosen MyCrisisFamily to organize their finances.',
      downloadBtn: 'Download Now Free',
      note: 'Available for Android • Automatic updates'
    },
    downloadDialog: {
      title: 'Download MyCrisisFamily',
      version: 'Current version',
      downloadBtn: 'Download APK',
      fileInfo: 'APK file for Android devices',
      fileSize: 'Size: ~15MB',
      close: 'Close',
      downloadStarted: 'Download started!',
      checkFolder: 'Check Download folder',
      downloadError: 'Download error',
      retryLater: 'Try again later'
    }
  }
}
