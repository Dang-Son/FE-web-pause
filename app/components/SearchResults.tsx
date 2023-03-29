import {
  ArrowPathRoundedSquareIcon,
  ChatBubbleLeftEllipsisIcon,
  FolderPlusIcon,
  LinkIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon, FlagIcon, PlayIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
function SearchResults() {
  return (
    <div className="flex h-24 my-7 mx-3">
      <img
        className="object-center w-24 h-24 rounded-sm "
        src="https://picsum.photos/200"
        alt="logo"
      />
      <div className="info ml-2 w-full h-full relative">
        <div className="artist flex justify-between h-3/4">
          <div className="">
            <Link
              to="/Profile"
              className=" block artist font-extralight text-gray-500"
            >
              Day la mot cai ten artist sieu dai
            </Link>
            <Link to="/SingleSong" className="block song_name text-xl">
              Day la mot ten bai hat rat dai
            </Link>
          </div>
          <button className="flex justify-center items-center bg-orange-500 rounded-full w-10 h-10 mt-2">
            <PlayIcon className="h-7 text-white translate-x-[2px]" />
          </button>
        </div>
        <div className="interact relative h-1/4 text-sm">
          <div className="left space-x-2 flex">
            <button className="like flex items-center btn px-2">
              <HeartIcon className="h-3 mr-1" />
              <div className=" ">999</div>
            </button>
            <button className="repost flex items-center btn px-2">
              <ArrowPathRoundedSquareIcon className=" h-3 mr-1" />
              <div className="">100</div>
            </button>
            <button className="share flex items-center btn px-2">
              <ShareIcon className=" h-3 mr-1" />
              <div className="">Share</div>
            </button>
            <button className="copy_link flex items-center btn px-2">
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
              <div className="inline-block">000</div>
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
