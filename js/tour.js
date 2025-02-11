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

hoverEffect();

imgModal();

