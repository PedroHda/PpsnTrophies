export interface Player {
  accountId: string;
  onlineId: string;
  avatarUrl: string | null;
  trophyLevel: number;

  trophies:{
    bronze: number;
    silver: number;
    gold: number;
    platinum: number;
  };
}