
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

    reverse() {
        // let previous = null;
        // let current = null;
        // let next = null;

        // // penyiapan data previous, current,next untuk memudahkan looping
        // this.tail = this.head;
        // current = this.head.next;
        // previous = this.tail;
        // this.tail.next = null;
        // next = current.next;

        // while(next){
        //     // proses pertagian arah pinter
        //     current.next = previous;
        //     previous = current;
        //     current = next;
        //     next = current.next;

        // }

        // current.next = previous;

        // this.head = current;


        if (!this.head || !this.head.next) return; // Edge case: 0 atau 1 node

        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr !== null) {
            next = curr.next;  // Simpan sisa list
            curr.next = prev;  // BALIKKAN pointer
            prev = curr;       // Geser prev maju
            curr = next;       // Geser curr maju
        }
        this.head = prev;      // Head sekarang adalah node terakhir yang diproses

        
    }


}

class Stack{

    constructor(){
        this.top = null;
    }


    push(value){
        let newNode = new Node(value);
        
        if(!this.top){
            this.top = newNode;
            return;
        }

        newNode.next = this.top;

        this.top = newNode;
        
        

    }

    pop(){

        if(!this.top){
            return null;
        }

        const removedTop = this.top.value;

        this.top = this.top.next;

        return removedTop;
    }

    peek(){

        if(this.top === null){
            return null;
        }

        return this.top.value;
    }
} 


let stack = new Stack();

stack.push(2);
stack.push(5);
stack.push(3);
stack.push(6);
stack.push(1);

stack.pop();

stack.peek();


// list.addNode(10);
// list.addNode(30);
// list.addNode(50);
// list.addNode(70);



// list.reverse();
// list.printAll();



