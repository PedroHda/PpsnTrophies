
import type { Game } from "../../types/game";

const mockGames: Game[] = [
  {
    id: "gow-2018",
    name: "God of War",
    imageUrl: null,
    platforms: ["PS4", "PS5"],
    trophiesEarned: 20,
    trophiesTotal: 37,
    lastUpdatedAt: null,
  },
  {
    id: "spiderman-2",
    name: "Marvel's Spider-Man 2",
    imageUrl: null,
    platforms: ["PS5"],
    trophiesEarned: 42,
    trophiesTotal: 42,
    lastUpdatedAt: null,
  },
  {
    id: "elden-ring",
    name: "Elden Ring",
    imageUrl: null,
    platforms: ["PS4", "PS5"],
    trophiesEarned: 15,
    trophiesTotal: 42,
    lastUpdatedAt: null,
  },
];

export function getGames(): Game[] {
  return mockGames;
}
