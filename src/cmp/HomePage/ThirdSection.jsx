import { ThirdSectionCarousel } from "./ThirdSectionCarousel";

export function ThirdSection() {
  return (
    <div className="section3-container ">
      <section className="third-section">
        <div className="section-header">
          <p>TRELLO IN ACTION</p>
          <h1>Workflows for any project, big or small</h1>
        </div>
        <div className="arrow-btns">
          <button className="arrow-left">
            <i className="icon-carousel-left"></i>
          </button>
          <button className="arrow-right">
            <i className="icon-carousel-right"></i>
          </button>
        </div>
        <ThirdSectionCarousel />
      </section>
    </div>
  );
}
