export type PlaystationPlatform = 'PS3' | 'PS4' | 'PS5' | 'PSVita' | 'PSP';

export interface Game {
    id : string;
    name : string;
    imageUrl : string | null;
    platforms : PlaystationPlatform[];

    trophiesEarned: number;
    trophiesTotal: number;

    lastUpdatedat: string | null;
}