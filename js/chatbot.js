// Chatbot configuration
export const CONFIG = {
  BACKEND_URL: '/api/chat',
  ENABLE_BACKEND: false,
};

export async function callBackend(messages) {
  if (CONFIG.ENABLE_BACKEND) {
    try {
      const res = await fetch(CONFIG.BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      });
      if (res.ok) {
        const data = await res.json();
        return data.reply || '';
      }
    } catch (e) {
      console.error(e);
    }
  }
  const last = messages[messages.length - 1];
  return `تلقيت: ${last.text}`;
}

export class ChatBot {
  constructor(root) {
    this.root = root;
    this.messagesEl = root.querySelector('#chat-messages');
    this.form = root.querySelector('#chat-form');
    this.input = root.querySelector('#chat-input');
    this.sendBtn = root.querySelector('#chat-send');
    this.clearBtn = root.querySelector('#chat-clear');
    this.closeBtn = root.querySelector('.chatbot__close');
    this.offlineEl = root.querySelector('#chat-offline');
    this.historyKey = 'chat_history_v1';
    this.nameKey = 'chat_user_name';
    this.history = [];
    this.offlineQueue = [];
    this.rateTimes = [];
    this.userName = localStorage.getItem(this.nameKey) || '';
  }

  init() {
    this.loadHistory();
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = this.input.value.trim();
      if (!text) return;
      this.sendUserMessage(text);
      this.input.value = '';
    });
    this.clearBtn.addEventListener('click', () => this.clear());
    this.closeBtn.addEventListener('click', () => this.close());
    this.root.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
      if (e.key === 'Tab') this.trapFocus(e);
    });
    window.addEventListener('offline', () => this.updateOnline(false));
    window.addEventListener('online', () => this.updateOnline(true));
    this.updateOnline(navigator.onLine);
  }

  open() {
    this.root.hidden = false;
    this.input.focus();
    document.dispatchEvent(new CustomEvent('chat:open'));
  }

  close() {
    this.root.hidden = true;
    document.getElementById('chat-button').focus();
    document.dispatchEvent(new CustomEvent('chat:close'));
  }

  trapFocus(e) {
    const focusables = this.root.querySelectorAll('button,textarea');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  async sendUserMessage(text) {
    const now = Date.now();
    this.rateTimes = this.rateTimes.filter((t) => now - t < 10000);
    if (this.rateTimes.length >= 5) {
      this.renderMessage({ role: 'bot', text: 'يرجى الانتظار قبل إرسال المزيد من الرسائل.', time: new Date() });
      return;
    }
    this.rateTimes.push(now);

    this.renderMessage({ role: 'user', text, time: new Date() });
    document.dispatchEvent(new CustomEvent('chat:message', { detail: { text } }));
    if (!navigator.onLine) {
      this.offlineQueue.push(text);
      this.renderMessage({ role: 'bot', text: 'لا يوجد اتصال بالإنترنت. سيتم إرسال الرسالة لاحقاً.', time: new Date() });
      return;
    }
    await this.respond(text);
  }

  async respond(text) {
    this.showTyping();
    let reply = this.routeFAQ(text);
    if (!reply) {
      reply = await callBackend(this.history);
      if (!reply) {
        reply = 'سأعود لك بإجابة… أرسل لنا على البريد example@example.com';
      }
    }
    this.hideTyping();
    this.renderMessage({ role: 'bot', text: reply, time: new Date() });
  }

  routeFAQ(text) {
    const map = {
      'أوقات العمل': 'أوقات العمل من ٩ صباحاً إلى ٥ مساءً.',
      'الأسعار': 'تختلف الأسعار حسب الخدمة المطلوبة.',
      'باقات العمرة': 'نوفر باقات عمرة متعددة تناسب الجميع.',
      'طرق التواصل': 'تواصل معنا عبر الهاتف أو البريد الإلكتروني.',
      'حالة الطلب': 'لمعرفة حالة الطلب يرجى تزويدنا برقم الطلب.',
    };
    const key = Object.keys(map).find((k) => text.includes(k));
    if (key) return map[key];
    if (!this.userName) {
      const m = text.match(/اسمي\s+(\S+)/);
      if (m) {
        this.userName = m[1];
        localStorage.setItem(this.nameKey, this.userName);
        return `تشرفت بمعرفتك يا ${this.userName}!`;
      }
    }
    return null;
  }

  renderMessage(msg) {
    const el = document.createElement('div');
    el.className = `chatbot__message chatbot__message--${msg.role}`;
    const time = msg.time instanceof Date ? msg.time : new Date(msg.time);
    el.innerHTML = `<span>${msg.text}</span><span class="chatbot__time">${time.toLocaleTimeString('ar-SA',{hour:'2-digit',minute:'2-digit'})}</span>`;
    this.messagesEl.appendChild(el);
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    this.history.push({ role: msg.role, text: msg.text, time: time.toISOString() });
    this.history = this.history.slice(-20);
    localStorage.setItem(this.historyKey, JSON.stringify(this.history));
  }

  showTyping() {
    this.typingEl = document.createElement('div');
    this.typingEl.className = 'chatbot__typing';
    this.typingEl.textContent = '...';
    this.messagesEl.appendChild(this.typingEl);
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  hideTyping() {
    if (this.typingEl) {
      this.typingEl.remove();
      this.typingEl = null;
    }
  }

  loadHistory() {
    try {
      const data = JSON.parse(localStorage.getItem(this.historyKey) || '[]');
      data.forEach((m) => this.renderMessage(m));
    } catch (e) {
      console.error(e);
    }
  }

  clear() {
    this.messagesEl.innerHTML = '';
    this.history = [];
    localStorage.removeItem(this.historyKey);
  }

  updateOnline(online) {
    this.sendBtn.disabled = !online;
    this.offlineEl.hidden = online;
    if (online && this.offlineQueue.length) {
      const q = [...this.offlineQueue];
      this.offlineQueue = [];
      q.forEach((t) => this.sendUserMessage(t));
    }
  }
}
