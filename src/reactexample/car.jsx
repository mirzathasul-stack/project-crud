import { createRoot } from 'react-dom/client';
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model;
  }
}
const mycar = new Model("Ford", "Mustang");
function MyElement() {return <h1>{mycar.show()}
</h1>;
}
const root = createRoot(document.getElementById('root'));
root.render(< MyElement/>
);