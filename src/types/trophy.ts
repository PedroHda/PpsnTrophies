export type TrophyType = | 'bronze' | 'silver' | 'gold' | 'platinum';

export interface Trophy {
    id: number;
    gameId: string;

    name: string;
    description: string;
    type: TrophyType;

    iconUrl: string | null;
    earned: boolean;
    earnedAt: string | null;
    hidden: boolean;
}