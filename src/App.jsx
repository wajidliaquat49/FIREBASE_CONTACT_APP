import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndDeleteContact from "./components/AddAndDeleteContact";
import UseDisclouse from "./Hooks/useDisclouse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundContact from "./components/NotFoundContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const { open, isOpen, onClose } = UseDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactsLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactsLists);
          setLoading(false);
        });
      } catch (error) {
        console.log("Error fetching contacts:", error);
        setLoading(false);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactsLists = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = contactsLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
    });
  };

  return (
    <div className="mx-auto max-w-[370px] px-1">
      <Navbar />
      <div className="flex gap-2 justify-center items-center">
        <div className="flex relative items-center flex-grow">
          <FiSearch className="text-white text-2xl absolute ml-1" />
          <input
            type="text"
            placeholder="Search Contact"
            className="pl-9 text-white flex-grow h-10 rounded-md border border-white bg-transparent"
            style={{ width: "295px" }}
            onChange={filterContacts}
          />
        </div>
        <FaCirclePlus
          onClick={() => {
            setSelectedContact(null);
            isOpen();
          }}
          className="text-5xl text-white cursor-pointer"
        />
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {loading ? (
          <div className="flex justify-center items-center h-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : contacts.length <= 0 ? (
          <NotFoundContact />
        ) : (
          contacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onEdit={(contact) => {
                setSelectedContact(contact);
                isOpen();
              }}
            />
          ))
        )}
      </div>

      <AddAndDeleteContact
        isOpen={open}
        onClose={onClose}
        contact={selectedContact}
        setContacts={setContacts}
      />

      <ToastContainer position="bottom-center" />
    </div>
  );
}

export default App;
