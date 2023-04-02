import { useLoaderData } from "@remix-run/react";
import Song from "../components/Song";

export async function loader() {
  // return json(await fetch("http://127.0.0.1:8000/api/user/total/1"));
  console.log("ssss");
  return fetch("http://127.0.0.1:8000/api/user/total/1")
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
}
function Center() {
  const songs = useLoaderData<typeof loader>();
  console.log(songs);
  return (
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
  );
}

export default Center;
