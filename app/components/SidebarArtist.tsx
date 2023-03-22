import { QueueListIcon, SignalIcon } from "@heroicons/react/20/solid";
import SongSidebar from "./SongSidebar";

function SidebarArtist() {
  return (
    <div className="w-1/4 bg-white h-screen border-l-2 border-gray-100 px-5 py-5">
      <div className="likedList mb-6">
        <div className="top relative text-sm  border-b mb-3">
          <SignalIcon className="h-5 pb-1 mr-1 inline-block " />
          <div className="totalLiked inline-block font-semibold">
            Related tracks
          </div>
          <button className="absolute top-0 right-0 font-extralight">
            View All
          </button>
        </div>
        <SongSidebar />
        <SongSidebar />
        <SongSidebar />
      </div>
      {/* Listening History */}
      <div className="HistoryList mb-6">
        <div className="top relative text-sm border-b mb-3">
          <QueueListIcon className="h-5 pb-1 mr-1 inline-block" />
          <div className="totalLiked inline-block font-semibold">
            In playlists
          </div>
          <button className="absolute top-0 right-0 font-extralight">
            View All
          </button>
        </div>
        <SongSidebar />
        <SongSidebar />
        <SongSidebar />
      </div>
    </div>
  );
}

export default SidebarArtist;
