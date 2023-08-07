import { createContext, useEffect, useState } from "react";

export const HabitContext = createContext();

const getLocalData = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const h = getLocalData("habit");
const a = getLocalData("archive");

export const HabitProvider = ({ children }) => {
  const [habit, setHabit] = useState(h);
  const [archive, setArchive] = useState(a);
  const [modal, setModal] = useState(false);
  const [checkId, setIsCheckId] = useState(null);

  const values = {
    modal,
    setModal,
    habit,
    setHabit,
    archive,
    setArchive,
    checkId,
    setIsCheckId,
  };

  useEffect(() => {
    localStorage.setItem("habit", JSON.stringify(habit));
    localStorage.setItem("archive", JSON.stringify(archive));
  }, [habit, archive]);

  return (
    <>
      {" "}
      <HabitContext.Provider value={values}>
        {" "}
        {children}{" "}
      </HabitContext.Provider>{" "}
    </>
  );
};
