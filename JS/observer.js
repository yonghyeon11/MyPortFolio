let observer = new IntersectionObserver((e)=>{
    e.forEach((aboutMe)=>{
      if(aboutMe.isIntersecting){
        aboutMe.target.style.opacity = 1;
      } 
    })
  })

  let aboutMeTop = document.querySelectorAll(".AboutSubTitle");
  observer.observe(aboutMeTop[0]);