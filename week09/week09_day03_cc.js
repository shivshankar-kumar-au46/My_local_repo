// Q1. Create a Student class and initialize it with name and roll number. Make
// methods to :
// 1. display - It should display all the information of the student.
// 2. setAge - It should assign age to student
// 3. setMarks - It should assign marks to the student.

class student {
    constructor (name,roll_number) {
        this.name = name;
        this.roll_number = roll_number;
    }
    display () {
     console.log(` ${this.name} has ${this.roll_number} roll number,his age is  ${this.age} and he got the marks  ${this.marks}.`)
    }
    setAge (age) {
        this.age = age;
    }
    setMarks (marks) {
        this.marks = marks;
    }
}
let studentDetails = new student ("Ramesh","AUFS047");
studentDetails.setAge(28);
studentDetails.setMarks(100);
studentDetails.display();
