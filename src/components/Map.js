import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">IAmHere</h3>
          <PText>Arellano Street, Downtown, Tacloban City, Leyte</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/dir/Gaisano+Capital+Real,+78+Real+St,+Downtown,+Tacloban+City,+Leyte/Barangay+51-A,+Downtown,+Tacloban+City,+Leyte/@11.2360276,125.0029772,20z/data=!4m13!4m12!1m5!1m1!1s0x330877625d5565b5:0x641beba69c276285!2m2!1d125.0028881!2d11.2353544!1m5!1m1!1s0x3308772da5d98e33:0x4fa642005f75064b!2m2!1d125.0038758!2d11.236162"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
