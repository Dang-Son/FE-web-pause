import type { TComment } from "~/storage/AppContext";

function Comment(props: { comment: TComment }) {
  const comments = props.comment;
  console.log("get_comment", comments.relationships.user);
  return (
    <div className="flex mt-5 mx-5">
      {/* Avatar user */}
      <div className="mr-2">
        <img
          className="object-center w-12 h-12 rounded-full"
          src="https://picsum.photos/200"
          alt="logo"
        />
      </div>
      {/* Comment */}
      <div className="">
        {/* User's name */}
        <div className=" font-thin text-slate-400">
          {comments.relationships.user.data.attributes.name}
        </div>
        {/* User's comment */}
        <div className=" font-medium">{comments.attributes.content}</div>
      </div>
    </div>
  );
}

export default Comment;
