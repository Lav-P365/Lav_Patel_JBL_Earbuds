(() => {

    //GSAP sections scrolling and animation effects starts from here
  
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
  
    //Hero section
  
      gsap.to(".hero-logo", {
        duration: 5,
        opacity: 1,
        y: -20,
        ease: "power3.out",
        delay: 2,
      });
  
      gsap.from(".hero-title", {
        duration: 2,
        opacity: 1,
        y: -220,
        ease: "power3.out",
        delay: 1,
      });
          
    
      gsap.to(".button", {
        duration: 1,
        opacity: 1,
        y: -160,
        ease: "power3.out",
        delay: 3,
      });
  
  // Info section    
  
      gsap.from("#info-title", {
        duration: 1.5,
        y: 50,
        scale: 0.8,
        opacity: 0,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: "#info-title",
          start: "top 75%", 
          end: "bottom 25%",
          scrub: true,
        }
      });
  
      gsap.from(".info-box-content", {
        duration: 1.5,
        y: 50,
        scale: 0.8, 
        opacity: 0,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: ".info-box-content",
          start: "top 75%",
          end: "bottom 25%",
          scrub: true,
        }
      });
  
  
  // Footer section    
  
      gsap.from(".footer-text", {
        opacity: 0,
        x: -50, 
        duration: 1,
        ease: "power2.out",
      });
  
      gsap.from(".footer-container", {
        opacity: 0,
        y: 50, 
        duration: 0.8,
        delay: 0.5, 
        ease: "power3.out",
      });
  
      gsap.from(".banner-card", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
  
  // Color swap section
  
      gsap.from("#jbl-con h2", {
        opacity: 0,
        y: -50, 
        duration: 2,
        ease: "power3.out",
      });
  
      gsap.from("#color-con", {
        opacity: 0,
        x: -100, 
        duration: 0.8,
        delay: 1.5, 
        ease: "power2.out",
      });
  
      gsap.from(".color-btn", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.3, 
        duration: 1,
        delay: 2, 
        ease: "elastic.out(1, 0.5)",
      });
  
  //GSAP Animation Ends here
  
  //ScrollLinks
  
  
      const navLinks = document.querySelectorAll("#header nav ul li a");
  
      function scrollLink(e) {    
              e.preventDefault(); 
              console.log(e.currentTarget.hash);
              let selectedLink = e.currentTarget.hash;
              gsap.to(window, {duration: 1, scrollTo:{y:`${selectedLink}`, offsetY:100 }});
      }
  
      navLinks.forEach((link) => {
          link.addEventListener("click", scrollLink);
      });
  
  
    document.querySelectorAll(".specification").forEach(function (button) {
      button.addEventListener("click", function () {
        gsap.to(window, { duration: 1, scrollTo: ".ar-jbl" });
      });
    });
  
    document
      .getElementById("viewButton")
      .addEventListener("click", function () {
        gsap.to(window, { duration: 1, scrollTo: ".ar-jbl" });
      });
  
      
     // hotspots Selection
  
     const model = document.querySelector("#model");
     const hotspots = document.querySelectorAll(".Hotspot");
   
     const infoBoxes = [
       {
         title: "Smart touch controls",
         text: "Most smart touch controls use capacitive touch sensors, which detect electrical charge variations. ",
         image: "images/h_1.png"
       },
       {
         title: "Bluetooth 5.3, Faster Pairing",
         text: "By reducing the time required to switch from idle to active, this feature can also speed up reconnections and improve the user experience.",
         image: "images/h_2.png"
       },
       {
         title: "IP7 Water & Sweat Resistant",
         text: "Devices with IP7 are tested for immersion in up to 1 meter of water for up to 30 minutes without sustaining damage.",
         image: "images/h_3.png"
       },
     ];
   
      //functions
      function modelLoaded() {
        hotspots.forEach(hotspot => {
          hotspot.style.display = "block";
        });
      }
   
     function loadInfo() {
  
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index+1}`);
        const titleElement = document.createElement("h2");
        titleElement.textContent = infoBox.title;
  
        const textElement = document.createElement("p");
        textElement.textContent = infoBox.text;
  
        const imgElement = document.createElement("img");
        imgElement.src = infoBox.image;
  
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
        selected.appendChild(imgElement);
  
      });
  
    }
  
    loadInfo();
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    //Event listeners
  
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  // Swap Color
  
    const earbuds = document.querySelector("#jbl-buds");
    const buttons = document.querySelectorAll("#color-con button");
  
    function swapColor(e) {
      console.log(e.currentTarget.id);
      const selected =e.currentTarget.id;
      earbuds.src = `images/${selected}.png`;
    }
  
    buttons.forEach(button => {
      button.addEventListener("click", swapColor);
    })
  
  
    //X-ray Slider
  
    const divisor = document.querySelector('#divisor');
    const slider = document.querySelector('#slider');
    const xray = document.querySelector('#xray');
    
    
    function moveDivisor() {
      console.log(slider.value);
      divisor.style.width = `${slider.value}%`;
    }
    
    slider.addEventListener('input', moveDivisor);
   
  })();