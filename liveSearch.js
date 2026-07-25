let allUsers = [];

async function init() {
    allUsers = await fetchUsers();
    displayUsers(allUsers);
    
    // Set up search
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = allUsers.filter(user => 
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query)
        );
        displayUsers(filtered);
    });
}
    const users = [
      { name: "Emma Kariuki", email: "emma.kariuki@example.com", city: "Nairobi" },
      { name: "Eunice Owenje", email: "eunice.owenje@example.com", city: "Mombasa" },
      { name: "Mary Kamau", email: "mary.kamau@example.com", city: "Kisumu" },
      { name: "Patrick Mwangi", email: "patrick.mwangi@example.com", city: "Nairobi" }
    ];

    const searchInput = document.getElementById('searchInput');
    const sortSelect = document.getElementById('sortSelect');
    const cityFilter = document.getElementById('cityFilter');
    const tbody = document.querySelector('#userTable tbody');

    function renderTable() {
      let filteredUsers = [...users];

      // Search
      const searchValue = searchInput.value.toLowerCase();
      if (searchValue) {
        filteredUsers = filteredUsers.filter(user =>
          user.name.toLowerCase().includes(searchValue) ||
          user.email.toLowerCase().includes(searchValue)
        );
      }

      // Filter by city
      const cityValue = cityFilter.value;
      if (cityValue) {
        filteredUsers = filteredUsers.filter(user => user.city === cityValue);
      }

      // Sort
      const sortValue = sortSelect.value;
      filteredUsers.sort((a, b) => {
        if (sortValue === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      // Render
      tbody.innerHTML = '';
      filteredUsers.forEach(user => {
        const row = `<tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.city}</td>
        </tr>`;
        tbody.innerHTML += row;
      });
    }

    // Event listeners
    searchInput.addEventListener('input', renderTable);
    sortSelect.addEventListener('change', renderTable);
    cityFilter.addEventListener('change', renderTable);

    // Initial render
    renderTable();