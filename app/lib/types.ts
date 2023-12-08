export type ButtonType = {
  id: string;
  label: string;
  path?: string;
  type:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "primary";
  className?: string;
};
