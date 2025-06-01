// Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Formulário de Orçamento (validação básica)
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;

    if (name && email && phone) {
        alert('Orçamento solicitado com sucesso! Entraremos em contato em breve.');
        this.reset();
    } else {
        alert('Preencha todos os campos obrigatórios.');
    }
});

// Scroll suave para links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});