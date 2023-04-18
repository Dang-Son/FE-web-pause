function CreatePlaylist() {
  return (
    <div className="bg-slate-100 mb-7 mt-20">
      <div className=" h-screen flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className="bg-white w-full flex justify-center ">
          <div className="space-y-4 h-fit">
            <div className="">
              <div className="flex justify-center items-center uploadfile border bg-gray-200 rounded border-gray-300 w-80 h-60 mt-16">
                <button className="border border-gray-300 w-fit h-fit bg-white">
                  <div className="btn rounded"> upload image</div>
                </button>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center items-center uploadfile bg-gray-200 border rounded border-gray-300 w-80 h-9">
                <button className="border border-gray-300 w-fit h-fit bg-white">
                  <div className="btn rounded"> upload song</div>
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="">
                <div className="">Playlist</div>
                <input
                  type="text"
                  id="name"
                  name="title"
                  className="bg-slate-200 rounded w-full px-1"
                  required
                />
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
              <button className="btn px-3">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePlaylist;
