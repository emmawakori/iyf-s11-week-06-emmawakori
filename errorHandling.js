async function fetchUser(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (response.status === 404) {
      // Return a default user object if not found
      return { id: 0, name: "Default User", email: "default@example.com" };
    }

    if (!response.ok) {
      // Handle other errors (500, network issues, etc.)
      throw new Error(`Error: ${response.status}`);
    }

    // Parse and return JSON if everything is fine
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    // Return a fallback user object if fetch itself fails
    return { id: -1, name: "Fallback User", email: "fallback@example.com" };
  }
}

// Example usage
(async () => {
  const user = await fetchUser(123); // Try with an ID that may not exist
  console.log("Fetched user:", user);
})();
