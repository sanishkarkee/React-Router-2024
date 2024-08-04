import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  const params = useParams();
  const userId = params.userId;

  return (
    <>
      <h1>Details about user: {userId}</h1>
    </>
  );
}

export default UserDetails;
