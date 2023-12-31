import IColumns from "./interfaces/IColums";

const initialData: IColumns = {
  "1": {
    title: "To-do",
    items: [
      {
        id: "2",
        Task: "Sign the contract with Google",
        Due_Date: "2023-08-21",
        priority: "High",
        comment: "test comment",
        created_Date: "2023-06-26",
      },
      {
        id: "3",
        Task: "Fire den",
        Due_Date: "2023-09-6",
        priority: "High",
        comment: "test comment",
        created_Date: "2023-06-26",
      },
      {
        id: "4",
        Task: "Make a plan for 2024",
        Due_Date: "2023-08-23",
        priority: "High",
        comment: "test comment",
        created_Date: "2023-06-26",
      },
      {
        id: "5",
        Task: "HR meeting with a potential manager",
        Due_Date: "2023-06-05",
        priority: "High",
        comment: "test comment",
        created_Date: "2023-06-26",
      },
    ],
  },
  "2": {
    title: "In Progress",
    items: [
      {
        id: "1",
        Task: "Buy new boards",
        Due_Date: "2023-06-26",
        priority: "High",
        comment: "test comment",
        created_Date: "2023-06-26",
      },
    ],
  },
  "3": {
    title: "QA",
    items: [],
  },
  "4": {
    title: "Done",
    items: [],
  },
};

export default initialData;
