

function calc(opt) {
    let a = document.getElementById('first').value;
    let b = document.getElementById('Second').value;
    let out;
    if (opt == 'Add') {
        out = `Sum of Numbers is ${Number(a) + Number(b)}`
    }else {
        out = `Sum of Number is ${Number(a) - Number(b)}`
    } document.getElementsByClassName('output')[0].innerText = out
}