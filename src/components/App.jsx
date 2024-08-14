import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar />

      {contacts.map(function (contact) {
        return (
          <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
