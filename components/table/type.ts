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

export interface MemberInfo {
  members: {
    id: number;
    userId: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
    isOwner: boolean;
    createdAt?: number;
    updatedAt?: boolean;
  }[];
  totalCount: number;
}

export interface InviteInfo {
  totalCount: number;
  invitations: {
    id: number;
    inviter: {
      nickname: string;
      email: string;
      id: number;
    };
    teamId?: string;
    dashboard: {
      title: string;
      id: number;
    };
    invitee: {
      nickname: string;
      email: string;
      id: number;
    };
    inviteAccepted?: boolean;
    createdAt?: string;
    updatedAt?: string;
  }[];
}

export interface TableProfileType {
  userProfileColor: string;
}

// type DeleteMember = (memberId: number) => Promise<void>;
// type CancelInvite = (dashboardId: number, invitaionId: number) => Promise<void>;

export interface TableItemType {
  userProfileColor: string;
  userName?: string;
  userFirstName?: string;
  className?: string;
  title?: string;
  email?: string;
  memberId?: number;
  memberInfo?: MemberInfo;
  setMemberInfo?: React.Dispatch<React.SetStateAction<any>>;
  inviteInfo?: InviteInfo;
  dashboardId?: number;
  invitationId?: number;
  setInviteInfo?: React.Dispatch<React.SetStateAction<any>>;
  deleteMember: (memberId: number) => Promise<void>;
  cancelInvite: (dashboardId: number, invitaionId: number) => Promise<void>;
  // onClick: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}
