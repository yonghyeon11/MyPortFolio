let images = [
    "image/guddi/guddi-01.png",
    "image/guddi/guddi-02.png",
    "image/guddi/guddi-03.png",
    "image/guddi/guddi-04.png",
    "image/guddi/guddi-05.png",
    "image/guddi/guddi-06.png",
    "image/guddi/guddi-07.png",
    "image/guddi/guddi-08.png",
    "image/guddi/guddi-09.png",
    "image/guddi/guddi-10.png",
    "image/guddi/guddi-11.png",
    "image/guddi/guddi-12.png",
    "image/guddi/guddi-13.png",
    "image/guddi/guddi-14.png",
    "image/guddi/guddi-15.png",
    "image/guddi/guddi-16.png",
    "image/guddi/guddi-17.png",
    "image/guddi/guddi-18.png",
    "image/guddi/guddi-19.png",
    "image/guddi/guddi-20.png",
];

function ImageSlider (parent, images) {
    let currentIndex = 0;
    //선택자
    let Slider = {

        parent : parent,
        images : parent.querySelector(".slider__img"),
        thumnail : parent.querySelector(".slider__thumnail"),
        PreviousBtn : parent.querySelector(".slider__btn .previous"),
        NextBtn : parent.querySelector(".slider__btn .next")
    }

    //이미지를 화면에 출력
    Slider.images.innerHTML = images.map((image, index)=>{
        return `<img src="${image}" alt="이미지${index}">`
    }).join("");

    //큰 활성화 시 효과
    let imageNode = Slider.images.querySelectorAll("img");
    imageNode[currentIndex].classList.add("active");
    
    //썸네일에 이미지 출력
    Slider.thumnail.innerHTML = Slider.images.innerHTML;

     //썸네일에 active 활성화
     let thumnailNode = Slider.thumnail.querySelectorAll("img");
     thumnailNode[currentIndex].classList.add("active");


    
    //썸네일 클릭 시 이동
    // for(let i=0; i<thumnailNode.length; i++){
    //     thumnailNode[i].addEventListener("click", function(){
    //         Slider.thumnail.querySelector("img.active").classList.remove("active");
    //         thumnailNode[i].classList.add("active");

    //         imageNode[currentIndex].classList.remove("active");
    //         currentIndex = i;
    //         imageNode[currentIndex].classList.add("active")
    //     });
    // }

    thumnailNode.forEach((el, i) => {
        el.addEventListener("click", function(){
        Slider.thumnail.querySelector("img.active").classList.remove("active");
        el.classList.add("active");

        imageNode[currentIndex].classList.remove("active");
        currentIndex = i;
        imageNode[currentIndex].classList.add("active")
        });
    });

    //왼쪽 버튼 클릭
    Slider.PreviousBtn.addEventListener("click", function(){
       imageNode[currentIndex].classList.remove("active");
       currentIndex--;

       if(currentIndex < 0) currentIndex = images.length - 1;
       imageNode[currentIndex].classList.add("active");

        //활성화 되는 이미지와 같은 썸네일에 active 활성화
        Slider.thumnail.querySelector("img.active").classList.remove("active");
        thumnailNode[currentIndex].classList.add("active");

    });

    //오른쪽 버튼 클릭
    Slider.NextBtn.addEventListener("click", function(){
        imageNode[currentIndex].classList.remove("active");

        currentIndex = (currentIndex + 1) % images.length;
        imageNode[currentIndex].classList.add("active");

        //활성화 되는 이미지와 같은 썸네일에 active 활성화
        Slider.thumnail.querySelector("img.active").classList.remove("active");
        thumnailNode[currentIndex].classList.add("active");
    });
}
ImageSlider(document.querySelector(".slider__wrap"),images);