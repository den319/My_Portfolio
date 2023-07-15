const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('ul-list');

let logo= document.getElementById('logo-rotate');



if(bar){
    bar.addEventListener('click', () => {
        nav.className= 'active';
        bar.style.opacity= '0';
        console.log(nav.className);
        console.log(nav.style);
    });
}

if(close){
    close.addEventListener('click', () => {
        console.log(nav.classList);
        nav.classList.remove('active');
        bar.style.opacity= '1';
    })
}

    // let flag1= false;
    // logo.addEventListener('click', (event) => {
    //     if(flag1) {
    //         flag1= false;
    //     } else {
    //         flag1= true;
    //     }

    //     if(flag1) {
    //         for(let i= 1; i<= 360; i++) {
    //             console.log(i);
        
    //             setTimeout(() => {
    //                 logo.style.transform= 'rotate(1deg)';
    //                 console.log(logo.style.transform); 
    //             }, 0.1);
        
    //             if(i == 360) {
    //                 i= 0;
    //             }
    //         }
    //     }
    // });

