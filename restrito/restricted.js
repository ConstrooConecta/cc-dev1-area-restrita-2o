// Verifica se o token de sessão e o timestamp estão presentes no localStorage
const token = localStorage.getItem("token");
const tokenTimestamp = localStorage.getItem("tokenTimestamp");

if (!token || !tokenTimestamp) {
  window.location.href = "../index.html"; // Redireciona para a página de login se não estiver logado
} else {
  const currentTime = new Date().getTime();
  const tokenAge = currentTime - parseInt(tokenTimestamp, 10); // Idade do token em milissegundos
  const expirationTime = 60 * 60 * 1000; // 1 hora em milissegundos

  if (tokenAge > expirationTime) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
    window.location.href = "../index.html"; // Redireciona para a página de login
  }
}

// Evento para logout (bubble)
document.getElementById("logout").addEventListener("click", (e) => {
    e.stopPropagation();
    localStorage.removeItem("token");
    localStorage.removeItem("tokenTimestamp");
    window.location.href = "../index.html";
  });
  

// Variável para armazenar o gráfico ativo
let activeGraph = null;

// Função para mostrar ou ocultar gráficos
function showGraph(graphId) {
  const graphContainers = document.querySelectorAll(".graph-container");
  const btnPerfil = document.getElementById("btnPerfil");
  const btnAvaliacao = document.getElementById("btnAvaliacao");

  // Verifica se o gráfico clicado é o que já está ativo
  if (activeGraph === graphId) {
    // Se o gráfico já está ativo, mostra a introdução e oculta os gráficos
    document.getElementById("introducao").style.display = "block";
    graphContainers.forEach((graph) => (graph.style.display = "none"));
    activeGraph = null; // Reseta o gráfico ativo
    // Remove a classe active dos botões
    btnPerfil.classList.remove("active");
    btnAvaliacao.classList.remove("active");
  } else {
    // Se não é o gráfico ativo, mostra o gráfico selecionado
    graphContainers.forEach((graph) => (graph.style.display = "none"));
    document.getElementById("introducao").style.display = "none"; // Oculta a introdução
    document.getElementById(graphId).style.display = "block"; // Mostra o gráfico selecionado
    activeGraph = graphId; // Atualiza o gráfico ativo

    // Atualiza a aparência dos botões
    btnPerfil.classList.toggle("active", graphId === "perfil");
    btnAvaliacao.classList.toggle("active", graphId === "avaliacao");
  }
}

// Evento para o logo: volta à introdução e oculta os gráficos (bubble)
document.getElementById("logo").addEventListener("click", (e) => {
  e.stopPropagation(); // Impede a propagação do evento
  document.getElementById("introducao").style.display = "block"; // Mostra a introdução
  document
    .querySelectorAll(".graph-container")
    .forEach((graph) => (graph.style.display = "none")); // Oculta os gráficos
  activeGraph = null; // Reseta o gráfico ativo
  document.getElementById("btnPerfil").classList.remove("active"); // Remove classe active
  document.getElementById("btnAvaliacao").classList.remove("active"); // Remove classe active
});

// Carrega o tema salvo no localStorage
const themes = ["light", "dark", "palette"];

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"; // Carrega tema ou usa o padrão 'light'
  document.body.classList.add(savedTheme + "-theme"); // Aplica o tema ao corpo
}

// Função para alternar a visibilidade do dropdown de temas
function toggleDropdown() {
  document.getElementById("themeDropdown").classList.toggle("show"); // Alterna a classe 'show'
}

// Função para mudar o tema
function changeTheme(selectedTheme) {
  const body = document.body;
  themes.forEach((theme) => body.classList.remove(theme + "-theme")); // Remove temas existentes
  body.classList.add(selectedTheme + "-theme"); // Adiciona o novo tema
  localStorage.setItem("theme", selectedTheme); // Salva o tema no localStorage
  toggleDropdown(); // Fecha o dropdown
}

// Carrega o tema quando o documento estiver pronto (DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {
  loadTheme(); // Carrega o tema
});

// Fecha o dropdown se clicar fora dele (capture)
window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    document
      .querySelectorAll(".lista-temas.show")
      .forEach((dropdown) => dropdown.classList.remove("show"));
  }
});

// Função para alternar a visibilidade da sidebar
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("show"); // Alterna a classe 'show' da sidebar
}
