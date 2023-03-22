import {
  ArrowPathIcon,
  BackwardIcon,
  ForwardIcon,
  HeartIcon,
  PlayIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { PauseIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MusicBar = () => {
  const [pause, setPause] = useState(true);
  const [sound, setSound] = useState(true);
  const [repeat, setRepeat] = useState(true);
  const [like, setLike] = useState(true);
  const [follow, setFollow] = useState(true);

  return (
    <div className="fixed w-full h-auto bottom-0 bg-gray-100 z-50 border-t border-gray-300">
      <div className="mx-auto flex max-w-7xl items-center justify-center space-x-5 p-6 lg:px-8 h-12">
        {/* Backward */}
        <button className="">
          <BackwardIcon className="h-4 text-black-800/60" />
        </button>
        {/* Pause */}
        {pause === true ? (
          <button className="" onClick={() => setPause(false)}>
            <PlayIcon className="h-4 text-black-800/60" />
          </button>
        ) : (
          <button className="" onClick={() => setPause(true)}>
            <PauseIcon className="h-4 text-red-800/60" />
          </button>
        )}
        {/* Forward */}
        <button className="">
          <ForwardIcon className="h-4 text-black-800/60" />
        </button>
        {/* Repeat */}
        {repeat === true ? (
          <button className="relative" onClick={() => setRepeat(false)}>
            <ArrowPathIcon className="h-4 text-black-800/60" />
          </button>
        ) : (
          <button className="relative" onClick={() => setRepeat(true)}>
            <ArrowPathIcon className="h-4 text-red-800/60" />
            <div className=" absolute w-6 h-6 font-extrabold text-red-800/60 -bottom-[17px] -right-[10px] text-[9px] z-0">
              1
            </div>
          </button>
        )}

        {/* play time */}
        <div className="flex items-center space-x-2">
          <div className="">0:00</div>
          <div className="">
            <div className="flex items-center h-1 min-w-[400px] bg-red-800/60 rounded-sm">
              <div className=" rounded-full w-2 h-2 bg-black shadow hover:cursor-pointer"></div>
            </div>
          </div>
          <div className="">10:00</div>
        </div>

        {/* sound */}
        {sound === true ? (
          <button className="" onClick={() => setSound(false)}>
            <SpeakerWaveIcon className="h-4 text-black-800/60" />
          </button>
        ) : (
          <button className="" onClick={() => setSound(true)}>
            <SpeakerXMarkIcon className="h-4 text-red-800/60" />
          </button>
        )}

        {/* Song */}
        <div className="song flex items-center space-x-3">
          <img
            className="object-center w-9 h-9 rounded-mg "
            src="https://picsum.photos/200"
            alt="logo"
          />
          <div className="info text-base  ">
            <div className="artist font-light ">Son vjp pro no.1 world</div>
            <div className="name">name</div>
          </div>
          <div className="interact flex space-x-2">
            {/* Like */}
            <div className="like">
              {like === true ? (
                <button className="relative" onClick={() => setLike(false)}>
                  <HeartIcon className="h-4 text-black-800/60" />
                </button>
              ) : (
                <button className="relative" onClick={() => setLike(true)}>
                  <button className="relative" onClick={() => setLike(false)}>
                    <HeartIcon className="h-4 text-red-800/60" />
                  </button>
                </button>
              )}
            </div>
            {/* Follow */}
            <div className="follow">
              {follow === true ? (
                <button className="relative" onClick={() => setFollow(false)}>
                  <UserPlusIcon className="h-4 text-black-800/60" />
                </button>
              ) : (
                <button className="relative" onClick={() => setFollow(true)}>
                  <UserPlusIcon className="h-4 text-red-800/60" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBar;
