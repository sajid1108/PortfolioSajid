import { portfolioList } from "../data/DataPortfolio";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          <div className="item">
            <a href="">
              <img src={portfolioList} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
