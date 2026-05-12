const form = document.getElementById('form');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navMobile')

function thankYou() {
    const name = document.getElementById('name').value;
    form.innerHTML += `<p>Thank you, ${name}, for your submission!</p>`;
}

hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

