var input = document.querySelector('input')
var eye = document.querySelector('.fix i')
var Lower_case = document.querySelector('.Lower-case')
var upper_case = document.querySelector('.upper-case')
var Numbers = document.querySelector('.Number')
var symboy = document.querySelector('.symboy')
var characters = document.querySelector('.characters')

eye.addEventListener('click' ,function(){
    input.getAttribute('type') ==='text' ? input.setAttribute('type' ,'password') : input.setAttribute('type' ,'text')
    if(input.getAttribute('type') == text){
        
    }
})
input.addEventListener('input', function(){
    let va = this.value;
    /[a-z]/.test(va) ? Lower_case.classList.add('valid') : Lower_case.classList.remove('valid');
    /[A-Z]/.test(va) ? upper_case.classList.add('valid') : upper_case.classList.remove('valid');
    /[\W]/.test(va) ? symboy.classList.add('valid') : symboy.classList.remove('valid');
    /[0-9]/.test(va) ? Numbers.classList.add('valid') : Numbers.classList.remove('valid');
    va.length >+8 ? characters.classList.add('valid') : characters.classList.remove('valid');
    console.log(eye)
})
