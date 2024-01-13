// DonationPage.js
import React from 'react';
import Heroimage from './Heroimg';
import strongwoman from './assets/images/strongwoman.jpg';
import './DonatePage.css';
// import Pesapal from './test'
import Payment from './Paymentui';

const DonationPage = () => {
  return (
    <>
      <section className='DonationPages' id='Donationpage'>
        <div className='DonationPages' id='donationImg'>
          <Heroimage
            img={strongwoman}
          />
        </div>
        <h1 className='donationHeading'>
          GREAT FUTURES ARE BUILT ON SMALL CHARITY
        </h1>
      </section>
      <section className='DonationPayment' id='donationpayment'>
        <Payment />
      </section>
    </>
  );
};

export default DonationPage;
