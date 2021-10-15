const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let element;
let container;

for (let index = 0; index < items.length; index++) {
    if (index == 0) {
        element = `<img id="img_main" class="w-100 h_main" src="./${items[index]}" alt=""></img>`
        container = document.querySelector(".big_image_container")
        container.innerHTML += element;
        element = `<p id = "title_desc" class="mb_2px fw-bolder" >${title[index]}</p >`
        container = document.querySelector(".desc_container")
        container.innerHTML += element;
        element = ` <p id="text_desc">${text[index]}</p>`
        container = document.querySelector(".desc_container")
        container.innerHTML += element;
    }
    element = `<img class="w-100" src="./${items[index]}" alt="immagine ${index + 1}">`;
    container = document.querySelector(`.image_container-${index + 1}`);
    container.innerHTML += element;
}


let img_finder = 0;
document.getElementById("go_bottom").addEventListener("click", function () {
    if (img_finder == 4) {
        let sel_el = document.querySelector(`.image_container-${5}`);
        sel_el.classList.remove("sel_border");
        sel_el.classList.add("obscured");
        img_finder = -1;
    }
    else {
        let sel_el = document.querySelector(`.image_container-${img_finder + 1}`);
        sel_el.classList.remove("sel_border");
        sel_el.classList.add("obscured");
    }
    img_finder = img_finder + 1;
    sel_el = document.querySelector(`.image_container-${img_finder + 1}`);
    sel_el.classList.add("sel_border");
    sel_el.classList.remove("obscured");

    document.getElementById("text_desc").innerHTML = text[img_finder];
    document.getElementById("title_desc").innerHTML = title[img_finder];
    document.getElementById("img_main").src = items[img_finder];
});


document.getElementById("go_top").addEventListener("click", function () {
    if (img_finder == 0) {
        let sel_el = document.querySelector(`.image_container-${1}`);
        sel_el.classList.remove("sel_border");
        sel_el.classList.add("obscured");
        img_finder = 5;
    }
    else {
        let sel_el = document.querySelector(`.image_container-${img_finder + 1}`);
        sel_el.classList.remove("sel_border");
        sel_el.classList.add("obscured");
    }
    img_finder = img_finder - 1;
    sel_el = document.querySelector(`.image_container-${img_finder + 1}`);
    sel_el.classList.add("sel_border");
    sel_el.classList.remove("obscured");

    document.getElementById("text_desc").innerHTML = text[img_finder];
    document.getElementById("title_desc").innerHTML = title[img_finder];
    document.getElementById("img_main").src = items[img_finder];
});

