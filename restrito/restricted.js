const titulo_esquerda = document.getElementById("titulo_esquerda")

if (!localStorage.getItem('loggedIn')) {
    window.location.href = '../Login/Login.html'; 
}
//basicamente, ele pega o elemento que foi clicado e mostra no log
document.querySelector('.sidebar').addEventListener('click', function(e) {
    console.log('Captura - Clique na barra lateral:', e.target);
    if (e.target.tagName === 'A') {
        //ele passa o conteudo do "link" clicado, pq é isso que a função pede
        showGraph(e.target.textContent);  
    }
}, true);  

//no conteúdo, na introdução, o que eu clicar, ele avisa que eu cliquei no console
document.querySelector('.content').addEventListener('click', function(e) {
    console.log('Bubbling - Clique no conteúdo:', e.target);
});

// Manipulador para o botão de logout
document.getElementById('logout').addEventListener('click', function(e) {
    console.log('Botão de logout clicado:', e.target);
    localStorage.removeItem('loggedIn');
    window.location.href = '../Login/Login.html'; 
});



function showGraph(graphId) {
    document.querySelectorAll('.graph-container').forEach(function(graph) {
        graph.style.display = 'none';
    });
    document.getElementById("introducao").style.display="none"
    document.getElementById(graphId).style.display = 'block';
}




titulo_esquerda.addEventListener('click', () => {
    if (document.getElementById('introducao').style.display == 'none' &&  document.getElementById('powerbi').style.display == 'block') {
        document.getElementById('introducao').style.display = 'block';
        document.getElementById('powerbi').style.display = 'none';
       
    }else if(document.getElementById('introducao').style.display == 'none' &&  document.getElementById('chart1').style.display == 'block'){
        document.getElementById('chart1').style.display = 'none';
        document.getElementById('introducao').style.display = 'block';
    }
    else if(document.getElementById('introducao').style.display == 'none' &&  document.getElementById('chart2').style.display == 'block'){
        document.getElementById('chart2').style.display = 'none';
        document.getElementById('introducao').style.display = 'block';
    }
    else if(document.getElementById('introducao').style.display == 'none' &&  document.getElementById('chart3').style.display == 'block'){
        document.getElementById('chart3').style.display = 'none';
        document.getElementById('introducao').style.display = 'block';
    }
});

const themes = ['light', 'dark', 'palette'];

function toggleDropdown() {
    const dropdown = document.getElementById("themeDropdown");
    dropdown.classList.toggle("show");
}

function changeTheme(selectedTheme) {
    const body = document.body;

    themes.forEach(theme => {
        body.classList.remove(theme + '-theme');
    });

    body.classList.add(selectedTheme + '-theme');

    localStorage.setItem('theme', selectedTheme);

    toggleDropdown(); 
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        document.body.classList.add(savedTheme + '-theme');
    } else {
        document.body.classList.add('light-theme');
    }
}

document.addEventListener('DOMContentLoaded', loadTheme);

 
//mostrar os bloquinhos dos temas
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const lista_tema = document.getElementsByClassName("lista-temas");
        //ele ve todos os temas/"itens" da lista de temas e mostra eles ou remove se ja estiverem na tela
        for (let i = 0; i < lista_tema.length; i++) {
            const openDropdown = lista_tema[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
 

