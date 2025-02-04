import { portfolioList } from "../data/DataPortfolio";
import "../styles/Portfolio.css";
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <a href="">
                  <img src={item.image} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
