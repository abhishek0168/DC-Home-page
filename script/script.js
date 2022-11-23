var sec4Carousel = document.getElementById("sec4-carousel");
var carouselCol = sec4Carousel.getElementsByClassName("carousel-col");

function nextSec4()
{
    sec4Carousel.append(carouselCol[0]);

}

function prevSec4()
{
    sec4Carousel.prepend(carouselCol[carouselCol.length - 1]);
}