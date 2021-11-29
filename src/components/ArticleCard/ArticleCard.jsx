import "./ArticleCard.scss";

const ArticleCard = ({ title, content }) => {
  return (
    <div className="article-card">
      <div className="image"></div>
      <div className="details">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
