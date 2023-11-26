import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function SecondSectionList() {
  const listItems = [
    {
      id: 1,
      type: "Boards",
      overview:
        "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
      image: "/carousel-boards.png",
    },
    {
      id: 2,
      type: "Lists",
      overview:
        "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.”",
      image: "/carousel-lists.png",
    },
    {
      id: 3,
      type: "Cards",
      overview:
        "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.”",
      image: "/carousel-cards.png",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(listItems[0]);

  const variants = {
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: -200,
      opacity: 0,
    },
  };

  function onSelectCard(item) {
    setSelectedItem(item);
  }

  return (
    <div className="second-section-list-container">
      <ul>
        {listItems.map((item) => (
          <li
            key={item.id}
            className={selectedItem.id === item.id ? "selected-card" : ""}
            onClick={() => onSelectCard(item)}
          >
            <h3>{item.type}</h3>
            <p>{item.overview}</p>
          </li>
        ))}
      </ul>

      <motion.img
        key={selectedItem.id}
        variants={variants}
        animate="animate"
        initial="initial"
        exit="exit"
        src={selectedItem.image}
        alt={selectedItem.type}
      />
    </div>
  );
}
