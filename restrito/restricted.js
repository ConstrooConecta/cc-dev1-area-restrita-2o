const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "../Login/Login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "../Login/Login.html";
});

// Variável para armazenar o gráfico ativo
let activeGraph = null;

function showGraph(graphId) {
  const graphContainers = document.querySelectorAll(".graph-container");
  const btnPerfil = document.getElementById("btnPerfil");
  const btnAvaliacao = document.getElementById("btnAvaliacao");

  // Verifica se o gráfico clicado é o que já está ativo
  if (activeGraph === graphId) {
    // Se o gráfico já está ativo, volta para a introdução
    document.getElementById("introducao").style.display = "block";
    graphContainers.forEach(graph => graph.style.display = "none");
    activeGraph = null; // Reseta o gráfico ativo
    // Remove a classe active dos botões
    btnPerfil.classList.remove("active");
    btnAvaliacao.classList.remove("active");
  } else {
    // Se não é o gráfico ativo, mostra o gráfico selecionado
    graphContainers.forEach(graph => graph.style.display = "none");
    document.getElementById("introducao").style.display = "none";
    document.getElementById(graphId).style.display = "block";
    activeGraph = graphId; // Atualiza o gráfico ativo

    // Atualiza a aparência dos botões
    if (graphId === "perfil") {
      btnPerfil.classList.add("active");
      btnAvaliacao.classList.remove("active");
    } else {
      btnAvaliacao.classList.add("active");
      btnPerfil.classList.remove("active");
    }
  }
}

// Evento para o logo
document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("introducao").style.display = "block";
  document.querySelectorAll(".graph-container").forEach(graph => graph.style.display = "none");
  activeGraph = null; // Reseta o gráfico ativo
  // Remove a classe active dos botões
  btnPerfil.classList.remove("active");
  btnAvaliacao.classList.remove("active");
});


document.getElementById("logo").addEventListener("click", () => {
  document.getElementById("introducao").style.display = "block";
  document.querySelectorAll(".graph-container").forEach(graph => graph.style.display = "none");
});

const themes = ["light", "dark", "palette"];

function toggleDropdown() {
  document.getElementById("themeDropdown").classList.toggle("show");
}

function changeTheme(selectedTheme) {
  const body = document.body;
  themes.forEach(theme => body.classList.remove(theme + "-theme"));
  body.classList.add(selectedTheme + "-theme");
  localStorage.setItem("theme", selectedTheme);
  toggleDropdown();
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-theme");
}

document.addEventListener("DOMContentLoaded", loadTheme);

window.addEventListener("click", event => {
  if (!event.target.matches(".dropbtn")) {
    document.querySelectorAll(".lista-temas.show").forEach(dropdown => dropdown.classList.remove("show"));
  }
});

function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("show");
}

function toggleDropdown() {
  document.getElementById("themeDropdown").classList.toggle("show");
}

function changeTheme(selectedTheme) {
  const body = document.body;
  themes.forEach(theme => body.classList.remove(theme + "-theme"));
  body.classList.add(selectedTheme + "-theme");
  localStorage.setItem("theme", selectedTheme);
  toggleDropdown();
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.add(savedTheme + "-theme");
}

document.addEventListener("DOMContentLoaded", loadTheme);

window.addEventListener("click", event => {
  if (!event.target.matches(".dropbtn")) {
    document.querySelectorAll(".lista-temas.show").forEach(dropdown => dropdown.classList.remove("show"));
  }
});
