import type { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import SearchCategory from "~/components/SearchCategory";
import SearchResults from "~/components/SearchResults";
import { variable } from "~/constant/constant";
import type { TSong } from "~/storage/AppContext";

export const loader: LoaderFunction = async (args: LoaderArgs) => {
    const response = await await fetch(`${variable.BACKEND_URL}/song`).then(
        (res: any) => res.json()
    );

    return {
        songs: response.data as TSong[],
    };
};

function Search() {
    const location = useLocation();
    const searchKey = new URLSearchParams(location.search).get(
        "search"
    ) as string;

    const { songs } = useLoaderData();
    const result = songs.filter((song: TSong) =>
        song.attributes?.name.includes(searchKey)
    ) as TSong[];

    return (
        <div className="bg-slate-100 mb-7  h-screen">
            <div className="h-screen flex overflow-hidden w-full lg:px-8 mx-auto max-w-7xl">
                <div className="bg-white w-full mt-20">
                    <div className=" sticky top-20 z-50 bg-white text-2xl font-semibold mx-8 pt-4 border-b-2 border-slate-100 tracking-wide">
                        Search results for "{searchKey}"
                    </div>

                    <div className="flex mx-8 h-fit pt-5">
                        <SearchCategory />
                        <div className="w-4/5 h-fit ml-6">
                            <div className="results font-extralight">
                                Found {result.length} tracks
                            </div>

                            {result.length > 0 ? (
                                result.map((song) => (
                                    <SearchResults
                                        song={song}
                                        key={song.attributes.id}
                                    />
                                ))
                            ) : (
                                <div> nothing here</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;
