import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Order confirmed!</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default OrderSummary;

/* ----NOTE:
1]  navigate(-1) le page lai 1 step back move garauxa, (-2) le 2 steps back, +1 le 1 step forward garauxa
  */
