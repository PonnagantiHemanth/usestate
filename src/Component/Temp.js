import { useState ,useEffect} from "react";

const Temp = () => {
  return (
    <div>
      <News />
    </div>
  );
};

export default Temp;

function News() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=b0b58e2420e541ada6a94057f80a95e0")
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, []); // Empty array means it runs only once

    return (
        <div>
            <h1>Latest News</h1>
            {articles.map((article, index) => (
                <div key={index}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                </div>
            ))}
        </div>
    );
}
