import Contact from "../Contact/Contact";
import module from "./ContactList.module.css";

const ContactList = ({ filteredContacts, onDeleteContact }) => {
    return (
        <ul className={module.list}>
            {filteredContacts.map((contact) =>
                <li className={module.listItem} key={contact.id}>
                    <Contact onDeleteContact={onDeleteContact} id={contact.id} name={contact.name} number={contact.number} />
                </li>
            )}
        </ul>
    )
}

export default ContactList