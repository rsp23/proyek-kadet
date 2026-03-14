const Node = require("./node");


class LinkedList {

    constructor(){
        this.head =null;
    }

    insertLast(value){
        const newNode = new Node(value);

        if(this.head == null){
            this.head = newNode;
            return;
        }

        let current = this.head;

        while(current.next) current =current.next;
        current.next = newNode;
    }

    insertAt(position, value){
        let newNode = new Node(value);

        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let prev = 0;
        let index = 0;

        while(current && index < position){
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = newNode;
        newNode.next = current;

    }

    removedAt(position){
        if(!this.head)  return null;

        if(position === 0){
            let removed = this.head;
            this.head = this.head.next;
            return removed.value;
        }

        let current = this.head;
        let prev = null;
        let index = 0;

        while(current && index < position){
            prev = current;
            current = current.next;
            index++;
        }

        if(!current) return null;
        prev.next = current.next;

        return current.value;
    }

    toArray(){
        let arr = [];
        let current = this.head;

        while(current){
            arr.push(current.value);
            current = current.next;
        }

        return arr;

    }


    print(){
        let current = this.head;
        let index = 0;
        while(current){
            console.log(`${index}. ${current.value.title}`);
            current = current.next;
            index++;
        }
    }

}


// let cek = new LinkedList();

// cek.insertLast(5);
// cek.insertLast(3);
// cek.insertLast(6);
// cek.insertAt(0, 2);

// cek.removedAt(0);
// cek.print();

// console.log(cek.toArray());

module.exports = LinkedList;


