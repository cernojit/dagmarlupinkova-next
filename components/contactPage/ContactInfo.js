import React from 'react'

const ContactInfo = () => {
	return(
		<div className="center w-100">                    
      <h3>Kontakt</h3>
      
      <div className="mt4 ">
          <p>Mgr. Dagmar Lupínková</p>
      </div>
      <div className="mt4">
          <p>Mladá Boleslav, Táborská 966</p>
      </div>
  
      <div className="mt4">
          <p><a className="no-underline" href='+420 '>+420 XXX XXX XXX</a></p>
      </div>
      <div className="mt4">
          <p><a className="no-underline" href='mailto: advokatka@lupinkova.cz'>advokatka@lupinkova.cz</a></p>
      </div>
      <div className="mt4">
          <p>ID datové schránky: 1234567890</p>
      </div>
  	</div>
    )
}

export default ContactInfo;