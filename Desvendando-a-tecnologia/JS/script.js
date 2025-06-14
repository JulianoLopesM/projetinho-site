document.addEventListener('DOMContentLoaded', function() {
    // Gerenciamento do menu expansível de hardware
    const expandables = document.querySelectorAll('.expandable');
    
    expandables.forEach(expandable => {
        const toggleButton = expandable.querySelector('.toggle-button');
        
        toggleButton.addEventListener('click', (e) => {
            e.preventDefault();
            expandable.classList.toggle('active');
            
            // Animação suave do ícone
            const icon = toggleButton.querySelector('i');
            icon.style.transition = 'transform 0.3s ease';
        });
    });

    // Efeito de hover nos cards
    const guideItems = document.querySelectorAll('.guide-item');
    
    guideItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px)';
            item.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0)';
            item.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Animação suave ao scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});