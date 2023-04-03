import { SignalIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/20/solid";
import type { TSongProps } from "./SearchResults";

function SongInfo(prop: TSongProps) {
    const artist = prop.song.relationships.artist.data.attributes;
    const song = prop.song.attributes;

    return (
        <div className="flex w-3/4 h-screen pt-5 bg-white">
            <div className="w-1/4  h-full avatar justify-center">
                {/* avatar */}
                <div className="w-full flex justify-center mb-3">
                    <img
                        className="object-center w-40 h-40 rounded-full"
                        src={artist.avtURL}
                        alt="logo"
                    />
                </div>
                {/* interact */}
                <div className="pl-10">
                    <div className="name">{artist.name}</div>
                    <div className="interact flex">
                        <div className="followed flex pr-4 py-2">
                            <UsersIcon className="h-5 pr-1 " />
                            <div className=" text-sm">{artist.followed}</div>
                        </div>
                        <div className="tracks flex py-2">
                            <SignalIcon className="h-5 pr-1" />
                            <div className=" text-sm"> {artist.songCount}</div>
                        </div>
                    </div>
                    {/* follow btn */}
                    <button className="btn flex justify-center items-center bg-orange-600 w-40 h-8 hover:cursor-pointer border-none  rounded-sm ">
                        <UserPlusIcon className="h-5 pr-1 text-white " />
                        <div className=" text-white text-sm">Follow</div>
                    </button>
                </div>
            </div>
            <div className="w-3/4 h-full info mb-7">
                <div className=" bg-orange-500 text-white rounded-lg w-max h-6 px-1 mr-3 cursor-pointer">
                    # {song.category}
                </div>
                <div className="song_info">
                    <form className="description mr-3 pt-3">
                        {song.description}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SongInfo;
