// UI Variables
const btn = document.querySelector('.submitBtn');
const result = document.querySelector('.output');
const spinner = document.querySelector('#spinner')

// Event Handler
btn.addEventListener('click', fetchQuote);

// Fetch Quote
async function fetchQuote() {

  showSpinner()
  const response = await fetch('https://api.quotable.io/random').catch(err => {
    hideSpinner();
    showAlert('Please check your internet connection');
  })

  if (response.ok) {
    const data = await response.json();
    hideSpinner();
    result.innerHTML = `<h5>${data.content}</h5>`;
    result.innerHTML += `<h2>${data.author}</h2>`;

    result.classList.add('final');
  }
}

// Alert Function
function showAlert(message) {
  const errorDiv = document.createElement("div");

  errorDiv.className = "alert";

  errorDiv.appendChild(document.createTextNode(message));

  document.querySelector('.container').insertAdjacentElement('afterend', errorDiv)

  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 2500);
}

// Show Spinner
function showSpinner() {
  spinner.style.display = 'block';
  result.style.display = 'none';
}

// Hide Spinner
function hideSpinner() {
  spinner.style.display = 'none';
  result.style.display = 'block'
}