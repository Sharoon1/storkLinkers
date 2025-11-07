import Image from 'next/image'
import React from 'react'

function AirWarp() {
  const categories = [
    { 
      name: 'Airstrait', 
      image: '/HairStyles/Airstrait.webp',
      link: 'https://amzn.to/3JPglaH' // <-- ADD YOUR AFFILIATE LINK
    },
    { 
      name: 'Supersonic', 
      image: '/HairStyles/Supersonic Nural.webp',
      link: 'https://amzn.to/3LrEYLi' // <-- ADD YOUR AFFILIATE LINK
    },
    { 
      name: 'Airwrap Co-anda2x', 
      image: '/HairStyles/Co-anda2x.webp',
      link: 'https://amzn.to/43V2dn2' // <-- ADD YOUR AFFILIATE LINK
    },
    { 
      name: 'Airwrap', 
      image: '/HairStyles/Dyson Airwrap.webp',
      link: 'https://amzn.to/4qS7dD2' // <-- ADD YOUR AFFILIATE LINK
    },
  ];

  return (
    <>
    <div>
      <div className="relative w-full  h-[30vh] md:h-[50vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background image section */}
      <div className="absolute inset-0 flex">
        {/* Left black section */}
        <div className="w-1/2 bg-black"></div> 
        
        {/* Right image section */}
        <div className="w-1/2 relative overflow-hidden">
          <Image
            src="/HairStyles/image.webp" // <-- Replace with your specific background image
            alt="Dyson technology background"
            className="absolute inset-0 w-full h-full object-cover object-right-bottom"
            width={400}
            height={400} // Adjust object-position as needed
          />
        </div>
      </div>

      {/* Dyson text overlay */}
      <div className="absolute left-1/4 transform -translate-x-1/2 z-10"> {/* Adjust left-1/4 for horizontal positioning */}
        <p className="text-white text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-widest">
          Smart Hair Styler
        </p>
        <p className='text-white'>Style Boldly, Care Deeply.</p>
      </div>
    </div>
    </div>
    {/* Next part stat */}
   {/* part start */}
   <div>
      {/* --- 1. Hero Section (from Image 1) --- */}
      {/* <section className="relative w-full h-[60vh] md:h-[80vh] bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src="/HairStyles/bannerHeader2.webp" // <-- ADD YOUR MAIN BANNER IMAGE HERE
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* You can add text over the hero image here if needed */}
        {/* <div>

        <h2 className='text-4xl inset-1 text-white'>ths is grat heyd fhdddddddddddd ffffffffffffffff eeeeeeeeee dkkkkkkkkkkkkk kkkk </h2>
        </div>
      </section> */} 

      {/* --- 2. Category Section: 2-Cards (from Image 1) --- */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Compact and powerful */}
            <div className="relative h-[500px] bg-black text-white flex flex-col justify-end p-8 overflow-hidden rounded-lg">
              <img
                src="/HairStyles/firstImage.webp" // <-- ADD YOUR PURIFIER IMAGE HERE
                alt="Compact and powerful purifier"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <span className="text-xs bg-white text-black px-2 py-1 rounded-full mb-2 inline-block font-semibold">NEW</span>
                <h2 className="text-3xl md:text-2xl font-bold mb-2">Welcome to a New Era of Beauty</h2>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Your Hair Deserves the Best</h2>
                <p className="text-lg mb-4">Tired of heat damage ruining your shine? Most tools promise results but silently weaken your hair each day. This premium beauty tool changes everything style smarter, not harsher. Don’t wait until your hair loses its natural glow.</p>
                <a href='#product' className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">Shop now</a>
              </div>
            </div>
            {/* Card 2: Purifier in home setting */}
            <div className="relative h-[500px] bg-gray-100 flex flex-col justify-end p-8 overflow-hidden rounded-lg">
              <img
                src="/HairStyles/model2.webp" // <-- ADD YOUR PURIFIER IN HOME IMAGE HERE
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. Top Category Cards: 2-Cards (from Image 3) --- */}
      <section className="py-12 md:py-16 bg-white">
        <div id='product' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Beauty */}
            <div className="relative h-[500px] bg-black text-white flex flex-col justify-end p-8 overflow-hidden rounded-lg">
              <img
                src="/HairStyles/Airwrap i.d.webp" // <-- ADD YOUR BEAUTY IMAGE HERE
                alt="Beauty product"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Multi-Styler</h2>
                <a href='https://amzn.to/4owsyAn' target='blank' className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">Shop now</a>
              </div>
            </div>
            {/* Card 2: Floor care */}
            <div className="relative h-[500px] bg-black text-white flex flex-col justify-end p-8 overflow-hidden rounded-lg">
              <img
                src="/HairStyles/Refresh Styling Duo.webp" // <-- ADD YOUR FLOOR CARE IMAGE HERE
                alt="Floor care product"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Styling Duo</h2>
                <a href='https://amzn.to/4hVUF9G' target='blank' className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Bottom Category Grid: 4-Cards (from Image 3) --- */}
      <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            // The parent container MUST be 'relative' for fill={true} to work
            <div key={index} className="relative h-[350px] bg-black text-white flex flex-col justify-end p-6 overflow-hidden rounded-lg">
              
              {/* 2. Replace <img> with <Image> */}
              <Image
                src={category.image}
                alt={category.name}
                fill // 3. Use 'fill' to make it cover the parent div
                className="object-cover opacity-50" // 4. Keep your style classes
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                <a 
                  href={category.link} 
                  className="bg-white text-black px-5 py-2 rounded-full text-sm hover:bg-gray-200 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
   
    </>
  )
}

export default AirWarp