//slows animations
document.documentElement.style.setProperty('--animate-duration', '1.5s');
document.documentElement.style.setProperty('--animate-delay', '.5s');

//scroll fadeout animation and other transition control
var introBg = document.getElementById("waves");
var workingMedia = document.getElementById("workingMedia");
var constructionMedia =document.getElementById("constructionMedia");



window.addEventListener('scroll',function(){

    //fadeoutIntro

    introBg.style.opacity = 1.2 - +window.pageYOffset/550+'';
    //     introBg.style.top = +window.pageYOffset + 'px';
    // introBg.style.backgroundPositionY = - +window.pageYOffset / 2 + '';

    //animate working and construction medias
    if (window.pageYOffset >= 550) {
        workingMedia.classList.remove("hide");
                workingMedia.classList.add("show");

        workingMedia.classList.add("workingMedia");
        workingMedia.classList.add("animate__animated");
        workingMedia.classList.add("animate__slideInRight");
    }
      if (window.pageYOffset >= 1100) {
          constructionMedia.classList.remove("hide");
          constructionMedia.classList.add("show");
          constructionMedia.classList.add("constructionMedia");
          constructionMedia.classList.add("animate__animated");
          constructionMedia.classList.add("animate__slideInLeft");
      }


});
