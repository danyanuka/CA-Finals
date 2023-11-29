import { useRef } from "react";
import { ThirdSectionCarousel } from "./ThirdSectionCarousel";

export function ThirdSection() {
  const containerRef = useRef(null);

  function onScrollRight() {
    if (containerRef.current) {
      containerRef.current.style.right = "100%";
    }
  }

  const onScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.style.right = "0"; // Reset to the initial value or remove the property
    }
  };

  return (
    <div className="section3-container ">
      <section className="third-section">
        <div className="section-header">
          <p>TRELLO IN ACTION</p>
          <h1>Workflows for any project, big or small</h1>
        </div>
        <div className="arrow-btns">
          <button onClick={onScrollLeft} className="arrow-left">
            <i className="icon-carousel-left"></i>
          </button>
          <button onClick={onScrollRight} className="arrow-right">
            <i className="icon-carousel-right"></i>
          </button>
        </div>
        <ThirdSectionCarousel containerRef={containerRef} />
      </section>
    </div>
  );
}
