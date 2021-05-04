import React, { useState, useEffect } from 'react';
/** 自定义react hook */
const useWindowResize = (): [number, number] => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect((): void => {
    const docEle: HTMLElement = document.documentElement;
    setWidth(docEle.clientWidth);
    setHeight(docEle.clientHeight);
  }, []);

  useEffect((): void => {
    const reiszeHandler = (e: UIEvent) => {
      const docEle: HTMLElement = document.documentElement;
      setWidth(docEle.clientWidth);
      setHeight(docEle.clientHeight);
    };
    document.addEventListener('resize', reiszeHandler);
    return (): void => {
      document.removeEventListener('resize', reiszeHandler);
    };
  }, []);
  return [width, height];
}
