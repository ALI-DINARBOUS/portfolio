// script.js

// Exemple de petit effet de défilement doux pour les liens internes
// (accueil, projets, contact).
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Défilement doux
        window.scrollTo({
          top: targetElement.offsetTop - 60, // ajustement pour le header fixe
          behavior: 'smooth'
        });
      }
    });
  });
  