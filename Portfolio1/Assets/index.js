/* -- Nav bar men function -- */
function myMenuFunction(){
    var menuBtn = document.getElementById('myNavMenu');

    if(menuBtn.className === 'nav-menu'){
        menuBtn.className += ' responsive';
    }else{
        menuBtn.className = 'nav-menu';
    }
}
// file download
function downloadResume() {
    
    var fileUrl = 'https://drive.google.com/uc?export=download&id=1mBZ1kJZNImznpiNuxClSnrHozHH1fKlH';

    
    var link = document.createElement('a');

    // Set the href attribute to the direct download link
    link.href = fileUrl;

    
    link.download = 'resume.pdf';

   
    link.click();
}

// --- add shadow on navbar on scrolling

window.onscroll = function(){
    headerShadow()
};
function headerShadow() {
    const navHeader = document.getElementById('header');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0 , 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    }else{
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "80px";
        navHeader.style.lineHeight = "90px";
    }
}

// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
    var typingEffect = new Typed(".typedText",{
        strings : ["Designer", "Web  Developer"],
        loop: true,
        typeSpeed : 80,
        backSpeed : 60,
        backDelay : 2000
     })
})

// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

// Home
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social-icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

 /* -- PROJECT BOX -- */
 sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{}) 

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })

  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
})

/* ----- CHANGE ACTIVE LINK ----- */
  
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }  else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)
