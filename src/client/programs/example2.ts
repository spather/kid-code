import {GridAPI} from '../lib/api';

export default function draw({on}: GridAPI): void {
  for (let x = 0; x < 200; x += 10) {
    for (let y = 0; y < 200; y += 10) {
      on(x, y);
    }
  }
}
