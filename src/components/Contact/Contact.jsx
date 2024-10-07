import module from "./Contact.module.css"

const Contact = ({ name, number }) => {
    return (
        <>
            <div className={module.div}>
                <p className={module.contactName}>{name}</p>
                <p className={module.contactNumber}>{number}</p>
            </div>
            <button className={module.btn}>Delete</button>
        </>
    )
}

export default Contact