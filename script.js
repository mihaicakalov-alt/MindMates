// --- утилиты ---
const qs = (s)=>document.querySelector(s);
const el = (tag, cls)=>{ const n=document.createElement(tag); if(cls) n.className=cls; return n; };
const params = new URLSearchParams(location.search);
const botName = params.get('bot') || 'MindMate';

// заголовок
const titleEl = qs('#chatTitle');
if (titleEl) titleEl.textContent = botName;

// элементы
const history = qs('#history');
const promptInput = qs('#prompt');
const sendBtn = qs('#sendBtn');
const imgInput = qs('#imgPrompt');
const genBtn = qs('#genBtn');

// автофокус, если пришли в режиме генерации
if (params.get('mode') === 'image') {
  setTimeout(()=> imgInput?.focus(), 50);
} else {
  setTimeout(()=> promptInput?.focus(), 50);
}

// простая имитация ответа бота (можно заменить на API позже)
function botReply(text){
  const m = el('div', 'msg bot');
  m.textContent = text;
  history.appendChild(m);
  history.scrollTop = history.scrollHeight;
}

// отправка сообщения
function sendMessage(){
  const val = (promptInput.value || '').trim();
  if(!val) return;
  const m = el('div', 'msg user');
  m.textContent = val;
  history.appendChild(m);
  promptInput.value = '';
  history.scrollTop = history.scrollHeight;

  // фейковая задержка ответа
  setTimeout(()=> botReply(() слышу тебя: "" 👌), 400);
}
sendBtn?.addEventListener('click', sendMessage);
promptInput?.addEventListener('keydown', e=>{ if(e.key==='Enter') sendMessage(); });

// бесплатная генерация изображений (Pollinations, без токенов)
async function generateImage(prompt){
  // можно добавить параметры стиля через :: {enhance} и т.п.
  return https://image.pollinations.ai/prompt/;
}

async function handleImageGen(){
  const p = (imgInput.value || '').trim();
  if(!p) return;

  // сообщение-заглушка
  const thinking = el('div', 'msg bot');
  thinking.textContent = 🖼 Генерирую: ;
  history.appendChild(thinking);
  history.scrollTop = history.scrollHeight;

  try{
    const url = await generateImage(p);
    // заменяем заглушку на изображение
    const wrap = el('div', 'msg bot');
    const img = new Image();
    img.src = url;
    img.alt = p;
    wrap.appendChild(img);
    history.replaceChild(wrap, thinking);
  }catch(e){
    thinking.textContent = 'Ошибка генерации 🥲 Попробуй другой запрос.';
  }
}
genBtn?.addEventListener('click', handleImageGen);
imgInput?.addEventListener('keydown', e=>{ if(e.key==='Enter') handleImageGen(); });
