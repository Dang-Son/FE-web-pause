import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";
import Song from "~/components/Song";
import { variable } from "~/constant/constant";
import type { TPlaylist } from "~/storage/AppContext";

export const loader: LoaderFunction = async (args: LoaderArgs) => {
  const response = await await fetch(
    `${variable.BACKEND_URL}/user/total/1`
  ).then((res: any) => res.json());
  return {
    top_bolero: response.data.attributes.top_bolero as TPlaylist[],
    top_rap: response.data.attributes.top_rap as TPlaylist[],
    top_chill: response.data.attributes.top_chill as TPlaylist[],
    top_pop: response.data.attributes.top_pop as TPlaylist[],
    top_playlist: response.data.attributes.top_playlist as TPlaylist[],
  };
};
export default function Index() {
  const { top_bolero, top_rap, top_chill, top_pop, top_playlist } =
    useLoaderData();
  console.log(top_bolero);
  return (
    <main className=" bg-slate-100">
      <div className="flex h-full overflow-hiden w-full lg:px-8 mx-auto max-w-7xl mb-7">
        <div className="w-3/4 bg-white mt-14 ">
          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top Bolero</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              {top_bolero ? (
                top_bolero.map((top_bolero: TPlaylist) => (
                  <Song key={top_bolero.attributes.id} song={top_bolero} />
                ))
              ) : (
                <div>Null</div>
              )}
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top Rap</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              {top_rap ? (
                top_rap.map((top_rap: TPlaylist) => (
                  <Song key={top_rap.attributes.id} song={top_rap} />
                ))
              ) : (
                <div>Null</div>
              )}
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top Chill</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              {top_chill ? (
                top_chill.map((top_chill: TPlaylist) => (
                  <Song key={top_chill.attributes.id} song={top_chill} />
                ))
              ) : (
                <div>Null</div>
              )}
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top Pop</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              {top_pop ? (
                top_pop.map((top_pop: TPlaylist) => (
                  <Song key={top_pop.attributes.id} song={top_pop} />
                ))
              ) : (
                <div>Null</div>
              )}
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top Playlist</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              {top_playlist ? (
                top_playlist.map((top_playlist: TPlaylist) => (
                  <Song key={top_playlist.attributes.id} song={top_playlist} />
                ))
              ) : (
                <div>Null</div>
              )}
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </main>
  );
}
