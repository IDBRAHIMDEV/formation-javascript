class Car {

    //Attrubuts
    constructor(marque, hp, speed) {
        this.marque = marque;
        this.hp = hp;
        this.speedMax = speed;
    }

    //Methods
    diagnostic() {
        console.log(`this car has ${this.hp} HP, max Speed : ${ this.speedMax }`)
    }

}

let mercedes = new Car('Mercedes beans', 580, 300);
let bmw = new Car('BMW x7', 600, 320);
console.log(mercedes.diagnostic(), bmw.diagnostic())


class SuperCar extends Car {
    constructor(marque, hp, speed, s, d) {
        super(marque, hp, speed)
        this.spoiler = s;
        this.diffuser = d;
    }
    
    diagnostic() {
        console.log(this)
    }
}

let myFerrari = new SuperCar('Ferrari lusso', 890, 360, true, "Carbon fiber");
console.log(myFerrari.diagnostic())


