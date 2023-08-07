import { useContext } from "react";
import { HabitContext } from "../component/HabitContext";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import { add } from "../toasts";

export const Archive = () => {
  const { archive, setArchive, setHabit, habit } = useContext(HabitContext);

  const deleteArchive = (item, clickedId) => {
    const filterArchive = archive.filter((a) => a.id !== clickedId);
    setHabit([...habit, item]);
    setArchive(filterArchive);
    add();
  };

  return (
    <div className="habit-div">
      <h1> Archive Habits </h1>

      <NavLink to="/">
        <button className="add" title="home">
          {" "}
          <FontAwesomeIcon icon={faHouse} />
        </button>{" "}
      </NavLink>

      <div className="habit-inner-div">
        {archive?.map((archives) => (
          <div kay={archives.id}>
            <div>
              <img
                src="https://picsum.photos/id/237/380/180"
                alt="random image"
              />{" "}
              <p>
                <b> {archives.name} </b>{" "}
              </p>
            </div>
            <div className="habit-icon">
              <button
                title="move to habits"
                className="add"
                onClick={() => deleteArchive(archives, archives.id)}
              >
                ⌘{" "}
              </button>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
