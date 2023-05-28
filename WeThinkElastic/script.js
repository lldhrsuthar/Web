let timeoutID;
function f1() {
    for (let i = 1; i <= 10; i++) {
        timeoutID = setTimeout(t1, i * 200, i)
    }
}
function t1(num) {
    let className = '#img' + num.toString()
    let imag = document.querySelector(className)
    imag.style.display = 'none'
}
addEventListener("load", f1())
addEventListener("load", f2())

function f2(){
    clearInterval()
    timeoutID=setTimeout(t2, 2000)
}
function t2(){
    let con=document.querySelector('.intro-transition')
    con.style.display='none'
}