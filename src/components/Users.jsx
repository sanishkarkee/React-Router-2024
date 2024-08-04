import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  // -----read value----update search parameter
  //Eg:---electronics---Category=electronics

  // Reading search parameters
  //Retrieve the value of 'filter' from the URL
  const showActiveUsers = searchParams.get('filter') === 'active';

  /*working mechanism:
  1] searchParams.get('filter') le filter paramete ko value get garxa i.e active
  2] aba 'active' === 'active' compare hunxa,,ab 'true' showActiveUsers ma set
    */

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
