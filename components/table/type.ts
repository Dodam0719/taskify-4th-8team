export interface InviteItemType {
  name: string;
  inviter: string;
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
export interface Assignee {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface Cards {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: Assignee;
  imageUrl: string | null;
  teamId: string;
  columnId: number;
  dashboardId: number;
  createdAt: string;
  updatedAt: string;
}