import profileImg from "../assets/images/111.png";
interface ProfileProps {
    activeDaily: ()=>void;
    activeMonthly: ()=>void;
    activeWeekly: ()=>void;
}
const Profile = ({activeDaily,activeMonthly,activeWeekly}:ProfileProps)=> {
    return(
        <div className="profile row-span-2 bg-Darkblue rounded-xl">
          <div className="top bg-csBlue flex flex-col gap-9 py-7 px-8 rounded-xl h-4/6">
            <div className="profile-img w-4/12 border-white border-solid border-[3px] rounded-full">
              <img src={profileImg} alt="" />
            </div>
            <div>
              <p className="text-IceBlue text-sm">Report for</p>
              <h1 className="text-white text-3xl w-1/2">Jeremy Robson</h1>
            </div>
          </div>
          <div className="bottom px-8 py-6 text-IceBlue flex flex-col gap-2 text-base">
            <p className=" hover:text-white hover:cursor-pointer" onClick={activeDaily}>Daily</p>
            <p className=" hover:text-white hover:cursor-pointer" onClick={activeWeekly}>Weekly</p>
            <p className=" hover:text-white hover:cursor-pointer" onClick={activeMonthly}>Monthly</p>
          </div>
        </div>
    )
}
export default Profile;