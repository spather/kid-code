import React, {FunctionComponent, useEffect} from 'react';

import {GridAPI} from '../lib/api';

export const GRID_WIDTH = 1024;
export const GRID_HEIGHT = 1024;

const PIXEL_SIZE = 4;

const ON_COLOR = 'white';
const OFF_COLOR = 'black';

type Color = typeof ON_COLOR | typeof OFF_COLOR;

function setPixel(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: Color): void {
  const gridX = x * PIXEL_SIZE;
  const gridY = y * PIXEL_SIZE;

  ctx.beginPath();
  ctx.rect(gridX, gridY, PIXEL_SIZE, PIXEL_SIZE);
  ctx.fillStyle = color;
  ctx.fill();
}

type Props = {
  onGridReady: (api: GridAPI) => void,
}

const Grid: FunctionComponent<Props> = ({onGridReady}) => {
  useEffect(() => {
    const c = document.getElementById('gridCanvas') as HTMLCanvasElement;
    const ctx = c.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.rect(0, 0, GRID_WIDTH, GRID_HEIGHT);
      ctx.fillStyle = 'black';
      ctx.fill();

      const on = (x: number, y: number): void => setPixel(ctx, x, y, ON_COLOR);
      const off =
        (x: number, y: number): void => setPixel(ctx, x, y, OFF_COLOR);

      onGridReady({on, off});
    }
  });

  return (
    <canvas id='gridCanvas' width={GRID_WIDTH} height={GRID_HEIGHT} />
  );
};

export default Grid;
