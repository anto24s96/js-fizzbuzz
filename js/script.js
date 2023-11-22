/* INIZIALIZZARE IL CICLO "FOR" */
for(let i=1; i<=100; i++){
    
    /* MULTIPLI DI 3 E DI 5 */    
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");
    }

    /* MULTIPLI DI 5 */
    else if(i%5 == 0){
        console.log("Buzz");
    }

    /* MULTIPLI DI 3 */
    else if(i%3 == 0){
        console.log("Fizz");
    }

    else{
        console.log(i);
    }
}
