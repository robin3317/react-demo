import { COLOR_DB } from "../DB/Database";

const maxLength = COLOR_DB.length;

export const getRandomColor = () => {
  while (maxLength > 0) {
    let index = Math.ceil(Math.random() * maxLength);
    return COLOR_DB[index];
  }
};
