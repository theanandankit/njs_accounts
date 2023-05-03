const name = 'John';
console.log('Hello, ' + name + '!'); // Output: "Hello, John!"


const x = 10;
const y = 0;
if (y === 0) {
  console.error('Divide by zero error!');
} else {
  console.log(x / y);
}


const age = 15;
if (age < 18) {
  console.warn('This website may contain mature content');
}


const user = {
    name: 'Jane',
    age: 25,
    email: 'jane@example.com'
  };
  console.info('User information:', user);

  
function add(x, y) {
    console.debug(`Adding ${x} and ${y}`);
    return x + y;
}
console.log(add(2, 3)); // Output: "5"
  