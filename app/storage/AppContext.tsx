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
