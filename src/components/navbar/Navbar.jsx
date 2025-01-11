import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={`fixed top-0 w-full text-deepBlue font-bold transition duration-300 ease-in-out ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto flex items-center justify-between h-20 ml-4 mr-4">
        <div className="flex items-center">
          <a href="/" className="flex items-center mr-8">
            <img
              className='logo-img'
              src={isScrolled ? "/assets/1.webp" : "/assets/22.webp"}
              width={200}
              height={50}
              alt="Logo"
            />
          </a>
        </div>

        <div className="hidden text-md md:flex gap-8 justify-center flex-1">
          <a href="/itl25-conference" className="font-black">ITL &#39;25 Conference</a>
          {/* <a href="/pre-register" className="font-black">Registration</a> */}
          <a href="/registration" className="font-black">Registration</a>
          <a href="/speakers" className="font-black">Speakers</a>
          <a href="/our-sponsors" className="font-black">Sponsors</a>
          <div className="relative">
            <button aria-label="Toggle" onClick={toggleDropdown} className="font-black">Team</button>
            {isDropdownOpen && (
              <div className="w-32 absolute mt-2 bg-deepBlue text-white border rounded shadow-lg">
                <a href="/team/leadership" className="block px-4 py-2 text-sm font-bold hover:bg-wine hover:text-white">Leadership Team</a>
                <a href="/team/planning" className="block px-4 py-2 text-sm font-bold hover:bg-wine hover:text-white">Planning Team</a>
              </div>
            )}
          </div>
          <a href="/faq" className="font-black">FAQs</a>
          <a href="/awards" className="font-black">Awards</a>
        </div>

        <div className="hidden md:flex">
        <a href="/registration" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-wine font-bold py-3 px-6 rounded-lg transition-colors duration-300">Register Now</a>
        </div>

        <div className="md:hidden">
          <button aria-label="Toggle" onClick={toggleHamburger} className="outline-none">
            {isOpen ? (
              <svg className="w-16 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-16 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden px-4 pt-2 pb-4 bg-cream text-deepBlue`}>
        <a href="/itl25-conference" className="block py-2 px-4 text-sm font-bold">ITL &#39;25 Conference</a>
        {/* <a href="/pre-register" className="block py-2 px-4 text-sm font-bold">Registration</a> */}
        <a href="/registration" className="block py-2 px-4 text-sm font-bold">Registration</a>
        <a href="/speakers" className="block py-2 px-4 text-sm font-bold">Speakers</a>
        <a href="/our-sponsors" className="block py-2 px-4 text-sm font-bold">Sponsors</a>
        <div className="block py-2 px-4 text-sm font-bold">
          <button aria-label="Toggle" onClick={toggleDropdown} className="w-full text-left">Team</button>
          {isDropdownOpen && (
            <div className="pl-4 mt-2">
              <a href="/team/leadership" className="block py-2 text-sm font-bold">Leadership Team</a>
              <a href="/team/planning" className="block py-2 text-sm font-bold">Planning Team</a>
            </div>
          )}
        </div>
        <a href="/faq" className="block py-2 px-4 text-sm font-bold">FAQs</a>
        <a href="/awards" className="block py-2 px-4 text-sm font-bold">Awards</a>
        <a href="/registration" className="bg-[#FEFBF6] hover:bg-ctaBg hover:text-bg text-wine font-bold py-3 px-6 rounded-lg transition-colors duration-300">Register Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
