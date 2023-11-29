const carouselItems = [
  {
    id: 1,
    title: "Project managment",
    overview:
      "Keep tasks in order, deadlines on track, and team members aligned with Trello.",
    bgimage: "home-page/icon-folder.png",
    color: "rgb(255, 116, 82)",
  },
  {
    id: 2,
    title: "Meetings",
    overview:
      "Empower your team meetings to be more productive, empowering, and dare we say—fun.",
    image: "home-page/icon-megaphone.png",
    color: "rgb(38, 132, 255)",
  },
  {
    id: 3,
    title: "Onboarding",
    overview:
      "Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.",
    bgimage: "home-page/icon-leaf.png",
    color: "rgb(87, 217, 163)",
  },
  {
    id: 4,
    title: "Task managment",
    overview:
      "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.",
    bgimage: "home-page/icon-checklist.png",
    color: "rgb(255, 196, 0)",
  },
  {
    id: 5,
    title: "Brainstorming",
    overview:
      "Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.",
    bgimage: "home-page/icon-clouds.svg",
    color: "rgb(0, 199, 229)",
  },
  {
    id: 6,
    title: "Resource hub",
    overview:
      "Save time with a well-designed hub that helps teams find information easily and quickly.",
    bgimage: "home-page/icon-book.png",
    color: "rgb(249, 156, 219)",
  },
];

export function ThirdSectionCarousel({ containerRef }) {
  return (
    <ul ref={containerRef} className="carousel">
      {carouselItems.map((item) => (
        <div key={item.id} className="card-container">
          <li className={`carousel-card carousel-card-${item.id}`}>
            <div className="card-color"></div>
            <div className="card-content">
              <div className="card-icon"></div>
              <h3>{item.title}</h3>
              <p>{item.overview}</p>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );
}
