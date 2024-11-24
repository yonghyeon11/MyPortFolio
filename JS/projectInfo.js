let observer =  new IntersectionObserver((e)=> {
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        }else{
            box.target.style.opacity = 0;
        }
        
    })
})

let div =  document.querySelectorAll('.as')
let pj = document.querySelectorAll('.pj1')


observer.observe(pj[0])
observer.observe(pj[1])
observer.observe(pj[2])
observer.observe(pj[3])
observer.observe(pj[4])
observer.observe(pj[5])
observer.observe(div[0]) //html요소가 화면에 등장하는지 감시
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])
observer.observe(div[4])
observer.observe(div[5])
observer.observe(div[6])
observer.observe(div[7])
observer.observe(div[8])
observer.observe(div[9])
observer.observe(div[10])
observer.observe(div[11])
observer.observe(div[12])
observer.observe(div[13])
observer.observe(div[14])
observer.observe(div[15])

