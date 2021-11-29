import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticleSection.scss";

const example = {
  title: "Lorem Ipsum",
  content:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae repellat, id eveniet, molestiae delectus, nisi libero doloribus numquam quod harum iusto corrupti!",
};

const ArticleSection = () => {
  return (
    <section className="article-section">
      <h2 className="section-header">Últimos Artículos</h2>
      <div className="cards-container">
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
        <ArticleCard title={example.title} content={example.content} />
      </div>
    </section>
  );
};

export default ArticleSection;
