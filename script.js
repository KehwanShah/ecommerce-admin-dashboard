document.addEventListener('DOMContentLoaded', () => {

    // 1. Navigation Click Effect
    const navItems = document.querySelectorAll('.sidebar nav ul li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(li => li.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // 2. Add New Table Record Action
    const addBtn = document.getElementById('addRecordBtn');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            const customer = prompt("Customer Name:");
            if (customer && customer.trim() !== "") {
                const orderId = '#ORD-' + Math.floor(1000 + Math.random() * 9000);
                const tableBody = document.getElementById('dataTableBody');
                
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${orderId}</td>
                    <td>${customer.trim()}</td>
                    <td>JavaScript Dynamic Logic</td>
                    <td>MySQL 8.0</td>
                    <td>$250.00</td>
                    <td><span class="status-tag completed">Completed</span></td>
                `;
                tableBody.prepend(newRow);
                alert("Record for " + customer + " added!");
            }
        });
    }

    // 3. Search Bar Live Filtering
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const filterValue = e.target.value.toLowerCase();
            const rows = document.querySelectorAll('#dataTableBody tr');

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(filterValue)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

});