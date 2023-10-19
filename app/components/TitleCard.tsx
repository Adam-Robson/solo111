'use client'
import React from 'react'
import { useEffect, useState } from 'react';

type ColorType = string[];

const colors = [];

const transitionDuration = 3000;

export default function TitleCard() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((idx) =>
        (idx + 1) % colors.length
      );
    }, transitionDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="max-w-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
      <h1
        style={{ color: colors[colorIndex] }}
        className="text-8xl m-4 font-light subpixel-antialiased"
      >portfolio
        <p className="text-xl font-normal subpixel-antialiased">Adam Robson</p>
      </h1>
    </section>
  );
}
