function func(){
  const student = new Object();
  return student;
}
let student = func();

// проверка 
student.university = "МГУ";
function showfunc(student) {
  for (let key in student) {
    if (student.hasOwnProperty(key)) {
        console.log(key); 
    }   
  }
}
showfunc(student);