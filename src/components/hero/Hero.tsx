import Image from "next/image";
import { Button } from "../button/Button";
import Header from "../header/Header";

const Hero = () => {
  return (
    <div
      className=" bg-primary-400 text-white"
      // style={{
      //   clipPath: "circle(50% at 50% 21%)",
      // }}
    >
      <Header />

      {/* hero split content */}
      <div className="container mx-auto pt-10  md:pt-16">
        {/* wrapper */}
        <div className="flex flex-col items-stretch gap-4 px-4 md:flex-row">
          {/* left side */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-4xl font-bold -tracking-tight">
              <span className="text-[#F48C06]">Studying</span> Online is now{" "}
              <br />
              much easier
            </p>

            <p className="max-w-lg text-xl">
              TOTC is an interesting platform that will teach you in more an
              interactive way
            </p>

            {/* call to actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Button className="bg-primary-200 hover:bg-primary-200">
                Join for free
              </Button>

              {/* how it works */}
              <div className="flex items-center gap-2">
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z"
                      fill="#23BDEE"
                    />
                  </svg>
                </button>
                <p className="text-xl text-[#252641]">Watch how it works</p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="relative flex h-[492px] w-full justify-center">
            <div className=" md:absolute md:-top-24">
              <Image
                src={"/assets/hero-img.png"}
                width={"344"}
                height={"492"}
                alt="E-learning Student"
                className="md:h-[590px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
