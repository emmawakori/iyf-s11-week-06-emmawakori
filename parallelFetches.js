const endpoints = [
      "https://jsonplaceholder.typicode.com/posts/1",
      "https://jsonplaceholder.typicode.com/users/2",
      "https://jsonplaceholder.typicode.com/todos/3"
    ];

    const resultsContainer = document.getElementById("results");

    // Kick off all fetches simultaneously
    const promises = endpoints.map(url =>
      fetch(url)
        .then(res => res.json())
        .catch(err => { throw err; })
    );

    // Use Promise.allSettled to handle both fulfilled and rejected
    Promise.allSettled(promises).then(results => {
      results.forEach((result, index) => {
        const div = document.createElement("div");
        div.classList.add("result");

        if (result.status === "fulfilled") {
          div.classList.add("success");
          div.innerHTML = `
            <h3>Endpoint ${index + 1} Success</h3>
            <pre>${JSON.stringify(result.value, null, 2)}</pre>
          `;
        } else {
          div.classList.add("error");
          div.innerHTML = `
            <h3>Endpoint ${index + 1} Error</h3>
            <p>${result.reason}</p>
          `;
        }

        resultsContainer.appendChild(div);
      });
    });
 
