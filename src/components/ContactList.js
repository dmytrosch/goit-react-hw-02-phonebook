import React from "react";

export default function ContactList(props) {
    const { contacts, filter } = props.state;
    return (
        <ul>
            {filter &&
                contacts
                    .filter((contact) =>
                        contact.name
                            .toLowerCase()
                            .includes(filter.toLowerCase())
                    )
                    .map((contact) => (
                        <li key={contact.id}>
                            <span>
                                {contact.name}: {contact.number}
                            </span>
                            <button
                                onClick={props.deleteContact}
                                data-id={contact.id}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
        </ul>
    );
}
