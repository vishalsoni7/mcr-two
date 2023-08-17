import toast from "react-hot-toast";

export const alter = () => {
  toast("Fill Inputs!", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const add = () => {
  toast("Habit Added", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const deleteT = () => {
  toast("Habit deleted!", {
    style: {
      borderRadius: "10px",
      background: "crimson",
      color: "#fff",
    },
  });
};

export const addedToarchive = () => {
  toast("Added to archive", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};
