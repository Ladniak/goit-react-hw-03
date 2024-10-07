import Contact from "../Contact/Contact"
import module from "./ContactList.module.css"

const ContactList = ({ filteredContacts }) => {
    return (
        <ul className={module.list}>
            {filteredContacts.map((contact) =>
                <li className={module.listItem} key={contact.id}>
                    <Contact name={contact.name} number={contact.number} />
                </li>
            )}
        </ul>
    )
}

export default ContactList