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
  userData: undefined,
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
  id: string;
  attributes: {
    audioURL: string;
    author_name: string;
    imageURL: string;
    name: string;
    liked: number;
    playlist_id: string;
    views: number;
  };
  relationships: {
    comments: {
      data: {
        attributes: {
          content: string;
        };
      };
    };
  };
};

export type TComment = {
  id: string;
  attributes: {
    content: string;
  };
  relationships: {
    user: {
      data: TUser;
    };
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

export type TAlbum = {
  id: string;
  attributes: {
    category: string;
    name: string;
    user_created_name: string;
    imageURL: string;
  };
};

export type TPlaylist = TAlbum & {
  relationships: {
    songs: { data: TSongResource[] };
  };
};

export const LevelContext = createContext<MyState>({
  currentSongData: {
    album: "",
    artist: "",
    image: "",
    length: 0,
    title: "",
    isPlaying: false,
    audioURL: "",
    id: 0,
  },
  userData: undefined,
  isLoading: false,
  showMusicBar: false,
  sound: undefined,
  updateState: function (key: any, value: any): void {
    alert("error");
  },
});
