import React from 'react'
import './offer.css'

const Offer = () => {
  return (
    <>
    <section className='offer'>
        <div className='offerLeft'>
            <h2 className='offerText1'>Don't forget to grab this one, it's free!</h2>
            <div className='offerText2'>Download the Ultimate con tomate guide.</div>
        </div>
        <div className='offerRight'>
            <button className='offerButton'>Call to action</button>
        </div>
    </section>
    </>
  )
}

export default Offer