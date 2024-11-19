class App {
  constructor() {
      this.searchManager = new SearchManager();
      this.mobileMenu = new MobileMenu();
      this.initializeContent();
  }

  initializeContent() {
      this.renderProducts();
      this.renderServices();
      this.renderNotes();
      this.renderTestimonials();
      this.initializeReadMore();
  }

  truncateDescription(description) {
      const words = description.split(' ');
      const truncated = words.slice(0, 30).join(' '); // Approximately 3 lines
      return {
          isLong: words.length > 30,
          truncated: truncated,
          full: description
      };
  }

  createDescriptionHTML(description, id) {
      const { isLong, truncated, full } = this.truncateDescription(description);
      
      if (!isLong) {
          return `<p>${description}</p>`;
      }

      return `
          <div class="card-description" id="desc-${id}">
              <p>${full}</p>
          </div>
          <span class="read-more" data-id="${id}">Read More</span>
      `;
  }

  initializeReadMore() {
      document.addEventListener('click', (e) => {
          if (e.target.classList.contains('read-more')) {
              const id = e.target.dataset.id;
              const description = document.getElementById(`desc-${id}`);
              const isExpanded = description.classList.contains('expanded');
              
              description.classList.toggle('expanded');
              e.target.textContent = isExpanded ? 'Read More' : 'Read Less';
          }
      });
  }

  renderProducts() {
      const productsGrid = document.getElementById('productsGrid');
      productsGrid.innerHTML = productsData.items
          .map(product => `
              <div class="card">
                  <h3>${product.name}</h3>
                  ${this.createDescriptionHTML(product.description, `product-${product.id}`)}
                  <p class="price">${product.price}</p>
                  <p class="category">Category: ${product.category}</p>
              </div>
          `)
          .join('');
  }

  renderServices() {
      const servicesGrid = document.getElementById('servicesGrid');
      servicesGrid.innerHTML = servicesData.services
          .map(service => `
              <div class="card">
                  <h3>${service.name}</h3>
                  ${this.createDescriptionHTML(service.description, `service-${service.id}`)}
                  <p class="price">${service.price}</p>
              </div>
          `)
          .join('');
  }

  renderNotes() {
    const notesGrid = document.getElementById('notesGrid');
   notesGrid.innerHTML = notesData.notes
        .map(note => `
            <div class="card">
                <h3>${note.name}</h3>
                ${this.createDescriptionHTML(note.description, `note-${note.id}`)}
                <p class="price">${note.price}</p>
            </div>
        `)
        .join('');
}
  renderTestimonials() {
      const testimonialsGrid = document.getElementById('testimonialsGrid');
      testimonialsGrid.innerHTML = testimonialsData.testimonials
          .map(testimonial => `
              <div class="card">
                  ${this.createDescriptionHTML(testimonial.text, `testimonial-${testimonial.id}`)}
                  <h4>${testimonial.name}</h4>
                  <p class="company">${testimonial.company}</p>
              </div>
          `)
          .join('');
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
});