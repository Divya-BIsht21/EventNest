document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const navDots = document.querySelectorAll('.nav-dot');
    
    if (testimonials.length === 0 || navDots.length === 0) {
      console.error('Testimonials or navigation dots not found.');
      return; // Prevent further errors
    }
  
    let currentIndex = 0;
    const testimonialCount = testimonials.length;
  
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
        navDots[i].classList.toggle('active', i === index);
      });
    }
  
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonialCount;
      showTestimonial(currentIndex);
    }
  
    let autoRotate = setInterval(nextTestimonial, 5000);
  
    navDots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        clearInterval(autoRotate);
        currentIndex = index;
        showTestimonial(currentIndex);
        autoRotate = setInterval(nextTestimonial, 5000);
      });
    });
  });
  


document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate feedback submission (you can replace this with actual API calls)
    console.log('Feedback submitted:', { name, email, message });
    alert('Thank you for your feedback!');

    // Clear the form
    this.reset();
});


