import React from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export default class Phonebook extends React.Component {
    state = {
        contacts: [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ],
        filter: "",
    };
    isNotUniqueName(name) {
        return this.state.contacts.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase()
        );
    }
    submitFormHandler = (event) => {
        event.preventDefault();
        const el = event.target.elements;
        const nameInput = el.nameInput.value;
        const numberInput = el.numberInput.value;
        console.log(this.isNotUniqueName(nameInput), "cons");
        if (!this.isNotUniqueName(nameInput)) {
            this.setState({
                contacts: [
                    ...this.state.contacts,
                    { id: uuidv4(), name: nameInput, number: numberInput },
                ],
            });
            el.nameInput.value = "";
            el.numberInput.value = "";
        } else {
            alert(`${nameInput} is already in contact list`);
        }
    };
    searchInputHandler = (event) => {
        this.setState({ filter: event.target.value });
    };
    onDeleteBtnHandler = (event) => {
        const contactId = event.target.dataset.id;
        this.setState((prevState) => {
            return {
                contacts: prevState.contacts.filter(
                    (contact) => contact.id !== contactId
                ),
            };
        });
    };
    render() {
        return (
            <section>
                <h1>Phonebook</h1>
                <ContactForm handler={this.submitFormHandler} />
                <h2>Contacts</h2>
                <Filter searchHandler={this.searchInputHandler} />
                <ContactList
                    state={this.state}
                    deleteContact={this.onDeleteBtnHandler}
                />
            </section>
        );
    }
}
