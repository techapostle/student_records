// Manage a list of student records. Each student has a name, an id, and a GPA.
// The program should support the following operations:
// 1. Sort the list by GPA
//    - Bubble sort (ascending, and descending)
//    - Insertion sort (ascending, and descending)

const readline = require("readline");

// Define the students array
let students = [
  { name: "Alice", id: 1, gpa: 3.5 },
  { name: "Bob", id: 2, gpa: 3.2 },
  { name: "Charlie", id: 3, gpa: 3.9 },
  { name: "David", id: 4, gpa: 3.1 },
  { name: "Eve", id: 5, gpa: 3.7 },
  { name: "Frank", id: 6, gpa: 3.8 },
  { name: "Grace", id: 7, gpa: 3.3 },
  { name: "Helen", id: 8, gpa: 3.6 },
  { name: "Ivy", id: 9, gpa: 3.4 },
  { name: "Jack", id: 10, gpa: 3.0 },
];

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to show the menu and handle user input
function showMenu() {
  console.log("\nWelcome to the student record manager!");
  console.log("Menu");
  console.log("-----------------");
  console.log("1. Sort");
  console.log("2. Display the list of students");
  console.log("3. Exit");

  rl.question("Select an option: ", function (choice) {
    switch (parseInt(choice)) {
      case 1:
        // present the sorting options
        console.log("Sorting Options");
        console.log("-----------------");
        console.log("1. Bubble sort (ascending)");
        console.log("2. Bubble sort (descending)");
        console.log("3. Insertion sort (ascending)");
        console.log("4. Insertion sort (descending)");

        rl.question("Select a sorting option: ", function (sortChoice) {
          switch (parseInt(sortChoice)) {
            case 1:
              console.log("Bubble sort (ascending)");
              // Implement the bubble sort (ascending) logic here
              break;
            default:
              console.log("Invalid sorting option. Please try again.");
              break;
          }
          showMenu(); // Show menu again after sorting
        });
        break;
      case 2:
        // display the list of students
        console.log("List of students:");
        for (let student of students) {
          console.log(
            `Name: ${student.name}, ID: ${student.id}, GPA: ${student.gpa}`
          );
        }
        showMenu(); // Show menu again after displaying
        break;
      case 3:
        // exit the program
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid option. Please try again.");
        showMenu(); // Show menu again for invalid option
        break;
    }
  });
}

// Start the program by showing the menu
showMenu();
