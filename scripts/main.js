// Read the data from the foods.json file
fetch('data/foods.json')
  .then(response => response.json())
  .then(data => {
    // Get the container element to display the street foods
    const container = document.getElementById('foods-container');

    // Loop through the street foods data and create HTML elements to display them
    data.forEach(food => {
      // Create a div element for each street food
      const foodDiv = document.createElement('div');
      foodDiv.classList.add('food');

      // Create an image element for the street food image
      const foodImage = document.createElement('img');
      foodImage.src = '../assets/' + food.image;
      foodImage.alt = food.name;

      // Create a heading element for the street food name
      const foodName = document.createElement('h3');
      foodName.textContent = food.name;

      // Create a paragraph element for the street food description
      const foodDescription = document.createElement('p');
      foodDescription.textContent = food.description;

      // Create a button element for the street food price
      const foodPrice = document.createElement('button');
      foodPrice.textContent = food.price;

      // Append the image, name, and description elements to the food div
      foodDiv.appendChild(foodImage);
      foodDiv.appendChild(foodName);
      foodDiv.appendChild(foodDescription);
      foodDiv.appendChild(foodPrice);

      // Append the food div to the container element
      container.appendChild(foodDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
