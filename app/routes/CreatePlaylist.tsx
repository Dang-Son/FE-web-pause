import { useNavigate } from "@remix-run/react";
import { useRef, useState } from "react";
import CloudinaryUploadWidget from "~/components/CloudinaryUploadWidget";

function CreatePlaylist() {
  const myWidget = useRef();
  const [createPl, setCreatePl] = useState({
    name: undefined,
    bg_color: "#fff292",
    category: undefined,
    views: 0,
    imageURL: undefined,
    likes: 0,
    user_id: 1,
  });

  const navigate = useNavigate();
  const createPlaylist = async (imageURL: string) => {
    const response = await fetch("http://127.0.0.1:8000/api/playlist", {
      method: "post",
      body: JSON.stringify({
        data: {
          attributes: { ...createPl, imageURL },
        },
      }),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const responseJason = await response.json();

    console.log("responseJason", responseJason);
    navigate(`/Album/${responseJason.data.id}`, { replace: true });
  };
  return (
    <div className="bg-slate-100 mb-7 mt-20">
      <div className=" h-screen flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className="bg-white w-full flex justify-center ">
          <div className="space-y-4 h-fit">
            <div className="">
              <div className="mt-6">
                <img
                  id="uploadedImage"
                  src="https://placehold.co/400"
                  alt=""
                  className="uploadfile border bg-opacity-0 rounded border-gray-300 w-80 h-60 object-cover"
                ></img>
                <div className="flex justify-center mb-2">
                  <CloudinaryUploadWidget myWidget={myWidget} />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="">
                <select
                  className="bg-slate-200 rounded w-full px-1"
                  id="select_id"
                  onChange={() =>
                    setCreatePl({
                      ...createPl,
                      category: (document.getElementById("select_id") as any)
                        .value,
                    })
                  }
                >
                  <option value="" disabled hidden selected>
                    Category
                  </option>
                  <option value="Bolero">Bolero</option>
                  <option value="Chill">Chill</option>
                  <option value="Rap">Rap</option>
                  <option value="Pop">Pop</option>
                </select>
              </div>
              <div className="">
                <div className="">Playlist's name</div>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="bg-slate-200 rounded w-full px-1"
                  onChange={(e: any) =>
                    setCreatePl({ ...createPl, name: e.target.value })
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

                  const newCreate = {
                    ...createPl,
                    imageURL,
                  };

                  console.log("NEW UPLOAD", newCreate);
                  setCreatePl(newCreate);
                  createPlaylist(imageURL);
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
