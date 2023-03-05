import Header from "../header/Header";

const Hero = () => {
  return (
    <div>
      <Header />

      <div className="container mx-auto">
        {/* wrapper */}
        <div className="mx-4 pt-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-300 shadow-lg anim">
            B
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
