import './home.css';
import heroPic from '../../images/Hero-chef.png';
import Button from '../Button/Button';

function Home() {
  return (
    <section id='home'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1 className='heading-bold'>
            Eat <span className='orange'>today,</span>{' '}
          </h1>
          <h1 className='heading-light'>
            Live another <span className='orange'> day.</span>
          </h1>
          <p>
            We provide the best and most delicious food based on high quality
            ingredients that are produced and maintained by high tech machines
            and cooked by our very best.
          </p>
          <Button>ORDER NOW</Button>
        </div>
        <div className='hero-image-box'>
          <img src={heroPic} alt='Hero-chef Pic' />
        </div>
      </div>
    </section>
  );
}

export default Home;
