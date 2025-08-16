function sendMessage() {
  const input = document.getElementById('user-input');
  const chatBox = document.getElementById('chat-box');
  if (!input.value.trim()) return;

  // сообщение пользователя
  const userMsg = document.createElement('div');
  userMsg.className = 'message user';
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // фейковый ответ бота
  const botMsg = document.createElement('div');
  botMsg.className = 'message bot';
  botMsg.textContent = 'Привет! Я твой виртуальный собеседник 🚀';
  chatBox.appendChild(botMsg);

  input.value = '';
  chatBox.scrollTop = chatBox.scrollHeight;
}
