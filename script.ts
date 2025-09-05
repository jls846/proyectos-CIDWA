
function fibonacci (numero: number ){
    let a = 0;
    let b = 1;
    for(let i = 0; i < numero; i++){
        console.log(a);
        let variable = a + b;
        
        a = b;
        b = variable;
        
        
    }
}
fibonacci(9)