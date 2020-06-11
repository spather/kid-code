import {GridAPI} from '../lib/api';

export default function draw({on, off}: GridAPI): void {
  on(1, 2);
  on(10, 20);
  setTimeout(() => off(10, 20), 3000);
}
