import { TwitterCard } from "./TwitterCard";

export const TwitterRecomendedList = () => {
  return (
    <aside className="tw-recomended">
      <h3 className="tw-recomended-title">A quién seguir</h3>
      <div className="tw-recomended-list">
        <TwitterCard />
        <TwitterCard />
      </div>
    </aside>
  );
};
