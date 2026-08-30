// ============ i18n: язык всего сайта (RU / EN / TR) ============
let currentLang = 'ru';

const translations = {
  ru: {
    // общие / шапка
    topbarText: 'Личная библиотека Ф. Алиева — читайте книги и статьи онлайн',
    brandTagline: 'книги Фуада Алиева',
    searchTriggerText: 'Книга или автор',
    langSwitchAria: 'Язык сайта',
    navChoose: 'Что выбрать',
    navLibrary: 'Библиотека',
    navAboutLink: 'Об авторе',
    navLogin: 'Войти',
    menuAria: 'Меню',
    navTabBooks: 'Книги',
    navTabAudio: 'Аудиокниги',
    navTabPayment: 'Оплата',
    navTabFree: 'Бесплатные тексты',
    navTabNew: 'Новинки',
    navTabPopular: 'Популярное',
    navTabArticles: 'Статьи',
    mobileFindBook: 'Найти книгу',

    // главная — hero
    heroEyebrow: 'Личная библиотека Ф. Алиева',
    heroTitle: 'Книги о вере, свободе и человеке',
    heroLead: 'Читайте тексты Фуада Алиева в удобном формате. Выберите книгу, познакомьтесь с идеями автора и начните чтение с первой страницы.',

    // главная — книги
    allBooksTitle: 'Все книги',
    comingManuscriptTitle: 'Новая рукопись',
    soonLabel: 'Скоро',

    // главная — об авторе
    aboutLabel: 'Об авторе',
    authorRole: 'Автор и общественный деятель',
    aboutText1: 'Фуад Алиев пишет о сложных вопросах простым и прямым языком: о свободе совести, личной ответственности и поиске смысла за пределами привычных формулировок.',
    aboutText2: 'Эта библиотека объединяет его книги и заметки, чтобы читатель мог возвращаться к текстам в своём темпе — с экрана или с первой страницы.',

    // главная — «скоро»
    audioSoonTitle: 'Аудиоверсия в работе',
    audioSoonText: 'Мы готовим озвучку «Изначального кода Вселенной». Как только аудиокнига будет готова, она появится в этом разделе.',
    freeSoonTitle: 'Скоро будут бесплатные тексты',
    freeSoonText: 'Здесь появятся главы из книги и небольшие авторские тексты в свободном доступе — без регистрации и оплаты.',
    newSoonTitle: 'Скоро здесь появятся новые книги',
    newSoonText: 'Новые издания Фуада Алиева будут опубликованы в этом разделе сразу после выхода.',
    articlesSoonTitle: 'Скоро будут новые статьи',
    articlesSoonText: 'Здесь будут выходить размышления Фуада Алиева на темы науки, философии и религии — в дополнение к книге.',
    soonMsgAudio: 'Аудиокниги — скоро появится озвучка книги.',
    soonMsgFree: 'Бесплатные тексты — скоро будут бесплатные главы и заметки.',
    soonMsgNew: 'Новинки — скоро здесь появятся новые книги.',
    soonMsgArticles: 'Статьи — скоро будут новые статьи.',

    // футер
    footerSub: 'Книги и тексты Фуада Алиева',

    // модалка оплаты
    closePaymentAria: 'Закрыть оплату',
    paymentModalTitle: 'Поддержать автора и открыть книгу',
    fullAccessLabel: 'Доступ к полному тексту',
    choosePaymentMethod: 'Выберите способ оплаты',
    mirLabel: 'МИР',
    secureCardPayment: 'Безопасная оплата картой',
    demoPaymentText: 'Демонстрационное окно: в настоящем продукте здесь откроется защищённая форма',
    payButtonText: 'Оплатить 290 ₽ →',
    cardDataProtected: '🛡 Данные карты защищены',
    paymentSuccessEyebrow: 'Оплата прошла',
    pagesUnlockedTitle: 'Страницы открыты',
    thankYouText: 'Спасибо за поддержку автора. Продолжение книги уже доступно в этом превью.',
    backToReadingBtn: 'Вернуться к чтению',

    // модалка входа автора
    closeAdminAria: 'Закрыть вход автора',
    privateLoginEyebrow: 'Закрытый вход',
    authorSpaceTitle: 'Пространство автора',
    demoLoginText: 'Демонстрационный вход для управления библиотекой Фуада Алиева.',
    authorLoginPlaceholder: 'Логин автора',
    passwordPlaceholder: 'Пароль',
    enterEditorBtn: 'Войти в редактор →',
    authorModeLabel: 'Режим автора',
    libraryEditorTitle: 'Редактор библиотеки',
    editorDescText: 'Здесь можно будет создавать книги, редактировать страницы, вставлять изображения и управлять публикациями.',
    newBookBtn: '✎ Новая книга',
    pagesBtn: '📄 Страницы',
    backToLibraryBtn: 'Вернуться в библиотеку',
    draftReadyText: 'Черновик новой книги готов к созданию.',
    pageEditorComingText: 'Редактор страниц будет доступен после подключения хранилища.',

    // модалка поиска
    searchPlaceholder: 'Найти книгу или текст',
    closeSearchAria: 'Закрыть поиск',
    bookInLibraryStatus: 'Книга в библиотеке',
    oneResultText: '1 результат',
    noResultsText: 'Ничего не найдено',

    // заголовки страниц и мета-описания
    pageTitleIndex: 'Faliyev Prod — книги Фуада Алиева',
    metaDescIndex: 'Личная библиотека Фуада Алиева. Читайте книги и статьи автора онлайн.',
    metaDescBook: 'Читать книгу «Изначальный код Вселенной» Фуада Алиева онлайн.',

    // страница книги
    pageTitleBook: 'Изначальный код Вселенной — читать книгу | Faliyev Prod',
    bookTitle: 'Изначальный код Вселенной',
    authorName: 'Фуад Алиев',
    subtitle: 'Бог, свобода и иллюзия религий',
    categoryLabel: 'философия',
    heroNoteRest: 'первая опубликованная книга библиотеки.',
    openToRead: 'Открыта для чтения',
    shelfCount: '1 книга в библиотеке',
    chapterEyebrow: 'Глава первая · Начало пути',
    authorRoleLabel: 'автор книги',
    progressReadSuffix: 'прочитано',
    lead: 'Что, если веками институты власти и традиционные религии скрывали от нас истинное лицо Создателя, подменяя Его бесконечную любовь парализующим страхом?',
    body1: 'В этой глубокой и откровенной книге-манифесте общественный деятель Фуад Алиев предлагает читателю совершить смелый интеллектуальный прорыв — отделить величие Космического Архитектора от корыстных догм человеческих организаций. Автор шаг за шагом раскрывает, как элиты прошлого «приватизировали» имя Творца для развязывания войн, контроля и обогащения.',
    quote: '«Эта книга — не против веры. Она — за истинные отношения с Творцом».',
    body2: 'Объединяя выводы великих мыслителей от Канта и Гоббса до Эйнштейна и Франкла, автор доказывает, что наука и книги не отдаляют человека от Бога, а приближают к Нему. Вы узнаете, как работает «изначальный код Вселенной», почему глобальные катаклизмы — это божественный сигнал тревоги, и как в детстве зарождается первая невидимая трещина души, мешающая нам радоваться жизни.',
    paywallEyebrow: 'Продолжение чтения',
    paywallTitle: 'Откройте полный текст книги',
    paywallText: 'После первых страниц продолжение доступно после разовой поддержки автора — 290 ₽.',
    paywallBtn: 'Продолжить чтение →',
    tocEyebrowLabel: 'Содержание',
    tocCurrentLabel: '01. Начало пути',
    tocCh1: '01 — Начало пути',
    tocCh2: '02 — Свобода как дар',
    tocCh3: '03 — Космический Архитектор',
    progressLabel: 'Прогресс',
    readingTime: '4 ч 20 мин',
    aboutBookEyebrow: 'О книге',
    aboutBookTitleShort: 'Любовь вместо страха.',
    aboutBookDesc: 'Манифест о вере, свободе и праве начать заново.',
    detailsLink: 'Детали книги →',
    backToLibraryLink: '← Библиотека',
    saveBookAria: 'Сохранить книгу',
    continueBtn: 'Продолжить →',
    readersDialogEyebrow: 'Диалог читателей',
    commentsTitle: 'Комментарии',
    commentPlaceholder: 'Оставьте мысль после прочтения…',
    commentNameVisible: 'Ваше имя будет видно рядом с комментарием',
    publishBtn: 'Опубликовать →',
    commentEmptyText: 'Пока нет комментариев — станьте первым, кто поделится мыслью.',
    openTocAria: 'Открыть содержание',
    progressSavedText: '🛡 Прогресс сохраняется на этом устройстве',

    // динамический JS-контент
    copyTopDefault: '📋 Цитата',
    copyTopCopied: 'Скопировано',
    copyInlineDefault: '📋 Скопировать цитату',
    copyInlineCopied: 'Цитата скопирована',
    copiedQuoteText: 'Наука и книги не отдаляют человека от Бога, а приближают к Нему.',
    youInitials: 'ВЫ',
    yourCommentLabel: 'Ваш комментарий',
    justNowLabel: 'только что',
  },

  en: {
    topbarText: "Fuad Aliyev's personal library — read books and articles online",
    brandTagline: 'books by Fuad Aliyev',
    searchTriggerText: 'Book or author',
    langSwitchAria: 'Site language',
    navChoose: 'What to choose',
    navLibrary: 'Library',
    navAboutLink: 'About the author',
    navLogin: 'Log in',
    menuAria: 'Menu',
    navTabBooks: 'Books',
    navTabAudio: 'Audiobooks',
    navTabPayment: 'Payment',
    navTabFree: 'Free texts',
    navTabNew: 'New releases',
    navTabPopular: 'Popular',
    navTabArticles: 'Articles',
    mobileFindBook: 'Find a book',

    heroEyebrow: "Fuad Aliyev's personal library",
    heroTitle: 'Books about faith, freedom, and humanity',
    heroLead: "Read Fuad Aliyev's texts in a convenient format. Choose a book, get to know the author's ideas, and start reading from the first page.",

    allBooksTitle: 'All books',
    comingManuscriptTitle: 'New manuscript',
    soonLabel: 'Coming soon',

    aboutLabel: 'About the author',
    authorRole: 'Author and public figure',
    aboutText1: 'Fuad Aliyev writes about complex questions in simple, direct language: freedom of conscience, personal responsibility, and the search for meaning beyond familiar formulas.',
    aboutText2: 'This library brings together his books and notes so readers can return to the texts at their own pace — on screen or from the very first page.',

    audioSoonTitle: 'Audio edition in progress',
    audioSoonText: 'We are preparing the narration of "The Original Code of the Universe." As soon as the audiobook is ready, it will appear in this section.',
    freeSoonTitle: 'Free texts coming soon',
    freeSoonText: 'Chapters from the book and short original texts will appear here, freely available — no registration or payment required.',
    newSoonTitle: 'New books will appear here soon',
    newSoonText: "Fuad Aliyev's new editions will be published in this section as soon as they are released.",
    articlesSoonTitle: 'New articles coming soon',
    articlesSoonText: "Fuad Aliyev's reflections on science, philosophy, and religion will be published here, alongside the book.",
    soonMsgAudio: 'Audiobooks — the narration of the book will be available soon.',
    soonMsgFree: 'Free texts — free chapters and notes are coming soon.',
    soonMsgNew: 'New releases — new books will appear here soon.',
    soonMsgArticles: 'Articles — new articles are coming soon.',

    footerSub: 'Books and texts by Fuad Aliyev',

    closePaymentAria: 'Close payment',
    paymentModalTitle: 'Support the author and unlock the book',
    fullAccessLabel: 'Access to the full text',
    choosePaymentMethod: 'Choose a payment method',
    mirLabel: 'Mir',
    secureCardPayment: 'Secure card payment',
    demoPaymentText: 'Demo window: in the real product, a secure form would open here for',
    payButtonText: 'Pay 290 ₽ →',
    cardDataProtected: '🛡 Card data is protected',
    paymentSuccessEyebrow: 'Payment successful',
    pagesUnlockedTitle: 'Pages unlocked',
    thankYouText: "Thank you for supporting the author. The rest of the book is now available in this preview.",
    backToReadingBtn: 'Back to reading',

    closeAdminAria: 'Close author login',
    privateLoginEyebrow: 'Private login',
    authorSpaceTitle: 'Author space',
    demoLoginText: "A demo login for managing Fuad Aliyev's library.",
    authorLoginPlaceholder: 'Author login',
    passwordPlaceholder: 'Password',
    enterEditorBtn: 'Enter the editor →',
    authorModeLabel: 'Author mode',
    libraryEditorTitle: 'Library editor',
    editorDescText: 'Here you will be able to create books, edit pages, insert images, and manage publications.',
    newBookBtn: '✎ New book',
    pagesBtn: '📄 Pages',
    backToLibraryBtn: 'Back to the library',
    draftReadyText: 'A draft of the new book is ready to be created.',
    pageEditorComingText: 'The page editor will be available once storage is connected.',

    searchPlaceholder: 'Find a book or text',
    closeSearchAria: 'Close search',
    bookInLibraryStatus: 'Book in the library',
    oneResultText: '1 result',
    noResultsText: 'Nothing found',

    pageTitleIndex: 'Faliyev Prod — Books by Fuad Aliyev',
    metaDescIndex: "Fuad Aliyev's personal library. Read the author's books and articles online.",
    metaDescBook: 'Read "The Original Code of the Universe" by Fuad Aliyev online.',
    pageTitleBook: 'The Original Code of the Universe — read the book | Faliyev Prod',
    bookTitle: 'The Original Code of the Universe',
    authorName: 'Fuad Aliyev',
    subtitle: 'God, Freedom, and the Illusion of Religions',
    categoryLabel: 'philosophy',
    heroNoteRest: 'the first published book in the library.',
    openToRead: 'Open to read',
    shelfCount: '1 book in the library',
    chapterEyebrow: 'Chapter One · The Beginning',
    authorRoleLabel: 'author of the book',
    progressReadSuffix: 'read',
    lead: 'What if, for centuries, institutions of power and traditional religions have concealed from us the true face of the Creator, replacing His infinite love with paralyzing fear?',
    body1: 'In this profound and candid book-manifesto, public figure Fuad Aliyev invites the reader to make a bold intellectual breakthrough — to separate the greatness of the Cosmic Architect from the self-serving dogmas of human institutions. Step by step, the author reveals how the elites of the past "privatized" the name of the Creator to justify wars, control, and enrichment.',
    quote: '"This book is not against faith. It is for a true relationship with the Creator."',
    body2: 'Drawing on the insights of great thinkers — from Kant and Hobbes to Einstein and Frankl — the author argues that science and books do not distance us from God, but bring us closer to Him. You will discover how the "original code of the Universe" works, why global catastrophes may be a divine warning signal, and how the first invisible crack in the soul takes shape in childhood, preventing us from fully enjoying life.',
    paywallEyebrow: 'Continue reading',
    paywallTitle: 'Unlock the full text of the book',
    paywallText: 'After the first pages, the rest of the book is available after a one-time gift to the author — 290 ₽.',
    paywallBtn: 'Continue reading →',
    tocEyebrowLabel: 'Contents',
    tocCurrentLabel: '01. The Beginning',
    tocCh1: '01 — The Beginning',
    tocCh2: '02 — Freedom as a Gift',
    tocCh3: '03 — The Cosmic Architect',
    progressLabel: 'Progress',
    readingTime: '4h 20m',
    aboutBookEyebrow: 'About the book',
    aboutBookTitleShort: 'Love instead of fear.',
    aboutBookDesc: 'A manifesto about faith, freedom, and the right to start again.',
    detailsLink: 'Book details →',
    backToLibraryLink: '← Library',
    saveBookAria: 'Save the book',
    continueBtn: 'Continue →',
    readersDialogEyebrow: "Readers' dialogue",
    commentsTitle: 'Comments',
    commentPlaceholder: 'Leave a thought after reading…',
    commentNameVisible: 'Your name will be shown next to the comment',
    publishBtn: 'Publish →',
    commentEmptyText: 'No comments yet — be the first to share a thought.',
    openTocAria: 'Open table of contents',
    progressSavedText: '🛡 Progress is saved on this device',

    copyTopDefault: '📋 Quote',
    copyTopCopied: 'Copied',
    copyInlineDefault: '📋 Copy quote',
    copyInlineCopied: 'Quote copied',
    copiedQuoteText: 'Science and books do not distance a person from God — they bring them closer to Him.',
    youInitials: 'YOU',
    yourCommentLabel: 'Your comment',
    justNowLabel: 'just now',
  },

  tr: {
    topbarText: "F. Aliyev'in kişisel kütüphanesi — kitapları ve makaleleri çevrimiçi okuyun",
    brandTagline: "Fuad Aliyev'in kitapları",
    searchTriggerText: 'Kitap veya yazar',
    langSwitchAria: 'Site dili',
    navChoose: 'Ne seçmeli',
    navLibrary: 'Kütüphane',
    navAboutLink: 'Yazar hakkında',
    navLogin: 'Giriş yap',
    menuAria: 'Menü',
    navTabBooks: 'Kitaplar',
    navTabAudio: 'Sesli kitaplar',
    navTabPayment: 'Ödeme',
    navTabFree: 'Ücretsiz metinler',
    navTabNew: 'Yeni çıkanlar',
    navTabPopular: 'Popüler',
    navTabArticles: 'Makaleler',
    mobileFindBook: 'Kitap bul',

    heroEyebrow: "F. Aliyev'in kişisel kütüphanesi",
    heroTitle: 'İnanç, özgürlük ve insan üzerine kitaplar',
    heroLead: "Fuad Aliyev'in metinlerini rahat bir formatta okuyun. Bir kitap seçin, yazarın fikirlerini tanıyın ve okumaya ilk sayfadan başlayın.",

    allBooksTitle: 'Tüm kitaplar',
    comingManuscriptTitle: 'Yeni el yazması',
    soonLabel: 'Yakında',

    aboutLabel: 'Yazar hakkında',
    authorRole: 'Yazar ve kamuoyu figürü',
    aboutText1: 'Fuad Aliyev karmaşık konular hakkında sade ve doğrudan bir dille yazıyor: vicdan özgürlüğü, kişisel sorumluluk ve alışılmış kalıpların ötesinde anlam arayışı.',
    aboutText2: 'Bu kütüphane, okurun metinlere kendi hızında dönebilmesi için yazarın kitaplarını ve notlarını bir araya getiriyor — ekrandan ya da ilk sayfadan.',

    audioSoonTitle: 'Sesli sürüm hazırlanıyor',
    audioSoonText: '"Evrenin Özgün Kodu" için seslendirme hazırlıyoruz. Sesli kitap hazır olduğunda bu bölümde yayınlanacak.',
    freeSoonTitle: 'Yakında ücretsiz metinler',
    freeSoonText: 'Burada kitaptan bölümler ve kısa yazar metinleri, kayıt veya ödeme gerekmeden ücretsiz olarak yer alacak.',
    newSoonTitle: 'Yakında burada yeni kitaplar olacak',
    newSoonText: "Fuad Aliyev'in yeni baskıları yayımlandıktan hemen sonra bu bölümde yer alacak.",
    articlesSoonTitle: 'Yakında yeni makaleler',
    articlesSoonText: "Fuad Aliyev'in bilim, felsefe ve din üzerine düşünceleri, kitaba ek olarak burada yayınlanacak.",
    soonMsgAudio: 'Sesli kitaplar — kitabın seslendirmesi yakında burada.',
    soonMsgFree: 'Ücretsiz metinler — yakında ücretsiz bölümler ve notlar.',
    soonMsgNew: 'Yeni çıkanlar — yakında burada yeni kitaplar olacak.',
    soonMsgArticles: 'Makaleler — yakında yeni makaleler yayınlanacak.',

    footerSub: "Fuad Aliyev'in kitapları ve metinleri",

    closePaymentAria: 'Ödemeyi kapat',
    paymentModalTitle: 'Yazarı destekleyin ve kitabın kilidini açın',
    fullAccessLabel: 'Tam metne erişim',
    choosePaymentMethod: 'Ödeme yöntemini seçin',
    mirLabel: 'Mir',
    secureCardPayment: 'Güvenli kart ödemesi',
    demoPaymentText: 'Demo penceresi: gerçek üründe burada güvenli bir form açılır —',
    payButtonText: '290 ₽ öde →',
    cardDataProtected: '🛡 Kart verileri korunmaktadır',
    paymentSuccessEyebrow: 'Ödeme başarılı',
    pagesUnlockedTitle: 'Sayfaların kilidi açıldı',
    thankYouText: 'Yazarı desteklediğiniz için teşekkürler. Kitabın devamı artık bu önizlemede mevcut.',
    backToReadingBtn: 'Okumaya dön',

    closeAdminAria: 'Yazar girişini kapat',
    privateLoginEyebrow: 'Özel giriş',
    authorSpaceTitle: 'Yazar alanı',
    demoLoginText: "Fuad Aliyev'in kütüphanesini yönetmek için demo giriş.",
    authorLoginPlaceholder: 'Yazar kullanıcı adı',
    passwordPlaceholder: 'Şifre',
    enterEditorBtn: 'Editöre gir →',
    authorModeLabel: 'Yazar modu',
    libraryEditorTitle: 'Kütüphane editörü',
    editorDescText: 'Burada kitap oluşturabilecek, sayfaları düzenleyebilecek, görsel ekleyebilecek ve yayınları yönetebileceksiniz.',
    newBookBtn: '✎ Yeni kitap',
    pagesBtn: '📄 Sayfalar',
    backToLibraryBtn: 'Kütüphaneye dön',
    draftReadyText: 'Yeni kitabın taslağı oluşturulmaya hazır.',
    pageEditorComingText: 'Sayfa editörü, depolama bağlandıktan sonra kullanılabilir olacak.',

    searchPlaceholder: 'Kitap veya metin ara',
    closeSearchAria: 'Aramayı kapat',
    bookInLibraryStatus: 'Kütüphanedeki kitap',
    oneResultText: '1 sonuç',
    noResultsText: 'Sonuç bulunamadı',

    pageTitleIndex: "Faliyev Prod — Fuad Aliyev'in kitapları",
    metaDescIndex: "Fuad Aliyev'in kişisel kütüphanesi. Yazarın kitaplarını ve makalelerini çevrimiçi okuyun.",
    metaDescBook: "\"Evrenin Özgün Kodu\" kitabını Fuad Aliyev'den çevrimiçi okuyun.",
    pageTitleBook: 'Evrenin Özgün Kodu — kitabı oku | Faliyev Prod',
    bookTitle: 'Evrenin Özgün Kodu',
    authorName: 'Fuad Aliyev',
    subtitle: 'Tanrı, Özgürlük ve Dinlerin Yanılsaması',
    categoryLabel: 'felsefe',
    heroNoteRest: 'kütüphanenin yayımlanan ilk kitabı.',
    openToRead: 'Okumaya açık',
    shelfCount: 'Kütüphanede 1 kitap',
    chapterEyebrow: 'Birinci Bölüm · Başlangıç',
    authorRoleLabel: 'kitabın yazarı',
    progressReadSuffix: 'okundu',
    lead: 'Ya güç kurumları ve geleneksel dinler, yüzyıllardır Yaratıcı\'nın gerçek yüzünü bizden gizleyip O\'nun sonsuz sevgisini felç edici bir korkuyla değiştirdiyse?',
    body1: 'Bu derin ve samimi kitap-manifestoda, kamuoyu figürü Fuad Aliyev okuru cesur bir zihinsel atılıma davet ediyor: Kozmik Mimar\'ın büyüklüğünü, insan kurumlarının çıkarcı dogmalarından ayırmaya. Yazar adım adım, geçmişin seçkinlerinin Yaratıcı\'nın adını savaşları, denetimi ve zenginleşmeyi meşrulaştırmak için nasıl "özelleştirdiğini" ortaya koyuyor.',
    quote: '"Bu kitap inanca karşı değildir. Yaratıcı ile gerçek bir ilişki içindir."',
    body2: 'Kant ve Hobbes\'tan Einstein ve Frankl\'a kadar büyük düşünürlerin görüşlerini bir araya getiren yazar, bilim ve kitapların insanı Tanrı\'dan uzaklaştırmadığını, aksine O\'na yaklaştırdığını savunuyor. "Evrenin özgün kodu"nun nasıl işlediğini, küresel felaketlerin neden ilahi bir uyarı sinyali olabileceğini ve çocuklukta ruhtaki ilk görünmez çatlağın nasıl oluşarak hayattan tam anlamıyla keyif almamızı engellediğini keşfedeceksiniz.',
    paywallEyebrow: 'Okumaya devam et',
    paywallTitle: 'Kitabın tamamının kilidini açın',
    paywallText: 'İlk sayfalardan sonra, kitabın devamı yazara yapılacak tek seferlik bir destek sonrasında erişilebilir — 290 ₽.',
    paywallBtn: 'Okumaya devam et →',
    tocEyebrowLabel: 'İçindekiler',
    tocCurrentLabel: '01. Başlangıç',
    tocCh1: '01 — Başlangıç',
    tocCh2: '02 — Bir Armağan Olarak Özgürlük',
    tocCh3: '03 — Kozmik Mimar',
    progressLabel: 'İlerleme',
    readingTime: '4 sa 20 dk',
    aboutBookEyebrow: 'Kitap hakkında',
    aboutBookTitleShort: 'Korku yerine sevgi.',
    aboutBookDesc: 'İnanç, özgürlük ve yeniden başlama hakkı üzerine bir manifesto.',
    detailsLink: 'Kitap detayları →',
    backToLibraryLink: '← Kütüphane',
    saveBookAria: 'Kitabı kaydet',
    continueBtn: 'Devam et →',
    readersDialogEyebrow: 'Okuyucu diyaloğu',
    commentsTitle: 'Yorumlar',
    commentPlaceholder: 'Okuduktan sonra bir düşünce bırakın…',
    commentNameVisible: 'Adınız yorumun yanında görünecek',
    publishBtn: 'Yayınla →',
    commentEmptyText: 'Henüz yorum yok — düşüncesini paylaşan ilk kişi olun.',
    openTocAria: 'İçindekileri aç',
    progressSavedText: '🛡 İlerleme bu cihazda kaydedilir',

    copyTopDefault: '📋 Alıntı',
    copyTopCopied: 'Kopyalandı',
    copyInlineDefault: '📋 Alıntıyı kopyala',
    copyInlineCopied: 'Alıntı kopyalandı',
    copiedQuoteText: "Bilim ve kitaplar insanı Tanrı'dan uzaklaştırmaz, O'na yaklaştırır.",
    youInitials: 'SİZ',
    yourCommentLabel: 'Yorumunuz',
    justNowLabel: 'az önce',
  },
};

const bookCovers = {
  ru: 'assets/cover.jpg',
  en: 'assets/cover-en.jpg',
  tr: 'assets/cover-en.jpg', // турецкой обложки пока нет — используется английская
};

function applyLanguage(lang) {
  const dict = translations[lang] ? lang : 'ru';
  const t = translations[dict];
  currentLang = dict;

  document.documentElement.setAttribute('lang', dict);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((el) => {
    const key = el.dataset.i18nContent;
    if (t[key] !== undefined) el.setAttribute('content', t[key]);
  });

  document.querySelectorAll('.book-cover-img').forEach((img) => {
    img.src = bookCovers[dict] || bookCovers.ru;
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === dict);
  });

  // сброс переходных надписей на кнопках копирования цитаты к переведённым значениям по умолчанию
  const copyTopLabel = document.getElementById('copy-top-label');
  if (copyTopLabel) copyTopLabel.textContent = t.copyTopDefault;
  const copyInlineLabel = document.getElementById('copy-inline-label');
  if (copyInlineLabel) copyInlineLabel.textContent = t.copyInlineDefault;

  // строка статуса поиска (если поле пустое)
  const searchInputEl = document.getElementById('search-input');
  const searchStatusEl = document.getElementById('search-status');
  if (searchStatusEl && (!searchInputEl || !searchInputEl.value.trim())) {
    searchStatusEl.textContent = t.bookInLibraryStatus;
  }

  localStorage.setItem('bookLang', dict);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(localStorage.getItem('bookLang') || 'ru');

// ============ Footer year ============
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ============ Mobile menu ============
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const iconMenu = document.getElementById('icon-menu');
const iconClose = document.getElementById('icon-close');

if (burger) {
  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
    iconMenu.style.display = isOpen ? 'none' : 'block';
    iconClose.style.display = isOpen ? 'block' : 'none';
  });
}

// ============ Modal helpers ============
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = false;
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = true;
}
document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.hidden = true;
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(o => { o.hidden = true; });
  }
});

// ============ Admin modal ============
const adminTrigger = document.getElementById('admin-trigger');
if (adminTrigger) adminTrigger.addEventListener('click', () => openModal('admin-modal'));

const adminLoginBtn = document.getElementById('admin-login-btn');
if (adminLoginBtn) {
  adminLoginBtn.addEventListener('click', () => {
    document.getElementById('admin-login').hidden = true;
    document.getElementById('admin-editor').hidden = false;
  });
}
const editorNotice = document.getElementById('editor-notice');
const adminNewBook = document.getElementById('admin-new-book');
if (adminNewBook) {
  adminNewBook.addEventListener('click', () => {
    editorNotice.hidden = false;
    editorNotice.textContent = translations[currentLang].draftReadyText;
  });
}
const adminPages = document.getElementById('admin-pages');
if (adminPages) {
  adminPages.addEventListener('click', () => {
    editorNotice.hidden = false;
    editorNotice.textContent = translations[currentLang].pageEditorComingText;
  });
}

// ============ Search modal ============
const searchTrigger = document.getElementById('search-trigger');
const searchTriggerMobile = document.getElementById('search-trigger-mobile');
if (searchTrigger) searchTrigger.addEventListener('click', () => openModal('search-modal'));
if (searchTriggerMobile) searchTriggerMobile.addEventListener('click', () => { mobileMenu.classList.remove('open'); openModal('search-modal'); });

const searchInput = document.getElementById('search-input');
const searchStatus = document.getElementById('search-status');
const searchResult = document.querySelector('.search-result');
if (searchInput && searchResult) {
  const searchable = () => (searchResult.textContent || '').toLowerCase();
  searchInput.addEventListener('input', () => {
    const t = translations[currentLang];
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchResult.hidden = false;
      searchStatus.textContent = t.bookInLibraryStatus;
      return;
    }
    const match = searchable().includes(query);
    searchResult.hidden = !match;
    searchStatus.textContent = match ? t.oneResultText : t.noResultsText;
  });
}

// ============ Payment modal ============
document.querySelectorAll('#paywall-continue, #continue-top, #continue-mobile, [data-tab="payment"]').forEach(btn => {
  btn.addEventListener('click', () => openModal('payment-modal'));
});

document.querySelectorAll('.method').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.method').forEach(m => m.classList.remove('active'));
    btn.classList.add('active');
    const t = translations[currentLang];
    const labels = { visa: 'Visa', mastercard: 'Mastercard', mir: t.mirLabel };
    const nameEl = document.getElementById('method-name');
    if (nameEl) nameEl.textContent = labels[btn.dataset.method];
  });
});

const confirmPayment = document.getElementById('confirm-payment');
if (confirmPayment) {
  confirmPayment.addEventListener('click', () => {
    document.getElementById('payment-form').hidden = true;
    document.getElementById('payment-success').hidden = false;
  });
}
const closePaymentSuccess = document.getElementById('close-payment-success');
if (closePaymentSuccess) {
  closePaymentSuccess.addEventListener('click', () => {
    closeModal('payment-modal');
    window.setTimeout(() => {
      document.getElementById('payment-form').hidden = false;
      document.getElementById('payment-success').hidden = true;
    }, 300);
  });
}

// ============ "Об авторе" — плавная подсветка при переходе ============
function highlightAbout() {
  const about = document.querySelector('.about-section');
  if (!about) return;
  about.classList.remove('pulse');
  void about.offsetWidth;
  about.classList.add('pulse');
  window.setTimeout(() => about.classList.remove('pulse'), 2200);
}
document.querySelectorAll('#nav-about, #nav-about-mobile').forEach(link => {
  link.addEventListener('click', () => {
    if (document.querySelector('.about-section')) {
      window.setTimeout(highlightAbout, 420);
    } else {
      // на странице книги — переходим на главную с анимацией после загрузки
      sessionStorage.setItem('highlight-about', '1');
    }
  });
});
if (sessionStorage.getItem('highlight-about') && document.querySelector('.about-section')) {
  sessionStorage.removeItem('highlight-about');
  window.setTimeout(highlightAbout, 500);
}

// ============ Tabs: Книги / Аудиокниги / Оплата / Бесплатные тексты / Новинки / Популярное / Статьи ============
const soonMessageKeys = { audio: 'soonMsgAudio', free: 'soonMsgFree', new: 'soonMsgNew', articles: 'soonMsgArticles' };
const soonSectionIds = { audio: 'audio-soon', free: 'free-soon', new: 'new-soon', articles: 'articles-soon' };

const tabNote = document.getElementById('tab-note');
let tabNoteTimeout;

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const key = tab.dataset.tab;
    const href = tab.dataset.href;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

    if (key === 'payment') {
      openModal('payment-modal');
      return;
    }

    if (href) {
      // "Книги" / "Популярное" на странице книги — уводят на главную к разделу
      window.location.href = href;
      return;
    }

    if (key === 'books') {
      tab.classList.add('active');
      document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (key === 'popular') {
      tab.classList.add('active');
      document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // "скоро" — Аудиокниги, Бесплатные тексты, Новинки, Статьи
    tab.classList.add('active');
    const targetSection = document.getElementById(soonSectionIds[key]);
    if (targetSection) {
      document.querySelectorAll('.soon-section').forEach(s => { s.hidden = true; });
      targetSection.hidden = false;
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (tabNote) {
      clearTimeout(tabNoteTimeout);
      tabNote.hidden = false;
      tabNote.innerHTML = `<b>${translations[currentLang][soonMessageKeys[key]]}</b>`;
      tabNoteTimeout = window.setTimeout(() => { tabNote.hidden = true; }, 4000);
    }
  });
});

// ============ Reader page: save, copy quote, comments, TOC ============
const saveToggle = document.getElementById('save-toggle');
if (saveToggle) {
  saveToggle.addEventListener('click', () => saveToggle.classList.toggle('active'));
}

function copyQuote(labelEl, defaultKey, copiedKey) {
  const t = translations[currentLang];
  const quote = t.copiedQuoteText;
  if (navigator.clipboard) navigator.clipboard.writeText(quote).catch(() => {});
  labelEl.textContent = t[copiedKey];
  window.setTimeout(() => { labelEl.textContent = translations[currentLang][defaultKey]; }, 1800);
}
const copyTopBtn = document.getElementById('copy-quote-top');
if (copyTopBtn) {
  copyTopBtn.addEventListener('click', () => {
    copyQuote(document.getElementById('copy-top-label'), 'copyTopDefault', 'copyTopCopied');
  });
}
const copyInlineBtn = document.getElementById('copy-quote-inline');
if (copyInlineBtn) {
  copyInlineBtn.addEventListener('click', () => {
    copyQuote(document.getElementById('copy-inline-label'), 'copyInlineDefault', 'copyInlineCopied');
  });
}

const tocToggle = document.getElementById('toc-toggle');
const tocSelector = document.getElementById('toc-selector');
const tocList = document.getElementById('toc-list');
function toggleToc() {
  if (!tocList) return;
  tocList.hidden = !tocList.hidden;
}
if (tocToggle) tocToggle.addEventListener('click', toggleToc);
if (tocSelector) tocSelector.addEventListener('click', toggleToc);

document.querySelectorAll('.toc-item').forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('toc-locked')) {
      openModal('payment-modal');
      return;
    }
    tocList.hidden = true;
    document.querySelector('.reader-article')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const commentInput = document.getElementById('comment-input');
const submitComment = document.getElementById('submit-comment');
const commentList = document.getElementById('comment-list');
const commentCount = document.getElementById('comment-count');
const commentEmpty = document.getElementById('comment-empty');
let commentTotal = 0;

if (submitComment) {
  submitComment.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (!text) return;
    const t = translations[currentLang];
    if (commentEmpty) commentEmpty.hidden = true;
    const item = document.createElement('div');
    item.className = 'comment';
    item.innerHTML = `<span class="comment-initials">${t.youInitials}</span><div><div class="comment-meta"><b>${t.yourCommentLabel}</b><span>${t.justNowLabel}</span></div><p></p></div>`;
    item.querySelector('p').textContent = text;
    commentList.prepend(item);
    commentTotal += 1;
    commentCount.textContent = `(${commentTotal})`;
    commentInput.value = '';
  });
}
