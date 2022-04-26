import './about.css';
import SectionHeader from '../section header/SectionHeader';
import AboutPicLg from '../../images/About-us-chef.png';
import AboutPicSm from '../../images/About-us-chef Mobile.png';
function About() {
  return (
    <>
      <SectionHeader>About Us</SectionHeader>
      <section className='section-container' id='about'>
        <div className='about-pic-box-lg'>
          <img src={AboutPicLg} alt='Chef-pic' />
        </div>
        <div className='about-pic-box-sm'>
          <img src={AboutPicSm} alt='Chef-pic' />
        </div>

        <div className='about-text'>
          <p>
            We are a restaurant that provides a variety of food and beverages of
            the highest quality through a process of manufacture by experts and
            a professional way by utilizing high technology and high quality
            food ingredients, and this is all prepared, only for{' '}
            <span>our customers</span> <br />
            <br />
            In contrast to other side hustle's restaurant, Foodie' was made with
            explicit expectation to appear as something else. We realize
            numerous individuals love our special meals, yet a large number
            loathe or are unconscious of the regularly unfortunate fixings that
            make run-of-mill Foodie' nourishments <span>tastes so good</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
