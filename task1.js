const person = {
  name: 'Andrei',
  surname: 'Ivanov',
  age: 18,
};

const student = Object.create(person);

student.university = "МГУ";
student.city = "Москва";

function func(student) {
  for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key); 
    }   
  }
}
func(student);