const PageNotFound = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-white">
      <h1 className="text-9xl font-extrabold text-colorFour tracking-widest">
        404
      </h1>
      <div className="bg-colorFour text-white font-semibold px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <a href="/" className="mt-5 rounded">
        <a className="relative inline-block text-sm font-medium text-colorOne group active:text-colorOne focus:outline-none focus:ring ">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-colorThree group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-colorFour text-white">
            <a href="/">Go to Home</a>
          </span>
        </a>
      </a>
    </main>
  );
};

export default PageNotFound;
