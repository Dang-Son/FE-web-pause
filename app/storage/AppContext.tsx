import { createContext } from "react";
import type { MyState } from "./AppState";

type TAppContext = MyState & {
    toggleIsPlaying: () => void;
    updateState: (key: any, value: any) => void;
};
export default createContext<TAppContext>({
    currentSongData: {
        album: "Swimming",
        artist: "Mac Miller",
        image: "swimming",
        length: 312,
        id: 1,
        title: "So It Goes",
        isPlaying: false,
        audioURL:
            "https://res.cloudinary.com/dck0bidwh/video/upload/v1675850974/bs1sjno6gknfldz4iwub.mp3",
    },
    isLoading: true,
    showMusicBar: true,
    userData: "",
    sound: undefined,
    toggleIsPlaying: () => {},
    updateState: () => {},
});

export type TSongResource = {
    id: string;
    attributes: {
        audioURL: string;
        author_name: string;
        imageURL: string;
        name: string;
        liked: number;
        playlist_id: string;
        views: number;
        category: string;
        description: string;
    };
};
export type TSong = {
    attributes: {
        audioURL: string;
        author_name: string;
        imageURL: string;
        name: string;
        liked: number;
        playlist_id: string;
        views: number;
        id: string;
    };
};

export type TArtistResource = {
    id: string;
    attributes: {
        name: string;
        user_id: string;
        followed: number;
        avtURL: string;
        songCount: number;
    };
    created_at: string;
};

export type TArtist = TArtistResource & {
    relationships: {
        songs: { data: TSongResource[] };
    };
};

export type TUser = {
    id: string;
    attributes: {
        avtURL: string;
        email: string;
        name: string;
    };
};

export type TPlaylist = {
    attributes: {
        id: number;
        category: string;
        name: string;
        user_created_name: string;
        imageURL: string;
    };
};
