import Ads from "./Ads";
import SongSidebar from "./SongSidebar";

function Sidebar() {
  return (
    <div className="ads bg-white px-5 border-l-2 border-gray-100 w-1/4 h-full sticky top-14 right-0">
      {/* Ads */}
      <div className="flex justify-center">
        <Ads />
      </div>
      {/* Song liked */}
      <div className="likedList mb-6">
        <div className="top relative text-sm font-extralight border-b mb-3">
          <div className="totalLiked">Liked</div>
          <button className="absolute top-0 right-0">View All</button>
        </div>
        <SongSidebar />
        <SongSidebar />
        <SongSidebar />
      </div>
      {/* Listening History */}
      <div className="HistoryList mb-6">
        <div className="top relative text-sm font-extralight border-b mb-3">
          <div className="totalLiked">Listening History</div>
          <button className="absolute top-0 right-0">View All</button>
        </div>
        <SongSidebar />
        <SongSidebar />
        <SongSidebar />
      </div>
    </div>
  );
}

export default Sidebar;
