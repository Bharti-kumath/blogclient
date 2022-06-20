import { useState, useEffect } from "react";
import Player from "../components/Player/player";

export default function Audioplayer() {
  const [songs] = useState([
    {
      src: "https://pagalfree.com/musics/128-Tu%20Laut%20Aa%20-%20Yasser%20Desai%20128%20Kbps.mp3",
    },
    {
      src: "https://pagalfree.com/musics/128-Mitra%20Re%20-%20Runway%2034%20128%20Kbps.mp3",
    },
    {
      src: "https://pagalfree.com/musics/128-Jaan%20Hai%20Meri%20(Lofi)%20-%20Radhe%20Shyam%20128%20Kbps.mp3",
    },
    {
      src: "https://pagalworld.com.se/files/download/id/3265",
    },
    {
        src: "https://wynk.in/music/song/have-a-great-day/um_00050087476601-USHR12141891",
      },
      {
        src: "https://pagalfree.com/musics/128-Mitwa%20-%20Kabhi%20Alvida%20Naa%20Kehna%20128%20Kbps.mp3",
      },
      {
        src: "https://pagalfree.com/musics/128-Iktara%20-%20Wake%20Up%20Sid%20128%20Kbps.mp3",
      },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}
