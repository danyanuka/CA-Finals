export function FirstSection() {
  return (
    <div className="section1-container">
      <section className="first-section">
        <div className="left-side">
          <div className="text">
            <h1>Trello brings all your tasks, teammates, and tools together</h1>
            <p>Keep everything in the same place-even if your team isn't.</p>
          </div>
          <form>
            <input placeholder="Email" type="email" />
            <button>Sign up - it's free!</button>
          </form>
          <a>
            <span>Watch video</span>
            <i className="icon-play"></i>
          </a>
        </div>
        <img
          className="right-side"
          src="/first-section-image.png"
          alt="image"
        ></img>
      </section>
    </div>
  );
}
