// let accordion = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener("click", function () {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");

//         /* Toggle between hiding and showing the active panel */
//         $(this).next().slideToggle();
//         // if (panel.style.display === "block") {
//         //     panel.style.display = "none";
//         // } else {
//         //     panel.style.display = "block";
//         // }
//     });
// }


$('.accordion').each(function () {
    $(this).click(function () {
        $(this).next().slideToggle();
    });
});