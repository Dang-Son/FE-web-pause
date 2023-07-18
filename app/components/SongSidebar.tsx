import { Link } from "react-router-dom";
import type { TSong } from "~/storage/AppContext";

function SongSidebar(props: { song?: TSong }) {
  const realSong: TSong | undefined = props.song ? props.song : undefined;
  console.log(
    "🚀 TAM ~ file: SongSidebar.tsx:6 ~ SongSidebar ~ props.song:",
    props.song
  );
  if (!realSong)
    return (
      <div className="flex justify-start items-center my-4 onHover">
        <img
          className="picture object-center w-16 h-16 "
          src="https://picsum.photos/200"
          alt=""
        />
        <div className="content ml-3 text-sm">
          <div className="artist font-extralight">Artist</div>
          <div className="song-name">Name</div>
          <div className="interact flex font-extralight">
            <div className="played">Played</div>
            <div className="liked ml-2">Liked</div>
          </div>
        </div>
      </div>
    );
  return (
    <Link
      to={`/song/${props?.song?.id ?? ""}`}
      className="flex justify-start items-center my-4 onHover"
    >
      <img
        className="picture object-center w-16 h-16 "
        src={realSong.attributes.imageURL}
        alt=""
      />
      <div className="content ml-3 text-sm">
        <div className="artist font-bold">{realSong.attributes.name}</div>
        <div className="song-name">{realSong.attributes.author_name}</div>
        <div className="interact flex font-extralight">
          <div className="played">Played</div>
          <div className="liked ml-2">Liked</div>
        </div>
      </div>
    </Link>
  );
}

export default SongSidebar;
