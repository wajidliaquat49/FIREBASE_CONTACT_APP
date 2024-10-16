import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from "react-toastify";

const Modal = ({ onClose, isOpen, onSave, contact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [contact]);

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      toast.error("Please fill in both name and email.");
      return;
    }

    onSave({ name, email });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{ width: "348px" }}
      className="min-h-[244px] p-4 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex justify-end">
        <AiOutlineClose onClick={onClose} className="text-2xl cursor-pointer" />
      </div>

      <div className="flex flex-col gap-1">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name..."
          style={{
            width: "316px",
            height: "40px",
            border: "1px solid black",
            paddingLeft: "5px",
          }}
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          style={{
            width: "316px",
            height: "40px",
            border: "1px solid black",
            paddingLeft: "5px",
          }}
          required
        />
      </div>

      <div className="flex justify-end mt-6">
        <button
          style={{
            border: "1px solid black",
            backgroundColor: "orange",
            width: "120px",
            height: "31px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "500",
          }}
          onClick={handleSave}
        >
          {contact ? "Update" : "Add"} Contact
        </button>
      </div>
    </div>
  );
};
export default Modal;
