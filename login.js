// Obtém elementos do DOM
const modal = document.getElementById("loginModal");
const btn = document.getElementById("openModal");
const span = document.getElementById("closeModal");
const loginForm = document.getElementById("loginForm");

// Abre o modal quando o botão é clicado (bubble)
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // Impede a propagação do evento
  modal.style.display = "block";
});

// Fecha o modal quando o usuário clica no "X" (bubble)
span.addEventListener("click", (e) => {
  e.stopPropagation(); // Impede a propagação do evento
  modal.style.display = "none";
});

// Fecha o modal quando o usuário clica fora do modal (capture)
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Gerencia o formulário de login (bubble)
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const usernameOrEmail = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const button = loginForm.querySelector("button[type='submit']");
  button.disabled = true;
  button.innerHTML = '<div class="spinner"></div>'; // Adiciona a spinner

  try {
    let response = await fetch(
      `https://cc-api-nosql-qa.onrender.com/admin/findByUserAdmin/${usernameOrEmail}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    if (!response.ok) {
      response = await fetch(
        `https://cc-api-nosql-qa.onrender.com/admin/findByEmailAdmin/${usernameOrEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    if (response.ok) {
      const adminData = await response.json();
      const admin = adminData[0];

      if (admin && admin.senha === password) {
        alert("Login bem-sucedido!");
        modal.style.display = "none";
        localStorage.setItem("token", admin.id);
        window.location.href = "../restrito/restricted.html";
      } else {
        document.getElementById("error").innerText = "Senha inválida.";
      }
    } else {
      document.getElementById("error").innerText =
        "Usuário ou e-mail não encontrado.";
    }
  } catch (error) {
    document.getElementById("error").innerText =
      "Erro ao conectar com o servidor.";
    console.error("Erro:", error);
  } finally {
    button.disabled = false;
    button.innerHTML = "Entrar";
  }
});
