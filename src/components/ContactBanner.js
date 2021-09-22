import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

const ContactBannerStyles = styled.div`
  h3 {
    color: var(--cyan);
  }

  PText {
    font-size: 6.6rem;
  }

  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Have a project in mind?</PText>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Me Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}
