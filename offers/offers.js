let section3 = document.querySelector(".section3");
let image = document.createElement("img");
let leftele = document.querySelector(".leftclick");
let rightele = document.querySelector(".rightclick");
let imgWater = [
    "https://www.bigbasket.com/media/customPage/8dd4463a-4640-4d7c-a903-4989ed7ecd4e/1772988f-326d-471c-943d-62e6a7d77abb/1ca8a26b-5ddf-4980-9278-38297ad72271/BIGS_TVC_Tea_Coffe_400_231023.jpg",
    "https://www.bigbasket.com/media/customPage/8dd4463a-4640-4d7c-a903-4989ed7ecd4e/1772988f-326d-471c-943d-62e6a7d77abb/1ca8a26b-5ddf-4980-9278-38297ad72271/tn_bigs_fruit-juices_1130x400_231023.jpg"
];

let c = 0;

image.setAttribute( "src" , imgWater[c])
section3.append(image)

leftele.addEventListener("click", function(){
    if(c == 2){
        c=0;
    }
    image.setAttribute( "src" , imgWater[c++])
})

rightele.addEventListener("click", function(){
    if(c== -1){
        c=1;
    }
    image.setAttribute( "src" , imgWater[c--])
})

section3.append(image);