
function soma(num, num2) {
    return  (num + num2(3))
}

function random() {
    let num = Math.floor((Math.random() * 10) + 1)
    
    return num
}

  console.log(soma(random(), random())) 

let a = () => {
    return 7
}

console.log(soma(a(), (b)=>{
    return b
}))


