import ArticleSection from "./components/ArticleSection/ArticleSection";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import ProductSlider from "./components/ProductSlider/ProductSlider";

function App() {
  return (
    <>
      <Navbar />
      <ProductSlider />
      <main className="container">
        <ArticleSection />
      </main>
      <Form />
    </>
  );
}

export default App;
