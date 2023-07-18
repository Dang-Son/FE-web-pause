import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { variable } from "~/constant/constant";
import type { TAlbum } from "~/storage/AppContext";
import CloudinaryUploadWidget from "~/components/CloudinaryUploadWidget";
import CloudinaryUploadAudio from "~/components/CloudinaryUploadAudio";
import { useEffect, useRef, useState } from "react";

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
  const myWidget1 = useRef();
  const myWidget2 = useRef();

  const [upload, setUpload] = useState({
    imageURL: undefined,
    playlist_id: undefined,
    name: undefined,
    audioURL: undefined,
    liked: 0,
    views: 0,
    artist_id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo voluptas tempora fugiat beatae eaque ut corporis reprehenderit repudiandae iure? Natus dolorem asperiores vel. Tempora explicabo, voluptatibus dicta deserunt laboriosam expedita.",
  });
  console.log("upload", upload);

  const navigate = useNavigate();
  const upSong = async (imageURL: string, audioURL: string) => {
    const response = await fetch("http://127.0.0.1:8000/api/song/upload", {
      method: "post",
      body: JSON.stringify({
        data: {
          attributes: { ...upload, imageURL, audioURL },
        },
      }),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const responseJason = await response.json();

    console.log("responseJason", responseJason);
    navigate(`/song/${responseJason.data.id}`, { replace: true });
  };

  return (
    <div className="bg-slate-100 mb-7 mt-20">
      <div className=" h-screen flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className="bg-white w-full flex justify-center ">
          <div className="space-y-3 h-fit">
            <div className="">
              <div className="mt-6">
                <img
                  id="uploadedImage"
                  src="https://placehold.co/400"
                  alt=""
                  className="uploadfile border bg-opacity-0 rounded border-gray-300 w-80 h-60 object-cover"
                ></img>
                <div className="flex justify-center mb-2">
                  <CloudinaryUploadWidget myWidget={myWidget1} />
                </div>
                <img
                  id="uploadedAudio"
                  src="https://placehold.co/400"
                  alt=""
                  title=""
                  className="uploadfile border bg-opacity-0 rounded border-gray-300 w-80 h-8 object-cover"
                ></img>
                <div className="flex justify-center h-10 w-40">
                  <CloudinaryUploadAudio myWidget={myWidget2} />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <select
                  className="bg-slate-200 rounded w-full px-1"
                  id="select_id"
                  onChange={(e: any) =>
                    setUpload({
                      ...upload,
                      playlist_id: (document.getElementById("select_id") as any)
                        .value,
                    })
                  }
                >
                  <option value="" disabled hidden selected>
                    Playlist
                  </option>
                  {playlist.map((playlists: TAlbum) => (
                    <option value={playlists.id} key={playlists.id}>
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
                  onChange={(e: any) =>
                    setUpload({ ...upload, name: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="btn px-3"
                onClick={() => {
                  const imageURL = (
                    document.getElementById("uploadedImage") as any
                  ).src;

                  const audioURL = (
                    document.getElementById("uploadedAudio") as any
                  ).title;

                  const newUpload = {
                    ...upload,
                    imageURL,
                    audioURL,
                  };

                  console.log("NEW UPLOAD", newUpload);
                  setUpload(newUpload);
                  upSong(imageURL, audioURL);
                }}
              >
                Upload Song
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadSong;
