import React from 'react';

const ImgContainer = () => {
	return(
		<div className="img-container img-container-background image" id ="home">
	            <div className="ph6-ns w-100 w-100-ns pa4 pa2-ns pa6-m pb6-ns">
		            	<div className="fw7 f2 mb2 f1-m">
		            		<h2>Advokátka</h2>
		            	</div>
		                <h1 className="f1 fw9">Mgr. Dagmar Lupínková</h1>
		                <p className="f3 w-70-ns w-70-m w-100">Nabízím právní pomoc v řešení manželských a rodinných konfliktů i v dalších oblastech práva.
		                </p>
		                <a href="#kontakt" className="btn btn-lg btn-primary no-underline mt4">Kontaktovat</a>
	            </div>
		</div>
	)
}

export default ImgContainer;