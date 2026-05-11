const form = document.getElementById('form');

function thankYou() {
    const name = document.getElementById('name').value;
    form.innerHTML += `<p>Thank you, ${name}, for your submission!</p>`;
}

//I mean...It's technically a Javascript file, right?