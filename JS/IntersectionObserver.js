let observe =  new IntersectionObserver((e)=> {
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        }else{
            box.target.style.opacity = 0;
        }
        
    })
})


let pj = document.querySelectorAll('.pj1')


observe.observe(pj[0])
observe.observe(pj[1])
observe.observe(pj[2])
observe.observe(pj[3])
observe.observe(pj[4])
observe.observe(pj[5])
observe.observe(pj[6])

