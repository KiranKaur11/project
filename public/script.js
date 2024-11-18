// Get the button and the container for displaying the data
const fetchDataBtn = document.getElementById('fetchDataBtn');
const itemsContainer = document.getElementById('itemsContainer');

// Event listener for the button
fetchDataBtn.addEventListener('click', async () => {
  try {
    // Fetch data from the server (Ensure this matches your backend route)
    const response = await fetch('/api/data');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the JSON data
    const data = await response.json();

    // Clear the existing items
    itemsContainer.innerHTML = '';

    // Loop through the data and create HTML elements to display it
    data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      `;
      itemsContainer.appendChild(itemDiv); // Append the new item
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
