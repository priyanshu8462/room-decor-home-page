const prev = document.querySelectorAll('.left-arrow');
const next = document.querySelectorAll('.right-arrow');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0 ;

for(var i=0;i<next.length;i++){
   next[i].addEventListener('click',()=>{
      if(currentIndex=== slides.length-1){
         currentIndex = 0;
         document.querySelector('.active').classList.remove('active');
         slides[currentIndex].classList.add('active');
      }
   
      else if(currentIndex < slides.length-1){
         currentIndex ++ ;
         document.querySelector('.active').classList.remove('active');
         slides[currentIndex].classList.add('active');
      }
   })
}


for(var i=0;i<prev.length;i++){
   prev[i].addEventListener('click',()=>{
      if(currentIndex === 0){
         currentIndex = slides.length-1;
         document.querySelector('.active').classList.remove('active');
         slides[currentIndex].classList.add('active');
      }
   
      else if(currentIndex < slides.length){
         currentIndex -- ;
         document.querySelector('.active').classList.remove('active');
         slides[currentIndex].classList.add('active');
      }
   })
}