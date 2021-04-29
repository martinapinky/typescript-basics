// class Vehicle {
//   color: string;

//   constructor(color: string) {
//     this.color = color;
//   }

//   // drive(): void {
//   //   console.log('chugga chugga');
//   // }

//   protected honk(): void {
//     console.log('beep');
//   }
// }

// Shorter version for property declaration and assignment in constructor
class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk();  // Cannot be called because it has
// the protected modifier and can only be called in a child class

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(10, 'red');
car.startDrivingProcess();
// car.honk();

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
