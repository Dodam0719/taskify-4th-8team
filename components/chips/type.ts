export interface CardTagChipType {
  tagColor: string;
  tagTextColor: string;
  children?: React.ReactNode;
}

export interface CardTagChipsType {
  tagList: string[];
}

export interface ColorChipsType {
  color: string;
  index: number;
  selectedColorIndex: number;
  setSelectedColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface NumberChipType {
  children: number | string;
}

export interface ProgressChipType {
  children: string;
}

export interface Column {
  id: number;
  title: string;
  teamId: string;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
  length: number;
}

export interface Columninfo {
  result: string;
  data: Column[];
}
