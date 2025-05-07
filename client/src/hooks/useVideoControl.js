import {useEffect, useRef, useState}from 'react';

import React from 'react'

export default function useVideoControl() {
    const videoRef = useRef(null)
    const [isPlaying, setisPlaying] = useState(true)

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying){
                videoRef.current.play();
            }
            setisPlaying((prev) => !prev);
        }
    };

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.play();
            setisPlaying(true);
        }
    }, []);
  return {videoRef, isPlaying, handlePlayPause};
    
}

