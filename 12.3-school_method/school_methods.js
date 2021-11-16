const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "William",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

// 1.
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

// 2.
const assignStudent = (school, sId, subject) => {
  const teacher = school.teachers.find(t => t.subjects.includes(subject));
  if (teacher.capacityLeft === 0) {
    console.log(`Sorry, no available teachers left`);
  } else {
    teacher.students.push(sId);
    teacher.capacityLeft--;
  }
}

assignStudent(school, 10, `history`);
assignStudent(school, 11, `ethics`);
console.log(school);
assignStudent(school, 13, `history`);

// 3.
const assignTeachersSubject = (school, tId, newSub) => {
  const teach = school.teachers.find(teacher => teacher.id === tId);
  let bool = false;
  teach.subjects.forEach(sub => {
    if (sub === newSub) {
      bool = true;
    }
  })
  if (bool === false) {
    teach.subjects.push(newSub);
  }
}

assignTeachersSubject(school, 2, `sports`)
console.log(school);