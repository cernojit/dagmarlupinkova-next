import React from 'react';
import Form from './form/Form';
import ContactInfo from './ContactInfo';
import Map from './map/Map'

const ContactSection = () => {
	return(
		<div className="w-100 pb5" >
			<div className="static-ns center w-100 pa6-ns bb0 center pa4 " >
					<div className="w-100-ns w-100 pa2">
		        <div className="w-100 pa4 ph0" >
	    	      <h2 id="kontakt">Kontakt</h2>
	    	     </div>
	    	     <div className="w-100 w-100-m w-100-ns">
          		<Map/>
          	</div>
	        </div>
				<div className="cf ph2-ns pa2">
					<div className="fl w-100 w-60-ns w-60-m pr5-ns pb4">
	        	<Form/>
	       	</div>
					<div className="fl w-100 w-40-ns w-40-m  ">
	        	<ContactInfo/>
		      </div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection;