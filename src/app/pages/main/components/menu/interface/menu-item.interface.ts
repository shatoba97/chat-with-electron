export interface MenuItemIO {
  label: string;
  icon?: string;
  toggle?: boolean;
  clickEvent: () => void;
  toggleEvent?: () => void;
}