import { CalendarDaysIcon, HeartIcon } from "@heroicons/react/20/solid";
import Ads from "./Ads";
import SongSidebar from "./SongSidebar";

function Sidebar() {
  return (
    <div className="ads bg-white px-5 border-l-2 border-gray-100 w-1/4 h-full sticky top-14 right-0">
      {/* Ads */}
      <div className="flex justify-center">
        <Ads />
      </div>
      {/* Your favorite songs */}
      <div className="likedList mb-6">
        <div className="top relative text-sm  border-b mb-3">
          <HeartIcon className="h-5 pb-1 mr-1 inline-block "/>
          <div className="totalLiked inline-block font-semibold">Your favorite songs</div>
          <button className="absolute top-0 right-0 font-extralight">View All</button>
        </div>
        <SongSidebar />
        <SongSidebar />
        <SongSidebar />
      </div>
      {/* Listening History */}
      <div className="HistoryList mb-6">
        <div className="top relative text-sm border-b mb-3">
          <CalendarDaysIcon className="h-5 pb-1 mr-1 inline-block"/>
          <div className="totalLiked inline-block font-semibold">Listening History</div>
          <button className="absolute top-0 right-0 font-extralight">View All</button>
        </div>
        <SongSidebar />
        <SongSidebar />
        <SongSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
