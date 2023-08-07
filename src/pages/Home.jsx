import { useContext, useState } from "react";
import { HabitContext } from "../component/HabitContext";
import { HabitModal } from "./HabitModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";

import { deleteT, addedToarchive } from "../toasts";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const {
    modal,
    setModal,
    habit,
    setHabit,
    archive,
    setArchive,
    checkId,
    setIsCheckId,
  } = useContext(HabitContext);

  const deleteHabit = (givenId) => {
    const filterHabit = habit.filter((h) => h.id !== givenId);
    setHabit(filterHabit);
  };

  const addToarchive = (item, id) => {
    setArchive([...archive, item]);
    deleteHabit(id);
    addedToarchive();
  };

  return (
    <div className="habit-div">
      <h1> Add Habits </h1>

      <button
        title="create habit"
        className="add"
        onClick={() => setModal(true)}
      >
        ⌘
      </button>

      <NavLink to="/archive">
        <button className="add" title="archive">
          {" "}
          <FontAwesomeIcon icon={faBoxArchive} />{" "}
        </button>{" "}
      </NavLink>

      <div className="habit-inner-div">
        {habit.map((habits) => (
          <div key={habits?.id}>
            <div>
              <img src={habits?.image} alt="random image" />{" "}
              <p>
                <NavLink to={`/habit/${habits.id}`} className="link">
                  <b> {habits?.name} </b>{" "}
                </NavLink>
              </p>
            </div>
            <div className="habit-icon">
              <FontAwesomeIcon
                onClick={() => {
                  deleteHabit(habits?.id);
                  deleteT();
                }}
                icon={faTrash}
              />{" "}
              <FontAwesomeIcon
                onClick={() => {
                  setModal(true);
                  setIsCheckId(habits?.id);
                }}
                icon={faPenToSquare}
              />
              <FontAwesomeIcon
                onClick={() => addToarchive(habits, habits?.id)}
                icon={faBoxArchive}
              />
            </div>
          </div>
        ))}{" "}
      </div>

      {modal && (
        <div
          onClick={() => {
            setIsCheckId(null);
            setModal(false);
          }}
          className="habit_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="habit_modal_outer_container"
          >
            <HabitModal editId={checkId} />
          </div>
        </div>
      )}
    </div>
  );
};
