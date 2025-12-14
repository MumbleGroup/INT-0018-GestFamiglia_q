export default {
  // Common
  common: {
    appName: 'MyCrisisFamily',
    save: 'Salva',
    cancel: 'Annulla',
    delete: 'Elimina',
    edit: 'Modifica',
    close: 'Chiudi',
    confirm: 'Conferma',
    back: 'Indietro',
    next: 'Avanti',
    search: 'Cerca',
    filter: 'Filtra',
    loading: 'Caricamento...',
    noData: 'Nessun dato disponibile',
    yes: 'Sì',
    no: 'No',
    add: 'Aggiungi',
    create: 'Crea',
    update: 'Aggiorna',
    view: 'Visualizza',
    download: 'Scarica',
    upload: 'Carica',
    select: 'Seleziona',
    all: 'Tutti',
    none: 'Nessuno',
    other: 'Altro',
    total: 'Totale',
    date: 'Data',
    description: 'Descrizione',
    amount: 'Importo',
    category: 'Categoria',
    status: 'Stato',
    actions: 'Azioni',
    details: 'Dettagli',
    settings: 'Impostazioni',
    help: 'Aiuto',
    logout: 'Esci',
    success: 'Operazione completata',
    error: 'Errore'
  },

  // Authentication
  auth: {
    login: 'Accedi',
    register: 'Registrati',
    logout: 'Esci',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Conferma Password',
    forgotPassword: 'Password dimenticata?',
    resetPassword: 'Reimposta Password',
    rememberMe: 'Ricordami',
    loginWith: 'Accedi con',
    loginWithPin: 'Accedi con PIN',
    loginWithEmail: 'Accedi con Email',
    enterPin: 'Inserisci PIN',
    insertPin: 'INSERISCI PIN',
    insertEmail: 'INSERISCI EMAIL',
    insertPassword: 'INSERISCI PASSWORD',
    useEmail: 'Usa Email',
    usePin: 'Usa PIN',
    setupPin: 'Imposta PIN',
    changePin: 'Cambia PIN',
    deletePin: 'Cancella PIN',
    pinSetup: 'Configurazione PIN',
    welcomeBack: 'Bentornato!',
    createAccount: 'Crea un account',
    alreadyHaveAccount: 'Hai già un account?',
    dontHaveAccount: 'Non hai un account?',
    loginSuccess: 'Accesso effettuato',
    loginError: "Errore durante l'accesso",
    logoutSuccess: 'Disconnesso con successo',
    registerSuccess: 'Registrazione completata',
    invalidCredentials: 'Credenziali non valide',
    passwordMismatch: 'Le password non coincidono',
    weakPassword: 'Password troppo debole',
    emailRequired: 'Email obbligatoria',
    passwordRequired: 'Password obbligatoria',
    emailPlaceholder: 'tua.email@esempio.com',
    passwordPlaceholder: 'Inserisci la tua password',
    pinIncorrect: 'PIN non corretto',
    pinDeleteError: 'Errore nella cancellazione del PIN',
    enterEmailPassword: 'Inserisci email e password',
    pinSetupSuccess: 'PIN impostato con successo!',
    pinSetupError: "Errore durante l'impostazione del PIN",
    appVersion: 'VERSIONE APP',
    passwordPlaceholderCreate: 'Crea una password',
    passwordPlaceholderRepeat: 'Ripeti la password',
    invitationCode: 'Codice invito famiglia (opzionale)',
    invitationCodePlaceholder: 'Codice invito',
    acceptTerms: 'Accetto i termini',
    registerError: 'Errore durante la registrazione. Riprova.',
    emailAlreadyRegistered: 'Email già registrata',
    invalidInvitationCode: 'Codice invito non valido',
    recoverPassword: 'Recupera password',
    recoverPasswordDescription: 'Inserisci la tua email per ricevere il link di reset della password',
    sendLink: 'Invia link',
    emailSentSuccess: 'Email inviata con successo!',
    emailSentCheck: 'Email inviata! Controlla la tua casella di posta.',
    emailSendError: "Errore durante l'invio. Riprova.",
    remembered: 'Ti sei ricordato?',
    errorLabel: 'ERRORE',
    successLabel: 'SUCCESSO',
    requestNewLink: 'Richiedi un nuovo link',
    passwordChangedSuccess: 'Password cambiata con successo!',
    canLoginNow: 'Ora puoi effettuare il login.',
    goToLogin: 'Vai al Login',
    newPassword: 'Nuova password',
    newPasswordPlaceholder: 'Inserisci nuova password',
    confirmNewPasswordPlaceholder: 'Conferma nuova password',
    changePassword: 'Cambia password',
    havePassword: 'Hai già la password?',
    security: 'SECURITY',
    passwordResetError: 'Errore durante il reset della password',
    passwordResetNetworkError: 'Errore di connessione durante il reset della password',
    tokenMissing: "Token mancante nell'URL"
  },

  // Users & Family
  users: {
    profile: 'Profilo',
    familyMembers: 'Membri della Famiglia',
    firstName: 'Nome',
    firstNamePlaceholder: 'Il tuo nome',
    lastName: 'Cognome',
    lastNamePlaceholder: 'Il tuo cognome',
    username: 'Username',
    role: 'Ruolo',
    roles: {
      father: 'Padre',
      mother: 'Madre',
      son: 'Figlio',
      daughter: 'Figlia',
      other: 'Altro'
    },
    changePassword: 'Cambia Password',
    currentPassword: 'Password Attuale',
    newPassword: 'Nuova Password',
    passwordChanged: 'Password modificata',
    preferences: 'Preferenze',

    // Family Management
    familyManagement: 'Gestione Famiglia',
    currentFamily: 'Famiglia Attuale',
    members: 'membri',
    administrator: 'Amministratore',
    member: 'Membro',
    familyMembersList: 'Membri della famiglia',
    inviteMember: 'Invita Membro',
    sentInvitations: 'Inviti Inviati',
    manageFamily: 'Gestisci Famiglia',
    sentInvitationsTitle: 'Inviti inviati',
    refreshInvitations: 'Aggiorna inviti',
    invitationEmail: 'Email invito',
    invitationRole: 'Ruolo',
    invitationDate: 'Data',
    invitationExpires: 'Scade',
    invitationCode: 'Codice',

    // No Family State
    noFamily: 'Non fai parte di nessuna famiglia',
    noFamilyDescription: 'Crea una nuova famiglia o unisciti a una esistente usando un codice invito.',
    createFamily: 'Crea Famiglia',
    joinWithCode: 'Unisciti con Codice',

    // Received Invitations
    receivedInvitations: 'Inviti Ricevuti',
    refreshReceivedInvitations: 'Aggiorna inviti ricevuti',
    invitedBy: 'Invitato da',
    invitedByLabel: 'Da',
    accept: 'Accetta',

    // Create Family Dialog
    createFamilyTitle: 'Crea Nuova Famiglia',
    familyName: 'Nome Famiglia *',
    familyNamePlaceholder: 'es. Famiglia Serra, Famiglia Rossi...',
    familyDescription: 'Descrizione (opzionale)',
    familyDescriptionPlaceholder: 'Una breve descrizione della famiglia...',

    // Join Family Dialog
    joinFamilyTitle: 'Unisciti a una Famiglia',
    inviteCode: 'Codice Invito *',
    inviteCodePlaceholder: 'es. FAM-ABC123',
    join: 'Unisciti',

    // Manage Family Dialog
    manageFamilyTitle: 'Gestisci Famiglia',
    familySettings: 'Impostazioni Famiglia',
    deleteFamily: 'Elimina Famiglia',
    deleteFamilyConfirm: 'Elimina Famiglia',
    deleteFamilyMessage: 'Sei sicuro di voler eliminare la famiglia? Questa azione non può essere annullata.',
    saveChanges: 'Salva Modifiche',

    // Invite Member Dialog
    inviteMemberTitle: 'Invita un Membro',
    inviteDescription: 'Invita un nuovo membro nella tua famiglia inviandogli un link o condividendo il codice invito.',
    newMemberEmail: 'Email del nuovo membro *',
    newMemberEmailPlaceholder: 'es. sara@email.com',
    generateInviteCode: 'Genera Codice Invito',
    inviteLink: 'Link di invito',
    copy: 'Copia',
    share: 'Condividi',

    // Invitation Status
    invitationStatus: {
      pending: 'In Attesa',
      accepted: 'Accettato',
      declined: 'Rifiutato',
      expired: 'Scaduto'
    }
  },

  // Expenses
  expenses: {
    // General
    expenses: 'Spese',
    expense: 'Spesa',
    newExpense: 'Nuova Spesa',
    addExpense: 'Aggiungi Spesa',
    editExpense: 'Modifica Spesa',
    deleteExpense: 'Elimina Spesa',
    expenseDetails: 'Dettagli Spesa',

    // Add methods
    manualEntry: 'Inserimento Manuale',
    manualEntryCaption: 'Inserisci i dati della spesa manualmente',
    scanReceipt: 'Scansiona Ricevuta',
    scanReceiptCaption: 'Usa la fotocamera per scansionare',
    takePhoto: 'Scatta Foto',
    takePhotoCaption: 'Fotografa la ricevuta',

    // Search & Filters
    searchPlaceholder: 'Cerca per nome o categoria...',
    all: 'Tutte',
    more: 'altre',
    less: 'meno',
    loading: 'Caricamento spese...',
    loadingSubtitle: 'Attendere mentre vengono caricate le spese',
    count: '{n} spesa | {n} spese',

    // Form fields
    description: 'Descrizione',
    descriptionRequired: 'Descrizione *',
    descriptionPlaceholder: 'es. Spesa supermercato',
    amount: 'Importo',
    amountRequired: 'Importo *',
    amountPlaceholder: 'es. 25.50',
    category: 'Categoria',
    categoryRequired: 'Categoria *',
    subcategory: 'Sottocategoria',
    date: 'Data',
    dateRequired: 'Data *',
    dueDate: 'Data Scadenza',
    notes: 'Note',
    notesOptional: 'Note (opzionale)',
    spendingPlan: 'Piano di Spesa',
    paymentMethod: 'Metodo',
    paymentMethodRequired: 'Metodo *',
    paymentSource: 'Fonte',
    paymentSourceRequired: 'Fonte *',
    sharedWithFamily: 'Spesa condivisa con la famiglia',
    uncategorized: 'Da Categorizzare',
    invalidAmount: 'Importo deve essere maggiore di 0',

    // Quick form
    whatBought: 'Cosa hai comprato? *',
    howMuchSpent: 'Quanto hai speso? *',
    saveQuick: 'Salva Veloce',

    // Recurring
    makeRecurring: 'Rendi questa spesa ricorrente',
    frequency: 'Frequenza',
    frequencyRequired: 'Frequenza *',
    startDateRecurring: 'Data inizio ricorrenza *',
    endDateRecurring: 'Data fine ricorrenza (opzionale)',
    totalInstallments: 'Numero rate totali (opzionale)',
    installmentsHint: 'Es: 12 per rate mensili per un anno',
    generateImmediately: 'Genera spese future immediatamente',

    // Frequency options
    frequencyOptions: {
      daily: 'Giornaliera',
      weekly: 'Settimanale',
      biweekly: 'Bisettimanale',
      monthly: 'Mensile',
      bimonthly: 'Bimestrale',
      quarterly: 'Trimestrale',
      semiannual: 'Semestrale',
      annual: 'Annuale'
    },

    // Attachments
    attachments: 'Allegati',
    uploadReceipt: 'Carica ricevuta',
    uploadImage: 'Carica Immagine',
    uploading: 'Caricamento...',

    // Actions
    cancel: 'Annulla',
    save: 'Salva Spesa',
    saveChanges: 'Salva Modifiche',
    edit: 'Modifica',
    delete: 'Elimina',
    pay: 'Paga Spesa',

    // Delete confirmation
    confirmDelete: 'Sei sicuro di voler eliminare questa spesa?',
    permanentAction: 'Questa azione è permanente e non può essere annullata.',
    confirmDeleteButton: 'Sì, Elimina',

    // Messages
    expenseCreated: 'Spesa creata con successo',
    expenseUpdated: 'Spesa aggiornata',
    expenseDeleted: 'Spesa eliminata',
    noExpenses: 'Nessuna spesa trovata',
    noFilteredExpenses: 'Nessuna spesa corrisponde ai filtri',
    errorLoading: 'Errore nel caricamento delle spese',

    // Empty state
    emptyTitle: 'Nessuna Spesa',
    emptySubtitle: 'Inizia aggiungendo la tua prima spesa',

    // Legacy fields (keep for compatibility)
    recurringExpense: 'Spesa Ricorrente',
    recurringExpenses: 'Spese Ricorrenti',
    oneTimeExpense: 'Spesa Singola',
    sharedExpense: 'Spesa Condivisa',
    personalExpense: 'Spesa Personale',
    addAttachment: 'Aggiungi Allegato',
    sharedWith: 'Condivisa con',
    paidBy: 'Pagata da',
    splitBetween: 'Divisa tra',
    equalSplit: 'Divisione Equa',
    customSplit: 'Divisione Personalizzata',
    myShare: 'La Mia Quota',
    status: {
      pending: 'In Sospeso',
      paid: 'Pagata',
      partiallyPaid: 'Parzialmente Pagata',
      overdue: 'Scaduta',
      cancelled: 'Annullata'
    },
    frequency: {
      daily: 'Giornaliera',
      weekly: 'Settimanale',
      biweekly: 'Bisettimanale',
      monthly: 'Mensile',
      bimonthly: 'Bimestrale',
      quarterly: 'Trimestrale',
      semiannual: 'Semestrale',
      annual: 'Annuale'
    },
    installments: 'Rate',
    installment: 'Rata',
    installmentNumber: 'Numero Rata',
    paidInstallments: 'Rate Pagate',
    pendingInstallments: 'Rate in Sospeso',
    createInstallments: 'Crea Rate',
    markAsPaid: 'Segna come Pagata',
    markAsUnpaid: 'Segna come Non Pagata',
    totalExpenses: 'Totale Spese',
    monthlyExpenses: 'Spese Mensili',
    yearlyExpenses: 'Spese Annuali'
  },

  // Categories
  categories: {
    categories: 'Categorie',
    category: 'Categoria',
    subcategories: 'Sottocategorie',
    addCategory: 'Aggiungi Categoria',
    editCategory: 'Modifica Categoria',
    deleteCategory: 'Elimina Categoria',
    categoryName: 'Nome Categoria',
    categoryType: 'Tipo Categoria',
    types: {
      necessary: 'Necessaria',
      extra: 'Extra'
    },
    monthlyBudget: 'Budget Mensile',
    icon: 'Icona',
    color: 'Colore',
    categoryCreated: 'Categoria creata',
    categoryUpdated: 'Categoria aggiornata',
    categoryDeleted: 'Categoria eliminata',
    noCategories: 'Nessuna categoria trovata',

    // Predefined category names (IT -> IT, used as fallback)
    names: {
      'Casa e Abitazione': 'Casa e Abitazione',
      'Alimentari e Bevande': 'Alimentari e Bevande',
      'Trasporti': 'Trasporti',
      'Salute e Benessere': 'Salute e Benessere',
      'Assicurazioni': 'Assicurazioni',
      'Tasse e Imposte': 'Tasse e Imposte',
      'Educazione e Formazione': 'Educazione e Formazione',
      'Tempo Libero': 'Tempo Libero',
      'Viaggi e Vacanze': 'Viaggi e Vacanze',
      'Abbigliamento': 'Abbigliamento',
      'Elettronica e Tecnologia': 'Elettronica e Tecnologia',
      'Casa Extra': 'Casa Extra',
      'Sport e Fitness': 'Sport e Fitness',
      'Regali e Eventi': 'Regali e Eventi',
      'Animali Domestici': 'Animali Domestici'
    }
  },

  // Budget & Planning
  budget: {
    budget: 'Budget',
    budgets: 'Budget',
    monthlyBudget: 'Budget Mensile',
    yearlyBudget: 'Budget Annuale',
    currentBudget: 'Budget Corrente',
    createBudget: 'Crea Budget',
    editBudget: 'Modifica Budget',
    deleteBudget: 'Elimina Budget',
    budgetDetails: 'Dettagli Budget',
    totalBudget: 'Budget Totale',
    spent: 'Speso',
    remaining: 'Rimanente',
    exceeded: 'Superato',
    percentageUsed: 'Percentuale Utilizzata',
    budgetByCategory: 'Budget per Categoria',
    copyToNextMonth: 'Copia al Mese Prossimo',
    budgetCreated: 'Budget creato',
    budgetUpdated: 'Budget aggiornato',
    budgetDeleted: 'Budget eliminato',
    noBudgets: 'Nessun budget trovato',
    spendingPlan: 'Piano di Spesa',
    spendingPlans: 'Piani di Spesa',
    plannedExpenses: 'Spese Pianificate',
    unplannedExpenses: 'Spese Non Pianificate',
    pinPlan: 'Fissa Piano',
    unpinPlan: 'Rimuovi Pin',
    hiddenPlans: 'Piani Nascosti',

    // BudgetPage specific
    newSpendingPlan: 'Nuovo Piano di Spesa',
    loadingBudgets: 'Caricamento piani di spesa...',
    loadingBudgetsSubtitle: 'Recupero dati di budget e pianificazione',
    noBudgetCreated: 'Nessun Piano di Spesa Creato',
    noBudgetDescription: 'Inizia creando il tuo primo piano di spesa personalizzato!',
    createFirstPlan: 'Crea Primo Piano',
    modify: 'Modifica',
    delete: 'Elimina',
    active: 'Attivo',
    used: 'utilizzato',
    planName: 'Nome Piano di Spesa *',
    planNamePlaceholder: 'es. Ottobre 2025, Estate 2026, Natale 2025...',
    nameRequired: 'Nome richiesto',
    descriptionOptional: 'Descrizione (opzionale)',
    descriptionPlaceholder: 'Descrivi a cosa serve questo piano di spesa...',
    planType: 'Tipo Piano *',
    startDate: 'Data Inizio *',
    startDateRequired: 'Data inizio richiesta',
    endDate: 'Data Fine *',
    endDateRequired: 'Data fine richiesta',
    totalAmount: 'Importo Totale *',
    amountGreaterThanZero: 'Importo deve essere maggiore di 0',
    createPlan: 'Crea Piano',
    newPlanDialogTitle: 'Nuovo Piano di Spesa',
    newPlanDialogSubtitle: 'Crea un piano di spesa personalizzato per il periodo che preferisci',
    confirmDeleteBudget: 'Conferma Eliminazione',
    confirmDeleteBudgetMessage: 'Sei sicuro di voler eliminare il piano di spesa {name}?',
    budgetDeletedSuccess: 'Piano di spesa eliminato con successo',
    budgetCreatedSuccess: 'Piano di spesa creato con successo!',
    errorCreatingBudget: 'Errore nella creazione del piano di spesa',
    errorDeletingBudget: "Errore nell'eliminazione del budget",
    errorLoadingBudgets: 'Errore nel caricamento dei budget',
    featureInDevelopment: 'Funzione in sviluppo',

    // Spending Plans Page
    addPlan: 'Aggiungi Piano',
    contribution: 'Contributo',
    personalPlansAvailable: 'Piani Personali Disponibili',
    createPersonalPlansDescription: 'Puoi creare piani personali per organizzare le tue spese. Per condividere piani con altri membri,',
    joinFamily: 'crea o unisciti a una famiglia',
    filters: 'Filtri',
    period: 'Periodo',
    threeMonths: '3 Mesi',
    visibility: 'Visibilità',
    visible: 'Visibili',
    hidden: 'Nascosti',
    cashAvailability: 'Disponibilità Cash',
    refreshBalance: 'Aggiorna bilancio',
    plansCounterDisplay: 'Visualizzati {filtered} di {total} piani',
    loadingPlans: 'Caricamento piani di spesa...',
    loadingPlansSubtitle: 'Recupero pianificazioni e spese future',
    startPlanning: 'Inizia a Pianificare',
    firstPlanDescription: 'Crea il tuo primo piano di spesa per organizzare meglio le tue finanze. Perfetto per eventi, vacanze o spese mensili!',
    organizeByPeriod: 'Organizza per periodo',
    clonePlans: 'Clona i piani',
    monitorProgress: 'Monitora i progressi',

    // Plan Types
    planTypes: {
      monthly: 'Mensile',
      seasonal: 'Stagionale',
      event: 'Evento/Occasione',
      quarterly: 'Trimestrale',
      semester: 'Semestrale',
      yearly: 'Annuale',
      custom: 'Personalizzato'
    },

    // Messages
    personalPlan: 'Piano Personale',
    familyPlan: 'Piano Familiare',
    planCreatedSuccess: '{type} creato con successo!',
    planUpdatedSuccess: 'Piano di spesa aggiornato con successo!',
    planDeletedSuccess: 'Piano eliminato con successo',
    planClonedSuccess: 'Piano {name} clonato con successo!',
    planPinned: 'Piano pinnato con successo',
    planUnpinned: 'Piano spinnato con successo',
    errorLoadingPlans: 'Errore nel caricamento dei piani di spesa',
    errorCreatingPlan: 'Errore nella creazione del piano',
    errorUpdatingPlan: "Errore nell'aggiornamento del piano",
    errorDeletingPlan: "Errore nell'eliminazione del piano",
    confirmDeletePlan: 'Conferma Eliminazione',
    confirmDeletePlanMessage: 'Sei sicuro di voler eliminare il piano {name}?'
  },

  // Reports
  reports: {
    reports: 'Report',
    generateReport: 'Genera Report',
    monthlySummary: 'Riepilogo Mensile',
    yearlySummary: 'Riepilogo Annuale',
    expensesByCategory: 'Spese per Categoria',
    expensesByMember: 'Spese per Membro',
    expensesByPeriod: 'Spese per Periodo',
    savingGoals: 'Obiettivi di Risparmio',
    savingGoal: 'Obiettivo di Risparmio',
    targetAmount: 'Importo Obiettivo',
    currentAmount: 'Importo Attuale',
    progress: 'Progresso',
    achieved: 'Raggiunto',
    inProgress: 'In Corso',
    exportReport: 'Esporta Report',
    exportPdf: 'Esporta PDF',
    exportExcel: 'Esporta Excel',
    fromDate: 'Da Data',
    toDate: 'A Data',
    period: 'Periodo',
    thisMonth: 'Questo Mese',
    lastMonth: 'Mese Scorso',
    thisYear: "Quest'Anno",
    lastYear: 'Anno Scorso',
    custom: 'Personalizzato'
  },

  // Contributions
  contributions: {
    contributions: 'Contributi',
    contribution: 'Contributo',
    myContributions: 'I Miei Contributi',
    familyContributions: 'Contributi Famiglia',
    addContribution: 'Aggiungi Contributo',
    newContribution: 'Nuovo Contributo',
    contributionAmount: 'Importo Contributo',
    contributedBy: 'Contribuito da',
    totalContributions: 'Totale Contributi',
    monthlyContributions: 'Contributi Mensili',
    contributionHistory: 'Storico Contributi',
    dashboard: 'Dashboard Contributi',
    contributionsList: 'Lista Contributi',
    fullList: 'Lista Completa',
    manageIncomeDescription: 'Gestisci le entrate e i contributi della famiglia',
    insufficientBalance: 'Bilancio famiglia insufficiente',
    availableBalance: 'Bilancio disponibile',
    contributionAddedSuccess: 'Contributo aggiunto con successo!'
  },

  // Payments & Quotes
  payments: {
    payment: 'Pagamento',
    payments: 'Pagamenti',
    quote: 'Quota',
    quotes: 'Quote',
    dueDate: 'Data Scadenza',
    dueSoon: 'In Scadenza',
    overdue: 'Scadute',
    paid: 'Pagate',
    unpaid: 'Non Pagate',
    paymentStatus: 'Stato Pagamento',
    paymentMethod: 'Metodo Pagamento',
    paymentHistory: 'Storico Pagamenti',
    calendarView: 'Vista Calendario',
    listView: 'Vista Lista',
    quoteSummary: 'Riepilogo Quote',
    methods: {
      card: 'Carta di Credito/Debito',
      cash: 'Contanti',
      transfer: 'Bonifico',
      paypal: 'PayPal',
      applePay: 'Apple Pay',
      googlePay: 'Google Pay',
      other: 'Altro'
    },
    sources: {
      personal: 'Fondi Personali',
      contribution: 'Da Contributo Famiglia'
    }
  },

  // Settings
  settings: {
    settings: 'Impostazioni',
    generalSettings: 'Impostazioni Generali',
    accountSettings: 'Impostazioni Account',
    systemSettings: 'Impostazioni Sistema',
    language: 'Lingua',
    selectLanguage: 'Seleziona Lingua',
    languageChanged: 'Lingua modificata',
    theme: 'Tema',
    darkMode: 'Modalità Scura',
    lightMode: 'Modalità Chiara',
    autoMode: 'Automatica',
    notifications: 'Notifiche',
    enableNotifications: 'Abilita Notifiche',
    emailNotifications: 'Notifiche Email',
    pushNotifications: 'Notifiche Push',
    currency: 'Valuta',
    dateFormat: 'Formato Data',
    timeFormat: 'Formato Ora',
    forceUpdate: 'Forza Aggiornamento',
    forceUpdateDescription: "Cancella cache e ricarica l'applicazione",
    checkUpdates: 'Controlla Aggiornamenti',
    version: 'Versione',
    appVersion: 'Versione Applicazione',
    backupRestore: 'Backup e Ripristino',
    exportData: 'Esporta Dati',
    importData: 'Importa Dati',
    privacy: 'Privacy',
    termsOfService: 'Termini di Servizio',
    about: 'Informazioni',
    copyright: 'Copyright © 2025 MUMBLE.GROUP',

    // Settings Page
    pageTitle: 'Impostazioni',
    pageDescription: "Configura l'app, visualizza informazioni di sistema e gestisci le preferenze.",

    // Security & Account
    securityAccount: 'Sicurezza e Account',
    changePasswordTitle: 'Cambia Password',
    changePasswordDescription: 'Aggiorna la tua password per mantenere il tuo account sicuro',
    changePasswordButton: 'Cambia Password',
    currentPasswordRequired: 'Password Attuale *',
    newPasswordRequired: 'Nuova Password *',
    confirmNewPasswordRequired: 'Conferma Nuova Password *',

    // System Information
    systemInformation: 'Informazioni Sistema',
    apiServer: 'Server API',
    publicIP: 'IP Pubblico',
    deviceIP: 'IP Dispositivo',
    platform: 'Piattaforma',
    refreshInfo: 'Aggiorna informazioni',
    serverStatus: {
      checking: 'Controllo...',
      connected: 'Connesso',
      unreachable: 'Non raggiungibile',
      testing: 'Test...'
    },

    // Display Settings
    displaySettings: 'Visualizzazione',
    displayDescription: "Personalizza l'orientamento dello schermo per una migliore esperienza su tablet.",
    landscapeMode: 'Modalità Landscape',
    landscapeModeDesc: "Blocca l'orientamento in orizzontale per tablet",

    // Updates
    updates: 'Aggiornamenti',
    updatesDescription: "Controlla e installa gli aggiornamenti dell'applicazione per avere sempre le ultime funzionalità.",
    checkForUpdates: 'Controlla Aggiornamenti',
    currentVersion: 'Versione corrente',

    // Download APK
    androidApp: 'App Android',
    betterExperience: 'Migliore esperienza',
    downloadAPK: 'Scarica APK',

    // Force Refresh
    forceRefresh: 'Forza Aggiornamento',
    forceRefreshDescription: 'Risolve problemi di cache PWA',
    forceRefreshButton: 'Force Refresh',

    // Font Settings (hidden)
    fontSettings: 'Impostazioni Font',
    fontDescription: "Personalizza i font dell'applicazione per migliorare la tua esperienza di lettura.",
    resetFonts: 'Ripristina Font Predefiniti'
  },

  // Help - Truncated for brevity, using minimal version
  help: {
    help: 'Aiuto',
    documentation: 'Documentazione',
    faq: 'Domande Frequenti',
    support: 'Supporto',
    contactUs: 'Contattaci',
    userGuide: 'Guida Utente',
    tutorial: 'Tutorial',
    gettingStarted: 'Come Iniziare',
    tips: 'Suggerimenti',
    troubleshooting: 'Risoluzione Problemi',
    header: {
      title: 'Aiuto e Documentazione',
      subtitle: "Tutto quello che devi sapere per utilizzare al meglio l'app di gestione spese"
    },
    sections: {},
    footer: {
      title: 'Hai ancora bisogno di aiuto?',
      text: 'Questa documentazione non ha risposto alla tua domanda? Contatta il supporto tecnico per assistenza personalizzata.'
    }
  },

  // Validation & Errors
  validation: {
    required: 'Campo obbligatorio',
    invalidEmail: 'Email non valida',
    invalidDate: 'Data non valida',
    invalidAmount: 'Importo non valido',
    minLength: 'Lunghezza minima {min} caratteri',
    maxLength: 'Lunghezza massima {max} caratteri',
    minValue: 'Valore minimo {min}',
    maxValue: 'Valore massimo {max}',
    mustMatch: 'I campi devono coincidere',
    uniqueField: 'Questo valore esiste già'
  },

  errors: {
    genericError: 'Si è verificato un errore',
    networkError: 'Errore di connessione',
    serverError: 'Errore del server',
    notFound: 'Risorsa non trovata',
    unauthorized: 'Non autorizzato',
    forbidden: 'Accesso negato',
    timeout: 'Timeout della richiesta',
    badRequest: 'Richiesta non valida',
    tryAgain: 'Riprova',
    contactSupport: 'Contatta il supporto',
    authStateInvalid: 'Stato autenticazione non valido dopo login',
    tokenLost: 'Token perso dopo delay'
  },

  // Messages
  messages: {
    confirmDelete: 'Sei sicuro di voler eliminare questo elemento?',
    confirmAction: 'Sei sicuro di voler procedere?',
    unsavedChanges: 'Hai modifiche non salvate',
    actionSuccess: 'Operazione completata con successo',
    actionFailed: 'Operazione fallita',
    noInternetConnection: 'Nessuna connessione Internet',
    dataLoaded: 'Dati caricati',
    dataSaved: 'Dati salvati',
    updateAvailable: 'Aggiornamento disponibile',
    updateDownloading: 'Scaricamento aggiornamento...',
    updateInstalled: 'Aggiornamento installato',
    warning: 'Attenzione',
    developmentFeature: 'Funzionalità in Sviluppo',

    // Settings Page Messages
    clearingCacheRestart: 'Cancellazione cache e riavvio...',
    errorForceRefresh: 'Errore durante il refresh forzato',
    languageChangedIt: 'Lingua modificata in Italiano',
    languageChangedEn: 'Language changed to English',
    errorChangingLanguage: 'Error changing language',
    errorRefreshingInfo: "Errore durante l'aggiornamento",
    errorOrientationUpdate: "Errore durante l'aggiornamento dell'orientamento",

    // Family Messages
    familyCreated: 'Famiglia creata con successo!',
    familyUpdated: 'Famiglia aggiornata con successo',
    familyDeleted: 'Famiglia eliminata con successo',
    familyJoined: 'Ti sei unito alla famiglia con successo!',
    inviteCodeGenerated: 'Codice invito generato!',
    inviteCodeCopied: 'Codice invito copiato negli appunti',
    invitationAccepted: 'Invito accettato con successo!',
    errorCreatingFamily: 'Errore nella creazione della famiglia',
    errorUpdatingFamily: "Errore nell'aggiornamento della famiglia",
    errorDeletingFamily: "Errore nell'eliminazione della famiglia",
    errorJoiningFamily: 'Codice invito non valido o scaduto',
    errorGeneratingInvite: 'Errore nella generazione del codice invito',
    errorLoadingInvitations: 'Errore nel caricamento degli inviti',
    errorLoadingReceivedInvitations: 'Errore nel caricamento degli inviti ricevuti',
    errorAcceptingInvitation: "Errore nell'accettare l'invito",

    // Share
    shareTitle: 'Invito Famiglia - MyCrisisFamily'
  },

  // Time & Dates
  time: {
    today: 'Oggi',
    yesterday: 'Ieri',
    tomorrow: 'Domani',
    thisWeek: 'Questa Settimana',
    lastWeek: 'Settimana Scorsa',
    thisMonth: 'Questo Mese',
    lastMonth: 'Mese Scorso',
    thisYear: "Quest'Anno",
    lastYear: 'Anno Scorso',
    days: 'Giorni',
    weeks: 'Settimane',
    months: 'Mesi',
    years: 'Anni',
    ago: 'fa',
    from: 'da',
    to: 'a',
    between: 'tra',
    and: 'e',
    weekdays: {
      sunday: 'Domenica',
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì',
      saturday: 'Sabato'
    },
    monthNames: {
      january: 'Gennaio',
      february: 'Febbraio',
      march: 'Marzo',
      april: 'Aprile',
      may: 'Maggio',
      june: 'Giugno',
      july: 'Luglio',
      august: 'Agosto',
      september: 'Settembre',
      october: 'Ottobre',
      november: 'Novembre',
      december: 'Dicembre'
    }
  },

  // Layout & Navigation
  layout: {
    appName: 'MyCrisisFamily',
    appSubtitle: 'Gestione Spese',
    menu: {
      sections: {
        main: 'Principale',
        tools: 'Strumenti',
        settings: 'Impostazioni'
      },
      dashboard: {
        title: 'Dashboard',
        caption: 'Panoramica generale'
      },
      expenses: {
        title: 'Spese',
        caption: 'Gestisci le spese'
      },
      spendingPlans: {
        title: 'Piani di Spesa',
        caption: 'Organizza le tue spese'
      },
      scanner: {
        title: 'Scanner',
        caption: 'Scansiona ricevute'
      },
      help: {
        title: 'Aiuto',
        caption: 'Guida e supporto'
      },
      settings: {
        title: 'Impostazioni',
        caption: "Configura l'app"
      }
    },
    bottomNav: {
      home: 'Home',
      expenses: 'Spese',
      plans: 'Piani',
      scanner: 'Scanner',
      settings: 'Settings'
    }
  },

  // Dashboard
  dashboard: {
    title: 'Dashboard',
    loading: 'Caricamento dashboard...',
    loadingSubtitle: 'Preparazione dei dati finanziari',
    errorLoading: 'Errore nel caricamento dei dati',
    greeting: {
      morning: 'Buongiorno',
      afternoon: 'Buon pomeriggio',
      evening: 'Buonasera'
    },
    quickActions: {
      newExpense: 'Nuova spesa',
      scan: 'Scansiona',
      spendingPlans: 'Piani Spesa',
      manualExpense: 'Spesa manuale'
    },
    stats: {
      spendingPlans: 'Piani di Spesa',
      spentThisMonth: 'Speso {month}',
      totalSpent: 'Speso'
    },
    recentExpenses: {
      title: 'Ultime spese',
      viewAll: 'Vedi tutte',
      noExpenses: 'Nessuna spesa registrata',
      startAdding: 'Inizia aggiungendo la tua prima spesa'
    },
    expenseStatus: {
      paid: 'Pagata',
      pending: 'In Sospeso',
      unpaid: 'Da Pagare'
    }
  },

  // Landing Page
  landing: {
    hero: {
      title: 'MyCrisisFamily',
      subtitle: 'La gestione delle spese familiari non è mai stata così semplice',
      downloadBtn: "Scarica l'App",
      demoBtn: 'Prova la Demo',
      features: {
        family: 'Condividi con la famiglia',
        budget: 'Budget intelligenti',
        recurring: 'Spese ricorrenti'
      }
    },
    featuresSection: {
      title: 'Perché scegliere MyCrisisFamily?',
      family: {
        badge: 'Famiglia',
        title: 'Gestione Familiare',
        description: 'Coinvolgi tutti i membri della famiglia. Condividi spese, budget e pianificazioni in tempo reale con ruoli personalizzati.',
        highlights: [
          'Profili multipli per ogni membro',
          'Sincronizzazione istantanea',
          'Sistema ruoli e permessi'
        ],
        stats: {
          members: 'Membri',
          shared: 'Condiviso'
        }
      },
      budget: {
        badge: 'Smart',
        title: 'Budget Intelligenti',
        description: 'Sistema completo di categorizzazione con 15 categorie principali e 93 sottocategorie per una gestione precisa e dettagliata.',
        highlights: [
          '15 categorie + 93 sottocategorie',
          'Monitoraggio automatico progressi',
          'Report e analytics avanzati'
        ],
        stats: {
          categories: 'Categorie',
          subcategories: 'Sottocategorie'
        }
      },
      recurring: {
        badge: 'Auto',
        title: 'Spese Ricorrenti',
        description: 'Automatizza completamente bollette, rate e abbonamenti. Il sistema genera automaticamente le scadenze e ti avvisa in tempo.',
        highlights: [
          'Generazione automatica pianificata',
          'Notifiche e promemoria integrati',
          'Gestione rate multiple e dilazioni'
        ],
        stats: {
          frequencies: 'Frequenze',
          installments: 'Rate'
        }
      },
      mobile: {
        badge: 'Mobile',
        title: 'Mobile First',
        description: 'App nativa Android con scanner ricevute, OCR avanzato e aggiornamenti automatici OTA. Tutto sempre a portata di mano.',
        highlights: [
          'Scanner ricevute con AI integrata',
          'OCR automatico per digitazione',
          'Aggiornamenti OTA automatici'
        ],
        stats: {
          native: 'Nativo',
          updates: 'Updates'
        }
      }
    },
    statsSection: {
      title: 'La famiglia ideale per le tue finanze',
      categories: 'Categorie Predefinite',
      sharing: 'Condivisione Familiare',
      sync: 'Sincronizzazione',
      expenses: 'Spese Tracciabili'
    },
    ctaSection: {
      title: 'Pronto per iniziare?',
      description: 'Unisciti alle famiglie che hanno già scelto MyCrisisFamily per organizzare le loro finanze.',
      downloadBtn: 'Scarica Ora Gratis',
      note: 'Disponibile per Android • Aggiornamenti automatici'
    },
    downloadDialog: {
      title: 'Scarica MyCrisisFamily',
      version: 'Versione corrente',
      downloadBtn: 'Download APK',
      fileInfo: 'File APK per dispositivi Android',
      fileSize: 'Dimensione: ~15MB',
      close: 'Chiudi',
      downloadStarted: 'Download avviato!',
      checkFolder: 'Controlla la cartella Download',
      downloadError: 'Errore nel download',
      retryLater: 'Riprova più tardi'
    }
  }
}
