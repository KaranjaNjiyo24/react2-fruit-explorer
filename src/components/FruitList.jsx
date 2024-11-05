import React from 'react';

const FruitList = ({ fruits, setSelectedFruit, deleteFruit }) => {
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <p>{fruit.name}</p>
            <button onClick={() => setSelectedFruit(fruit)}>Edit</button>
            <button onClick={() => deleteFruit(fruit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
