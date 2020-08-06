import React from 'react';

const About = () => {
	return(
		<div className=" static-ns center w-100 pa6-ns dt--fixed ph6-ns pa2 pb4" id="info">
	    <div className="db dtc-ns  w-100-ns">
	        <div className="db dtc-ns db-m tl-ns pa4 v-mid w-30-ns  w-100-m pa3-m pa2-ns w-100 mr3">
	          <div className="center tc">
	              <img src='./images/portrait.png' id="portrait" alt="portrait" />
	          </div>
			    </div>
		      <div className="db dtc-ns db-m tl-ns pa4 pt0 ph2-ns w-60-ns w-100-m w-100 pa0-ns pa3-m v-mid mr0-ns">
						<h2>O mě</h2>
						<div className="mt4">
							<p>Samostatná advokátka vykonávající generální advokátní praxi od 1.1.2000 
							se zaměřením zejména na právo rodinné, občanské, právní vztahy 
							k nemovitostem včetně sepisování smluv a zajištění advokátních úschov, 
							insolvenční právo a trestní právo</p>
						</div>
						<div className="mt4">
							<p>Absolventka Karlovy Univerzity v Praze.</p>
	        	</div>  
	        	<div className="mt4">
							<p>Do prosince 2018 členka <b>Unie rodinných advokátů.</b></p>
	        	</div> 
	        	<div className="mt4">
							<p>V seznamu advokátů u Čerské advokátní komory zapsána pod ev.č. 08621.</p>
	        	</div> 
	        	<div className="mt4">
							<p>Odměna za právní služby - <b>smluvená nebo dle právního tarifu.</b></p>
	        	</div>   
	        </div>      
	    </div>
		</div>
	)
}

export default About;