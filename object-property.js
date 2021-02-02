 const students = [
     {id:21,names:'x'},
     {id:221,names:'xy'},
     {id:231,names:'xyy'},
     {id:241,names:'xyyy'}
 ];

const names = students.map(s=>s.names);
const ids = students.map(s=>s.id);
const biggerStudents = students.filter(s=>s.id>300);
// const biggerOne = students.find(s=>s.id>150);
// console.log(names,ids,);
console.log(biggerStudents);
// console.log(biggerOne);