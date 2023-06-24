function Comment() {
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
        <div className=" font-thin text-slate-400">Son vjppro No1</div>
        {/* User's comment */}
        <div className=" font-medium">Day la mot bai hat hay day y nghia</div>
      </div>
    </div>
  );
}

export default Comment;
