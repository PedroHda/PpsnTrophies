import GameCard from "@/components/GameCard";
import StartCard from "@/components/startCard";
import type { Game } from "@/types/game";


const game: Game = {
  id: "12345",
  name: "God of War",
  imageUrl: null,
  platforms: ["PS4", "PS5"],
  trophiesEarned: 10,
  trophiesTotal: 37,
  lastUpdatedAt: null,
};

export default function Home() {
  return (
    <main 
    style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>PSN Tracker</h1>
      <p>Meu dashboard de troféus PlayStation</p>

      <section 
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        marginTop: "30px",
      }}>
        <StartCard title="Jogos" value={42} description="Biblioteca"/>
        <StartCard title="Platinas" value={12} description="Conquistadas"/>

      </section>

      <h2 style={{ marginTop: "40px" }}>
        Meus jogos
      </h2>
      <GameCard game={game} />

    </main>
  );
}
