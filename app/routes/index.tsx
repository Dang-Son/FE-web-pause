import Sidebar from "~/components/Sidebar";
import Song from "~/components/Song";

export default function Index() {
  return (
    <main className=" bg-slate-100">
      <div className="flex h-full overflow-hiden w-full lg:px-8 mx-auto max-w-7xl mb-7">
        <div className="w-3/4 bg-white mt-14 ">
          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top List</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top List</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top List</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top List</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
            </div>
          </div>

          <div className="playlist mb-5 mt-10 ml-5">
            <div className="Toplist mx-4 my-3 font-bold">Top List</div>
            <div className="content flex w-full h-56 scrollbar scrollbar-none scrollbar-track-gray-100">
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
            </div>
          </div>
        </div>
        <Sidebar />
      </div>
    </main>
  );
}
