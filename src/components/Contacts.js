import React, { Component } from 'react'
import contactsJson from '../contacts.json'
import ContactDetails from '../components/ContactDetails.js'


class Contacts extends Component {
    state = {
        contacts: contactsJson.slice(0,5)
    }

    handleAdd = () => {
        let randomIndex = Math.floor(Math.random() * contactsJson.length)
        let randomContact = contactsJson[randomIndex]
        this.setState({
            contacts: [...this.state.contacts, randomContact]
        })
    }

    handleSortName = () => {
        let clonedConts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedConts.sort((a, b) => {
            if(a.name > b.name){
                return 1
            }
            else if(a.name < b.name){
                return -1
            } else {
                return 0
            }
        });
        this.setState({
            contacts: clonedConts
        });
    };

    handleSortPop = () => {
        let clonedConts = JSON.parse(JSON.stringify(this.state.contacts))
        clonedConts.sort((a, b) => {
            if(a.popularity < b.popularity){
                return 1
            }
            else if(a.popularity > b.popularity){
                return -1
            } else {
                return 0
            }
        });
        this.setState({
            contacts: clonedConts
        });
    }

    handleDelete = (contactId) => {
        let filteredConts = this.state.contacts.filter((singleContact) => {
            return singleContact.id !== contactId
        });
        this.setState({
            contacts: filteredConts
        })
    }

    render() {
        return (
            <div>
                <h1>IronContacts</h1>
                <button onClick={this.handleAdd} >Add random contact</button>
                <button onClick={this.handleSortName} > Sort by name</button>
                <button onClick={this.handleSortPop} >Sort by popularity</button>
                {
                    this.state.contacts.map((singleContact, index) => {
                        return (
                            <ContactDetails 
                                key={index}
                                pictureUrl={singleContact.pictureUrl}
                                name={singleContact.name}
                                popularity={Math.floor(singleContact.popularity * 100)/100}
                                id={singleContact.id}
                                onDelete={this.handleDelete}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Contacts