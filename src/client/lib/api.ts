export interface GridAPI {
  on(x: number, y: number): void,
  off(x: number, y: number): void,
}

export type DrawFunction = (api: GridAPI) => void;

export type Programs = {
  [index: string]: DrawFunction,
};
