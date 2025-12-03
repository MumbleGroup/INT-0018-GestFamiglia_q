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
    loginError: 'Errore durante l\'accesso',
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
    pinSetupError: 'Errore durante l\'impostazione del PIN',
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
    emailSendError: 'Errore durante l\'invio. Riprova.',
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
    tokenMissing: 'Token mancante nell\'URL'
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
    errorDeletingBudget: 'Errore nell\'eliminazione del budget',
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
    errorUpdatingPlan: 'Errore nell\'aggiornamento del piano',
    errorDeletingPlan: 'Errore nell\'eliminazione del piano',
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
    thisYear: 'Quest\'Anno',
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
    forceUpdateDescription: 'Cancella cache e ricarica l\'applicazione',
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
    pageDescription: 'Configura l\'app, visualizza informazioni di sistema e gestisci le preferenze.',

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
    displayDescription: 'Personalizza l\'orientamento dello schermo per una migliore esperienza su tablet.',
    landscapeMode: 'Modalità Landscape',
    landscapeModeDesc: 'Blocca l\'orientamento in orizzontale per tablet',

    // Updates
    updates: 'Aggiornamenti',
    updatesDescription: 'Controlla e installa gli aggiornamenti dell\'applicazione per avere sempre le ultime funzionalità.',
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
    fontDescription: 'Personalizza i font dell\'applicazione per migliorare la tua esperienza di lettura.',
    resetFonts: 'Ripristina Font Predefiniti'
  },

  // Help
  help: {
    // Basic labels
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

    // Header
    header: {
      title: 'Aiuto e Documentazione',
      subtitle: 'Tutto quello che devi sapere per utilizzare al meglio l\'app di gestione spese'
    },

    // Sections
    sections: {
      // 1. Primi Passi
      gettingStarted: {
        title: 'Primi Passi',
        caption: 'Come iniziare a usare l\'app',
        q1: {
          question: 'Come registro un nuovo account?',
          answer: 'Per registrarti:',
          steps: [
            'Vai alla pagina di login',
            'Clicca su "Registrati"',
            'Inserisci nome, email e password',
            'Seleziona il tuo ruolo in famiglia (Padre, Madre, Figlio, Altro)',
            'Conferma la registrazione'
          ]
        },
        q2: {
          question: 'Come aggiungo altri membri della famiglia?',
          answer1: 'Ogni membro della famiglia deve registrarsi autonomamente con il proprio account. Non è possibile aggiungere altri utenti dal proprio profilo per motivi di sicurezza.',
          answer2: 'Una volta registrati, potrete condividere le spese tra voi.'
        },
        q3: {
          question: 'Cosa vedo nella dashboard principale?',
          answer: 'La dashboard ti mostra:',
          items: [
            'Riepilogo spese del mese corrente',
            'Ultime spese inserite',
            'Quote in scadenza',
            'Budget mensile e quanto hai speso',
            'Grafici delle categorie più utilizzate'
          ]
        }
      },

      // 2. Gestione Spese
      expenseManagement: {
        title: 'Gestione Spese',
        caption: 'Come inserire e gestire le tue spese',
        q1: {
          question: 'Come inserisco una nuova spesa?',
          answer: 'Per aggiungere una spesa:',
          steps: [
            'Vai alla sezione "Spese"',
            'Clicca sul pulsante "Nuova Spesa"',
            'Inserisci la descrizione (es. "Spesa al supermercato")',
            'Scegli l\'importo',
            'Seleziona la categoria',
            'Scegli la data (di default è oggi)',
            'Se vuoi, aggiungi una nota',
            'Salva la spesa'
          ]
        },
        q2: {
          question: 'Come condivido una spesa con altri?',
          answer: 'Durante la creazione della spesa:',
          steps: [
            'Nella sezione "Condividi con", seleziona i membri della famiglia',
            'L\'importo verrà diviso automaticamente tra tutti i selezionati',
            'Ogni persona vedrà la sua quota nella sezione "Le mie quote"'
          ],
          example: 'Esempio: Spesa di 100€ condivisa tra 4 persone = 25€ a testa'
        },
        q3: {
          question: 'Come funzionano le spese ricorrenti?',
          answer: 'Le spese ricorrenti sono perfette per bollette, affitti, abbonamenti:',
          steps: [
            'Crea una "Spesa Ricorrente"',
            'Imposta la frequenza (settimanale, mensile, annuale)',
            'L\'app creerà automaticamente le spese alle date stabilite',
            'Puoi modificare o interrompere la ricorrenza in qualsiasi momento'
          ]
        },
        q4: {
          question: 'Come funziona il pagamento a rate?',
          answer: 'Per spese grandi che vuoi pagare a rate:',
          steps: [
            'Inserisci la spesa normalmente',
            'Clicca su "Crea Quote" nella spesa',
            'Scegli numero di rate e date di scadenza',
            'Segna come pagate man mano che paghi'
          ],
          note: 'L\'app ti ricorderà le rate in scadenza nella dashboard.'
        }
      },

      // 3. Categorie e Budget
      categoriesBudget: {
        title: 'Categorie e Budget',
        caption: 'Come organizzare le spese per tipologia',
        q1: {
          question: 'Che categorie ci sono disponibili?',
          answer: 'L\'app include categorie predefinite per famiglie italiane:',
          necessary: {
            title: 'Categorie Necessarie:',
            items: [
              'Casa e Abitazione',
              'Alimentari e Bevande',
              'Trasporti',
              'Salute e Benessere',
              'Assicurazioni',
              'Tasse e Imposte',
              'Educazione e Formazione'
            ]
          },
          extra: {
            title: 'Categorie Extra:',
            items: [
              'Tempo Libero',
              'Viaggi e Vacanze',
              'Abbigliamento',
              'Elettronica e Tecnologia',
              'Casa Extra',
              'Sport e Fitness',
              'Regali e Eventi',
              'Animali Domestici'
            ]
          }
        },
        q2: {
          question: 'Come imposto un budget mensile?',
          answer: 'Per gestire il budget:',
          steps: [
            'Vai alla sezione "Budget"',
            'Clicca "Nuovo Budget"',
            'Imposta l\'importo totale mensile',
            'Distribuisci l\'importo tra le varie categorie',
            'L\'app ti mostrerà quanto hai speso vs budget'
          ],
          note: 'Il budget viene rinnovato automaticamente ogni mese.'
        },
        q3: {
          question: 'Come vedo se sto sforando il budget?',
          answer: 'L\'app ti avvisa in diversi modi:',
          items: [
            'Barre di progresso colorate nella dashboard',
            'Notifiche quando superi il 80% del budget',
            'Colori rossi per categorie in sovrabudget',
            'Report mensili dettagliati'
          ]
        }
      },

      // 4. Piani di Spesa
      spendingPlans: {
        title: 'Piani di Spesa',
        caption: 'Pianifica spese future per eventi o progetti',
        q1: {
          question: 'Cosa sono i piani di spesa?',
          answer: 'I piani di spesa ti aiutano a organizzare spese future per:',
          items: [
            'Vacanze (hotel, voli, ristoranti)',
            'Eventi (matrimoni, feste, compleanni)',
            'Progetti casa (ristrutturazioni, arredamento)',
            'Spese stagionali (back to school, Natale)'
          ],
          note: 'Puoi vedere il progresso e tenere tutto sotto controllo.'
        },
        q2: {
          question: 'Come creo un piano di spesa?',
          steps: [
            'Vai alla sezione "Piani di Spesa"',
            'Clicca "Nuovo Piano di Spesa"',
            'Dai un nome al piano (es. "Vacanze Estate 2025")',
            'Scegli il tipo (Mensile, Stagionale, Evento, etc.)',
            'Imposta le date di inizio e fine',
            'Aggiungi una descrizione opzionale'
          ]
        },
        q3: {
          question: 'Come aggiungo spese a un piano?',
          answer: 'Ci sono due modi:',
          method1: 'Dalla lista piani: Clicca sul piano e aggiungi spese pianificate',
          method2: 'Durante l\'inserimento spesa: Seleziona il piano nel campo apposito',
          note: 'Le spese pianificate sono stime - quando le spendi realmente, verranno marcate come completate.'
        }
      },

      // 5. Spese Ricorrenti (nei piani)
      recurringExpenses: {
        title: 'Spese Ricorrenti',
        caption: 'Gestisci spese a rate con controllo visivo dello stato',
        q1: {
          question: 'Cosa sono le spese ricorrenti nei piani?',
          answer: 'Le spese ricorrenti nei piani di spesa ti permettono di pianificare spese da pagare a rate:',
          items: [
            'Acquisti a rate: Elettrodomestici, mobili, tecnologia',
            'Pagamenti dilazionati: Corsi, iscrizioni, abbonamenti',
            'Progetti a fasi: Ristrutturazione, matrimonio, vacanze',
            'Spese stagionali: Tasse, assicurazioni, rate annuali'
          ],
          note: 'Ogni rata ha una data di scadenza e puoi monitorare il progresso dei pagamenti.'
        },
        q2: {
          question: 'Come creo una spesa ricorrente?',
          steps: [
            'Vai al piano di spesa desiderato',
            'Clicca "Nuova Spesa Pianificata"',
            'Compila descrizione, importo, categoria e data scadenza',
            'Attiva l\'opzione "Spesa ricorrente"',
            'Scegli il numero totale di rate (da 2 a 120)',
            'Seleziona la frequenza (mensile, bimestrale, trimestrale)',
            'Salva la spesa - sarà creata solo la prima rata'
          ],
          note: 'Nota: Inizialmente viene creata solo la prima rata, poi generi le altre quando necessario.'
        },
        q3: {
          question: 'Come genero le rate successive?',
          answer: 'Dopo aver creato la prima rata, puoi generare tutte le altre:',
          steps: [
            'Trova la spesa ricorrente nella lista (ha il badge "RICORRENTE 1/X")',
            'Clicca sull\'icona arancione "🔄" per generare le rate',
            'L\'app creerà automaticamente tutte le rate rimanenti',
            'Ogni rata avrà la data corretta basata sulla frequenza scelta'
          ],
          desktop: 'Desktop: L\'icona 🔄 appare dopo i pulsanti principali',
          mobile: 'Mobile: L\'icona 🔄 appare tra i pulsanti delle azioni'
        },
        q4: {
          question: 'Come funzionano gli indicatori visivi?',
          answer: 'Le spese ricorrenti hanno indicatori visivi per controllare lo stato a colpo d\'occhio:',
          indicators: {
            paid: 'Checkbox Verde: Rate già pagate/completate',
            current: 'Checkbox Blu: Rata corrente (in scadenza ora)',
            future: 'Checkbox Grigia: Rate future ancora da pagare'
          },
          desktop: 'Desktop: Le checkbox appaiono in linea dopo il pulsante chevron',
          mobile: 'Mobile: Tocca l\'icona chevron per espandere e vedere i dettagli'
        },
        q5: {
          question: 'Come vedo i dettagli delle rate?',
          answer: 'Puoi vedere tutti i dettagli delle rate in una vista espandibile:',
          steps: [
            'Clicca sul pulsante chevron (▽) accanto alle checkbox',
            'Si aprirà una sezione con tutti i dettagli:'
          ],
          details: [
            'Numero rata (1, 2, 3...)',
            'Stato (Pagata, Da pagare, Parziale)',
            'Importo di ogni rata',
            'Checkbox colorate per stato visivo'
          ],
          step3: 'Clicca di nuovo il chevron per nascondere i dettagli',
          note: 'Questa vista è disponibile sia su desktop che mobile con lo stesso layout.'
        },
        q6: {
          question: 'Posso modificare una spesa ricorrente?',
          answer: 'Sì! Nella modale di modifica puoi:',
          options: [
            'Attivare la ricorrenza: Su spese normali già create',
            'Cambiare numero rate: Aumentare o diminuire le rate totali',
            'Modificare frequenza: Da mensile a trimestrale, etc.',
            'Disattivare ricorrenza: Tornare a spesa singola'
          ],
          warning: 'Attenzione: Se hai già generato le rate, le modifiche influenzeranno solo la rata corrente. Per cambi importanti, considera di creare una nuova spesa ricorrente.'
        },
        q7: {
          question: 'Come marco una rata come pagata?',
          answer: 'Per segnare il pagamento di una rata:',
          steps: [
            'Clicca su "Aggiungi Pagamento" sulla rata corrente',
            'Inserisci l\'importo pagato e la data',
            'Conferma il pagamento',
            'La checkbox diventerà verde automaticamente',
            'La prossima rata diventerà blu (corrente)'
          ],
          note: 'Il sistema aggiorna automaticamente gli indicatori visivi e il progresso complessivo del piano.'
        }
      },

      // 6. Report e Analisi
      reportsAnalysis: {
        title: 'Report e Analisi',
        caption: 'Monitora le tue finanze con grafici e statistiche',
        q1: {
          question: 'Che tipo di report posso vedere?',
          answer: 'L\'app offre diversi tipi di report:',
          types: [
            'Report Mensile: Spese totali del mese per categoria',
            'Report Annuale: Andamento delle spese durante l\'anno',
            'Confronto Budget: Quanto hai speso vs quanto avevi pianificato',
            'Analisi per Utente: Chi spende di più in famiglia',
            'Trend Categoria: Quali categorie costano di più'
          ]
        },
        q2: {
          question: 'Come cambio il periodo di analisi?',
          answer: 'Nella sezione Report puoi:',
          options: [
            'Selezionare mese e anno specifici',
            'Confrontare più mesi',
            'Vedere l\'andamento annuale',
            'Filtrare per categorie specifiche',
            'Filtrare per membri della famiglia'
          ]
        },
        q3: {
          question: 'Posso esportare i dati?',
          answer: 'Sì! Puoi esportare:',
          formats: [
            'Lista spese in formato CSV',
            'Report mensili in PDF',
            'Grafici e statistiche come immagini'
          ],
          note: 'Utile per condividere con commercialista o per backup personali.'
        }
      },

      // 7. Impostazioni e Sicurezza
      settingsSecurity: {
        title: 'Impostazioni e Sicurezza',
        caption: 'Personalizza l\'app e proteggi i tuoi dati',
        q1: {
          question: 'I miei dati sono sicuri?',
          answer: 'La sicurezza è una priorità:',
          features: [
            'Tutti i dati sono criptati',
            'Password protette con hash sicuri',
            'Sessioni con timeout automatico',
            'Backup automatici del database',
            'Accesso protetto tramite autenticazione'
          ]
        },
        q2: {
          question: 'Come cambio la password?',
          steps: [
            'Vai al tuo profilo utente',
            'Clicca "Cambia Password"',
            'Inserisci la password attuale',
            'Inserisci la nuova password (min 8 caratteri)',
            'Conferma la modifica'
          ]
        },
        q3: {
          question: 'Come gestisco le notifiche?',
          answer: 'Nelle impostazioni puoi configurare:',
          types: [
            'Notifiche per quote in scadenza',
            'Avvisi di sforamento budget',
            'Reminder per spese ricorrenti',
            'Riepiloghi mensili automatici'
          ],
          note: 'Puoi attivare/disattivare ogni tipo di notifica.'
        },
        q4: {
          question: 'Come installo l\'app sul telefono?',
          iphone: {
            title: 'Su iPhone:',
            steps: [
              'Apri l\'app con Safari',
              'Tocca il pulsante di condivisione',
              'Seleziona "Aggiungi alla schermata Home"',
              'Conferma l\'installazione'
            ]
          },
          android: {
            title: 'Su Android:',
            steps: [
              'Apri l\'app con Chrome',
              'Tocca il menu (3 puntini)',
              'Seleziona "Installa app"',
              'Conferma l\'installazione'
            ]
          }
        }
      },

      // 8. Risoluzione Problemi
      troubleshooting: {
        title: 'Risoluzione Problemi',
        caption: 'Soluzioni ai problemi più comuni',
        q1: {
          question: 'L\'app non si sincronizza',
          answer: 'Prova questi passaggi:',
          steps: [
            'Controlla la connessione internet',
            'Chiudi e riapri l\'app',
            'Fai logout e login nuovamente',
            'Aggiorna il browser/app'
          ],
          note: 'Se il problema persiste, contatta il supporto.'
        },
        q2: {
          question: 'Vedo un errore durante il salvataggio',
          answer: 'Gli errori più comuni:',
          errors: [
            'Campi obbligatori: Controlla di aver compilato tutti i campi richiesti',
            'Importo non valido: Usa il punto per i decimali (es. 10.50)',
            'Data non valida: Controlla che la data sia nel formato corretto',
            'Sessione scaduta: Fai login nuovamente'
          ]
        },
        q3: {
          question: 'Come aggiorno l\'app?',
          answer: 'L\'app si aggiorna automaticamente! Quando disponibili:',
          steps: [
            'Ricarica la pagina nel browser',
            'O chiudi e riapri l\'app installata',
            'Vedrai una notifica per le nuove funzionalità'
          ]
        },
        q4: {
          question: 'Ho cancellato una spesa per sbaglio',
          answer: 'Se hai appena cancellato la spesa:',
          steps: [
            'Controlla se c\'è un pulsante "Annulla" nella notifica',
            'Altrimenti, dovrai ricreare la spesa manualmente',
            'Per il futuro, l\'app chiede sempre conferma prima di cancellare'
          ],
          tip: 'Consiglio: Invece di cancellare, puoi modificare una spesa esistente.'
        }
      }
    },

    // Footer
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
    errorRefreshingInfo: 'Errore durante l\'aggiornamento',
    errorOrientationUpdate: 'Errore durante l\'aggiornamento dell\'orientamento',

    // Family Messages
    familyCreated: 'Famiglia creata con successo!',
    familyUpdated: 'Famiglia aggiornata con successo',
    familyDeleted: 'Famiglia eliminata con successo',
    familyJoined: 'Ti sei unito alla famiglia con successo!',
    inviteCodeGenerated: 'Codice invito generato!',
    inviteCodeCopied: 'Codice invito copiato negli appunti',
    invitationAccepted: 'Invito accettato con successo!',
    errorCreatingFamily: 'Errore nella creazione della famiglia',
    errorUpdatingFamily: 'Errore nell\'aggiornamento della famiglia',
    errorDeletingFamily: 'Errore nell\'eliminazione della famiglia',
    errorJoiningFamily: 'Codice invito non valido o scaduto',
    errorGeneratingInvite: 'Errore nella generazione del codice invito',
    errorLoadingInvitations: 'Errore nel caricamento degli inviti',
    errorLoadingReceivedInvitations: 'Errore nel caricamento degli inviti ricevuti',
    errorAcceptingInvitation: 'Errore nell\'accettare l\'invito',

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
    thisYear: 'Quest\'Anno',
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
    // Days of the week
    weekdays: {
      sunday: 'Domenica',
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì',
      saturday: 'Sabato'
    },
    // Months
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
        caption: 'Configura l\'app'
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
      downloadBtn: 'Scarica l\'App',
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
