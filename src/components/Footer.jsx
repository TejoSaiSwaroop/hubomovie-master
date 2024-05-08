import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Tejo Sai Swaroop. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: #282c34;
  color: white;
  text-align: center;
  padding: 20px;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export default Footer;