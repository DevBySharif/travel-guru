import { FaArrowRight } from "react-icons/fa";
import sajek from "../../assets/Sajek.png";
import Sreemangal from "../../assets/Sreemongol.png";
import Sundarbans from "../../assets/sundorbon.png";

const Banner = () => {
  return (
    <div className="hero min-h-[88.1vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="carousel carousel-center rounded-box gap-9 ">
          <div className="carousel-item relative ">
            <img
              className="h-[400px] hover:border-4 border-yellow-600 rounded-3xl"
              src={sajek}
              alt="Sajek"
            />
            <p className="absolute bottom-0 left-0 right-0 text-white text-4xl font-bebas p-4 text-left">
              Sajek
            </p>
          </div>
          <div className="carousel-item relative">
            <img
              className="h-[400px] hover:border-4 border-yellow-600 rounded-3xl"
              src={Sreemangal}
              alt="Sreemangal"
            />
            <p className="absolute bottom-0 left-0 right-0 text-white text-4xl font-bebas p-4 text-left">
              Sreemangal
            </p>
          </div>
          <div className="carousel-item relative">
            <img
              className="h-[400px] hover:border-4 border-yellow-600 rounded-3xl"
              src={Sundarbans}
              alt="Sundarbans"
            />
            <p className="absolute bottom-0 left-0 right-0 text-white text-4xl font-bebas p-4 text-left">
              Sundarbans
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-8xl font-bebas font-bold text-white">
            Cox's bazar
          </h1>
          <p className="py-6 text-white font-montserrat">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ....
          </p>
          <button className="bg-[#F9A51A] flex items-center justify-center gap-2 font-montserrat text-base font-medium py-3 px-7 rounded-md">
            Booking <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
