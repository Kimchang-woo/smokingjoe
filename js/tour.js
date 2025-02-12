function imgModal() {
    var modal = document.getElementById('myModal');
    var img = document.querySelectorAll(".subImage img");
    var modalImg = document.getElementById("modal-image");
    img.forEach(function(image) {
        image.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        };
    });
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function hoverEffect() {
    var img = document.querySelectorAll(".subImage img");
    img.forEach(function(image) {
        image.onmouseover = function() {
            this.style.cursor = "pointer"; 
        };
        image.onmouseout = function() {
            this.style.cursor = "default"; 
        };
    });
}

document.addEventListener("DOMContentLoaded", function() {

    function resetAnimation() {
        const images = document.querySelectorAll('.subImage img');
        images.forEach(image => {
            image.style.animation = 'none'; // 애니메이션 제거
            image.offsetHeight; // 리플로우 발생시켜 애니메이션 재시작
            image.style.animation = ''; // 애니메이션 다시 적용
        });
    }
});
const hamberger = document.querySelector('.hamburger');
const  modal = document.querySelector('.modal');
const mocloseBtn =document.querySelector('#mocloseBtn');

hamberger.addEventListener('click', function(){
    modal.classList.toggle('on');
});
mocloseBtn.addEventListener('click', function(){
    modal.classList.toggle('on');
});
hoverEffect();

imgModal();

