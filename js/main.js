window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// Disable form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();


let breakpoint = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}

//slider features
$('#slick').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 4,
    dots: false,
    infinite: false,
    draggable: false,
    responsive: [
        {
            breakpoint: breakpoint.sm,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            }
        },
        {
            breakpoint: breakpoint.lg,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true
            }
        }

    ]
});
