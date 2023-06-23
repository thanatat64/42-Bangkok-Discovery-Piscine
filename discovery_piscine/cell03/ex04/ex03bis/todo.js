$(document).ready(()=> {
    let list = $("#ft_list");
    let cookies = document.cookie;
    console.log("check key: " + cookies.length);
    if (cookies.length > 0) {
        let cooky = cookies.split(";");
        $.each(cooky, (key,value) => {
            let ToDoCookie = value.split("=")[1];
            let decodedVal = decodeURIComponent(ToDoCookie);
            let newToDo = $("<div></div>").text(decodedVal).addClass("ToDoList");
            newToDo.on("click", function() {
                let remove = confirm("Are you sure you want to delete?");
                if (remove) {
                    newToDo.remove();
                    document.cookie = value.split("=")[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                }
            });
            list.prepend(newToDo);
        });
    }

    $("#Btn").on("click", function() {
        let ToDoList = prompt("Create To Do List Here");
        console.log("check Value: " + ToDoList);
        if (ToDoList !== null && ToDoList !== "") {
            let name = new Date().getTime();
            console.log(name); 
            let endcodedVal = encodeURIComponent(ToDoList);
            document.cookie = `${name}=${endcodedVal}`;
            let newToDo = $("<div></div>").text(ToDoList).addClass("ToDoList");
            newToDo.on("click", function() {
                let remove = confirm("Are you sure you want to delete?");
                if (remove) {
                    newToDo.remove();
                    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                }
            });
            list.prepend(newToDo);
        }
    });
});
