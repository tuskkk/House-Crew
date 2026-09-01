export type NotificationType = {
  id: string;
  type: "info" | "warning" | "error" | "success";
  message: string;
  url: string;
};
