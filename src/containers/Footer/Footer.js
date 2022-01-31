import React from 'react';
import './Footer.css'

const Footer = () => {
  return <section className="footer">
      <div className="footer__container">
                 <div className="footer__conatiner-img">
                    <svg class="w-24 mx-auto mb-20 md:mb-0 " width="93" height="72" viewBox="0 0 93 72" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M46.2949 44.1948L27.8052 25.7051L33.3361 20.1742L59.1474 20.068L64.7845 25.7051L46.2949 44.1948ZM91.8426 27.509C92.8388 26.5128 92.8388 24.8975 91.8426 23.9013L69.4357 1.49437C68.4788 0.537543 67.1811 0 65.8279 0L26.7618 0C25.4086 0 24.1109 0.537542 23.1541 1.49437L0.747187 23.9013C-0.249062 24.8975 -0.249062 26.5128 0.747187 27.509L44.491 71.2528C45.4873 72.2491 47.1025 72.2491 48.0987 71.2528L91.8426 27.509Z" fill="#E0FAB9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M60.7257 44.1944C56.7407 48.1794 50.2798 48.1794 46.2948 44.1944L27.8051 25.7047L20.5896 32.9202L53.5102 65.8408L91.8424 27.5086C92.8387 26.5124 92.8387 24.8971 91.8424 23.9009L86.4308 18.4893L60.7257 44.1944Z" fill="url(#paint0_linear)"></path><path d="M39.0795 0L46.2949 7.21548L20.5898 32.9206L53.5104 65.8412L48.0988 71.2528C47.1026 72.2491 45.4873 72.2491 44.4911 71.2528L6.15884 32.9206L39.0795 0Z" fill="url(#paint1_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M59.1474 20.0678L49.2262 10.1465H14.5017L0.747187 23.901C-0.249062 24.8972 -0.249062 26.5125 0.747187 27.5087L6.15879 32.9203L17.3597 21.7194C18.3114 20.7677 19.6006 20.2306 20.9465 20.2251L59.1474 20.0678Z" fill="url(#paint2_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M53.5102 0L26.7617 0C25.4085 0 24.1108 0.537542 23.1539 1.49437L14.5016 10.1468H44.9993C47.7056 10.1468 50.3011 11.2218 52.2148 13.1355L64.7844 25.7051L71.9999 18.4897L53.5102 0Z" fill="url(#paint3_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.4357 1.49437C68.4788 0.537543 67.1811 0 65.8279 0H53.5103L71.0981 17.5877C71.5962 18.0858 71.5962 18.8935 71.0981 19.3916L46.2949 44.1948L51.7065 49.6064C52.7027 50.6026 54.318 50.6026 55.3142 49.6064L85.529 19.3916C86.0271 18.8935 86.0271 18.0858 85.529 17.5877L69.4357 1.49437Z" fill="url(#paint4_linear)"></path><defs><linearGradient id="paint0_linear" x1="94.6841" y1="32.1334" x2="7.49359" y2="29.1773" gradientUnits="userSpaceOnUse"><stop stop-color="#E0F9B8"></stop><stop offset="0.458795" stop-color="#47E9EA"></stop><stop offset="1" stop-color="#0E92FF"></stop></linearGradient><linearGradient id="paint1_linear" x1="1.59445" y1="44.8029" x2="39.0631" y2="7.8126" gradientUnits="userSpaceOnUse"><stop stop-color="#E0F9B8"></stop><stop offset="0.458795" stop-color="#47E9EA"></stop><stop offset="1" stop-color="#0E92FF"></stop></linearGradient><linearGradient id="paint2_linear" x1="-0.797205" y1="25.1914" x2="52.2966" y2="13.7117" gradientUnits="userSpaceOnUse"><stop stop-color="#E0F9B8"></stop><stop offset="0.458795" stop-color="#47E9EA"></stop><stop offset="1" stop-color="#0E92FF"></stop></linearGradient><linearGradient id="paint3_linear" x1="25.5104" y1="-22.4812" x2="69.6756" y2="22.3217" gradientUnits="userSpaceOnUse"><stop stop-color="#E0F9B8"></stop><stop offset="0.518056" stop-color="#47E9EA"></stop><stop offset="1" stop-color="#0E92FF"></stop></linearGradient><linearGradient id="paint4_linear" x1="87.0548" y1="14.5091" x2="54.3694" y2="46.8756" gradientUnits="userSpaceOnUse"><stop stop-color="#E0F9B8"></stop><stop offset="0.458795" stop-color="#47E9EA"></stop><stop offset="1" stop-color="#0E92FF"></stop></linearGradient></defs></svg>
                 </div>

                 <div className="footer__container-text">
                             <h2 className='text-gradient'>
                             Building Revolutionary Websites and Apps on the Jamstack
                             </h2>
                              
                             <p>
                             Let us maximize your growth.  
                             </p>
                 </div>
      </div>

      <div className="footer__copyright">
          <p>
              2021 , GIT-MADE
          </p>
      </div>

  </section>;
};

export default Footer;
