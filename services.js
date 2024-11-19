const servicesData = {
  services: [
      {
          id: 1,
          name: "Consulting",
          description: "Expert advice for your business needs",
          price: "Starting at $199/hour"
      },
      {
          id: 2,
          name: "Installation",
          description: "Professional setup and configuration",
          price: "Starting at $99"
      },
      {
          id: 3,
          name: "Support",
          description: "24/7 technical assistance",
          price: "Starting at $49/month"
      },
      {
          id: 4,
          name: "OK OK",
          description: `
              I've created a modern, responsive webpage with the following features:

              Clean and Professional Design:
              • Fixed navigation bar with smooth scrolling
              • Hero section with call-to-action button
              • Feature cards with hover effects
              • Responsive layout that works on all devices

              CSS Features:
              • CSS variables for consistent theming
              • Modern animations and transitions
              • Flexbox and Grid layouts
              • Mobile-first responsive design
              • Box-shadow and hover effects

              JavaScript Functionality:
              • Smooth scrolling navigation
              • Dynamic navbar transparency on scroll
              • Data-driven feature cards using JavaScript objects
              • Event listeners for interactivity

              Organization:
              • Structured HTML with semantic tags
              • Modular CSS with clear commenting
              • Separated data structure in JavaScript
              • Clean and maintainable code

              Additional features available:
              • Add a contact form section
              • Include more animations
              • Implement a dark mode toggle
              • Add more interactive elements
          `.trim().replace(/\n\s+/g, ' '),
          price: "Starting at $50/month"
      }
  ]
};