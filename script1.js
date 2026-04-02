const projetos = [
    { img: 'https://storage.googleapis.com/operfluxo/projetos_gerais/projetoPortfolio.png', titulo: 'Meu Portfólio', link: 'https://github.com' }
];

document.getElementById('projetos-container').innerHTML = projetos.map(p => `
      <div class="card">
        <img src="${p.img}" alt="${p.titulo}">
        <h3>${p.titulo}</h3>
        <a href="${p.link}" target="_blank">Ver no GitHub</a>
      </div>
    `).join('');

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.innerHTML = document.body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});