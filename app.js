var slides = document.getElementsByClassName('carousel-item');
var  dots   = document.querySelectorAll('.dot'); // Node List

var currentslide = 1;

document.getElementById('prev').addEventListener('click',function(){
    carousel(currentslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
    carousel(currentslide += 1);
});

for (var q = 0; q < dots.length; q++) {
    dots[q].addEventListener('click',function(){
        currentslide  = this.getAttribute('data-bs-slide-to');
        carousel(currentslide);
    });
    
}

carousel(currentslide);

function carousel(slidenum){
    var x,y;
    // hide all slides 
    for (let x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    for (let y = 0; y < dots.length; y++) {
        // dots[y].classList.remove('active');
        // dots[y].className  = 'dot';
        dots[y].className  = dots[y].className.replace('active','');
    }
    // console.log(slidenum);
    if(slidenum > slides.length){
        currentslide = 1;
    }else if(slidenum < 1){
        currentslide = slides.length;
    }
    // console.log(currentslide);
    slides[currentslide-1].style.display = "block";
    dots[currentslide-1].className = 'dot active';
    // dots[currentslide-1].className += 'active';
    // dots[currentslide-1].classList.add('active');
}

// slide          1       2        3
// currentslide 1-1=0 2-1=1 3-1=2 

// 15DT 