// factory function
function PersonMaker(name, age){
    const person={
        name: name,
        age: age,
        talk(){
            console.log(`hiii, my name is ${this.name}`);
        },
    };
    return person;
}

let p1= PersonMaker("adam", 25);
let p2= PersonMaker("eve",25);