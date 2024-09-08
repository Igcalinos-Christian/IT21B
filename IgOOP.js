class MyClass{
    constructor(a, b){
        this.x = Number(a);
        this.y = Number(b); 
    }
    sum(){
        let c = this.x;
        let d = this. y;
        let SUM = c + d;
        return SUM;
    }
}

const Sum = new MyClass(2, 4);
console.log(Sum.sum());