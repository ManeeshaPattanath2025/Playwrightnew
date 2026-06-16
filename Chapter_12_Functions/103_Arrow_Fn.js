//Arrow function (Es6)

const greet= function (name1){
    return "Hi "+name1;

}
let r=greet("Maya");
console.log(r);

const greet2=(name1)=>"hi "+name1;
let r2=greet2("Maya")
console.log(r2)

const douleIT=n=>n*2;
console.log(douleIT(10));

const printIT=name=>console.log(name);
printIT("Meena");