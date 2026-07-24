// Basic fetch
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log("Response object:", response);
        console.log("Status:", response.status);
        console.log("OK:", response.ok);
        return response.json();  // Parse JSON
    })
    .then(data => {
        console.log("User data:", data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
    async function getUser(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch user:", error);
    }
}

// Use it
const user = await getUser(1);
console.log(user);
// Fetch a single user
async function fetchSingleUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    console.log("Single User:", user);
  } catch (error) {
    console.error("Error fetching single user:", error);
  }
}

// Fetch all users
async function fetchAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log("All Users:", users);
  } catch (error) {
    console.error("Error fetching all users:", error);
  }
}

// Fetch posts for user 1
async function fetchPostsForUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
    const posts = await response.json();
    console.log(`Posts for User ${id}:`, posts);
  } catch (error) {
    console.error(`Error fetching posts for user ${id}:`, error);
  }
}

// Run them
(async () => {
  await fetchSingleUser(1);
  await fetchAllUsers();
  await fetchPostsForUser(1);
})();
