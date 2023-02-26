import Song from "./Song";

function Center() {
  return (
    <div className="w-3/4 bg-white ">
      <div className="playlist mb-5 mt-10 ml-5">
        <div className="Toplist mx-4 my-3 font-bold">Top List</div>
        <div className="content flex snap-x">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />

        </div>
      </div>

      <div className="playlist mb-5 mt-10 ml-5">
        <div className="Toplist mx-4 my-3 font-bold">Top List</div>
        <div className="content flex overflow-x-auto">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        </div>
      </div>

      <div className="playlist mb-5 mt-10 ml-5">
        <div className="Toplist mx-4 my-3 font-bold">Top List</div>
        <div className="content flex overflow-x-auto">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        </div>
      </div>

      <div className="playlist mb-5 mt-10 ml-5">
        <div className="Toplist mx-4 my-3 font-bold">Top List</div>
        <div className="content flex overflow-x-auto">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        </div>
      </div>

      <div className="playlist mb-5 mt-10 ml-5">
        <div className="Toplist mx-4 my-3 font-bold">Top List</div>
        <div className="content flex overflow-x-auto">
        <Song />
        <Song />
        <Song />
        <Song />
        <Song />
        </div>
      </div>
    </div>
  );
}

export default Center;
