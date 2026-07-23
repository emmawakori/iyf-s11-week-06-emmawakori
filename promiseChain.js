// Utility function to create a promise with random delay
function randomDelayPromise(name) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 2000) + 500; // 500–2500 ms
    setTimeout(() => {
      console.log(`${name} finished after ${delay} ms`);
      resolve();
    }, delay);
  });
}

// Define three functions
function taskOne() {
  return randomDelayPromise("Task One");
}

function taskTwo() {
  return randomDelayPromise("Task Two");
}

function taskThree() {
  return randomDelayPromise("Task Three");
}

// Chain them together and time execution
async function runTasks() {
  console.time("Total Execution Time");
  await taskOne();
  await taskTwo();
  await taskThree();
  console.timeEnd("Total Execution Time");
}

// Run
runTasks();
