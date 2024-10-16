import { addDoc, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import Modal from "./Modal";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const contactShemaValidation = Yup.object().shape({
  name: Yup.string().required("Please enter the name..."),
  email: Yup.string()
    .email("Please enter a valid email...")
    .required("Please enter a valid email..."),
});

const AddAndDeleteContact = ({ isOpen, onClose, contact, setContacts }) => {
  const handleSaveContact = async (newContact) => {
    try {
      if (contact) {
        const contactDoc = doc(db, "contacts", contact.id);
        await updateDoc(contactDoc, newContact);
        toast.success("Contact Updated Successfully...");
      } else {
        const contactsRef = collection(db, "contacts");
        await addDoc(contactsRef, newContact);
        toast.success("Contact Added Successfully!");
      }

      const contactsSnapshot = await getDocs(collection(db, "contacts"));
      const contactsList = contactsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContacts(contactsList);
    } catch (error) {
      console.log("Error==>", error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        contact={contact}
        onSave={handleSaveContact}
      />
    </div>
  );
};

export default AddAndDeleteContact;
