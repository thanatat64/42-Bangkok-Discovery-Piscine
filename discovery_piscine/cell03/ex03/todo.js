let list = document.getElementById("ft_list");
let cookies = document.cookie;
console.log("check key: " + cookies.length);
if (cookies.length > 0) {
    let cooky = cookies.split(";");
    cooky.forEach((element) => {
        const newToDo = document.createElement("div");
        newToDo.classList.add("ToDoList");
        newToDo.innerHTML = element.split("=")[1];
        newToDo.onclick = () => {
            let remove = confirm("Are you sure you want to delete ?");
            if (remove) {
                newToDo.remove();
                document.cookie = element.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        };
        list.prepend(newToDo);
    });
}

let createToDo = () => {
    let ToDoList = prompt("create To Do List Here");
    console.log("check Value: "+ToDoList);
    if (ToDoList != null && ToDoList != "") {
        let name = new Date().getTime();
        document.cookie = name + "=" + ToDoList;
        const newToDo = document.createElement("div");
        newToDo.classList.add("ToDoList");
        newToDo.innerHTML = ToDoList;
        newToDo.onclick = () =>{
            let remove = confirm("Are you sure you want to delete ?");
            if (remove) {
                newToDo.remove();
                document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        };
        list.prepend(newToDo);
    }

}