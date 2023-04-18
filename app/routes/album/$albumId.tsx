import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";
import SongOfPlaylist from "~/components/SongOfPlaylist";
import { variable } from "~/constant/constant";
import type { TPlaylist, TSong } from "~/storage/AppContext";

export const loader = async ({ params }: LoaderArgs) => {
  const response = await await fetch(
    `${variable.BACKEND_URL}/playlist/${params.albumId}?include=songs`
  ).then((res: any) => res.json());
  return {
    playlist: response.data as TPlaylist,
    InfoPlaylist: response.data.attributes as TPlaylist,
  };
};

function Album() {
  // get song
  const { playlist } = useLoaderData() as { playlist: TPlaylist };
  const songs = playlist.relationships.songs.data as unknown as TSong[];

  // get playlist info
  const { InfoPlaylist } = useLoaderData();
  return (
    <div className="bg-slate-100">
      <div className=" h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl mb-7">
        <div className=" bg-white w-3/4 mt-20">
          {/* song info */}

          <div className=" relative w-full h-80 bg-slate-200">
            <img
              className=" object-cover h-80 w-full rounded-md z-10 "
              src={InfoPlaylist.imageURL}
              alt="logo"
            />
            <div className=" absolute top-10 left-10 bg-white p-4 bg-opacity-70">
              <div className="content z-20 text-black px-2">
                <div className="name">Name: {InfoPlaylist.name}</div>
                <div className="category">
                  Category: {InfoPlaylist.category}
                </div>
              </div>
            </div>
          </div>

          {/* playlist */}
          <div className="playlist m-5 mx-4">
            {songs ? (
              songs.map((song: TSong) => (
                <SongOfPlaylist key={song.attributes.id} song={song} />
              ))
            ) : (
              <div>Null</div>
            )}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default Album;
