import './product.css';
import SectionHeader from '../section header/SectionHeader';
import { IoCaretDown } from 'react-icons/io5';
import styled from 'styled-components';
import { useState } from 'react';

function Product() {
  const theme = {
    blue: {
      default: '#3f51b5',
      hover: '#283593',
    },
    pink: {
      default: '#e91e63',
      hover: '#ad1457',
    },
  };

  const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      opacity: 1;
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;

  Button.defaultProps = {
    theme: 'blue',
  };

  const Tab = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    margin: 0.5rem 0;
    font-size: 1.3rem;
    color: white;
    opacity: 0.6;
    background: #071f10;
    border: 0;
    outline: 0;
    border-bottom: 2px solid transparent;
    transition: ease border-bottom 250ms;
    &:hover {
      background: transparent;
      opacity: 1;
    }
    ${({ active }) =>
      active &&
      `
      border-bottom: 2px solid orange;
      color:orange;
      opacity: 1;
    `}
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 567px) {
      font-size: 1rem;
    }
  `;

  const allMeals = (
    <div className='All'>
      <h4>
        Breakfast <IoCaretDown size={'22px'} style={{ paddingTop: '10px' }} />{' '}
      </h4>
      <div className='all-meals'>
        <div className='meal meal-breakfast'>
          <div>
            {' '}
            Fried Pancake + StrawBerries + Honey syrup + Grape berries.
          </div>
        </div>
        <div className='meal meal-breakfast'>
          <div>Baked pancake + Strawberries + Honey syrup + Grape berries</div>
        </div>
        <div className='meal meal-breakfast'>
          <div>Bread + Omelette + Grilled hotdog + Meats + Honey syrup</div>
        </div>
      </div>
      <h4>
        Lunch <IoCaretDown size={'22px'} style={{ paddingTop: '10px' }} />{' '}
      </h4>
      <div className='all-meals'>
        <div className='meal meal-lunch'>
          <div>Baked bread + Grilled hotdogs + Vegs + Sauce + Ketchup</div>
        </div>
        <div className='meal meal-lunch'>
          <div>Hamburger + Nourished sauce + Ketchup</div>
        </div>
        <div className='meal meal-lunch'>
          <div>Beans + Bread + Omelettes + Vegs + Powdery pepper</div>
        </div>
      </div>
      <h4>
        Dinner <IoCaretDown size={'22px'} style={{ paddingTop: '10px' }} />{' '}
      </h4>
      <div className='all-meals'>
        <div className='meal meal-dinner'>
          <div>Rice + Peppery spice + Corn + Cabbage + Vegs</div>
        </div>
        <div className='meal meal-dinner'>
          <div>Chopped Macaroni + Sweetener + Ketchup +Omelette</div>
        </div>
        <div className='meal meal-dinner'>
          <div>Spaghetti + Sauce + Chopped meals + Tomato paste</div>
        </div>
      </div>
      <h4>
        Dessert <IoCaretDown size={'22px'} style={{ paddingTop: '10px' }} />{' '}
      </h4>
      <div className='all-meals'>
        <div className='meal meal-dessert'>
          <div>Chocolate brownies + Vanila flavour cream</div>
        </div>
        <div className='meal meal-dessert'>
          <div>Banana flavor cake + Grape berries + Sliced lemon fruit</div>
        </div>
        <div className='meal meal-dessert'>
          <div>
            Stuffed bread cake + Honey syrup + Strawberries + Grape berries
          </div>
        </div>
      </div>
    </div>
  );

  const breakfast = (
    <div className='all-meals'>
      <div className='meal meal-breakfast'>
        <div> Fried Pancake + StrawBerries + Honey syrup + Grape berries.</div>
      </div>
      <div className='meal meal-breakfast'>
        <div>Baked pancake + Strawberries + Honey syrup + Grape berries</div>
      </div>
      <div className='meal meal-breakfast'>
        <div>Bread + Omelette + Grilled hotdog + Meats + Honey syrup</div>
      </div>
    </div>
  );

  const lunch = (
    <div className='all-meals'>
      <div className='meal meal-lunch'>
        <div>Baked bread + Grilled hotdogs + Vegs + Sauce + Ketchup</div>
      </div>
      <div className='meal meal-lunch'>
        <div>Hamburger + Nourished sauce + Ketchup</div>
      </div>
      <div className='meal meal-lunch'>
        <div>Beans + Bread + Omelettes + Vegs + Powdery pepper</div>
      </div>
    </div>
  );

  const dinner = (
    <div className='all-meals'>
      <div className='meal meal-dinner'>
        <div>Rice + Peppery spice + Corn + Cabbage + Vegs</div>
      </div>
      <div className='meal meal-dinner'>
        <div>Chopped Macaroni + Sweetener + Ketchup +Omelette</div>
      </div>
      <div className='meal meal-dinner'>
        <div>Spaghetti + Sauce + Chopped meals + Tomato paste</div>
      </div>
    </div>
  );

  const dessert = (
    <div className='all-meals'>
      <div className='meal meal-dessert'>
        <div>Chocolate brownies + Vanila flavour cream</div>
      </div>
      <div className='meal meal-dessert'>
        <div>Banana flavor cake + Grape berries + Sliced lemon fruit</div>
      </div>
      <div className='meal meal-dessert'>
        <div>
          Stuffed bread cake + Honey syrup + Strawberries + Grape berries
        </div>
      </div>
    </div>
  );

  function TabGroup() {
    const [active, setActive] = useState(types[0]);
    return (
      <>
        <div className='tab-box'>
          {types.map((type) => (
            <Tab
              key={type}
              active={active === type}
              onClick={() => setActive(type)}
              className={type}
            >
              {type}
            </Tab>
          ))}
        </div>

        {active === 'All' && allMeals}
        {active === 'Breakfast' && breakfast}
        {active === 'Lunch' && lunch}
        {active === 'Dinner' && dinner}
        {active === 'Dessert' && dessert}
      </>
    );
  }

  const types = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert'];

  return (
    <section className='product-container' id='products'>
      <SectionHeader>Our Products</SectionHeader>

      <TabGroup />
    </section>
  );
}

export default Product;
