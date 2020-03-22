function btn_first(){
    document.querySelector('.message').innerHTML = "You clicked First button"
}

second.onclick = function() {
    document.querySelector('.message').innerHTML = "You clicked Second button"
}

function third_func() {
    document.querySelector('.message').innerHTML = "You clicked Third button"
}

third.addEventListener("click", third_func)