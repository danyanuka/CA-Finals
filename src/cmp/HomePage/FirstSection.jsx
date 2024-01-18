import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FirstSection() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  function handleChange(ev) {
    const value = ev.target.value
    setEmail(value)
  }

  function handleOnSignup() {
    navigate(`/signup?email=${email}`)
  }

  return (
    <div className="section1-container">
      <section className="first-section">
        <div className="left-side">
          <div className="text">
            <h1>Trello brings all your tasks, teammates, and tools together</h1>
            <p>Keep everything in the same place-even if your team isn't.</p>
          </div>
          <form>
            <input value={email} onChange={handleChange} placeholder="Email" type="email" />
            <button onClick={handleOnSignup}>Sign up - it's free!</button>
          </form>
          <a>
            <span>Watch video</span>
            <i className="icon-play"></i>
          </a>
        </div>
        <img
          className="right-side"
          src="home-page/first-section-image.png"
          alt="image"
        ></img>
      </section>
    </div>
  );
}
