function Song() {
  return (
    <div className="w-36 h-40 mx-3 my-3 ">
      <img className="object-center w-36 h-36 rounded-lg " src="https://picsum.photos/200" alt="" />
      <div className="flex category justify-center font-medium">Category</div>
    </div>
  );
}

export default Song;