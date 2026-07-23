// Define getUserData
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: "John" });
      } else {
        reject("Invalid user ID");
      }
    }, 1000);
  });
}

// Define getUserPosts
function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve([
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" }
        ]);
      } else {
        reject("No posts found for this user");
      }
    }, 1000);
  });
}

// Define getPostComments
function getPostComments(postId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (postId > 0) {
        resolve([
          { id: 1, text: "Great post!" },
          { id: 2, text: "Thanks for sharing" }
        ]);
      } else {
        reject("Invalid post ID");
      }
    }, 1000);
  });
}

// Async function using getUserData
async function getDataWithAsync() {
  try {
    const user = await getUserData(1);
    console.log("User:", user);
  } catch (error) {
    console.error("Error:", error);
  }
}

getDataWithAsync();

// Error handling with try/catch
async function fetchUserData(userId) {
  try {
    const user = await getUserData(userId);
    const posts = await getUserPosts(user.id);
    return { user, posts };
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error; // Re-throw if needed
  }
}

// Parallel with Async/Await
async function getAllUsers() {
  // Sequential (slow)
  const user1 = await getUserData(1);
  const user2 = await getUserData(2);
  const user3 = await getUserData(3);

  // Parallel (fast)
  const [u1, u2, u3] = await Promise.all([
    getUserData(1),
    getUserData(2),
    getUserData(3)
  ]);

  return [u1, u2, u3];
}

// Rewrite the callback hell example using async/await
async function run() {
  try {
    const user = await getUserData(1);
    console.log("User:", user);

    const posts = await getUserPosts(user.id);
    console.log("Posts:", posts);

    const comments = await getPostComments(posts[0].id);
    console.log("Comments:", comments);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();



