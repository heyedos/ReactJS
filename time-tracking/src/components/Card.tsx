import threedot from "../assets/images/icon-ellipsis.svg";

interface cardProps {
    title: String;
    hour: number;
    lastHour: number;
    Images: string;
}
const Card = ({title,hour,lastHour,Images}:cardProps)=> {
    return(
        <div className={"card rounded-2xl bg-C"+title}>
            <div className="card-image px-5 relative overflow-hidden h-8">
                <img src={Images} alt="" className="w-1/4 relative z-0 bottom-[3px] left-40 " />
            </div>
            <div className="bg-Darkblue px-5 py-6 pb-9 rounded-xl relative z-1 flex flex-col gap-4">
                <div className="flex justify-between text-white">
                    <h2 className=" text-base">{title}</h2>
                    <img src={threedot} alt="" className=" max-h-1 hover:cursor-pointer" />
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl text-white">{hour+"hrs"}</h1>
                    <p className="text-xs text-IceBlue">{"Last Week - "+lastHour+"hrs"}</p>
                </div>
            </div>
        </div>
        
    );
}

export default Card;