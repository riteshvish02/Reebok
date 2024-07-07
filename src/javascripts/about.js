import '../stylesheets/about.css';


function inet() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

}

inet();
 
function pageTextAni(){
    
   
    var h2data = document.querySelectorAll("#page1 h2");
    h2data.forEach(function (elem) {
      var textData = elem.textContent;
      var splitedText = textData.split("");
      var clutter = "";
      splitedText.forEach(function (e) {
        clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
    });
    
    gsap.to("#page1 h2 span", {
        color: "black",
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#page1 h2 span",
        scroller: "#main",
        start: "top 40%",
        end: "top 10%",
        scrub: 2,
      },
    });
    
    }
    pageTextAni()
if (window.innerWidth > 600) {
    Shery.mouseFollower({
      // Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
  


function imageAnimation() {
    const images = document.querySelectorAll('.images img');
    const largeImage = document.getElementById('largeImage');
    const imageTitle = document.getElementById('imageTitle');
    const imageDescription = document.getElementById('imageDescription');

    if (images.length > 0) {
        largeImage.src = images[0].src;
        imageTitle.textContent = images[0].dataset.title;
        imageDescription.textContent = images[0].dataset.description;
    }

    images.forEach((img, index) => {
        img.addEventListener('mouseover', () => {
            largeImage.src = img.src;
            imageTitle.textContent = img.dataset.title;
            imageDescription.textContent = img.dataset.description;

            if (images[index + 1]) {
                images[index + 1].classList.add('next');
            }
        });

        img.addEventListener('mouseout', () => {
            if (images[index + 1]) {
                images[index + 1].classList.remove('next');
            }
        });
    });
}

if (window.innerWidth > 600) {
   
    
    imageAnimation();

    
    var tl1 = gsap.timeline({
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page4",
           // markers: true,
            scrub: true,
            pin: true,
            start: "top 20%",
            end: "top -110%",
        }
    });
     
  
    tl1.to('.images', {
        transform: "translateY(-58%)",
        ease: "linear",
        duration: 13,
        ease: "power3.easeInOut",
        
    },'a');
    
}
 
 


// shery.js

Shery.imageEffect(".p3-p1", {
    style: 6,
    // debug:true,
    gooey: true,
    config:{"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.3473478276764137},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.15,"range":[0,10]},"metaball":{"value":0.24,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.02,"range":[0,0.1]},"noise_height":{"value":0.37,"range":[0,2]},"noise_scale":{"value":13.74,"range":[0,100]}}
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });