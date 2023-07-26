import { create } from "zustand";
import ITask from "../interfaces/ITask";
import initialData from "../initialData";
import IColumns from "../interfaces/IColums";

interface ColumnsState {
  columns: { [key: string]: { title: string; items: ITask[] } };
  addTask: (columnId: string, task: ITask) => void;
  removeTask: (taskId: string) => void;
  setColumns: (newColumns: {
    [key: string]: { title: string; items: ITask[] };
  }) => void;
  filteredData: { [key: string]: { title: string; items: ITask[] } };
  filter: (name: string) => void;
  updateTask: (id: string, updatedTask: ITask) => void;
}

export const useColumnsStore = create<ColumnsState>((set) => ({
  columns: initialData,
  filteredData: initialData,
  filter: (name) => {
    set((state) => {
      if (name === "") {
        return { filteredData: state.columns };
      } else {
        const filteredColumns = Object.keys(state.columns).reduce(
          (acc, columnId) => {
            const items = state.columns[columnId].items.filter((task) =>
              task.Task.toLowerCase().includes(name.toLowerCase())
            );
            acc[columnId] = { ...state.columns[columnId], items };
            return acc;
          },
          {} as IColumns
        );
        return { filteredData: filteredColumns };
      }
    });
  },
  addTask: (columnId, task) =>
    set((state) => {
      const updatedColumns = {
        ...state.columns,
        [columnId]: {
          ...state.columns[columnId],
          items: [...state.columns[columnId].items, task],
        },
      };
      return { columns: updatedColumns, filteredData: updatedColumns };
    }),
  removeTask: (taskId) =>
    set((state) => {
      const updatedColumns = Object.keys(state.columns).reduce(
        (acc, columnId) => {
          acc[columnId] = {
            ...state.columns[columnId],
            items: state.columns[columnId].items.filter(
              (task) => task.id !== taskId
            ),
          };
          return acc;
        },
        {} as IColumns
      );
      return { columns: updatedColumns, filteredData: updatedColumns };
    }),

  setColumns: (newColumns) =>
    set((state) => {
      return { ...state, columns: newColumns, filteredData: newColumns };
    }),

  updateTask: (id, updatedTask) =>
    set((state) => {
      const updatedColumns = Object.keys(state.columns).reduce(
        (acc, columnId) => {
          acc[columnId] = {
            ...state.columns[columnId],
            items: state.columns[columnId].items.map((task) =>
              task.id === id ? updatedTask : task
            ),
          };
          return acc;
        },
        {} as IColumns
      );
      return { columns: updatedColumns, filteredData: updatedColumns };
    }),
}));
