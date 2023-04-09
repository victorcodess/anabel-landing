import Navbar from "./Navbar";
import "./index.css";
import hat from "./assets/magician-hat.png";
import shadow from "./assets/shadow.png";
import heroImg from "./assets/hero-img.png";
import blob from "./assets/blob.png";
import stars from "./assets/stars.png";
import bigBlob from "./assets/big-blob.png";
import play from "./assets/play.png";
import eye from "./assets/magic-eye.gif";

function App() {
  return (
    <div className="bg-[#100D1B] h-[100vh] z-20 relative text-white flex flex-col items-center justify-center overflow-hidden">
      <img
        src={stars}
        alt=""
        className="absolute bottom-0 right-0 left-0 w-full -z-30"
      />

      <Navbar />

      <div className="relative -mt-28">
        <img
          src={hat}
          alt="magic hat"
          className="absolute w-[175px] -right-14 -z-10 -top-14 hover:rotate-[16deg]"
        />
        <img
          src={shadow}
          alt="magic hat"
          className="absolute w-[70px] right-[-15px] z-10 top-[30px]"
        />
        <h1 className="text-[200px] font-normal franie">anabel</h1>{" "}
      </div>

      <div className=" flex justify-center items-center w-full">
        <img
          src={heroImg}
          alt=""
          className="absolute bottom-0 z-20 right-0 left-0 w-[750px] mx-auto"
        />
        <img
          src={bigBlob}
          alt=""
          className="absolute lg:-bottom-[850px] right-0 z-10 left-0 w-[2079px] mx-auto"
        />
        <img
          src={blob}
          alt=""
          className="absolute bottom-0 z-20 left-36 w-[500px]"
        />
        <img
          src={blob}
          alt=""
          className="absolute bottom-0 z-20 right-36 w-[500px]"
        />
      </div>

      <div className="absolute w-[402px] rounded-[20px] bottom-24 border-[#D9D9D9]/20 border-[2px] right-52 z-50 bg-gradient-to-br from-[#D9D9D9]/30 via-[#130056]/10 to-[#D9D9D9]/10 backdrop-blur-md py-9 px-8 gap-5 flex flex-col">
        <p className="font-light leading-[29px]">
          Anabel, a young artist discovers her magical brush can bring paintings
          to life, thrusting her into an enchanting adventure to save a vibrant,
          imperiled world hidden within her art.
        </p>
        <div className="flex items-center justify-start gap-5">
          {" "}
          <img src={play} alt="" />
          <h4 className="font-semibold">Watch Trailer</h4>
        </div>
      </div>
      <img src={eye} alt="" className="w-[130px] absolute z-50 -bottom-5 right-44" />
    </div>
  );
}

export default App;
