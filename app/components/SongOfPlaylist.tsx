function SongOfPlaylist() {
  return (
    <div className="song relative h-12 items-center mb-2 space-x-5 border-b-2 border-gray-100 w-full ">
      <div className="flex items-center">
        <img
          className="object-center w-10 h-10 mr-4 items-center"
          src="https://picsum.photos/200"
          alt="logo"
        />
        <div className="flex info text-base space-x-3">
          <div className="artist font-light">artist</div>
          <div className=""> - </div>
          <div className="name ">name</div>
        </div>
      </div>

      <div className=" absolute h-10 flex items-center space-x-2 top-0 right-0">
        <div className="follow">follow</div>
        <div className="like">like</div>
      </div>
    </div>
  );
}

export default SongOfPlaylist;
