document.addEventListener("DOMContentLoaded", () => {
    //슬라이드쇼
    const slides = document.querySelector("#slides")
    const leftBtn = document.querySelector("#leftBtn")
    const rightBtn = document.querySelector("#rightBtn")
    const circles = document.querySelectorAll("#circles > div")

    const images =[
        "url(../image/home/mainimage1.jpg)",
        "url(../image/home/mainimage2.jpg)",
        "url(../image/home/mainimage3.jpg)",
        "url(../image/home/mainimage4.jpg)"
    ]

    let curIndex = 0;
    let slideInterval;

    function updateSlide (index){
        slides.style.backgroundImage = images[index];

        circles.forEach(circle => {circle.classList.remove("on")});
        circles[index].classList.add('on')
    }

    function nextSlide(){
        curIndex =(curIndex+1) % images.length;
        updateSlide(curIndex);
    }

    function startAutoSlide(){
        slideInterval = setInterval(nextSlide,3000)
    }

    function resetAutoSlide (){
        clearInterval(slideInterval);
        startAutoSlide();
    }

    leftBtn.addEventListener('click', function(){
        curIndex =(curIndex===0) ? images.length-1 : curIndex -1;
        updateSlide(curIndex);
        resetAutoSlide();
    })

    rightBtn.addEventListener('click', function(){
        curIndex =(curIndex+1) % images.length;
        updateSlide(curIndex);
        resetAutoSlide();
    })

    circles.forEach((circle,index)=>{
        circle.addEventListener('click', function(){
            curIndex = index;
            updateSlide(curIndex);
            resetAutoSlide();
        })
    })

    startAutoSlide();

    //스크롤 애니메이션

    function scrollAnimation(){
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const sloganImg = document.querySelector(".slogan img");
        const slogan = document.querySelector('.slogan')
        const tourText = document.querySelector('.tour .textBox h1');
        const stayText = document.querySelector('.stay .textBox h1');
        const foodText = document.querySelector('.food .textBox h1');
        const tourDetail = document.querySelector('.tour .textBox div') 
        const stayDetail = document.querySelector('.stay .textBox div') 
        const foodDetail = document.querySelector('.food .textBox div') 
        const tourBtn = document.querySelector('.tour .textBox button') 
        const stayBtn = document.querySelector('.stay .textBox button') 
        const foodBtn = document.querySelector('.food .textBox button') 
        

        const sloganOffset = slogan.offsetTop;
        const tourOffset = tourText.offsetTop;
        const stayOffset = stayText.offsetTop;
        const foodOffset = foodText.offsetTop;

        const triggerPoint = scrollY + windowHeight* 0.8;

        if(triggerPoint > sloganOffset){
            sloganImg.style.opacity = 1;
        }
        if(triggerPoint > tourOffset){
            tourText.style.opacity = 1;
            tourDetail.style.opacity = 1;
            tourBtn.style.opacity =1;
            tourText.style.transform ="translateX(0)"
        }
        if(triggerPoint > stayOffset){
            stayText.style.opacity = 1;
            stayDetail.style.opacity = 1;
            stayBtn.style.opacity =1;
            stayText.style.transform ="translateX(0)"
        }
        if(triggerPoint > foodOffset){
            foodText.style.opacity = 1;
            foodDetail.style.opacity = 1;
            foodBtn.style.opacity =1;
            foodText.style.transform ="translateX(0)"
        }
    }
    window.addEventListener('scroll', scrollAnimation)
    scrollAnimation()
})