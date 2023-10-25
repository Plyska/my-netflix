export interface InputProps {
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label: string;
  type?: string;
  name: string;
}
