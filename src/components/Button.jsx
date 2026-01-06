import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
        <button type="button" className="button">
          <div className="button-top">3D My CV</div>
          <div className="button-bottom" />
          <div className="button-base" />
        </button>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem; /* space from Skills link */

  .button {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    border: none;
    padding: 0 6px 8px;
    min-width: 7.5em;   /* smaller width */
    height: 36px;       /* compact height */
    box-sizing: border-box;
    background: transparent;
    font: inherit;
    cursor: pointer;
  }

  .button-top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 0;
    padding: 6px 14px;
    font-size: 0.9rem;     /* smaller font */
    font-weight: 600;
    color: #fff;
    text-shadow: 0 -1px rgba(0, 0, 0, .25);
    transition: transform .2s;
  }

  .button:active .button-top {
    transform: translateY(4px);
  }

  .button-top::after {
    content: '';
    position: absolute;
    z-index: -1;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(#6366f1, #4338ca);
    box-shadow: inset 0 0 0px 1px rgba(255, 255, 255, .2),
                0 1px 2px 1px rgba(255, 255, 255, .15);
    transition: .2s;
  }

  .button-bottom {
    position: absolute;
    z-index: -1;
    bottom: 3px;
    left: 3px;
    border-radius: 6px;
    width: calc(100% - 6px);
    height: calc(100% - 7px);
    background-color: #312e81;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.4),
                inset 0 -1px 2px rgba(0,0,0,0.4);
    transition: .2s;
  }

  .button:active .button-bottom {
    padding-top: 0;
  }

  .button-base {
    position: absolute;
    z-index: -2;
    top: 3px;
    left: 0;
    border-radius: 8px;
    width: 100%;
    height: calc(100% - 3px);
    background-color: rgba(0,0,0,.12);
    box-shadow: 0 1px 1px rgba(255,255,255,.6),
                inset 0 2px 2px rgba(0,0,0,.25);
  }
`;

export default Button;
