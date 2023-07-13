import React from 'react'
import Gambar from '../11.jpg';

const ContactCard = (props) => {
    const { id, name, email} = props.contact;
  return (
    <div className="item" style={{ display: 'flex', alignItems: 'center' }}>
     <img src={Gambar} className='ui avatar image' alt="gambar" style={{ width: "30px", height: "30px"}}/>
    <div className='content'>
        <div className='header'>{name}</div>
        <div>{email}</div>
    </div>
    <div style={{ flex: '1' }}></div>
    <i className='trash alternate outline icon'
     style={{color: "red", marginTop: "7px"}}
     onClick={() => props.clickHandler(id)}
     ></i>
</div>
  )
}

export default ContactCard