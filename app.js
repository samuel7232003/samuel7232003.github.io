var imgAva = document.querySelector('.ava img')
var info = document.querySelector('.info')

imgAva.addEventListener('mouseover', function(){
    imgAva.classList.add('bigAva')
    info.classList.add('smallInfo')
})

imgAva.addEventListener('mouseleave', function(){
    imgAva.classList.remove('bigAva')
    info.classList.remove('smallInfo')
})

info.addEventListener('mouseover', function(){
    imgAva.classList.add('smallAva')
    info.classList.add('bigInfo')
})

info.addEventListener('mouseleave', function(){
    imgAva.classList.remove('smallAva')
    info.classList.remove('bigInfo')
})
