const ComingSoon = () => {
    return (
      <section className="coming-soon-section min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-4xl font-bold text-[#7F5283] mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 mb-8">
            Watch this space for more details as we unveil the speakers for the ITL Conference 2025!
          </p>
          <a
            href="/"
            className="px-6 py-3 bg-[#7F5283] text-white rounded-lg font-semibold transition duration-300 hover:bg-[#3D3C42]"
          >
            Go Back Home
          </a>
        </div>
      </section>
    );
  };
  
  export default ComingSoon;
  