import { SetStateAction } from 'react';

export interface InviteItemType {
  name: string;
  inviter: string;
  id: number;
  setInviteData: React.Dispatch<SetStateAction<any>>;
}

export interface TableType {
  title: string;
  userList: string;
}

export interface TableProfileType {
  userProfileColor: string;
}

export interface TableItemType {
  userProfileColor: string;
  userName: string;
  userFirstName: string;
  className: string;
  title: string;
  email: string;
}
