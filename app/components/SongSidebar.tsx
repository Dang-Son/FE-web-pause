function SongSidebar() {
  return (
    <div className="flex justify-start items-center my-4">
      <img
        className="picture object-center w-16 h-16 rounded-lg "
        src="https://picsum.photos/200"
        alt=""
      />
      <div className="content ml-3 text-sm">
        <div className="artist font-extralight">Artist</div>
        <div className="song-name">Name</div>
        <div className="interact flex font-extralight">
          <div className="played">Played</div>
          <div className="liked ml-2">Liked</div>
        </div>
      </div>
    </div>
  );
}

export default SongSidebar;
