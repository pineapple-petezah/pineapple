const searchInput = document.getElementById('search');
        const boxes = document.querySelectorAll('.box');

        searchInput.addEventListener('input', () => {
            const searchText = searchInput.value.toLowerCase();

            boxes.forEach(box => {
                const text = box.querySelector('p').textContent.toLowerCase();
                if (text.includes(searchText)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });