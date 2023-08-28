export const TwitterCard = () => {
  return (
    <article className="tw-recomended-card">
      <header className="tw-infocard-header">
        <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
        <div>
          <strong className="tw-infocard-name">TacosTao</strong>
          <span className="tw-infoCard-user">@tacostao</span>
        </div>
      </header>
      <aside>
        <button className="tw-follow-btn">Seguir</button>
      </aside>
    </article>
  );
};
