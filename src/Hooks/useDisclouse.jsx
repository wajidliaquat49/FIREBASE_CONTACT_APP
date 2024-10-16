import { useState } from "react";

const UseDisclouse = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    open, // This returns the current state (true or false)
    isOpen, // Function to open the modal
    onClose, // Function to close the modal
  };
};

export default UseDisclouse;
