
/* INIZIALIZZARE IL CICLO "FOR" */
for(let i=1; i<=100; i++){
    
    const first_list = document.getElementById("first-list");
    
    /* MULTIPLI DI 3 E DI 5 */    
    if(i%3 == 0 && i%5 == 0){
        console.log("FizzBuzz");

        let li = `<li id="item">FizzBuzz</li>`;
        first_list.innerHTML += li;
    }

    /* MULTIPLI DI 5 */
    else if(i%5 == 0){
        console.log("Buzz");

        let li = `<li id="item">Buzz</li>`;
        first_list.innerHTML += li;
    }

    /* MULTIPLI DI 3 */
    else if(i%3 == 0){
        console.log("Fizz");

        let li = `<li id="item">Fizz</li>`;
        first_list.innerHTML += li;
    }

    else{
        console.log(i);

        let li = `<li id="item">${i}</li>`;
        first_list.innerHTML += li;
    }
}
