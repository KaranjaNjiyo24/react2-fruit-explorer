import React, { useState, useEffect } from 'react';

const FruitForm = ({ addFruit, selectedFruit, updateFruit }) => {
  const [formData, setFormData] = useState({
    name: '',
    color: '',
    taste: '',
    season: '',
    origin: '',
    fun_fact: ''
  });

  useEffect(() => {
    if (selectedFruit) {
      setFormData(selectedFruit);
    }
  }, [selectedFruit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFruit) {
      updateFruit(formData);
    } else {
      addFruit(formData);
    }
    setFormData({
      name: '',
      color: '',
      taste: '',
      season: '',
      origin: '',
      fun_fact: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" required />
      <input type="text" name="taste" value={formData.taste} onChange={handleChange} placeholder="Taste" required />
      <input type="text" name="season" value={formData.season} onChange={handleChange} placeholder="Season" required />
      <input type="text" name="origin" value={formData.origin} onChange={handleChange} placeholder="Origin" required />
      <input type="text" name="fun_fact" value={formData.fun_fact} onChange={handleChange} placeholder="Fun Fact" required />
      <button type="submit">{selectedFruit ? 'Update' : 'Add'} Fruit</button>
    </form>
  );
};

export default FruitForm;
