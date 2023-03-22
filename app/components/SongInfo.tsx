import { SignalIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/20/solid";
import Hashtag from "./Hashtag";

function SongInfo() {
  return (
    <div className="flex w-3/4 h-full pt-5 bg-white">
      <div className="w-1/4  h-full avatar justify-center">
        {/* avatar */}
        <div className="w-full flex justify-center mb-5">
          <img
            className="object-center w-40 h-40 rounded-full"
            src="https://picsum.photos/200"
            alt="logo"
          />
        </div>
        {/* interact */}
        <div className="pl-10">
          <div className="name">Son vjp pro</div>
          <div className="interact flex">
            <div className="followed flex pr-4 py-3">
              <UsersIcon className="h-5 pr-1 " />
              <div className=" text-sm">9999</div>
            </div>
            <div className="tracks flex py-3">
              <SignalIcon className="h-5 pr-1" />
              <div className=" text-sm">9999</div>
            </div>
          </div>
          {/* follow btn */}
          <button className="btn flex justify-center items-center bg-orange-600 w-20 h-6 hover:cursor-pointer">
            <UserPlusIcon className="h-5 pr-1 text-white " />
            <div className=" text-white text-sm">Follow</div>
          </button>
        </div>
      </div>
      <div className="w-3/4 h-full info mb-7">
        <Hashtag />
        <div className="song_info">
          <form className="description mr-3 pt-3">
            Description: Day la nhung dung tu viet khong co y nghia gi het nen
            mn khong can de y, nhung can viet dai de check xem co dep hay
            khong.Day la nhung dung tu viet khong co y nghia gi het nen mn khong
            can de y, nhung can viet dai de check xem co dep hay khong.Day la
            nhung dung tu viet khong co y nghia gi het nen mn khong can de y,
            nhung can viet dai de check xem co dep hay khong.Day la nhung dung
            tu viet khong co y nghia gi het nen mn khong can de y, nhung can
            viet dai de check xem co dep hay khong.Day la nhung dung tu viet
            khong co y nghia gi het nen mn khong can de y, nhung can viet dai de
            check xem co dep hay khong
          </form>
        </div>
      </div>
    </div>
  );
}

export default SongInfo;
