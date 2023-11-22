import { useState } from "react";

export function SecondSectionList() {
  const [selectedItem, setSelectedItem] = useState();
  const listItems = [
    {
      id: 1,
      type: "Boards",
      overview:
        "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
    },
    {
      id: 2,
      type: "Lists",
      overview:
        "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.”",
    },
    {
      id: 3,
      type: "Cards",
      overview:
        "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.”",
    },
  ];

  function onSelectCard(id) {
    console.log(id);
    setSelectedItem(id);
  }

  return (
    <div className="second-section-list-container">
      <ul>
        {listItems.map((item) => (
          <li
            key={item.id}
            className={selectedItem === item.id ? "selected-card" : ""}
            onClick={() => onSelectCard(item.id)}
          >
            <h3>{item.type}</h3>
            <p>{item.overview}</p>
          </li>
        ))}
      </ul>
      <img src="/carousel-boards.png"></img>
      <img src="/carousel-lists.png"></img>
    </div>
  );
}
