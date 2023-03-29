import { FlagIcon, ShareIcon, UserPlusIcon } from "@heroicons/react/24/outline";

function InteractProfile() {
  return (
    <div className="bg-white px-8 py-3 ">
      <div className="relative category border-b-slate-100 border-b-2">
        <ul
          className="flex item-cennter space-x-8 relative text-xl h-9"
          role="tablist"
          data-te-nav-ref
        >
          <li
            className=" hover:border-b-black hover:border-b-2 animation"
            role="presentation"
          >
            <a
              href="#tabs-home"
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              All
            </a>
          </li>
          <li
            className=" hover:border-b-black hover:border-b-2 animation"
            role="presentation"
          >
            <a
              href="#tabs-popularTracks"
              data-te-toggle="pill"
              data-te-target="#tabs-popularTracks"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-popularTracks"
              aria-selected="false"
            >
              Popular Tracks
            </a>
          </li>
          <li
            className=" hover:border-b-black hover:border-b-2 animation"
            role="presentation"
          >
            <a
              href="#tabs-tracks"
              data-te-toggle="pill"
              data-te-target="#tabs-Tracks"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-Tracks"
              aria-selected="false"
            >
              Tracks
            </a>
          </li>
          <li
            className=" hover:border-b-black hover:border-b-2 animation"
            role="presentation"
          >
            <a
              href="#tabs-albums"
              data-te-toggle="pill"
              data-te-target="#tabs-albums"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-albums"
              aria-selected="false"
            >
              Albums
            </a>
          </li>
          <li
            className=" hover:border-b-black hover:border-b-2 animation"
            role="presentation"
          >
            <a
              href="#tabs-playlists"
              data-te-toggle="pill"
              data-te-target="#tabs-playlists"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-playlists"
              aria-selected="false"
            >
              Playlists
            </a>
          </li>
          <li
            className=" hover:border-b-black hover:border-b-2 animation"
            role="presentation"
          >
            <a
              href="#tabs-reposts"
              data-te-toggle="pill"
              data-te-target="#tabs-reposts"
              data-te-nav-active
              role="tab"
              aria-controls="tabs-reposts"
              aria-selected="false"
            >
              Reposts
            </a>
          </li>
        </ul>
        <div className="absolute flex top-0 right-0 space-x-2 w-fit">
          <button className="btn flex justify-center items-center bg-orange-600/100 w-20 h-6  rounded-sm text-white px-1 animation">
            <UserPlusIcon className="h-5 mr-1" />
            <div className="">Follow</div>
          </button>
          <button className="btn flex justify-center items-center border-2 border-slate-100 w-20 h-6  rounded-sm px-1 animation">
            <ShareIcon className="h-5 mr-1" />
            <div className="">Share</div>
          </button>
          <button className="btn flex justify-center items-center border-2 border-slate-100 w-20 h-6  rounded-sm px-1 animation">
            <FlagIcon className="h-5 mr-1" />
            <div className="">Report</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InteractProfile;
