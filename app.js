// UI Variables
const btn = document.querySelector('.btn');
const result = document.querySelector('.output');

// Event Handler
btn.addEventListener('click', fetchQuote);

// Fetch Quote
async function fetchQuote() {

  const response = await fetch('https://api.quotable.io/random');

  const data = await response.json();

  result.innerHTML = `<h5>${data.content}</h5>`;
  result.innerHTML += `<h2>${data.author}</h2>`;

  result.classList.add('final');
}