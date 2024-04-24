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
  setSelectedColorIndex: (index: number) => void;
}

export interface NumberChipType {
  children: number | string;
}

export interface ProgressChipType {
  children: string;
}
