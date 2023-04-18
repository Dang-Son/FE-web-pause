import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { variable } from "~/constant/constant";
import type { TAlbum } from "~/storage/AppContext";

export const loader = async ({ params }: LoaderArgs) => {
  const response = await await fetch(
    `${variable.BACKEND_URL}/user/total/1`
  ).then((res: any) => res.json());

  return {
    playlist: response.data.attributes.playlist as TAlbum[],
  };
};

function UploadSong() {
  const { playlist } = useLoaderData();

  return (
    <div className="bg-slate-100 mb-7 mt-20">
      <div className=" h-screen flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className="bg-white w-full flex justify-center ">
          <div className="space-y-8 h-fit">
            <div className="">
              <div className="flex justify-center items-center uploadfile border bg-gray-200 rounded border-gray-300 w-80 h-60 mt-16">
                <button className="border border-gray-300 w-fit h-fit bg-white">
                  <div className="btn rounded">upload image</div>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <select className="bg-slate-200 rounded w-full px-1" id="">
                  <option value="" disabled hidden selected>
                    Playlist
                  </option>
                  {playlist.map((playlists: TAlbum) => (
                    <option value="" key={playlists.id}>
                      {playlists.attributes.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="">
                <div>Name</div>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="bg-slate-200 rounded w-full px-1"
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="btn px-3">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadSong;
