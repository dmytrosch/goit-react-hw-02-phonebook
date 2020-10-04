import React from "react";
import PropTypes from "prop-types";

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

ContactList.defaultProps = {
    filter: null,
};

ContactList.propTypes = {
    state: PropTypes.exact({
        contacts: PropTypes.arrayOf(PropTypes.object),
        filter: PropTypes.string,
    }).isRequired,
    deleteContact: PropTypes.func.isRequired,
};
