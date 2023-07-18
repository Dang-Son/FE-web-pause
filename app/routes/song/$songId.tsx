import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useContext } from "react";
import SidebarArtist from "~/components/SidebarArtist";
import SongInfo from "~/components/SongInfo";
import WriteComment from "~/components/WriteComment";
import { variable } from "~/constant/constant";
import { LevelContext, type TSong } from "~/storage/AppContext";

export const loader = async ({ params }: LoaderArgs) => {
  const response = await await fetch(
    `${variable.BACKEND_URL}/song/${params.songId}`
  ).then((res: any) => res.json());

  return {
    song: response.data as TSong,
  };
};

function SingleSongPage() {
  const { song } = useLoaderData<typeof loader>() as unknown as {
    song: TSong;
  };
  const demo = useContext(LevelContext);
  console.log(
    "🚀 TAM ~ file: $songId.tsx:25 ~ SingleSongPage ~ song:",
    demo.currentSongData,
    song
  );

  const isPlayingSong =
    demo.currentSongData.isPlaying &&
    demo.currentSongData.title === song.attributes.name;

  const imageURL = song.attributes.imageURL;
  return (
    <div className="bg-slate-100 mb-7">
      <div className=" h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className={`bg-white w-full mt-20 `}>
          {/* song info */}
          <div className="relative w-full h-80 bg-slate-200 ">
            <img
              src={imageURL}
              className="w-full h-80 cover object-cover"
              alt=""
            />
            <div className="content  bg-white p-4 bg-opacity-70 absolute top-8 left-5">
              <p className="text-xl font-bold">{song.attributes.name}</p>
              <p className="text-gray text-sm">{song.attributes.author_name}</p>
            </div>

            {!isPlayingSong ? (
              <button className="flex justify-center items-center bg-orange-500 rounded-full w-12 h-12 mt-2 absolute top-8 right-10">
                <PlayIcon
                  className="h-8 text-white translate-x-[2px]"
                  onClick={() =>
                    demo.updateState("currentSongData", {
                      ...demo.currentSongData,

                      id: song.id,
                      album: (song as any).relationships.playlists.data
                        .attributes.name,
                      artist: (song as any).relationships.artist.data.attributes
                        .name,
                      title: song.attributes.name,
                      isPlaying: !demo.currentSongData.isPlaying,
                      audioURL: song.attributes.audioURL,
                      image: imageURL,
                    })
                  }
                />
              </button>
            ) : (
              <button className="flex justify-center items-center bg-orange-500 rounded-full w-12 h-12 mt-2 absolute top-8 right-10">
                <PauseIcon
                  className="h-8 text-white translate-x-[-1px]"
                  onClick={() =>
                    demo.updateState("currentSongData", {
                      ...demo.currentSongData,

                      id: song.id,
                      album: (song as any).relationships.playlists.data
                        .attributes.name,
                      artist: (song as any).relationships.artist.data.attributes
                        .name,
                      title: song.attributes.name,
                      isPlaying: !demo.currentSongData.isPlaying,
                      audioURL: song.attributes.audioURL,
                      image: imageURL,
                    })
                  }
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <WriteComment song={song} />
      </div>
      <div className="h-screen flex overflow-hidden w-full lg:px-8 mx-auto max-w-7xl ">
        <SongInfo song={song} />
        <SidebarArtist />
      </div>
    </div>
  );
}

export default SingleSongPage;
