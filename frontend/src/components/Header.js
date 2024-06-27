import React from 'react';

export const Header = ({toggleModel, nbOfContacts}) => {
  return (
    <header className='header'>
     <div className='container'>
        <h3>Contact List({nbOfContacts})</h3>
        <button onClick={() => toggleModel(true)} className='btn'>
            <i className='bi bi-plus-square'></i>Add New Contact
        </button>
    </div>   
    </header>
  )
}

export default Header;
