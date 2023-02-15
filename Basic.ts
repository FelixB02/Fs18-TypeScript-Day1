let done: boolean = true;
let decimal: number = 15;
let color: string = "Hello World";


// Task1
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} * ${i} = ` + i * j )      
    }
    console.log(`\n`);
}

// Task2
const myName: {firstname: string; lastname: string}[] = [{firstname: "Felix", lastname: "Blechl"}]
const result2 = document.getElementById("content2") as HTMLElement;
console.log(myName)

for(let i = 0; i < 10; i++) {
myName.forEach(element => {
    result2.innerHTML += `${element.firstname} <br>`;
    });
}

setTimeout(
    function() {
        for(let i = 0; i < 10; i++) {
        myName.forEach(element => {
            result2.innerHTML += `${element.lastname} <br>`;
            });
        }
    }, 5000);


// Task3
let arrayOfNames: string[] = ["Felix", "Paul", "Leo", "Jan", "Lara", "Johanna", "Laura"];
const result1 = document.getElementById("content1") as HTMLElement;

arrayOfNames.forEach(function(value, index){
    console.log(`${index}`);
    result1.innerHTML += `${index} <br>`
})

arrayOfNames.forEach(function(value, index){
    console.log(`${value}`);
    result1.innerHTML += `${value} <br>`
})

arrayOfNames.forEach(function(value, index){
    console.log(`${index}: ${value}`);
    result1.innerHTML += `${index}: ${value} <br>`
})

