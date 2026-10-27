
import {
  createSuccessResponse,
  createErrorResponse,
} from "../lib/api-response";

import type { Game } from "../types/game";

const game: Game = {
  id: "12345",
  name: "God of War",
  imageUrl: null,
  platforms: ["PS4", "PS5"],
  trophiesEarned: 10,
  trophiesTotal: 37,
  lastUpdatedat: null,
};

const success = createSuccessResponse(game);

const error = createErrorResponse(
  "UNAUTHORIZED",
  "Você precisa conectar sua conta PSN."
);

console.log("=== RESPOSTA DE SUCESSO ===");
console.log(JSON.stringify(success, null, 2));

console.log("=== RESPOSTA DE ERRO ===");
console.log(JSON.stringify(error, null, 2));
