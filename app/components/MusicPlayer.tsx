import { Fragment, useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  play?: boolean;
}

const MusicPlayer = ({ play: playParent }: MusicPlayerProps) => {
  const [play, setPlay] = useState(true);
  const audio = useRef<HTMLAudioElement>(null);

  const playState = () => {
    if (!playParent) {
      return false
    } else {
      return play
    }
  }

  const onPlay = async () => {
    if (!audio.current) return;
    await audio.current.play();
    ;
  };

  const onPause = async () => {
    if (!audio.current) return;
    audio.current.pause();
    setPlay(false);
  };

  useEffect(() => {
    // Add event listener to check if the tab is active or not
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Return a cleanup function that removes the event listener
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []); // Pass an empty array as the second argument to only run this effect once

  useEffect(() => {
    if (!playParent) {
      return
    }

    if (playState()) onPlay();
    else onPause();
  }, [play, playParent]);

  

  const handleVisibilityChange = async () => {
    // If the tab is active, play the audio
    if (!document.hidden) {
      await onPlay();
    } else {
      // If the tab is not active, pause the audio
      await onPause();
    }
  }

  return (
    <Fragment>
      <audio controls ref={audio} preload={"none"} loop hidden>
        <source src={"/weddingtheme.mp3"} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className=" fixed bottom-0 right-0 mr-3 mb-3 md:mr-8 md:mb-8">
        <button
          className="rounded-full drop-shadow-md bg-[#CE7BB0] text-4xl w-9 h-9  md:w-11 md:h-11 flex items-center justify-center"
          onClick={() => {
            setPlay(!play);;
          }}
          aria-label="audio-control"
        >
          <i className={playState() ? "bx bx-pause" : "bx bx-play pl-1"} />
        </button>
      </div>
    </Fragment>
  );
};

export default MusicPlayer;
