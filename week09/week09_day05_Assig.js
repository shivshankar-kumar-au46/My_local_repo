// Q1. Create a Student class and initialize it with a name and roll number.
// create an object of that class in the same file and print name and roll
// number.

class Student {
    constructor (name, rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }

    getStudentName(){
       console.log(`Student name is ${this.name} and his/her roll numbmer is ${this.rollNumber}`);
    }

   }
    
   var student1 = new Student ('shivam',120120);
   student1.getStudentName()


// Q2. Write the above code to enter details of 10 students, and take input
// from the user.
// Hint: use loops.
let arr = [];
class Student {
    constructor (name, rollNumber){
        this.name = name;
        this.rollNumber = rollNumber;
    }

    getStudentName(){
       console.log(`Student name is ${this.name} and his/her roll numbmer is ${this.rollNumber}`);
    }

   }
    for (let i = 1; i<=10; i++) {
   var student1 = new Student (prompt('Enter Student Name'),prompt('Enter Student Roll Number'));
   student1.getStudentName()
    }

    for (let i = 1; i<=10; i++) {
        arr.push(new Student (prompt('Enter Student Name'),prompt('Enter Student Roll Number')));
         }



         let mat = [[1,2,3],
           [5,6,7],
           [9,10,11],
]


