import Sidebar from "~/components/Sidebar";
import SongOfPlaylist from "~/components/SongOfPlaylist";

function album() {
  return (
    <div className="bg-slate-100">
      <div className=" h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className=" bg-white w-3/4 mt-20">
          {/* song info */}
          <div className=" relative w-full h-80 bg-slate-200">
            <div className="content"></div>
            <img
              className="object-center w-72 h-72 rounded-lg absolute bottom-4 right-4 z-30"
              src="https://picsum.photos/200"
              alt="logo"
            />
          </div>

          {/* playlist */}
          <div className="playlist m-5 mx-4">
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
            <SongOfPlaylist />
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default album;
