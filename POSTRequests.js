async function createPost(title, body, userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title,
            body,
            userId
        })
    });
    
    if (!response.ok) {
        throw new Error("Failed to create post");
    }
    
    return response.json();
}

// Use it
const newPost = await createPost(
    "My First Post",
    "This is the content of my post.",
    1
);
console.log("Created:", newPost);

 const form = document.getElementById('postForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent page reload

      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;

      // Display the submitted post
      result.innerHTML = `
        <div class="post">
          <h3>${title}</h3>
          <p>${content}</p>
        </div>
      `;

      // Clear the form
      form.reset();
    });