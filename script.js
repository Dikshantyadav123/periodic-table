//   =====locomotive  ===================================
function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        pinType: document.querySelector(".main").style.transform
            ? "transform"
            : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

// ==== show card function  ============================

function showCardAnimation() {
    document.addEventListener("mousemove", function (event) {
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;

        var cursorX = (event.clientX / viewportWidth) * 100;
        var cursorY = (event.clientY / viewportHeight) * 100;

        if (cursorX < 50) {
            var min_X = cursorX + 5;
            gsap.to(".show-card", {
                left: `${min_X}vw`,
            });
        } else if (cursorX > 50) {
            var max_X = cursorX - 50;
            gsap.to(".show-card", {
                left: `${max_X}vw`,
            });
        }

        if (cursorY < 50) {
            var min_Y = cursorY + 5;
            gsap.to(".show-card", {
                top: `${min_Y}vh`,
            });
        } else if (cursorY > 50) {
            var max_Y = cursorY - 50;
            gsap.to(".show-card", {
                top: `${max_Y}vh`,
            });
        }

        // console.log(`${cursorX}  and ${cursorY}`)
    });
}

init();
showCardAnimation();



// =============    ===================================================================

var boxes = document.querySelectorAll(".chart-period");
boxes.forEach(function (elem) {

   
    // =====  MOUSE MOVE FUNCTION ==========
    elem.addEventListener("mouseenter", function () {

        //  GETTING THE VALUE OF ATTRIBUTES.

        var dataColor = elem.getAttribute("data-color");

        var dataHead = elem.getAttribute("data-head");

        var dataParagraph = elem.getAttribute("data-paragraph");

        var dataFoot = elem.getAttribute("data-foot");

        var dataImageURL = elem.getAttribute("data-imageURL");

        var dataAtomicName = elem.getAttribute("data-atomicName");

        var dataAtomicNo = elem.getAttribute("data-atomicNumber");





        // SELECT THE CARD ELEMENT 
        var showHead = document.querySelector(".show-box-h");
        var showParagraph = document.querySelector(".show-box-p");
        var showFoot = document.querySelector(".show-box-f");
        

        // INSERT THE VALUES IN DOCUMENT .

        elem.innerHTML = `<h2>${dataAtomicNo}</h2>`;
        
        showHead.innerHTML = `<h2>${dataHead}</h2>`;
        
        showParagraph.innerHTML = `<p>${dataParagraph}</p>`;
        
        
        showFoot.innerHTML = `<h2>${dataFoot}</h2>`;
        
        // USING GSAP TO ANIMATE CARD .
        gsap.to(".show-card", {
            display: "flex",
            opacity: 1,

        });
        gsap.to(".show-card", {
            delay:.51,
            backgroundImage: `url(${dataImageURL})`,
            height:"auto",
            transition:"linear .5s",
            
        });
        // alert(dataImageURL)
            // alert(dataAtomicName)
    });
    // === MOUSE LEAVE FUNCTION  ================
    elem.addEventListener("mouseleave", function () {
        var axx = elem.getAttribute("data-atomicName");
        // alert("mouse leave")
        var dataColor = elem.getAttribute("data-color");

        elem.innerHTML = `<h1>${axx}</h1>`;
        gsap.to(".show-card", {
            display: "none",
            opacity: 0,
            backgroundColor: `${dataColor}`,
            height:0,
            
        });
    });
    
    elem.addEventListener("click", function () {
        var axx = document.querySelector(".theory")
        axx.style.display= "block"
       
        // gsap for animation in 
       var tl= gsap.timeline({
        
       });
       tl.to(".theory",{
        backgroundColor:"rgba(16, 2, 33, 0.682)",
        
        backdropFilter:" blur(7px)",
        duration:4
       })
        tl.to(".theory-cross",{
        
            opacity:0,
           
            duration:2
        }) 
       
        tl.to(".theory-cross",{
        
            opacity:1,
            top:"5%",
            right:"5%",
            
        })


    });
    
document.querySelector(".theory-cross")
    .addEventListener("click", function () {
        var axx = document.querySelector(".theory")
        axx.style.display= "none"
        // gsap for animation in 
        
      
       alert(showTheory)
        gsap.to(".theory-cross",{
            
            top:"90%",
            right:"50%",
        })


    });
});

// 

// ==== ANIMATION 
