document.addEventListener('DOMContentLoaded', function() {
    var navWrapper = document.querySelector('.nav-wrapper');
    var scrollThreshold = 200;
  
    function handleScroll() {
      var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollPosition >= scrollThreshold) {
        navWrapper.classList.add('fixed');
      } else {
        navWrapper.classList.remove('fixed');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  
  function toggleMobileNav() {
    var mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
  };

  document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.qa');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});

