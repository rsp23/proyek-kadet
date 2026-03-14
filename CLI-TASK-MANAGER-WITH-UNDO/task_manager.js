const fs = require("fs");
const LinkedList = require("./linked_list");
const Stack = require("./stack");


class TaskManager{
    constructor(filePath){
        this.tasks = new LinkedList();
        this.history = new Stack();
        this.filePath = filePath;
        this.load();

    }

    load() {
        try {
            if(!fs.existsSync(this.filePath)) return;
            //mengambil data
            const data = fs.readFileSync(this.filePath, "utf-8");
            if(!data) return;

             //memasukan data ke linkedlist
             JSON.parse(data).forEach(task => {
                this.tasks.insertLast(task);
             });

            
        } catch {
            console.log("⚠️ tasks.json rusak atau tidak valid");
            
        }
    }


    save() {
        fs.writeFileSync(
            this.filePath, JSON.stringify(this.tasks.toArray(), null, 2)
        );
    }


    addTask(title) {
        const task = { id: Date.now(), title};
        //memasukan nilai ke linked list dan stack
        this.tasks.insertLast(task);
        this.history.push({ type: "ADD", task});
        this.save();

    }


    deleteTask(position){
        const removed = this.tasks.removedAt(position);

        if(!removed){
            console.log("Tugas tidak ada");
            return;
        }
        //simpan histori untuk delete
        this.history.push({
            type: "DELETE",
            task: removed,
            position
        });

        this.save();
    }

    undo() {
        const action = this.history.pop();

        if(!action) {
            console.log("Tidak ada aksi untuk di undo");
            return;
        }

        if(action.type === "ADD"){
            const lastIndex = this.tasks.toArray.length - 1;
            this.tasks.removedAt(lastIndex);

        }

        if(action.type === "DELETE") {
            this.tasks.insertAt(action.position, action.task);
        }

        this.save();

        console.log("Undo Berhasil");

    }

    viewTasks() {
        if(!this.tasks.head){
            console.log("Tidak ada task");
            return;

        }

        this.tasks.print();
    }







}

module.exports = TaskManager;