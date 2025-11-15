import React from 'react';
import "../Styles/Commerce.css";

const Commerce = () => {
    return (
    <div className="commerce">
      <section className="section">
        <h1 className="heading">
          The one commerce platform behind it all
        </h1>
        <div className="divider"></div>

        <p className="sell">
          Sell online and in person. Sell locally and globally. Sell direct and wholesale. Sell on desktop and mobile.
        </p>
      </section>

      <div className='pics'>
        <img src= "src/assets/images/Glossier.avif" alt="Glossier" className='pics-1' />
        <img src= "src/assets/images/Makepeoplehappy.avif" alt="Makepeoplehappy" className='pics-2'/>
        <img src= "src/assets/images/vacation.avif" alt="vacation" className='pics-3'/>



      </div>

      <section className="enterprise">
        <h2 className="subheading">
          For everyone from entrepreneurs to enterprise
        </h2>

        <p className="stats">
          Millions of merchants of every size have collectively made over <strong>$1,000,000,000,000</strong> in sales on Shopify.
        </p>
      </section>
    </div>
  );
}

export default Commerce;