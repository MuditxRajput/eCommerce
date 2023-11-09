import React from 'react';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';

const AboutPage = () => {
  const name = {
    name: "About us"
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Hero name={name} />
      </div>
      <div className="flex-grow">
        {/* Content of your AboutPage */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
