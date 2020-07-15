let url = document.querySelector('input[name = picurl]');
let toptext = document.querySelector('input[name = top]');
let bottomtext = document.querySelector('input[name = bottom]');
let button = document.querySelector('#button');

button.addEventListener('click', function(e){
    e.preventDefault();
    let newmeme = document.createElement('div');
    newmeme.classList.add('imagescontainer');
    newmeme.innerHTML = `<div id='imagecontainer'><img src="${url.value}" alt="Awesome Meme" width='300px' > <div class="top">${toptext.value}</div> <div class="bottom">${bottomtext.value}</div> <button type='button' id='remove' onclick="this.parentElement.remove()">X</button></div>`
    document.body.append(newmeme);
    toptext.value = '';
    bottomtext.value = '';
    url.value = '';   
}
);


    
    
    
    
    
    
    
