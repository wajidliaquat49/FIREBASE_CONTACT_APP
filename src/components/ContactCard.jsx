import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import React from "react";
import AddAndDeleteContact from "./AddAndDeleteContact";
import UseDisclouse from "../Hooks/useDisclouse";
import { toast } from "react-toastify";

const ContactCard = ({ contact, onEdit }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully...");
    } catch (error) {
      console.log("Error==>", error);
    }
  };

  return (
    <div>
      <div
        key={contact.id}
        style={{
          backgroundColor: "#FFEAAE",
          width: "360px",
          height: "64px",
          borderRadius: "10px",
        }}
        className="flex justify-between items-center"
      >
        <div className="flex gap-2">
          <img
            src="/ph_user-circle-thin@2x.png"
            style={{ width: "48px", height: "48px" }}
          />
          <div>
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>
        <div className="flex">
          <img
            src="/mdi_circle-edit-outline.png"
            style={{ cursor: "pointer" }}
            onClick={() => onEdit(contact)}
          />
          <img
            src="/mdi_trash-can-empty.png"
            alt=""
            onClick={() => deleteContact(contact.id)}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
