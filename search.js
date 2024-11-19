class SearchManager {
  constructor() {
      this.searchInput = document.getElementById('searchInput');
      this.searchButton = document.getElementById('searchButton');
      this.searchResults = document.getElementById('searchResults');
      this.initializeSearch();
  }

  initializeSearch() {
      this.searchButton.addEventListener('click', () => this.performSearch());
      this.searchInput.addEventListener('keyup', (e) => {
          if (e.key === 'Enter') this.performSearch();
          else if (this.searchInput.value === '') this.clearSearch();
      });
  }

  clearSearch() {
      // Remove all highlights from the page
      document.querySelectorAll('.highlight').forEach(el => {
          const parent = el.parentNode;
          parent.replaceChild(document.createTextNode(el.textContent), el);
      });
      this.searchResults.classList.remove('active');
  }

  performSearch() {
      const searchTerm = this.searchInput.value.toLowerCase().trim();
      if (!searchTerm) {
          this.clearSearch();
          return;
      }

      // Clear previous highlights
      this.clearSearch();

      // Search through the entire document
      this.searchInNode(document.body, searchTerm);

      // Count matches
      const matchCount = document.querySelectorAll('.highlight').length;
      
      // Show results count
      this.searchResults.innerHTML = `
          <div class="p-4">
              <p>Found ${matchCount} matches</p>
              ${matchCount > 0 ? '<p>Matches are highlighted throughout the page</p>' : ''}
          </div>
      `;
      this.searchResults.classList.add('active');

      // Scroll to first match if exists
      const firstMatch = document.querySelector('.highlight');
      if (firstMatch) {
          firstMatch.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
          });
      }
  }

  searchInNode(node, searchTerm) {
      if (node.nodeType === 3) { // Text node
          const text = node.nodeValue.toLowerCase();
          if (text.includes(searchTerm)) {
              const regex = new RegExp(`(${searchTerm})`, 'gi');
              const newNode = document.createElement('span');
              newNode.innerHTML = node.nodeValue.replace(regex, '<span class="highlight">$1</span>');
              node.parentNode.replaceChild(newNode, node);
          }
      } else if (node.nodeType === 1) { // Element node
          // Skip script tags and input elements
          if (node.tagName === 'SCRIPT' || node.tagName === 'STYLE' || 
              node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
              return;
          }
          
          // Search through child nodes
          Array.from(node.childNodes).forEach(child => {
              this.searchInNode(child, searchTerm);
          });
      }
  }
}