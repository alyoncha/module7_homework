const person = {
  name: 'Andrei',
  surname: 'Ivanov',
  age: 18,
};

function func(name, person) {
  let flag = false;
  for (let key in person) {
    if (name === person[key]){
      flag = true;
      break
    }
  }
  console.log(flag)    
}
func('Andrei', person);