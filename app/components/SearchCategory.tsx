import {
  MagnifyingGlassIcon,
  QueueListIcon,
  SignalIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function SearchCategory() {
  return (
    <div className="w-1/5 space-y-2 border-b-2 border-slate-100 pb-6 h-fit sticky top-40">
      <div className="everything relative animation hover:bg-orange-500 hover:text-white  h-7 ">
        <MagnifyingGlassIcon className="h-5 inline-block mx-1" />
        <div className="inline-block">Everything</div>
      </div>
      <div className="tracks relative animation hover:bg-orange-500 hover:text-white  h-7 ">
        <SignalIcon className="h-5 inline-block mx-1" />
        <div className="inline-block">Tracks</div>
      </div>
      <div className="people relative animation hover:bg-orange-500 hover:text-white  h-7 ">
        <UserIcon className="h-5 inline-block mx-1" />
        <div className="inline-block">People</div>
      </div>
      <div className="albums relative animation hover:bg-orange-500 hover:text-white  h-7 ">
        <QueueListIcon className="h-5 inline-block mx-1" />
        <div className="inline-block">Albums</div>
      </div>
      <div className="playlists relative animation hover:bg-orange-500 hover:text-white  h-7 ">
        <QueueListIcon className="h-5 inline-block mx-1" />
        <div className="inline-block">Playlists</div>
      </div>
    </div>
  );
}

export default SearchCategory;
