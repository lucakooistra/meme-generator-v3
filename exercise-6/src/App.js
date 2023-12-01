import React from 'react'

function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1211",
    email: "itsmyrealname@example.com",
    isFavorite: false
})

  let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png" 

function toggleFavorite() {
  setContact(prevSetContact => {
    return {
      ...prevSetContact,
      isFavorite: !prevSetContact.isFavorite
    }
  })
}

return (
    <main>
        <article className="card">
            <img src="./images/user.png" className="card--image" alt=""/>
            <div className="card--info">
                <img 
                    src={`../images/${starIcon}`} 
                    className="card--favorite"
                    onClick={toggleFavorite}
                    alt=""
                />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </main>
)
}

export default App;
