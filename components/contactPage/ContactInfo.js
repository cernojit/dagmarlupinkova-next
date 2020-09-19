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
          <p><a className="no-underline" href='tel: +420-777-617-485 '>+420 777 617 485</a></p>
      </div>
      <div className="mt4">
          <p><a className="no-underline" href='mailto: advokatka@lupinkova.cz'>advokatka@lupinkova.cz</a></p>
      </div>
      <div className="mt4">
          <p>ID datové schránky: b87gyv6</p>
      </div>
  	</div>
    )
}

export default ContactInfo;