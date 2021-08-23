let table = document.querySelector("#table");
console.log(table);

let tableSiblings= table.nextElementSibling;
console.log(tableSiblings);






let current = document.querySelector("#current");
console.log(current);
let nextSibling = current.nextElementSibling;

while(nextSibling){
    console.log(nextSibling);
    nextSibling= nextSibling.nextElementSibling;
}

//Previous sibling

 let last = document.querySelector("#last");
 console.log(last);
 let preSibling = last.previousElementSibling;
 while(preSibling){
    console.log(preSibling);
    preSibling = preSibling.previousElementSibling;
 }

let th = document.querySelectorAll("th");
console.log(th);