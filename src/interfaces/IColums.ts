import ITask from "./ITask";

interface IColumns {
  [key: string]: {
    title: string;
    items: ITask[];
  };
}

export default IColumns;
