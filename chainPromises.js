// After refactoring to Promises:
getUserData(1)
    .then(user => {
        console.log("User:", user);
        return getUserPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getPostComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    //promise.all
    // Run multiple promises in parallel
const promise1 = getUserData(1);
const promise2 = getUserData(2);
const promise3 = getUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All users:", results);
        // results is an array [user1, user2, user3]
    })
    .catch(error => {
        // If ANY promise fails, this runs
        console.error("One failed:", error);
    });

    //promise.race
    // First to complete wins
const fast = new Promise(resolve => setTimeout(() => resolve("Fast!"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow!"), 500));

Promise.race([fast, slow])
    .then(result => {
        console.log("Winner:", result);  // "Fast!"
    });

    // Simulated async fetch function
function fetchUser(userId) {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 2000) + 500;
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: `User ${userId}` });
      } else {
        reject(`Invalid user ID: ${userId}`);
      }
    }, delay);
  });
}

// Fetch 3 users simultaneously
async function fetchAllUsers() {
  try {
    console.time("Total Execution Time");

    const [user1, user2, user3] = await Promise.all([
      fetchUser(1),
      fetchUser(2),
      fetchUser(3)
    ]);

    console.log("All users fetched:");
    console.log(user1);
    console.log(user2);
    console.log(user3);

    console.timeEnd("Total Execution Time");
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

// Run
fetchAllUsers();
