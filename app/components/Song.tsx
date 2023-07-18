import { Link } from "@remix-run/react";
import type { TAlbum } from "~/storage/AppContext";

type TSongProps = {
  song: TAlbum;
};

function Song(prop: TSongProps) {
  const album = prop.song;

  return (
    <Link
      className=" min-w-[144px] h-48 mx-3 my-3 text-sm hover:scale-110 cursor-pointer transition duration-250 ease-out"
      to={`/album/${album.id}`}
    >
      <div className="relative w-36 h-36 mb-3">
        <img
          className="object-center w-32 h-32 rounded-lg absolute z-30"
          src={album.attributes.imageURL}
          alt="logo"
        />
        <div className=" absolute bg-slate-300 rounded-lg w-32 h-32 translate-y-2 translate-x-2 z-20" />
        <div className=" absolute bg-slate-200 rounded-lg w-32 h-32 translate-y-4 translate-x-4 z-10" />
      </div>
      <div className="category ">{album.attributes.name}</div>
      <div className="font-light">{album.attributes.user_created_name}</div>
    </Link>
  );
}

export default Song;
