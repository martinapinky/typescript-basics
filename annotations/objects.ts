const profile = {
  firstName: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//  Using Destructuring, Type Annotation Syntax
const { age, firstName }: { age: number; firstName: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
