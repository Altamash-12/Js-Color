let input = document.getElementsByTagName("input")
// let btn = document.getElementsByClassName('btn')
let form = document.getElementsByTagName('form')
let container = document.querySelector(".container")


form[0].addEventListener('submit', function(e){
    e.preventDefault();
    container.style.backgroundColor = input[0].value;
    input[0].value = ""
})