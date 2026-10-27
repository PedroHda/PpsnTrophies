import type {Game} from '../types/game';
import styles from './GameCard.module.css';

type GameCardProps = {
  game: Game;
};

export default function GameCard({game}: GameCardProps) {
  
    const progress = game.trophiesTotal > 0 ? Math.round((game.trophiesEarned / game.trophiesTotal) * 100) : 0;
    return(
        <div className={styles.card}>
            <h3>{game.name}</h3>

            <p>{game.platforms.join(" • ")}</p>

            <p>{game.trophiesEarned} de {game.trophiesTotal} troféus</p>

            <div
                className={styles.progressBar}
                role="progressbar"
                aria-label="Progresso de troféus"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
            >
                <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
                />
            </div>

            <p>{progress}% concluído</p>
        </div>
    )


}