import { useNavigate } from "@remix-run/react";
import { useState } from "react";
import type { TSong } from "~/storage/AppContext";

function WriteComment(prop: { song: TSong }) {
  const get_song_id = prop.song.id;
  const [comment, setComment] = useState({
    content: undefined,
    user_id: 1,
    song_id: get_song_id,
  });
  console.log("comment", comment);
  const uploadComment = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/comment", {
      method: "post",
      body: JSON.stringify({
        data: {
          attributes: comment,
        },
      }),
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    });

    const responseJason = await response.json();
    setComment({
      ...comment,
      content: "" as any,
    });
    navigate(".", { replace: true });
  };

  const navigate = useNavigate();
  return (
    <div className="bg-white h-fit w-full flex">
      <div className="flex  ml-10 my-4 h-fit w-full">
        <img
          className="object-center w-10 h-10"
          src="https://picsum.photos/200"
          alt="logo"
        />
        <div className="bg-slate-200 w-full flex items-center">
          <input
            type="text"
            id="name"
            name="title"
            className="bg-white rounded w-full h-6 mx-2 px-2  outline-none"
            placeholder="  Write your comment"
            required
            value={comment.content}
            onChange={(e: any) =>
              setComment({ ...comment, content: e.target.value })
            }
          />
        </div>
      </div>
      <button
        className="bg-orange-600/100 border-none  w-fit h-full p-2 text-white mr-10 my-4 btn"
        onClick={uploadComment}
      >
        Submit
      </button>
    </div>
  );
}

export default WriteComment;
