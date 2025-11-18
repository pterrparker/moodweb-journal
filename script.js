const moodButtons = document.querySelectorAll('.mood-buttons button');
const journalInput = document.getElementById('journal');
const saveButton = document.getElementById('save');
const historyList = document.getElementById('historyList');

let history = JSON.parse(localStorage.getItem('moodHistory') || "[]");

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(entry => {
    const li = document.createElement('li');
    li.textContent = `${entry.date} — ${entry.mood} — ${entry.journal}`;
    historyList.appendChild(li);
  });
}

moodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const mood = btn.getAttribute('data-mood');
    const journal = journalInput.value;
    const date = new Date().toLocaleDateString();
    history.push({ date, mood, journal });
    localStorage.setItem('moodHistory', JSON.stringify(history));
    renderHistory();
    journalInput.value = "";
  });
});

saveButton.addEventListener('click', () => {
  const mood = "none";
  const journal = journalInput.value;
  const date = new Date().toLocaleDateString();
  history.push({ date, mood, journal });
  localStorage.setItem('moodHistory', JSON.stringify(history));
  renderHistory();
  journalInput.value = "";
});

renderHistory();
