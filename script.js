// MENU SLIDE
$(".burger-icon").click(() => {
    $("nav").slideToggle();
});


//OPINIONS NAVIGATION
let opinions = [
    {
        opinion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        person: "Big John"
    },
    {
        opinion: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
        person: "Middle Jack"
    },
    {
        opinion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
        person: "Little Johhny"
    }
];

let opinionBox = document.querySelector(".opinions article");
let personBox = document.querySelector(".opinions .person span");
let prevOpinion = document.querySelector(".opinions-nav-left");
let nextOpinion = document.querySelector(".opinions-nav-right");

let index = 0;

opinionBox.innerHTML = opinions[index].opinion;
personBox.innerHTML = opinions[index].person;

nextOpinion.onclick = () => {

    index === opinions.length-1
        ? index = 0
        : index++;

        $(opinionBox).animate({
            opacity: 0
        }, 500,
            function () {
                $(this).animate({
                    opacity: 1
                }, 500 );
                $(opinionBox).html(opinions[index].opinion);
            });

    personBox.innerHTML = opinions[index].person;
}

prevOpinion.onclick = () => {

    index === 0
        ? index = opinions.length-1
        : index--;
    
        $(opinionBox).animate({
            opacity: 0
        }, 500,
            function () {
                $(this).animate({
                    opacity: 1
                }, 500 );
                $(opinionBox).html(opinions[index].opinion);
            });

    personBox.innerHTML = opinions[index].person;
}

