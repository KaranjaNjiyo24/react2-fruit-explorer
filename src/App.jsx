import React, { useState, useEffect } from 'react'; 
import FruitList from './components/FruitList';
import FruitForm from './components/FruitForm';

const App = () => {
  const [fruits, setFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  useEffect(() => {
    fetchFruits();
  }, []);

  // Fetch all fruits
  const fetchFruits = async () => {
    const response = await fetch('http://localhost:3000/fruits');
    const data = await response.json();
    setFruits(data);
  };

  // Add a new fruit
  const addFruit = async (newFruit) => {
    const response = await fetch('http://localhost:3000/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFruit),
    });
    const data = await response.json();
    setFruits([...fruits, data]);
  };

  // Update an existing fruit
  const updateFruit = async (updatedFruit) => {
    await fetch(`http://localhost:3000/fruits/${updatedFruit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFruit),
    });
    setFruits(fruits.map(fruit => (fruit.id === updatedFruit.id ? updatedFruit : fruit)));
  };

  // Delete a fruit
  const deleteFruit = async (id) => {
    await fetch(`http://localhost:3000/fruits/${id}`, {
      method: 'DELETE',
    });
    setFruits(fruits.filter(fruit => fruit.id !== id));
  };

  return (
    <div>
      <h1>Fruit App</h1>
      <FruitForm addFruit={addFruit} selectedFruit={selectedFruit} updateFruit={updateFruit} />
      <FruitList fruits={fruits} setSelectedFruit={setSelectedFruit} deleteFruit={deleteFruit} />
    </div>
  );
};

export default App;
