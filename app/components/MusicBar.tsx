import {
  ArrowPathIcon,
  BackwardIcon,
  ForwardIcon,
  HeartIcon,
  PlayIcon,
  PlayPauseIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import { PauseIcon } from "@heroicons/react/24/outline";
import Sound from "react-sound";
import { useContext, useEffect, useRef, useState } from "react";
import { LevelContext } from "~/storage/AppContext";
import { getTimeByDuration, getTimeStartByDuration } from "~/utils/utils";

const MusicBar = () => {
  const demo = useContext(LevelContext);

  const soundRef = useRef(null);

  console.log(
    "🚀 TAM ~ file: MusicBar.tsx:17 ~ MusicBar ~ demo:",
    demo.currentSongData
  );

  const [pause, setPause] = useState(true);
  const [sound, setSound] = useState(true);
  const [repeat, setRepeat] = useState(true);
  const [like, setLike] = useState(true);
  const [follow, setFollow] = useState(true);

  const [timeStart, setTimeStart] = useState(0);
  const [duration, setDuration] = useState(0);

  if (demo.currentSongData.title.length <= 0) {
    return <div></div>;
  }

  const onLoading = (prosp?: any) => {
    console.log("demoi22i1", prosp.duration);
    if (prosp.duration) {
      setDuration(Number.parseInt(prosp.duration));
    }
  };

  const progress = parseInt(((timeStart / 100) * 400).toString());
  console.log(
    "🚀 TAM ~ file: MusicBar.tsx:49 ~ MusicBar ~ progress:",
    progress + "px"
  );
  return (
    <div className="fixed w-full h-auto bottom-0 bg-gray-100 z-50 border-t border-gray-300">
      <Sound
        // onLoading={(chicke: any) => { //   console.log("C22", chicke);
        // }}
        loop={repeat}
        onLoading={onLoading}
        ref={soundRef}
        onPlaying={(props?: any) => {
          console.log("PLAYUING", props);
          if (props.position && duration) {
            const newTimeProgress = (props.position / duration) * 100;
            setTimeStart(parseInt(newTimeProgress.toString()));
          }
        }}
        url={demo.currentSongData.audioURL}
        playStatus={demo.currentSongData.isPlaying ? "PLAYING" : "PAUSED"}
      />
      <div className="mx-auto flex max-w-7xl items-center justify-center space-x-5 p-6 lg:px-8 h-12">
        {/* Backward */}
        <button className="">
          <BackwardIcon className="h-4 text-black-800/60" />
        </button>
        {/* Pause */}
        {pause === true ? (
          <button className="" onClick={() => setPause(false)}>
            {!demo.currentSongData.isPlaying ? (
              <PlayIcon className="h-4 text-black-800/60" />
            ) : (
              <PauseIcon className="h-4 text-black-800/60" />
            )}
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
          <div className="">{timeStart}</div>
          <div className="">
            <div
              className={`flex items-center h-1 min-w-[400px] bg-red-800/60 rounded-sm translate-x-[${progress}px]`}
            >
              <div
                key={timeStart}
                className={`rounded-full w-2 h-2 bg-black shadow hover:cursor-pointer`}
              ></div>
            </div>
          </div>
          <div className="">{100}</div>
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
            src={demo.currentSongData.image}
            alt="logo"
          />
          <div className="info text-base  ">
            <div className="artist font-light ">
              {demo.currentSongData.title}
            </div>
            <div className="name">{demo.currentSongData.artist}</div>
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
