// Obtém elementos do DOM
const modal = document.getElementById("loginModal");
const btn = document.getElementById("openModal");
const span = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

// Abre o modal quando o botão é clicado
btn.onclick = function() {
    modal.style.display = "block";
}

// Fecha o modal quando o usuário clica no "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora do modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Gerencia o formulário de login
loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Exemplo simples de validação de login
    if (username === 'admin' && password === 'senha') {
        alert("Login bem-sucedido!");
        modal.style.display = "none"; // Fecha o modal
        localStorage.setItem('loggedIn', 'true');
        window.location.href = '../restrito/restricted.html';
    } else {
        document.getElementById('error').innerText = 'Usuário ou senha inválidos.';
    }
});


