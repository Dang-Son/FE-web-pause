import {
  ChatBubbleLeftEllipsisIcon,
  FolderPlusIcon,
  LinkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon,
  FlagIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import { LevelContext, type TSong } from "~/storage/AppContext";
import { useContext } from "react";

export type TSongProps = {
  song: TSong;
  song: TSong;
};
function SearchResults(prop: TSongProps) {
  const artist = (prop.song as any).relationships.artist.data.attributes;
  const song = prop.song.attributes;

  const demo = useContext(LevelContext);

  return (
    <div className="flex h-24 my-7 mx-3">
      <Link
        to={`/song/${prop.song.id}`}
        className="block song_name text-xl w-24 h-24"
      >
        <img
          className="object-center w-24 h-24  rounded-sm "
          src={song.imageURL}
          alt="logo"
        />
      </Link>

      <div className="info ml-2 w-full h-full relative">
        <div className="artist flex justify-between h-3/4">
          <div className="">
            <Link
              to={`/profile/${(prop.song as any).relationships.artist.data.id}`}
              className=" block artist font-extralight text-gray-500"
            >
              {artist.name}
            </Link>
            <Link
              to={`/song/${prop.song.id}`}
              className="block song_name text-xl"
            >
              {song.name}
            </Link>
          </div>
          <button className="flex justify-center items-center bg-orange-500 rounded-full w-10 h-10 mt-2">
            {!(
              demo.currentSongData.isPlaying &&
              demo.currentSongData.title === song.name
            ) ? (
              <PlayIcon
                className="h-7 text-white translate-x-[2px]"
                onClick={() =>
                  demo.updateState("currentSongData", {
                    ...demo.currentSongData,
                    id: prop.song.id,
                    album: (prop.song as any).relationships.playlists.data
                      .attributes.name,
                    artist: (prop.song as any).relationships.artist.data
                      .attributes.name,
                    title: (prop.song as any).attributes.name,
                    image: (prop.song as any).attributes.imageURL,
                    isPlaying:
                      demo.currentSongData.title !== song.name
                        ? true
                        : !demo.currentSongData.isPlaying,
                    audioURL: (prop.song as any).attributes.audioURL,
                  })
                }
              />
            ) : (
              <PauseIcon
                className="h-7 text-white translate-x-[-1px]"
                onClick={() =>
                  demo.updateState("currentSongData", {
                    ...demo.currentSongData,
                    album: (prop.song as any).relationships.playlists.data
                      .attributes.name,
                    artist: (prop.song as any).relationships.artist.data
                      .attributes.name,
                    title: (prop.song as any).attributes.name,
                    image: (prop.song as any).attributes.imageURL,
                    isPlaying:
                      demo.currentSongData.title !== song.name
                        ? true
                        : !demo.currentSongData.isPlaying,
                    audioURL: (prop.song as any).attributes.audioURL,
                  })
                }
              />
            )}
          </button>
        </div>
        <div className="interact relative h-1/4 text-sm">
          <div className="left space-x-2 flex">
            <button className="like flex items-center btn px-2">
              <HeartIcon className="h-3 mr-1" />
              <div className=" ">{song.liked}</div>
            </button>

            <button className="share flex items-center btn px-2">
              <ShareIcon className=" h-3 mr-1" />
              <div className="">Share</div>
            </button>
            <button
              className="copy_link flex items-center btn px-2"
              onClick={() => {
                navigator.clipboard.writeText("google.com");
                alert("go here");
              }}
            >
              <LinkIcon className=" h-3 mr-1" />
              <div className="">Copy Link</div>
            </button>
            <button className="add_to_playlist flex items-center btn px-2">
              <FolderPlusIcon className=" h-3 mr-1" />
              <div className="">Add to playlist</div>
            </button>
            <button className="report flex items-center btn px-2">
              <FlagIcon className=" h-3 mr-1" />
              <div className="">Report</div>
            </button>
          </div>
          <div className="right flex absolute right-0 top-0 space-x-3">
            <div className="relative space-x-1">
              <PlayIcon className="inline-block h-3" />
              <div className="inline-block">{song.views}</div>
            </div>
            <div className="relative space-x-1">
              <ChatBubbleLeftEllipsisIcon className="inline-block h-3" />
              <div className="inline-block">100</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
