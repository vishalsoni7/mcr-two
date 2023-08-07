import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { HabitContext } from "../component/HabitContext";

export const SingleHabit = () => {
  const { habit } = useContext(HabitContext);
  const { habitId } = useParams();

  const findhabit = habit?.find((h) => h.id === habitId);

  return (
    <div className="find-div">
      <h1>
        {" "}
        <NavLink className="link" to="/">
          {" "}
          ⤺ {findhabit?.name}{" "}
        </NavLink>{" "}
      </h1>

      <div className="find-inner-div">
        <img src={findhabit?.image} />

        <div>
          <h3> Goal : {findhabit?.goal} </h3>
          <h3> Repeat : {findhabit?.repeat} </h3>
          <h3> Start : {findhabit?.start} </h3>
          <h3> Time : {findhabit?.time} </h3>
        </div>
      </div>
    </div>
  );
};
