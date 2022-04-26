import SectionHeader from '../section header/SectionHeader';
import Button from '../Button/Button';
import './contact.css';
import { IoLocationSharp, IoCall, IoMail } from 'react-icons/io5';
function Contact() {
  return (
    <>
      <SectionHeader>Contact Us</SectionHeader>
      <section className='contact-container' id='contact'>
        <p>
          Want to make a reservation ? Let us know so we can start preparation
          on serving you a <span>world class meal</span>{' '}
        </p>
        <div className='input-flex'>
          <div className='input-box'>
            <label htmlFor=''>First Name</label>
            <input type='text' />
          </div>
          <div className='input-box'>
            <label htmlFor=''>Last Name</label>
            <input type='text' />
          </div>
          <div className='input-box'>
            <label htmlFor=''>Email</label>
            <input type='email' />
          </div>
          <div className='input-box'>
            <label htmlFor=''>Phone Number</label>
            <input type='tel' />
          </div>
        </div>

        <div className='message-box'>
          <label htmlFor=''>Message</label>
        </div>

        <textarea name='' id='' cols='30' rows='10'></textarea>
        <div className='contact-btn-container'>
          <Button>MAKE RESERVATION</Button>
        </div>
        <div className='icon-container'>
          <div className='icon-item'>
            <div className='map-wrapper'>
              <IoLocationSharp color='#f58634' size={'20px'} />
            </div>
            <p>
              Plot A, Johnson Crescent, <br className='break' /> Lekki Phase 1,
              Lagos, Nigeria
            </p>
          </div>
          <div className='icon-item'>
            <div className='phone-wrapper'>
              <IoCall color='#f58634' size={'20px'} />
            </div>
            <p>
              08012312312 <br />
              09013213213
            </p>
          </div>
          <div className='icon-item'>
            <div className='message-wrapper'>
              <IoMail color='#f58634' size={'20px'} />
            </div>
            <p>
              foodie.com@gmail.com <br />
              foodiereservations@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
