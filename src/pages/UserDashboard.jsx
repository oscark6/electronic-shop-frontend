import React, { useEffect, useState } from 'react';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    } else {
      // Handle the case where user data is not found
      // You might want to redirect to login page or show an error
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-dashboard">
      <h2>Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
      {user.phone_number && <p>Phone Number: {user.phone_number}</p>}
      {user.role === 'seller' && (
        <div>
          <h3>Business Details:</h3>
          <p>Business Name: {user.business_name}</p>
          <p>Business Email: {user.business_email}</p>
          <p>Business Address: {user.business_address}</p>
        </div>
      )}
      <button onClick={() => localStorage.removeItem('user')}>Logout</button>
    </div>
  );
};

export default UserDashboard;
