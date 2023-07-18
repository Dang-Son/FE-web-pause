import { CalendarDaysIcon, HeartIcon } from "@heroicons/react/20/solid";
import Ads from "./Ads";
import SongSidebar from "./SongSidebar";
import { useEffect, useState } from "react";
import type { TSong } from "~/storage/AppContext";

function Sidebar() {
  const [song, setSong] = useState<TSong[]>([]);

  useEffect(() => {
    async function loadSong() {
      const rest = await fetch("http://127.0.0.1:8000/api/history/user/1");

      const histories = await rest.json();

      let songs = histories.data.map(
        (item: any) => item.relationships.song.data as TSong
      ) as TSong[];

      setSong(songs);
    }
    loadSong();
  }, []);

  return (
    <div className="ads bg-white px-5 border-l-2 border-gray-100 w-1/4 h-full sticky top-14 right-0">
      {/* Ads */}
      <div className="flex justify-center">
        <Ads />
      </div>
      {/* Your favorite songs */}
      {/* Listening History */}
      <div className="HistoryList mb-6">
        <div className="top relative text-sm border-b mb-3">
          <CalendarDaysIcon className="h-5 pb-1 mr-1 inline-block" />
          <div className="totalLiked inline-block font-semibold">
            Listening History
          </div>
          <button className="absolute top-0 right-0 font-extralight">
            View All
          </button>
        </div>
        <SongSidebar song={song[0]} />
        <SongSidebar song={song[1]} />
        <SongSidebar song={song[2]} />
      </div>
    </div>
  );
}

export default Sidebar;
