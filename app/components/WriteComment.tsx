function WriteComment() {
  return (
    <div className="bg-white h-fit w-full">
      <div className="flex  mx-10 my-4">
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
            className="bg-white rounded w-full h-6 mx-2"
            placeholder="  Write your comment"
            required
          />
        </div>
      </div>
    </div>
  );
}

export default WriteComment;
