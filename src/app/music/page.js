"use client";

import Iframe from "react-iframe";
import { Spotify } from "react-spotify-embed";

const MusicPage = () => {
  const spotifyLinks = [
    "https://open.spotify.com/track/3GpHyN7HZkjuLlc6MtFuNl?si=3fb45e0a2afa44b2",
    "https://open.spotify.com/track/0lKgcoWRsNOt6bKrHWpo4d?si=3200675a46ea430b",
    "https://open.spotify.com/track/6Cz5CNcIcss8z6wbNrc0xk?si=8bc72361227245bc",
    "https://open.spotify.com/track/28LtzR9F5GlrCemanc3uzY?si=15256c78f9dd40cb",
    "https://open.spotify.com/track/3kkj3XbZr3hGpC2oknrul0?si=99490ab4de284282",
    "https://open.spotify.com/track/7hDybAj4QEmY1ne0hwfOQg?si=9530d3053de44503",
    "https://open.spotify.com/track/1Crvof8kegBvuZYiUdEQ9d?si=aae7f4fe0f5248ea",
    "https://open.spotify.com/track/5Uy2IJJ1CGRgJme6bzq2Yo?si=f43cc48535234a2e",
    "https://open.spotify.com/track/5vYQvFiar2FAKb7Yl5SER6?si=966ad3f4771b494d",
    // Placeholder for "coming soon"
  ];

  return (
    <div className="">
      <div className="flex items-center relative z-0 min-h-screen">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
        >
          <source src="/hero12.webm" type="video/webm" />
        </video>

        <div className="container mx-auto lg:w-3/4 z-10 relative text-white my-10 px-5 ">
          <h1 className="text-4xl font-bold text-center my-4">Releases</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
            {spotifyLinks.map((link, index) => (
              <div key={index} className="flex items-center justify-center">
                {link ? (
                  <Spotify className="" wide link={link} />
                ) : (
                  <p className="my-auto text-center">coming soon</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center relative">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute top-0 left-0"
        >
          <source src="/hero1.webm" type="video/webm" />
        </video>
        <div className="container flex flex-col justify-center items-center min-h-screen w-full z-10 relative text-white my-10 px-5 ">
          <div className="lg:w-3/4 container px-5">
            <h1 className="text-4xl font-bold text-center my-4">Mixes</h1>
            <Iframe
              className="rounded-lg"
              url="https://www.mixcloud.com/widget/iframe/?hide_cover=1&light=1&feed=%2Fmuratone%2Fmuratone-deep-thrills-vol-1%2F"
              width="100%"
              height="120"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
