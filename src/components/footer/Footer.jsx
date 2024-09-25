import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-deepBlue pt-24 text-white">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="mt-[-50px]">
          <img className='pt-4' src="/assets/22.webp" alt="Logo" width={150} height={100} />
          <p className="mt-[-5px] text-white">
            The largest gathering of Internationally Trained Lawyers (ITLs) in Canada.
          </p>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase font-bold text-white">Quick Links</div>
          <a className="my-3 block text-white hover:text-cream" href="/">Home</a>
          <a className="my-3 block text-white hover:text-cream" href="/team/leadership">Team</a>
          <a className="my-3 block text-white hover:text-cream" href="/speakers">Speakers</a>
          <a className="my-3 block text-white hover:text-cream" href="/itl25-conference">Schedule</a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase font-bold text-white">Legal</div>
          <a className="my-3 block text-white hover:text-cream" href="#">Privacy Policy</a>
          <a className="my-3 block text-white hover:text-cream" href="#">Terms and Conditions</a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase font-bold text-white">Contact Us</div>
          <a className="my-3 block text-white hover:text-cream" href="mailto:theitlnetwork@gmail.com">info@itlconference.ca</a>
        </div>
      </div>

      <div className="bg-white pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-darkBrown text-sm flex-col max-w-screen-lg items-center text-darkBrown">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="https://www.instagram.com/globallawyersca?igsh=ZG5iOWVmZWJ2eTk0&utm_source=qr" className="w-6 mx-1 text-darkBrown hover:text-wine">
              <FaInstagram size="100%" />
            </a>
            <a href="https://twitter.com/theITLNetwork" className="w-6 mx-1 text-darkBrown hover:text-wine">
              <FaTwitter size="100%" />
            </a>
            <a href="https://www.facebook.com/share/oCJwFpzhsF5n2Qeb/?mibextid=K35XfP" className="w-6 mx-1 text-darkBrown hover:text-wine">
              <FaFacebookF size="100%" />
            </a>
            <a href="https://www.linkedin.com/company/the-itl-network/" className="w-6 mx-1 text-darkBrown hover:text-wine">
              <FaLinkedinIn size="100%" />
            </a>
          </div>
          <div className="my-5 text-darkBrown">© Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
