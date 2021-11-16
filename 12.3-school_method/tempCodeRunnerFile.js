const findPerson = (school, tOrS, id) => {
  if (tOrS === `teacher`) {
    const teach = school.teachers.filter(teacher => teacher.id === id)
    return teach;
  } else {
    const stud = school.students.filter(student => student.id === id)
    return stud;
  }
}

console.log(findPerson(school, `teacher`, 1));
console.log(findPerson(school, `student`, 12));