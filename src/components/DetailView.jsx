import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailView.css'; // Import the CSS file


const DetailView = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const [itemDetails, setItemDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`YOUR_DETAIL_API_ENDPOINT/${id}`); // Replace with actual detail endpoint
        const result = await response.json();
        setItemDetails(result);
      } catch (error) {
        console.error('Error fetching item details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!itemDetails) return <div>No details found for this item.</div>;

  return (
    <div>
      <h1>{itemDetails.name}</h1>
      <p>Temperature: {itemDetails.temperature} °F</p>
      <p>Moon Rise: {itemDetails.moonRise}</p>
      <p>Moon Set: {itemDetails.moonSet}</p>
      <p>Phase: {itemDetails.phase}</p>
      {/* Add more details as necessary */}
    </div>
  );
};

export default DetailView;
