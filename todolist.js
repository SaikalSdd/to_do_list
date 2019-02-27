var ul_of_list = document.querySelectorAll("#list");
var all_tasks = document.querySelectorAll("li");
let save = document.querySelector('ul')

document.getElementById("add_new").addEventListener('click', () =>{
    let all_tasks = document.createElement("LI");
    all_tasks.innerHTML = document.getElementById("task_input").value;
    save.appendChild(all_tasks);
    document.getElementById("task_input").value = " ";
})

var index = document.querySelector('ul').childNodes

for (let i = 0; i < all_tasks.length; i++) {
    all_tasks[i].addEventListener("click", () => {
        var done = all_tasks[i].textContent.strike()
        all_tasks[i].innerHTML = done;
     });
    };


/*
var ul_of_list = document.querySelectorAll("#list");
var all_tasks = document.querySelectorAll("li");

document.getElementById("add_new").addEventListener('click', () =>{
    let tasks = document.createElement("LI");
    tasks.textContent = document.getElementById("task_input").value;
    document.getElementById('list').appendChild(tasks);
    document.getElementById("task_input").value = " ";
})

var index = document.getElementById("list").childNodes

for (let i = 0; i < index.length; i++) {
    index[i].addEventListener("click", () => {
        var done = index[i].textContent.strike()
        index[i].innerHTML = done;
        });
    }
 */

 