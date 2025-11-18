// import React from 'react'

// function facebookPixels() {
//   return (
//     <>
//     <!-- Meta Pixel Code -->
// <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '837322405868498');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=837322405868498&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Meta Pixel Code -->
//     </>
//   )
// }

// export default facebookPixels

// components/FacebookPixel.jsx
import Script from 'next/script'; // 👈 Import the Next.js Script component
import React from 'react'; 


function FacebookPixel() {
  return (
    <>
      {/* Primary Pixel Code using next/script */}
      {/* strategy="afterInteractive" is a good default for tracking scripts */}
      <Script 
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ // 👈 Use dangerouslySetInnerHTML to inject the raw JS
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      
      {/* Noscript fallback */}
      <noscript>
        {/* Note the use of camelCase for inline style: style={{ display: 'none' }} */}
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }} 
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}

export default FacebookPixel;