// src/components/ItemDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const item = data.find(i => i.id.toString() === id); // Ensure ID matches your data structure

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Temperature: {item.temp} °F</p>
      <p>Phase: {item.phase}</p>
      <p>Description: {item.description}</p> {/* Assuming you have a description field */}
      {/* Add any other details you want to show */}
    </div>
  );
};

export default ItemDetail;
