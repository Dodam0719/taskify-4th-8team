import { CardType } from '@/pages/api/dummyCardDataType';

export interface CardListType {
  children: string;
  cardList: CardType[];
  onClick?: () => void;
}
export interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    profileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string | null;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Cardinfo {
  cursorId: number;
  totalCount: number;
  cards: Card[];
}

export interface Member {
  id: number;
  userId: string;
  email: string;
  nickname: string;
  profileImageUrl: string;
  isOwner: boolean;
  createdAt?: number;
  updatedAt?: string;
}

export interface Members {
  members: Member[];
}

export interface MembersInfo {
  members: Members;
  totalCount: number;
}
