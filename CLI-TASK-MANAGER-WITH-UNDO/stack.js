const { resourceUsage } = require("process");
const Node = require("./node");



class Stack {
    constructor(){
        this.top = null;
        this.next = null;
    }

    push(value){
        const node = new Node(value);

        node.next = this.top;
        this.top = node;

    }

    pop() {

        if(!this.top) return null;
        const value = this.top.value;

        this.top = this.top.next;

        return value;
    }

    isEmpty() {
        return this.top = null;
    }

    print() {
        let current = this.top;

        while(current){
            console.log(current.value);
            current = current.next;
        }

    }
}

// let cek = new Stack();

// cek.push(2);
// cek.push(5);
// cek.push(1);
// cek.pop();
// cek.print();


module.exports = Stack;