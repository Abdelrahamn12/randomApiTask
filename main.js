document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const fetchButton = document.getElementById('fetchButton');

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    async function fetchRandomContent() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomItem = data[randomIndex];

            contentDiv.textContent = JSON.stringify(randomItem, null, 2); 

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            contentDiv.textContent = 'Failed to fetch content.';
        }
    }

    fetchButton.addEventListener('click', fetchRandomContent);
});
