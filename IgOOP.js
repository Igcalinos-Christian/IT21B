let sum;
class Summy{
    Add(a, b){
        sum = a + b;
        return sum;
    }
}

const Sum = new Summy();
const total = Sum.Add(1,2);
console.log(total);
