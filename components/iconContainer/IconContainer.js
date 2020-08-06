import React from 'react'

const IconContainer = () => {
   const iconClass = "flex center tc";
   const iconImg = "w-20-m center w-50-ns w-100";
   const iconDiv = "fl center w-100 w-20-l pa2 pb3-m pb3 mb4 iconbar";
   const text = "center tc icons f5 fw8"

	return(
		<div className="icon-container b--solid ba ph6-ns pa6" style={{backgroundImage: "linear-gradient(90deg,#f2f2f2 0,#e6e6e6)"}}>
         <div className="v-mid center cf ph5-ns ">
         	<div className={iconDiv + "pt5-s"} >
               <div className={iconClass}>
                  <img className={iconImg} alt='rodinné právo' src="./images/family.svg"/>
               </div>
               <div className={iconClass}>
                  <p className={text}>Rodinné právo</p>               
               </div>
         	</div>

         	<div className={iconDiv} >
               <div className={iconClass}>
                  <img className={iconImg} alt='občanské právo' src="./images/obcanske_pravo.svg"/>
               </div>
               <div className={iconClass}>
                  <p className={text}>Občanské právo</p>
            	</div>
            </div>

         	<div className={iconDiv} >
               <div className={iconClass}>
                  <img className={iconImg} alt='právo nemovitosti' src="./images/house.svg"/>
               </div>
               <div className={iconClass}>
                  <p className={text}>Právo nemovitosti</p>
            	</div>
            </div>

         	<div className={iconDiv} >
               <div className={iconClass}>
                  <img className={iconImg} alt='insolvence' src="./images/money.svg"/>
               </div>
               <div className={iconClass}>
                  <p className={text}>Insolvence</p>
            	</div>
            </div>

         	<div className={iconDiv + "pb0-m pb5"} >
               <div className={iconClass}>
                  <img className={iconImg} alt='trestní právo' src="./images/auction.svg"/>
               </div>
               <div className={iconClass}>
                  <p className={text}>Trestní právo</p>
            	</div>
            </div>
	     </div>
   	</div>
		)
}

export default IconContainer;

