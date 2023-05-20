import { Link } from "@remix-run/react";
import type { TSong } from "~/storage/AppContext";

type TlistSongProp = {
  song: TSong;
};

function SongOfPlaylist(prop: TlistSongProp) {
  const song = prop.song.attributes;

  return (
    <Link
      className="song relative h-12 items-center mb-2 space-x-5 border-b-2 border-gray-100 w-full"
      to={`/song/${prop.song.id}`}
    >
      <div className="flex items-center">
        <img
          className="object-center w-10 h-10 mr-4 items-center"
          src={song.imageURL}
          alt="logo"
        />
        <div className="flex info text-base space-x-3">
          <div className="artist font-light">{song.author_name}</div>
          <div className=""> - </div>
          <div className="name ">{song.name}</div>
        </div>
      </div>

      <div className=" text-sm absolute h-10 flex items-center space-x-2 top-0 right-0">
        <div className="Liked">{song.liked} Likes</div>
        <div className="View">{song.views} Views</div>
      </div>
    </Link>
  );
}

export default SongOfPlaylist;
