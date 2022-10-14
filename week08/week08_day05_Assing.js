// Q-1) Write a tagged function to print the following sentence:
// Homework must be at least 80% to ensure my future.
// Attendance must be at least 80% to ensure my success.
// 1 variable for Homework/Attendance.
// 1 variable for 80 (percentage).
// 1 variable for future/success.

function taggedFunction (Homework, percentage, goal) {
    console.log(`${Homework} must be at least ${percentage} to ensure my ${goal}.`);
}
taggedFunction("Homework", "80%", "future");
taggedFunction("Attendance", "80%", "success");