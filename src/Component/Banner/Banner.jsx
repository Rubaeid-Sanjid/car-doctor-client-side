import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";

const Banner = () => {
  return (
    <div className="container mx-auto lg:px-12 px-3 lg:mt-12 mt-6">
      <div className="carousel h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          <div className="absolute flex justify-between h-full items-center transform -translate-y-1/2 left-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2 pl-20">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active bg-[#FF3811] text-white border-none">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute gap-3 flex left-[65rem] bottom-5">
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-between h-full items-center transform -translate-y-1/2 left-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2 pl-20">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active bg-[#FF3811] text-white border-none">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute gap-3 flex left-[65rem] bottom-5">
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-between h-full items-center transform -translate-y-1/2 left-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2 pl-20">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active bg-[#FF3811] text-white border-none">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute gap-3 flex left-[65rem] bottom-5">
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-between h-full items-center transform -translate-y-1/2 left-0 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 w-1/2 pl-20">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p className="text-lg">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-4">
                <button className="btn btn-active bg-[#FF3811] text-white border-none">
                  Discover More
                </button>
                <button className="btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute gap-3 flex left-[65rem] bottom-5">
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
