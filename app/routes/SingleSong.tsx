import SidebarArtist from "~/components/SidebarArtist";
import SongInfo from "~/components/SongInfo";

function SingleSong() {
  return (
    <div className="bg-slate-100 mb-7">
      <div className=" h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className=" bg-white w-full mt-20">
          {/* song info */}
          <div className=" relative w-full h-80 bg-slate-200">
            <div className="content"></div>
            <img
              className="object-center w-72 h-72 absolute bottom-4 right-4 z-30"
              src="https://picsum.photos/200"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="h-screen flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl ">
        <SongInfo />
        <SidebarArtist />
      </div>
    </div>
  );
}

export default SingleSong;
