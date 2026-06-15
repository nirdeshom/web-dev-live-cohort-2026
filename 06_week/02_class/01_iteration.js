let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount
    // report[expense.category] = (report[expense.category] || 0) + expense.amount;

    return report;
  },
  { Food: 0, Utilities: 0 }
);

// console.log("Expense Report", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
    .filter((task)=> !task.completed)
    .sort((a, b)=> a.priority - b.priority)
 
// console.log(pendingSortedTasks);


let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

// movieRatings array ke har movie par loop chalega
let averageRatings = movieRatings.map((movie) => {

    // ratings array ke sabhi numbers ka total nikalna
    // sum accumulator hai aur rating current rating value hai
    let total = movie.ratings.reduce((sum, rating) => {
        return sum + rating;
    }, 0);

    // total ratings ko ratings ki length se divide karke average nikalna
    let average = total / movie.ratings.length;

    // Ek naya object return kar rahe hain
    // title same rahega aur average ko 2 decimal tak convert kar rahe hain
    return {title: movie.title, averageRatings: average.toFixed(2)};
});

// Final result print karna
console.log(averageRatings);
