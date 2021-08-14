

const togglefunction = ()=>{
    let toggle = document.querySelector('.togglebtn');
    let navdiv = document.querySelector('.navdiv');
    let navul = document.querySelector('.navul');
    let navulanim = document.querySelectorAll('.navul li');


    toggle.addEventListener('click',function () {
        navdiv.classList.toggle('manubar');
        navul.classList.toggle('ulclass');
        navul.classList.toggle('navul');

        navulanim.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `menubaranim 0.5s ease-in ${index / 7 + 0.3}s`;
               
                console.log(link)
            }
        })
    })
}

togglefunction();