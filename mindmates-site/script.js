async function loadCharacters() {
  const res = await fetch('characters.json');
  const characters = await res.json();
  const container = document.getElementById('characters-container');

  characters.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = 
      <img src="\" alt="\">
      <h2>\</h2>
      <p>\</p>
      <a href="chat.html" class="chat-btn">Чат</a>
    ;
    container.appendChild(card);
  });
}

loadCharacters();
