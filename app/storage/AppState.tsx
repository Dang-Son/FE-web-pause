import React, { useState } from "react";
import type { TUser } from "./AppContext";
import { LevelContext } from "./AppContext";

export type MyState = {
  currentSongData: {
    album: string;
    artist: string;
    image: string;
    length: number;
    title: string;
    isPlaying: boolean;
    audioURL: string;
    id: number;
  };
  userData: undefined | TUser;
  isLoading: boolean;
  showMusicBar: boolean;
  sound: undefined | string;
  updateState: (key: any, value: any) => void;
};

// class AppState extends React.Component<MyProps, MyState> {
//   state: MyState = {
//     currentSongData: {
//       album: "string",
//       artist: "string",
//       image: "string",
//       length: 2,
//       title: "string",
//       isPlaying: true,
//       audioURL: "string",
//       id: 1,
//     },
//     userData: undefined,
//     isLoading: true,
//     showMusicBar: true,
//     sound: undefined,
//   };

//   updateState(key: any, value: any) {
//     const newObject = {
//       ...this.state,
//       [key]: value,
//     };
//     this.setState(newObject);
//   }

//   async updateHistory() {
//     try {
//       // eslint-disable-next-line react/destructuring-assignment
//       const songID = this.state.currentSongData.id;

//       const resp = await fetch(
//         `http://127.0.0.1:8000/api/history/1/${songID}`,
//         {
//           method: "post",
//         }
//       );

//       // Load user data
//       const { data } = await resp.json();
//       console.log(
//         "🚀 TAM ~ file: AppState.js:102 ~ AppState ~ updateHistory ~ data",
//         data
//       );

//       // If has data -> update recently play
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render(): React.ReactNode {
//     const { currentSongData, isLoading, showMusicBar, userData, sound } =
//       this.state;

//     const toggleIsPlaying = () => {
//       this.updateState("currentSongData", {
//         ...currentSongData,
//         isPlaying: !currentSongData.isPlaying,
//       });
//     };
//     return (
//       <AppContext.Provider
//         value={{
//           currentSongData,
//           isLoading,
//           showMusicBar,
//           userData,
//           sound,
//           updateState: this.updateState,
//           toggleIsPlaying,
//         }}
//       >
//         <div></div>
//       </AppContext.Provider>
//     );
//   }
// }

export const LevelProvider = ({ children }: any) => {
  const [state, setState] = useState<MyState>({
    currentSongData: {
      album: "string",
      artist: "string",
      image: "string",
      length: 2,
      title: "",
      isPlaying: false,
      audioURL: "string",
      id: 1,
    },
    userData: undefined,
    isLoading: true,
    showMusicBar: true,
    sound: undefined,
    updateState: (key, value) => {
      alert("error");
    },
  });

  const updateHistory = async (songId: string) => {
    try {
      // eslint-disable-next-line react/destructuring-assignment

      const resp = await fetch(
        `http://127.0.0.1:8000/api/history/1/${songId}`,
        {
          method: "post",
        }
      );

      // Load user data
      const { data } = await resp.json();
      console.log(
        "🚀 TAM ~ file: AppState.js:102 ~ AppState ~ updateHistory ~ data",
        data
      );

      // If has data -> update recently play
    } catch (e) {
      console.log(e);
    }
  };
  const updateState = (key: any, value: any) => {
    console.log(
      "🚀 TAM ~ file: AppState.tsx:124 ~ updateState ~ value:",
      value
    );
    if (key === "currentSongData" && value.isPlaying) {
      updateHistory(value.id);
    }
    const newObject = {
      ...state,
      [key]: value,
    };
    setState(newObject as any);
  };
  return (
    <LevelContext.Provider
      value={{
        ...state,
        updateState,
        userData: state.userData,
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};

// export default ;
