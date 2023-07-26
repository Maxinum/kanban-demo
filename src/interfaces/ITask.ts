interface ITask {
  id: string;
  Task: string;
  Due_Date: string;
  comment: string;
  priority: "Medium" | "High" | "Low";
  created_Date: string;
}

export default ITask;
