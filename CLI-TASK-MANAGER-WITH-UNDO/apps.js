const { title, mainModule } = require("process");
const readline = require("readline");
const TaskManager = require("./task_manager");


function showMenu() {
    console.log(`
1. Add Task
2. View Tasks
3. Complete Task
4. Undo
5. Exit
`);
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const manager = new TaskManager("tasks.json");


function handleMenu(choice){
    switch(choice){
        case "1":
            rl.question("Nama Tugas : ", title =>{
                manager.addTask(title);
                main();
            })
            break;
        case "2":
            manager.viewTasks();
            main();
            break;
        case "3":
            rl.question("Nomer Tugas : ", num =>{
                manager.deleteTask(Number(num));
                main();
            });
            break;
        case "4":
            manager.undo();
            main()
            break;
        case "5":
            rl.close();
            break;
        default:
            console.log("Menu tidak valid");
            main();
    }
}

function main(){
    showMenu();
    rl.question("Pilih menu: ", handleMenu);

}


main();





