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
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="transparent" d="m5 5h14v14h-14z"></path>
              <path
                clipRule="evenodd"
                d="m10.0138 16.3878c-.83597.4912-1.5138.105-1.5138-.8645v-7.04491c0-.97008.6755-1.358 1.5138-.86566l6.465 3.79747c.5548.3261.5589.8517 0 1.1801z"
                fill="white"
                fillRule="evenodd"
              ></path>
              <circle
                fill="transparent"
                cx="12"
                cy="12"
                r="11.5"
                stroke="white"
              ></circle>
            </svg>
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
