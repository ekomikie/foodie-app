import { useState } from 'react';
import './navbar.css';
import styled from 'styled-components';

const styles = `background-color:transparent;
color:white;
font-size: 18px;
width:fit-content;
padding: 3px;
font-weight: lighter;
cursor:pointer;
text-decoration: none;
margin: 16px;
position: relative;

&::before {
  content: '';
position: absolute;
left: 0;
bottom: 0;
width: 0;
height: 2px;
background-color: #f58634;
transition: all 0.45s;
}


&:hover::before {
  color:white;
  width: 100%;
  
}
&:disabled {
  cursor: default;
  opacity: 0.7;
}`;

const Button = styled.a`
  ${styles};
`;

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    ` color: #f58634;
    border-bottom: 2px solid #f58634;
    opacity: 1; 
    &:hover::before {
      width: 0;
      background-color: transparent;
    }
    
  `}
`;

const types = ['Home', 'About', 'Products', 'Contact'];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div className='toggle-flex'>
      {types.map((type) => (
        <ButtonToggle
          href={`/#${active.toLowerCase()}`}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <span className='nav-logo'>Foodie'</span>
      <div className={`nav-items ${isOpen && 'open'}`}>
        {/* <a href='/home' className='active'>
          Home
        </a>
        <a href='/about'>About</a>
        <a href='/service'>Products</a>
        <a href='/contact'>Contacts</a> */}
        <ToggleGroup />
      </div>
      <div
        className={`nav-toggle ${isOpen && 'open'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bar'></div>
      </div>
    </nav>
  );
}

export default Navbar;
