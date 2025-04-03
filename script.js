document.addEventListener("DOMContentLoaded", () => {
  // Fonctionnalité du slideshow
  const slideshow = document.querySelector('.slideshow');
  const totalSlides = document.querySelectorAll('.slide').length;
  let current = 0;

  function changeSlide() {
    current = (current + 1) % totalSlides;
    slideshow.style.transform = `translateX(-${current * 100}vw)`;
  }

  setInterval(changeSlide, 10000); // Changement toutes les 10 secondes

  // Gestion du modal pour afficher les détails du produit
  const products = document.querySelectorAll('.product');
  const modal = document.getElementById('product-modal');
  const modalImage = modal.querySelector('.modal-image img');
  const modalTitle = modal.querySelector('.modal-description h2');
  const modalDesc = modal.querySelector('.modal-description p');
  const closeModal = modal.querySelector('.close-modal');

  products.forEach(product => {
    product.addEventListener('click', () => {
      const title = product.getAttribute('data-title');
      const description = product.getAttribute('data-description');
      const imageSrc = product.getAttribute('data-image');

      modalTitle.textContent = title;
      modalDesc.textContent = description;
      modalImage.src = imageSrc;
      modal.classList.add('open');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });

  // Gestion du mode Light/Dark
  const modeToggle = document.getElementById('mode-toggle');
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Changement d'icône
    if (document.body.classList.contains('light-mode')) {
      modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
});
