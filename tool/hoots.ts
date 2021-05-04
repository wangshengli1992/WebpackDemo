import React, { useState, useEffect } from 'react';
/** 自定义react hook */
const useWindowResize = (): [number, number] => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect((): void => {
    const documentEle: HTMLElement = document.documentElement;
    setWidth(documentEle.clientWidth);
    setHeight(documentEle.clientHeight);
  }, []);

  useEffect((): void => {
    const reiszeHandler = (e: UIEvent) => {
      const documentEle: HTMLElement = document.documentElement;
      setWidth(documentEle.clientWidth);
      setHeight(documentEle.clientHeight);
    };
    document.addEventListener('resize', reiszeHandler);
    return (): void => {
      document.removeEventListener('resize', reiszeHandler);
    };
  }, []);
  return [width, height];
};
