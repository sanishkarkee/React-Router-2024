import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  // -----read value----update search parameter

  // Reading search parameters
  //Retrieve the value of 'filter' from the URL
  const showActiveUsers = searchParams.get('filter') === 'active';

  return (
    <>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button
          onClick={() => {
            return setSearchParams({ filter: 'active' });
          }}
        >
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filters</button>
      </div>

      {showActiveUsers ? (
        <h1>Showing active users</h1>
      ) : (
        <h1>Showing all users</h1>
      )}
    </>
  );
}

export default Users;
