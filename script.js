const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImage()
}
const goNext = () => {
    counter++
    slideImage()
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            
                slide.style.transform = `translateX(-${counter * 100}%)`
                console.log(counter * 100)
            if((counter * 100)>=300){
                const next=document.getElementById('next')
                next.disabled = true
            }
            else if((counter * 100)<=0)
            {
                const prev=document.getElementById('prev')
                prev.disabled = true
            }
            else{
                next.disabled=false
                prev.disabled=false
            }
          
        }
    )
}
