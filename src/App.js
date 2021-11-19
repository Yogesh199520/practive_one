import logo from './logo.svg';
import './App.css';
import BS5 from './BS5.jsx';
let className = 'btn';
className += ' btn-primary'
className += ' none';

console.log(className);
var speed = 90;
var message = speed >= 120 ? 'Too Fast' : (speed >= 80 ? 'Fast' : 'OK');
console.log(message);
let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['starting up']();
let scores = [80, 90, 70];

for(let score of scores){
    score = score + 5;
    console.log(score);
}

let colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for (let color of colors) {
    console.log(color);
}
const p1 = Promise.reject(1);
const p2 = new Promise((resolve) => setTimeout(resolve, 200, 2));
const p3 = new Promise((resolve) => setTimeout(resolve, 300, 3));

const promises = [p1, p2, p3];

Promise.any(promises).then((value) => console.log(value));

function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName() {
            return firstName + ' ' + lastName;
        }
    }
}
let john = createPerson('John', 'Doe'),
jane = createPerson('Jane', 'Doe');

console.log(john.getFullName());
console.log(jane.getFullName());
let numbers = [16, 25, 36];
let sqrt = numbers.map(Math.sqrt);
let pow = numbers.map(Math.pow);
let cbrt = numbers.map(Math.cbrt);
let min = numbers.map(Math.min);
let max = numbers.map(Math.max);
console.log(sqrt);
console.log(pow);
console.log(cbrt);
console.log(min);
console.log(max);
function App() {
  return (

    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <BS5 />
    </div>
  );
}

export default App;
