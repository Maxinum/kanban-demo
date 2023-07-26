import IColumns from "./interfaces/IColums";

const initialData: IColumns = {
  "1": {
    title: "To-do",
    items: [
      {
        id: "2",
        Task: "Fix Styling",
        Due_Date: "2023-08-21",
        priority: "High",
        comment: "Kill",
        created_Date: "2023-06-26",
      },
      {
        id: "3",
        Task: "Handle Door Specs",
        Due_Date: "2023-09-6",
        priority: "High",
        comment: "Kill",
        created_Date: "2023-06-26",
      },
      {
        id: "4",
        Task: "Go to GYM",
        Due_Date: "2023-08-23",
        priority: "High",
        comment: "Kill",
        created_Date: "2023-06-26",
      },
      {
        id: "5",
        Task: "Buy protein",
        Due_Date: "2023-06-05",
        priority: "High",
        comment: "Kill",
        created_Date: "2023-06-26",
      },
    ],
  },
  "2": {
    title: "In Progress",
    items: [
      {
        id: "1",
        Task: "Kill some one",
        Due_Date: "2023-06-26",
        priority: "High",
        comment: "Kill",
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
