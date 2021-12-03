

var percentageSpinnerForCarousel = 0;
var currentSpinner = 1;
var spinnerInterval = undefined;
var mainCarouselIsPause = false;

/* NEW CAROUSEL */
var slideMainCarouselIndex = 1;
showSlidesMainCarousel(slideMainCarouselIndex);

function plusSlidesMainCarousel(n) {
    mainCarouselIsPause = false;
    showSlidesMainCarousel(slideMainCarouselIndex += n);
}

function currentSlideMainCarousel(n) {
    if(slideMainCarouselIndex == n){
        mainCarouselIsPause = !mainCarouselIsPause;
    }else{
        mainCarouselIsPause = false;
    }

    if(mainCarouselIsPause){
        clearInterval(spinnerInterval);
    }else{
        showSlidesMainCarousel(slideMainCarouselIndex = n);
    }
}

function showSlidesMainCarousel(n) {
    
    var i;
    var slides = document.getElementsByClassName("mainCarouselSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideMainCarouselIndex = 1}    
    if (n < 1) {slideMainCarouselIndex = slides.length}

    currentSpinner = slideMainCarouselIndex;
    percentageSpinnerForCarousel = 0;
    rotateMainCarousel();


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideMainCarouselIndex-1].style.display = "block";  
    dots[slideMainCarouselIndex-1].className += " active";
}


/* spinner for carousel */

function paintSpinnerForCarousel(percentage, spinnerId, middleText, requiresSpiner){
    var el = document.getElementById(spinnerId); // get canvas

    var options = {
        percent:  percentage || 1,
        size: el.getAttribute('data-size') || 32,
        lineWidth: el.getAttribute('data-line') || 3,
        rotate: el.getAttribute('data-rotate') || 0
    }
    
    var canvas = document.getElementById('canvas' + spinnerId);
    if(canvas == undefined || canvas == null){
        canvas = document.createElement('canvas');
        canvas.setAttribute("id", "canvas" + spinnerId);
        canvas.setAttribute("class", "canvas-spinner");
    }
    
    var span = document.getElementById('span' + spinnerId);
    if(span == undefined || span == null){
        span = document.createElement('span');
        span.setAttribute("id", "span" + spinnerId);
        span.setAttribute("class", "span-spinner");
    }
    
    span.innerHTML = middleText;

    var ctx = canvas.getContext('2d');
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);
    
    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg
    
    //imd = ctx.getImageData(0, 0, 240, 240);
    var radius = (options.size - options.lineWidth) / 2;
    
    var drawCircle = function(color, lineWidth, percent) {
            percent = Math.min(Math.max(0, percent || 1), 1);
            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineCap = 'butt'; // butt, round or square
            ctx.lineWidth = lineWidth
            ctx.stroke();
    };
    
    if(requiresSpiner){
        drawCircle('#d7d8dd', options.lineWidth, 100 / 100);
        drawCircle('#ff0000', options.lineWidth, options.percent / 100);
    }
    
}

function rotateMainCarousel(){
    if(spinnerInterval!=undefined){
        clearInterval(spinnerInterval);
    }
    repaintSpinnerForCarousel();
    spinnerInterval = setInterval(() => {
        paintSpinnerForCarousel(percentageSpinnerForCarousel, 'spinnerLoadingForCarousel0' + currentSpinner, '<img src="icons/pause_icon.svg">', true);
        percentageSpinnerForCarousel+=0.2;
        if(percentageSpinnerForCarousel> 99){
            percentageSpinnerForCarousel = 0;
            currentSpinner++;
            if(currentSpinner>5){
                currentSpinner = 1;
            }
            currentSlideMainCarousel(currentSpinner);
            repaintSpinnerForCarousel();
        }
    }, 20);
    repaintSpinnerForCarousel();
}

function repaintSpinnerForCarousel(){
    paintSpinnerForCarousel(0, 'spinnerLoadingForCarousel01', '1', false);
    paintSpinnerForCarousel(0, 'spinnerLoadingForCarousel02', '2', false);
    paintSpinnerForCarousel(0, 'spinnerLoadingForCarousel03', '3', false);
    paintSpinnerForCarousel(0, 'spinnerLoadingForCarousel04', '4', false);
    paintSpinnerForCarousel(0, 'spinnerLoadingForCarousel05', '5', false);
}

rotateMainCarousel();