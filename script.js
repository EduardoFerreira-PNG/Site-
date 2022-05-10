const readMorebtn = document.querySelector('.read__more--btn');
const text = document.querySelector('.text');

readMorebtn.addEventListener('click', (e)=>{
  text.classList.toggle('show-more');
  
})

const showMorebtn = document.querySelector('.btn__showMore');
const answers = document.querySelector('.answers');


  showMorebtn.addEventListener('click', (e)=>{
  answers.classList.toggle('show__more');
  
})