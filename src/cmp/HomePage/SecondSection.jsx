import { SecondSectionList } from "./SecondSectionList";

export function SecondSection() {
  return (
    <div className="section2-container">
      <section className="second-section">
        <p className="trello-101">TRELLO 101</p>
        <h2 className="second-section-title ">A productivity powerhouse</h2>
        <p className="second-section-overview">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done. Learn more in our guide for getting started.
        </p>
        <SecondSectionList />
      </section>
    </div>
  );
}
