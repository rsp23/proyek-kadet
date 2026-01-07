
//inisiasi class node

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

//inisiasi class LinkedList

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    //menambahkan node diakhir
    addNode(value){
        const newNode = new Node(value);


        if(!this.head){
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;





        // if(this.head === null){
        //     this.head = newNode;
        //     return;
        // }


        // let currentNode = this.head;
        // // looping dilakukan sampai node terakhir
        // while (currentNode.next !== null){
        //     currentNode = currentNode.next;
        // }

        // currentNode.next = newNode;

    }
    //menampilkan isi dari setiap node
    printAll() {
        let currentNode = this.head;

        while(currentNode){
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

    }
}


let list = new LinkedList();

list.addNode(10);
list.addNode(30);
list.addNode(50);

list.printAll();