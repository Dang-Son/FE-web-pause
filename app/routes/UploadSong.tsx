import { FormData, type LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData, useOutletContext } from "@remix-run/react";
import { useRef, useState } from "react";
import CloudinaryUploadWidget from "~/components/CloudinaryUploadWidget";
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

function UploadSong({ navigation }: { navigation: any }) {
  const { playlist } = useLoaderData();

  const [songImage, setSongImage] = useState("");
  const [songAudio, setSongAudio] = useState("");
  const [songName, setSongName] = useState("");
  const [playlistId, setPlaylistId] = useState("1");

  const [isLoading, setIsLoading] = useState(false);

  const UploadData = async (e: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData();

    setIsLoading(true);

    data.append("image", songImage);
    data.append("audio", songAudio);
    data.append("name", songName);
    data.append("playlist_id", playlistId);
    data.append("artist_id", "1");

    const res = await fetch("http://127.0.0.1:8000/api/song", {
      method: "post",
      body: data,
      headers: {
        Accept: "application/json",
        mode: "cors",
      },
    });
    const responseJson = await res.json();

    if (responseJson.data) {
      // eslint-disable-next-line no-alert, no-undef
      alert("Upload Successful");
      setIsLoading(false);
      navigation.goBack();
    } else {
      // eslint-disable-next-line no-alert, no-undef
      // alert('Upload Failed');
      setIsLoading(false);
    }
  };
  const myWidget = useRef();
  const [aaa, setAaa] = useState();
  return (
    <div className="bg-slate-100 mb-7 mt-20">
      <div className=" h-screen flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className="bg-white w-full flex justify-center ">
          <div className="space-y-8 h-fit">
            <div className="">
              <div className="mt-6">
                <img
                  id="uploadedimage"
                  src=""
                  alt=""
                  className="uploadfile border bg-opacity-0 rounded border-gray-300 w-80 h-60"
                ></img>
              </div>
              <div className="flex justify-center">
                <CloudinaryUploadWidget
                  myWidget={myWidget}
                  // setAaa={this.state.first}
                />
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
