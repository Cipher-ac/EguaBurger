// Zoom da Imagem
document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        
        const modalImg = document.createElement('img');
        modalImg.className = 'modal-image';
        modalImg.src = img.src;
        modalImg.alt = img.alt;

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.remove();
            }
        });

        // Fechar com ESC
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                modal.remove();
            }
        });
    });
});

// Menu Responsivo
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
  
menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Transição entre páginas
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.transition-overlay');
    overlay.classList.remove('active');
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Só aplica para links internos
        if (this.hostname === window.location.hostname) {
            e.preventDefault();
            const href = this.href;

            const overlay = document.querySelector('.transition-overlay');
            overlay.classList.add('active');

            setTimeout(() => {
                window.location.href = href;
            }, 500);
        }
    });
});