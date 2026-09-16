export type Notification = {
  id: string;
  type: "info" | "warning" | "error" | "success";
  message: string;
  url: string;
};
