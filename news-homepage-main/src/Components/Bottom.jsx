import imgL from "../assets/images/image-retro-pcs.jpg";
import imgM from "../assets/images/image-top-laptops.jpg";
import imgR from "../assets/images/image-gaming-growth.jpg";
export default function Bottom() {
  return (
    <div className="flex gap-4 mt-1 max-md:flex-col max-md:w-full max-md:pb-10">
      <div className="grid-5 flex gap-5 w-1/3 max-md:w-full">
        <div className="img-card w-32">
          <img src={imgL} alt="" />
        </div>
        <div className="card-right flex flex-col gap-1">
          <h2 className="text-Soft-red text-2xl">01</h2>
          <h2 className="font-extrabold hover:text-Soft-red hover:cursor-pointer">
            Reviving Retro PCs
          </h2>
          <p className=" text-sm text-Dark-Gblue w-10/12">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="grid-6 flex gap-5 w-1/3 max-md:w-full">
        <div className="img-card w-24 max-md:w-[6.7rem]">
          <img src={imgM} alt="" />
        </div>
        <div className="card-right flex flex-col gap-1 ">
          <h2 className="text-Soft-red text-2xl">02</h2>
          <h2 className="font-extrabold hover:text-Soft-red hover:cursor-pointer">
            Top 10 Laptops of 2022
          </h2>
          <p className="text-sm text-Dark-Gblue w-9/12">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="grid-7 flex gap-5 w-1/3 max-md:w-full">
        <div className="img-card w-28">
          <img src={imgR} alt="" />
        </div>
        <div className="card-right flex flex-col gap-1">
          <h2 className="text-Soft-red text-2xl">03</h2>
          <h2 className="font-extrabold hover:text-Soft-red hover:cursor-pointer">
            The Growth of Gaming
          </h2>
          <p className="text-sm text-Dark-Gblue w-10/12">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
