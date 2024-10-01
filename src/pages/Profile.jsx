// Profile.jsx

import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: black;
  color: white; // Ensures text is visible against the black background
  min-height: 100vh; // Ensures the entire viewport is covered
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <h1>Profile Page</h1>
    </ProfileContainer>
  );
};  

export default Profile;