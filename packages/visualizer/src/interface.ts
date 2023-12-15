export interface Column {
  title: string;
  format: string;
  type: string;
  default?: any;
  required?: boolean;
  pk?: boolean;
  fk?: string | undefined;
}

export interface Position {
  x: number;
  y: number;
}
export interface Size {
  width: number;
  height: number;
}

export interface Table {
  title: string;
  columns?: Column[];
  position?: Position;
  is_view?: boolean;
}

export interface TableState {
  [key: string]: Table;
}

export interface Payload {
  name: string;
  value: string | number;
}

export interface Visual {
  id: string;
  type: string;
  position: Position;
  size: Size;
  [key: string]: any;
}

export interface VisualState {
  [key: string]: Visual;
}

export interface SQLCardItem {
  query: string;
  result?: string;
}
