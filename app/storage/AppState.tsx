import React from "react";
import AppContext222 from "./AppContext";
type MyProps = { message: any };
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
  userData: undefined | string;
  isLoading: boolean;
  showMusicBar: boolean;
  sound: undefined | string;
};
class AppState extends React.Component<MyProps, MyState> {
  state: MyState = {
    currentSongData: {
      album: "string",
      artist: "string",
      image: "string",
      length: 2,
      title: "string",
      isPlaying: true,
      audioURL: "string",
      id: 1,
    },
    userData: undefined,
    isLoading: true,
    showMusicBar: true,
    sound: undefined,
  };

  updateState(key: any, value: any) {
    const newObject = {
      ...this.state,
      [key]: value,
    };
    this.setState(newObject);
  }

  async updateHistory() {
    try {
      // eslint-disable-next-line react/destructuring-assignment
      const songID = this.state.currentSongData.id;

      const resp = await fetch(
        `http://127.0.0.1:8000/api/history/1/${songID}`,
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
  }

  render(): React.ReactNode {
    const { currentSongData, isLoading, showMusicBar, userData, sound } =
      this.state;

    const toggleIsPlaying = () => {
      this.updateState("currentSongData", {
        ...currentSongData,
        isPlaying: !currentSongData.isPlaying,
      });
    };
    return (
      <AppContext222.Provider
        value={{
          currentSongData,
          isLoading,
          showMusicBar,
          userData,
          sound,
          updateState: this.updateState,
          toggleIsPlaying,
        }}
      >
        <div></div>
      </AppContext222.Provider>
    );
  }
}

export default AppState;
