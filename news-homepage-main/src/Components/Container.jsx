import imgBg from "../assets/images/image-web-3-desktop.jpg";
import imgMBG from "../assets/images/image-web-3-mobile.jpg";
export default function Container() {
  return (
    <div className="Container max-md:flex max-md:flex-col max-md:gap-10">
      <div className="grid-1 col-span-2">
        <picture>
          <source media="(max-width:768px)" srcset={imgMBG} />
          <source srcSet={imgBg} />
          <img
            src={imgBg}
            alt=""
            className=" object-fill  w-[97.5%] h-full max-md:w-full"
          />
        </picture>
      </div>
      <div className="grid-2 row-span-2 bg-Dark-blue flex flex-col p-5 gap-6 max-md:order-1">
        <h1 className=" text-soft-orange">New</h1>
        <div className="quote">
          <h2 className="text-white hover:text-soft-orange hover:cursor-pointer">
            Hydrogen VS Electric Cars
          </h2>
          <p className="text-Grayish-blue opacity-80">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <hr />
        <div className="quote">
          <h2 className="text-white hover:text-soft-orange hover:cursor-pointer">
            The Downsides of AI Artistry
          </h2>
          <p className="text-Grayish-blue opacity-80">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr />
        <div className="quote">
          <h2 className="text-white hover:text-soft-orange hover:cursor-pointer">
            Is VC Funding Drying Up?
          </h2>
          <p className="text-Grayish-blue opacity-80">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
      <div className="grid-3 text-Dark-blue">
        <h1 className="font-extrabold text-5xl w-5/6">
          The Bright Future of Web 3.0?
        </h1>
      </div>
      <div className="grid-4 flex flex-col gap-6">
        <p className="text-Dark-Gblue text-sm w-11/12">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <div className="btn">
          <button className=" bg-Soft-red text-Dark-blue font-bold tracking-widest py-2 px-5 text-sm hover:bg-Dark-blue hover:text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
