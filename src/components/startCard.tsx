
import style from "./startCard.module.css";

type StartCardProps = {
  title: string;
  value: number;
  description?: string;
};

export default function StartCard({
  title,
  value,
  description,
}: StartCardProps) {

  console.log("CSS MODULE:", style);

  return (
    <div className={style.card}>
      <p className={style.title}>{title}</p>
      <h2 className={style.value}>{value}</h2>

      {description && (
        <p className={style.description}>
          {description}
        </p>
      )}
    </div>
  );
}
