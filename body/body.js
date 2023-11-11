let slider = document.querySelector(".brand-slider");
let brandLeft = document.querySelector(".brand-slider > .brand-slider-right")
let brandRight = document.querySelector(".brand-slider > .brand-slider-left")
let img = document.createElement("img")

let linkArr = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_bcd_m_bcd_250923_400.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250923_400.jpg?tr=w-1920,q=80"
]

let count = 0;
img.setAttribute("src",linkArr[count++]);

brandLeft.addEventListener("click", function(){
    if(count == 4){
        count = 0;
    }
   
      img.setAttribute("src",linkArr[count++]);
    

})

brandRight.addEventListener("click", function(){
    if(count == -1){
        count = 3;
    }
   
      img.setAttribute("src",linkArr[count--]);
    

})

slider.append(img)