import React from 'react'

function ContactDetails(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src={props.pictureUrl}/></td>
                    <td>{props.name}</td>
                    <td>{props.popularity}</td>
                    <td><button className="delBtn" onClick={() => {
                    props.onDelete(props.id)
                }}>Delete</button></td>
                </tr>
            </tbody>    
        </table>
    )
}

export default ContactDetails