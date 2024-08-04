import React from 'react';
import { useParams } from 'react-router-dom';

function UserDetails() {
  // const params = useParams();
  // const userId = params.userId;

  // ----------------OR----------------
  const { userId } = useParams();

  return (
    <>
      <h1>Details about user: {userId}</h1>
    </>
  );
}

export default UserDetails;
