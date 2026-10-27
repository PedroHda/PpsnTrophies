import {getAuthStatus} from '../features/auth/auth.service';
import {getGames} from '../features/games/games.service';
import {getTrophies} from '../features/trophies/trophies.service';

console.log("=== PSN Trtacker ===");

console.log("Auth Status: ", getAuthStatus());
console.log("Games: ", getGames());
console.log("Trophies: ", getTrophies());