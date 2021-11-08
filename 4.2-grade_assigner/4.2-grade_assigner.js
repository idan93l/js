const gradeNumber = prompt(`Enter your grade`);

const grade = a => {
  if (a <= 64) {
    console.log(`F`);
  }

  else if (a <= 69) {
    console.log(`D`)
  }

  else if (a <= 79) {
    console.log(`C`)
  }

  else if (a <= 89) {
    console.log(`B`)
  }

  else if (a <= 100) {
    console.log(`A`)
  }
}

grade(gradeNumber);