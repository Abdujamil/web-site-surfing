
// function contactForm() {

//   const form = document.getElementById("contact-form");
//   const name = document.getElementById("name");
//   const email = document.getElementById("email");
//   const message = document.getElementById("message");
//   const nameError = document.getElementById("name-error");
//   const emailError = document.getElementById("email-error");
//   const messageError = document.getElementById("message-error");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       // Send form data to server or do something with it here
//       console.log("Form submitted successfully!");
//       form.reset();
//     }
//   });

//   function validateForm() {
//     let isValid = true;
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();

//     if (nameValue === "") {
//       nameError.innerText = "Name is required";
//       isValid = false;
//     } else {
//       nameError.innerText = "";
//     }

//     if (emailValue === "") {
//       emailError.innerText = "Email is required";
//       isValid = false;
//     } else if (!isValidEmail(emailValue)) {
//       emailError.innerText = "Invalid email address";
//       isValid = false;
//     } else {
//       emailError.innerText = "";
//     }

//     if (messageValue === "") {
//       messageError.innerText = "Message is required";
//       isValid = false;
//     } else {
//       messageError.innerText = "";
//     }

//     return isValid;
//   }

//   function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
// }


// contactForm()



function isOpenMenu() {
  const openMenu = document.querySelector(".row");
  const closeMenu = document.querySelector(".close");
  const mobileMenu = document.querySelector(".mob_header_links");

  openMenu.addEventListener('click', () => {

    mobileMenu.style.display = 'block';
    openMenu.style.display = 'none';
  })

  closeMenu.addEventListener('click', () => {

    mobileMenu.style.display = 'none';
    openMenu.style.display = "block";
  })

}

isOpenMenu();


function changeTheme() {
  const toggleTheme = document.querySelectorAll('.sun');
  let el = document.documentElement;

  toggleTheme.forEach((toggleTheme) => {

    toggleTheme.addEventListener('click', () => {
      if (el.hasAttribute('data-theme')) {
        el.removeAttribute('data-theme');
        localStorage.removeItem('theme');

      } else {
        el.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    })

  })

  if (localStorage.getItem('theme') !== null) {
    el.setAttribute('data-theme', 'dark');
  }
}

changeTheme();



function playVideo() {

  const videoThumbnail = document.querySelector('.video-thumbnail');
  const playButton = document.querySelector('.play-button');
  const videoPlayer = document.querySelector('.video-player');

  playButton.addEventListener('click', () => {
    videoPlayer.play();
    playButton.style.display = 'none';
    videoThumbnail.style.display = 'none';
    // videoPlayer.style.display = "block";
  });

  videoPlayer.addEventListener('pause', () => {
    playButton.style.display = 'block';
    videoThumbnail.style.display = 'block';
    // videoPlayer.style.display = "none";
  });

}

playVideo();


function gallery(){
  const btnShowAll = document.querySelector(".btn_show_more");
  const btnShowMore2 = document.querySelector(".btn_show_more_2");
  const gallerry_images = document.querySelector(".gallerry_images");
  const gallery_all_btn = document.querySelector(".gallery_all_btn");
  const gallery_tourists_btn = document.querySelector(".gallery_tourists_btn");
  const gallery_nature_btn = document.querySelector(".gallery_nature_btn");
  const gallery_prof_btn = document.querySelector(".gallery_prof_btn");
  const gal_tourists = document.querySelector(".gal_tourists");
  const gal_nature = document.querySelector(".gal_nature");
  const gal_profi = document.querySelector(".gal_profi");

  btnShowAll.addEventListener('click', ()=>{
    gallerry_images.style.display = 'grid';
    gal_tourists.style.display = 'grid';
    gal_nature.style.display = 'grid';
    gal_profi.style.display = 'grid';
    btnShowMore2.style.display = 'flex';
    btnShowAll.style.display = 'none';
  })

  btnShowMore2.addEventListener('click', ()=>{
    gal_tourists.style.display = 'none';
    gal_nature.style.display = 'none';
    gal_profi.style.display = 'none';
    btnShowAll.style.display = 'flex';
    btnShowMore2.style.display = 'none';
  })

  gallery_all_btn.addEventListener('click', ()=>{
    gallerry_images.style.display = 'grid';
    gal_tourists.style.display = 'none';
    gal_nature.style.display = 'none';
    gal_profi.style.display = 'none';
    btnShowMore.style.display = 'flex';
  })

  gallery_tourists_btn.addEventListener('click', ()=>{
    gallerry_images.style.display = 'none';
    gal_nature.style.display = 'none';
    gal_profi.style.display = 'none';
    gal_tourists.style.display = 'grid';
    btnShowMore.style.display = 'flex';
  })


  gallery_nature_btn.addEventListener('click', ()=>{
    gallerry_images.style.display = 'none';
    gal_tourists.style.display = 'none';
    gal_profi.style.display = 'none';
    gal_nature.style.display = 'grid';
    btnShowMore.style.display = 'flex';
  })

  gallery_prof_btn.addEventListener('click', ()=>{
    gallerry_images.style.display = 'none';
    gal_tourists.style.display = 'none';
    gal_nature.style.display = 'none';
    gal_profi.style.display = 'grid';
    btnShowMore.style.display = 'flex';
  })


}

gallery()