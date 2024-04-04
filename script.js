var slide=document.querySelectorAll('.slides');
var slide1=document.querySelector('.slides');
var slider=document.querySelector('home-slider');
var counter=0;
console.log(slide.length);
slide.forEach( function(slide,index) {

    slide.style.left=`${index*100}%`
});


const slideImage= () => {
    slide.forEach((slide)=>{
        slide.style.transform= `translateX(-${counter*100}%)`
    })
}

const goPrev= () =>{
    if(counter<=slide.length){
        counter++;
        if(counter==slide.length){
            counter=0;
        }
        slideImage();
        
    }

}

const mov= ()=>{
    let i;
    for(i=0;i<=slide.length;i++){
        setTimeout(goPrev,5000);
    }
    i++;
    if(i>slide.length){
        i=0;
    }
    setTimeout(mov,5000);
}
mov();
// while(true){
//     setTimeout(goPrev,1000);
// }

const menu=document.querySelector('.toggle');
let nav=document.querySelectorAll('.desktop');
let mnav=document.querySelectorAll('.mobile');
let main_nav=document.querySelector('.main-nav');
let list=document.querySelectorAll('li');
console.log(list);
var count=0;
var display=false;
let ull=document.getElementById('ul');


menu.addEventListener("click",()=>{
    count++;
    if(count%2 ==0){
        display=false;
        main_nav.style="height:60px;"
        document.querySelector('body').style="overflow-x: hidden;"
    }
    else{
       display=true;
       main_nav.style="height:auto;"
       ull.style="margin-left: 0px";
       document.querySelector('body').style="overflow-x: hidden;"

    }
    console.log(display);
    mnav.forEach(function(mnav){
    if(display==true){
        mnav.style="display:none";
        menu.style="display:block";
      

    }
    else if(display==false){
        mnav.style="display:block";
        menu.style="display:block";
       
    }
    
    
})
    console.log(display);
    nav.forEach(function(nav){
    if(display==true){
        nav.style="display:block;";
        ull.style="margin-left:0;flex-direction:column;width:100%;margin-top:5%";
        menu.style="display:block;top:8%;color:green;";
        
        list.forEach(function(list){
            list.style="margin-left:0px;margin-bottom:5%;"
        })
        

    }
    else if(display==false){
        nav.style="display:none;";
        menu.style="display:block;top:37%;";
        ull.style="flex-direction:row";
        list.forEach(function(list){
            list.style="margin-left:60px;margin-bottom:0;"
        })
        
       
       
        
    }
    
    
})
 
    
})
