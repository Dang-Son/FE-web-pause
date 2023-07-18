import { PlayIcon } from "@heroicons/react/20/solid";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import SidebarArtist from "~/components/SidebarArtist";
import SongInfo from "~/components/SongInfo";
import WriteComment from "~/components/WriteComment";
import { variable } from "~/constant/constant";
import type { TSong } from "~/storage/AppContext";

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

            <button className="flex justify-center items-center bg-orange-500 rounded-full w-12 h-12 mt-2 absolute top-8 right-10">
              <PlayIcon className="h-8 text-white translate-x-[2px]" />
            </button>
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
