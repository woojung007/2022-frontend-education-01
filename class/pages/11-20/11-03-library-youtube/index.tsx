// import ReactPlayer from "react-player";
// eslint-disable-next-line no-use-before-define
import React from "react";
import _ReactPlayer, { ReactPlayerProps } from "react-player";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;

export default function LibraryYoutubePage() {
  return (
    <>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="40%"
      />
    </>
  );
}
