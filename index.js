// Data Structure

// Array - add/push, insert, del, pop
let names = ["a", "b", "c"];
console.log(names);
            
function pushName() {
  let name = document.getElementById("name").value;
  document.getElementById("name").value = "";

  names.push(name);
  console.log(names);
}

function popName() {
  names.pop()
  console.log(names);
}

// deleting using splice / delete in specific index
function spliceName() {
  let i = document.getElementById("index").value;
  document.getElementById("index").value = "";
  names.splice(i, 1); 
  console.log(names);
}

function insert() {
  names.splice(0, 0, "Kiwi");
  console.log(names);
}