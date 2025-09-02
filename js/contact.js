    document.addEventListener('DOMContentLoaded', function() {
      // Form submission handling
      const contactForm = document.getElementById('contactForm');
      const successMessage = document.getElementById('successMessage');
      const errorMessage = document.getElementById('errorMessage');
      
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (name && email && subject && message) {
          // In a real implementation, you would send the form data to a server here
          // For this example, we'll just show a success message
          successMessage.style.display = 'block';
          errorMessage.style.display = 'none';
          contactForm.reset();
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        } else {
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
          
          // Hide error message after 5 seconds
          setTimeout(() => {
            errorMessage.style.display = 'none';
          }, 5000);
        }
      });
      
      // FAQ accordion functionality
      const faqQuestions = document.querySelectorAll('.faq-question');
      
      faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
          const faqItem = question.parentElement;
          faqItem.classList.toggle('faq-active');
        });
      });
    });