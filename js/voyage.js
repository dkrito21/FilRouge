const images = document.querySelectorAll('.img');
const containerImage= document.querySelector('.container-img');
const imageContainer = document.querySelector('.img-show')
const copy = document.querySelector('.copy2');
const closeModal = document.querySelector('.bx.bx-x-circle');

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        addImage(image.getAttribute('src'), image.getAttribute('alt'))
    })
})

const addImage = (src, alt)=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
    imageContainer.src = src;
    copy.innerHTML= alt;
}

/*containerImage.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
})*/
closeModal.addEventListener('click', ()=>{
    containerImage.classList.toggle('move');
    imageContainer.classList.toggle('show');
})