import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import InteractProfile from "~/components/InteractProfile";
import PopularTracks from "~/components/PopularTracks";
import SearchResults from "~/components/SearchResults";
import SidebarArtist from "~/components/SidebarArtist";
import { variable } from "~/constant/constant";
import type { TArtist, TSong } from "~/storage/AppContext";

export const loader = async ({ params }: LoaderArgs) => {
    const response = await await fetch(
        `${variable.BACKEND_URL}/artist/${params.profileId}?include=songs`
    ).then((res: any) => res.json());

    return {
        artist: response.data as TArtist,
    };
};

function ProfilePage() {
    const { artist } = useLoaderData() as { artist: TArtist };

    console.log(
        "🚀 TAM ~ file: $profileId.tsx:22 ~ ProfilePage ~ data:",
        artist.relationships.song
    );
    const songs = artist.relationships.songs.data as TSong[];

    return (
        <div className="bg-slate-100 mb-7">
            <div className=" h-fit flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
                <div className=" bg-white w-full mt-20 ">
                    {/* artist info */}
                    <div className="flex  w-full h-72 bg-slate-200 p-8">
                        <img
                            className="object-center w-52 h-52 z-30 rounded-full mr-4"
                            src={artist.attributes.avtURL}
                            alt="logo"
                        />

                        <div className="info space-y-1 text-white">
                            <div className="artist_name bg-black px-2 w-fit text-2xl ">
                                {artist.attributes.name}
                            </div>
                            <div className="user-name bg-black px-2 w-fit text-slate-300">
                                Join since{" "}
                                {new Date(
                                    artist.created_at
                                ).toLocaleDateString()}
                            </div>
                            <div className="country bg-black px-2 w-fit text-slate-300">
                                Việt Nam
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* interact */}
            <div className="h-fit overflow-hiden w-full lg:px-8 mx-auto max-w-7xl">
                <InteractProfile />
            </div>

            {/* Tab layout */}
            <div className="flex overflow-hiden w-full lg:px-8 mx-auto max-w-7xl ">
                <div className=" w-3/4 bg-white pl-8">
                    <div className="mb-6">
                        <div
                            className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-home"
                            role="tabpanel"
                            aria-labelledby="tabs-home-tab"
                            data-te-tab-active
                        >
                            {songs.length > 0 &&
                                songs.map((song: TSong) => (
                                    <SearchResults song={song} key={song.id} />
                                ))}
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-popularTracks"
                            role="tabpanel"
                            aria-labelledby="tabs-popularTracks-tab"
                        >
                            <PopularTracks />
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-tracks"
                            role="tabpanel"
                            aria-labelledby="tabs-tracks-tab"
                        >
                            Tab 3 content
                        </div>
                        <div
                            className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                            id="tabs-contact"
                            role="tabpanel"
                            aria-labelledby="tabs-contact-tab"
                        >
                            Tab 4 content
                        </div>
                    </div>
                </div>

                <SidebarArtist />
            </div>
        </div>
    );
}

export default ProfilePage;
