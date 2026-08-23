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
    editorNotice.textContent = 'Черновик новой книги готов к созданию.';
  });
}
const adminPages = document.getElementById('admin-pages');
if (adminPages) {
  adminPages.addEventListener('click', () => {
    editorNotice.hidden = false;
    editorNotice.textContent = 'Редактор страниц будет доступен после подключения хранилища.';
  });
}

// ============ Search modal ============
const searchTrigger = document.getElementById('search-trigger');
const searchTriggerMobile = document.getElementById('search-trigger-mobile');
if (searchTrigger) searchTrigger.addEventListener('click', () => openModal('search-modal'));
if (searchTriggerMobile) searchTriggerMobile.addEventListener('click', () => { mobileMenu.classList.remove('open'); openModal('search-modal'); });

const searchInput = document.getElementById('search-input');
const searchStatus = document.getElementById('search-status');
if (searchInput) {
  searchInput.addEventListener('input', () => {
    searchStatus.textContent = searchInput.value.trim().length > 0 ? '1 результат' : 'Книга в библиотеке';
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
    const labels = { visa: 'Visa', mastercard: 'Mastercard', mir: 'МИР' };
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
const soonMessages = {
  audio: 'Аудиокниги — скоро появится озвучка книги.',
  free: 'Бесплатные тексты — скоро будут бесплатные главы и заметки.',
  new: 'Новинки — скоро здесь появятся новые книги.',
  articles: 'Статьи — скоро будут новые статьи.',
};
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
      tabNote.innerHTML = `<b>${soonMessages[key]}</b>`;
      tabNoteTimeout = window.setTimeout(() => { tabNote.hidden = true; }, 4000);
    }
  });
});

// ============ Reader page: save, copy quote, comments, TOC ============
const saveToggle = document.getElementById('save-toggle');
if (saveToggle) {
  saveToggle.addEventListener('click', () => saveToggle.classList.toggle('active'));
}

function copyQuote(labelEl, defaultText, copiedText) {
  const quote = 'Наука и книги не отдаляют человека от Бога, а приближают к Нему.';
  if (navigator.clipboard) navigator.clipboard.writeText(quote).catch(() => {});
  labelEl.textContent = copiedText;
  window.setTimeout(() => { labelEl.textContent = defaultText; }, 1800);
}
const copyTopBtn = document.getElementById('copy-quote-top');
if (copyTopBtn) {
  copyTopBtn.addEventListener('click', () => {
    copyQuote(document.getElementById('copy-top-label'), '📋 Цитата', 'Скопировано');
  });
}
const copyInlineBtn = document.getElementById('copy-quote-inline');
if (copyInlineBtn) {
  copyInlineBtn.addEventListener('click', () => {
    copyQuote(document.getElementById('copy-inline-label'), '📋 Скопировать цитату', 'Цитата скопирована');
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

const commentInput = document.getElementById('comment-input');
const submitComment = document.getElementById('submit-comment');
const commentList = document.getElementById('comment-list');
const commentCount = document.getElementById('comment-count');
let commentTotal = 2;

if (submitComment) {
  submitComment.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (!text) return;
    const item = document.createElement('div');
    item.className = 'comment';
    item.innerHTML = `<span class="comment-initials">ВЫ</span><div><div class="comment-meta"><b>Ваш комментарий</b><span>только что</span></div><p></p></div>`;
    item.querySelector('p').textContent = text;
    commentList.prepend(item);
    commentTotal += 1;
    commentCount.textContent = `(${commentTotal})`;
    commentInput.value = '';
  });
}
