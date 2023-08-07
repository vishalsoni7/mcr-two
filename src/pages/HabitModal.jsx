import { useContext, useEffect, useState } from "react";
import { HabitContext } from "../component/HabitContext";

import { add, alter } from "../toasts";

export const HabitModal = ({ editId }) => {
  const { habit, setHabit, setModal, setIsCheckId } = useContext(HabitContext);

  const [input, setInput] = useState({
    name: "",
    repeat: "",
    goal: "",
    time: "",
    start: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const addHabit = () => {
    if (input.name === "") {
      alter();
    } else {
      const newHabitWithId = {
        id: `${Date.now()}`,
        image: "https://picsum.photos/id/237/380/180",
        ...input,
      };
      setHabit([...habit, newHabitWithId]);
      setModal(false);
      add();
    }
  };

  const findHabit = habit.find((h) => h?.id === editId);

  const editHabit = () => {
    const findCurrentHabit = habit.find((h) => h.id === editId);

    const updatedHabit = {
      id: findCurrentHabit.id,
      image: input.image || findCurrentHabit.image,
      name: input.name || findCurrentHabit.name,
      repeat: input.repeat || findCurrentHabit.repeat,
      goal: input.goal || findCurrentHabit.goal,
      time: input.time || findCurrentHabit.time,
      start: input.start || findCurrentHabit.start,
    };

    const updatedHabits = habit.map((habits) =>
      habits.id === findCurrentHabit.id ? updatedHabit : habits
    );
    setHabit(updatedHabits);
    setModal(false);
    setIsCheckId(null);
  };

  return (
    <div className="div">
      <div className="heading-div">
        <span className="span-color"> New Habit </span>
        <h3>New Habit </h3>
      </div>

      <div className="div-c">
        <span className="sppan"> Name </span>
        <div className="div-d">
          <span className="icon"> ❔ </span>
          <input
            name="name"
            onChange={handleInput}
            defaultValue={findHabit?.name}
            type="text"
            placeholder="create new habit"
          />
        </div>
      </div>

      <div className="div-b">
        {" "}
        <div className="div-a">
          <span> REPEAT </span>
          <select
            name="repeat"
            onChange={handleInput}
            defaultValue={findHabit?.repeat}
          >
            {" "}
            <option>Daily </option> <option> Weekly</option>{" "}
            <option>Monthly</option>{" "}
          </select>
        </div>
        <div className="div-a">
          <span> GOAL </span>
          <select
            name="goal"
            onChange={handleInput}
            defaultValue={findHabit?.goal}
          >
            {" "}
            <option>One time a day </option> <option>Two time a day </option>{" "}
            <option>Three time a day </option>{" "}
          </select>
        </div>{" "}
      </div>

      <div className="div-b">
        {" "}
        <div className="div-a">
          <span> TIME OF DAY </span>
          <select
            name="time"
            onChange={handleInput}
            defaultValue={findHabit?.time}
          >
            {" "}
            <option> Morning</option> <option> Afternoon</option>{" "}
            <option>Evening </option> <option> Night </option>{" "}
          </select>
        </div>
        <div className="div-a">
          <span> START DATE </span>
          <input
            name="start"
            onChange={handleInput}
            defaultValue={findHabit?.start}
            type="date"
            className="input-time"
          />
        </div>{" "}
      </div>

      <div className="btn-div">
        {" "}
        <button
          onClick={() => {
            setIsCheckId(null);
            setModal(false);
          }}
        >
          {" "}
          Clear{" "}
        </button>{" "}
        <button
          onClick={() => {
            editId ? editHabit() : addHabit(input);
          }}
        >
          {" "}
          Save{" "}
        </button>
      </div>
    </div>
  );
};
