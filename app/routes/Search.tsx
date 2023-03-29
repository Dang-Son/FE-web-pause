import SearchCategory from "~/components/SearchCategory";
import SearchResults from "~/components/SearchResults";

function Search() {
  return (
    <div className="bg-slate-100 mb-7 h-fit">
      <div className="h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
        <div className="bg-white w-full mt-20">
          <div className=" sticky top-20 z-50 bg-white text-2xl font-semibold mx-8 pt-4 border-b-2 border-slate-100 tracking-wide">
            Search results for ""
          </div>

          <div className="flex mx-8 h-fit pt-5">
            <SearchCategory />
            <div className="w-4/5 h-fit ml-6">
              <div className="results font-extralight">
                Found 1000+ playlists, 500+ people, 500+ tracks
              </div>
              <SearchResults />
              <SearchResults />
              <SearchResults />
              <SearchResults />
              <SearchResults />
              <SearchResults />
              <SearchResults />
              <SearchResults />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
