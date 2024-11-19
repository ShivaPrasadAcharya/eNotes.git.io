class MobileMenu {
  constructor() {
      this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
      this.navLinks = document.querySelector('.nav-links');
      this.initializeMobileMenu();
  }

  initializeMobileMenu() {
      this.mobileMenuBtn.addEventListener('click', () => {
          this.navLinks.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
          if (!e.target.closest('.nav-content')) {
              this.navLinks.classList.remove('active');
          }
      });

      // Close menu when window is resized to desktop
      window.addEventListener('resize', () => {
          if (window.innerWidth > 768) {
              this.navLinks.classList.remove('active');
          }
      });
  }
}
