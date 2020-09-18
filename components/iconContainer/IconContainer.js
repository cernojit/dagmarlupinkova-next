import React, {useState} from 'react'

const items = [
   {name: "rodinne",
      title: "Rodinné právo",
      desc: 
         <ul>
            <li>rozvod manželství</li>
            <li>svěření dětí do výchovy jednoho z rodičů, střídavá a společná výchova dětí</li>
            <li>úprava styku rodičů s nezletilými dětmi</li>
            <li>výživné nezletilých a zletilých dětí</li>
            <li>výživné mezi manžely a výživné pro rozvedeného manžela</li>
            <li>rodinná domácnost</li>
            <li>manželské majetkové právo</li>
            <li>sepisování a ověřování všech listin potřebných k tzv. nespornému rozvodu</li>
            <li>smlouvy manželů o vypořádání společného jmění</li>
            <li>určování rodičovství</li>
            <li>zastupování ve věcech péče o nezletilé děti, rozvodu manželství a vypořádání společného jmění manželů před soudy prvního stupně i odvolacími soudy, včetně sepsání návrhů a žalob</li>
         </ul>
   },
   {name: "obcanske",
      title: "Občanské právo",
      desc: 
         <ul>
            <li>vlastnické vztahy včetně podílového spoluvlastnictví</li>
            <li>sousedské vztahy</li>
            <li>náhrada škody a bezdůvodné obohacení</li>
            <li>řešení sporů soudní i mimosoudní cestou</li>
            <li>smlouvy kupní </li>
            <li>smlouvy darovací, o půjčce a další typy smluv</li>
            <li>závazkové právo</li>
            <li>práva spotřebitele</li>
         </ul>
   },
   {name: "insolvence",
      title: "Insolvence",
      desc: 
         <ul>
            <li>podání přihlášky věřitele do insolvenčního řízení</li>
            <li>zastupování věřitelů v řízení před soudem</li>
         </ul>
   },
   {name: "trestni",
      title: "Trestní právo",
      desc: 
         <ul>
            <li>zastupování poškozených v trestním řízení včetně uplatnění nároku na náhradu škody v trestním i občanskoprávním řízení</li>
         </ul>
   },
   {name: "nemovitosti",
      title: "Práva k nemovitostem",
      desc: 
         <ul>
            <li>smlouvy kupní včetně smlouvy o advokátní úschově peněžních prostředků a listin</li>
            <li>smlouvy darovací</li>
            <li>smlouvy o vypořádání spoluvlastnických vztahů</li>
            <li>zástavní práva a věcná břemena</li>
            <li>podání návrhů na vklad vlastnických a jiných práv do katastru nemovitostí</li>
         </ul>
   }

]

const IconContainer = () => {
   const [display, setDisplay] = useState('none')
   const [position, setPosition] = useState(800);
   const [content, setContent] = useState(0)

   const iconClass = "flex center tc";
   const iconImg = "w-20-m center w-50-ns w-100";
   const iconDiv = "dtc-ns fl v-mid center w-100 w-20-l pa3 pa3-ns pt3-ns mb4-s iconbar";
   const text = "center tc icons f5 fw8"

   const changeVisibility = (index) => {
      console.log('clicked but')
      if(display === 'none'){
         setPosition(0)
         setDisplay('block')
         setContent(index)
      } else {
         setPosition(800);
         setDisplay('none')
      }
   };

   React.useEffect(()=>{
      window.onclick = function(event) {
        if (event.target == document.getElementById("myModal")) {
               setPosition(800);
               setDisplay('none')
           }
      }
   })

	return(
		<div className="icon-container b--solid ba ph6-ns pa5 pa6-ns dt-ns w-100 h-80-ns">
         <div className="center ph5-ns dt-ns h-100 w-100 cf">
            	<div className={iconDiv + "pt5-s"} >
               <button className="icon-btn" onClick={e => changeVisibility(0)}>
                  <div className={iconClass}>
                     <img className={iconImg} alt='rodinné právo' src="./images/family.svg" height="89.39px" width="89.39px"/>
                  </div>
                  <div className={iconClass}>
                     <p className={text}>Rodinné právo</p>               
                  </div>
                  </button>
            	</div>

         	<div className={iconDiv} >
               <button className="icon-btn" onClick={e => changeVisibility(1)}>
                  <div className={iconClass}>
                     <img className={iconImg} alt='občanské právo' src="./images/obcanske_pravo.svg" height="89.39px" width="89.39px"/>
                  </div>
                  <div className={iconClass}>
                     <p className={text}>Občanské právo</p>
               	</div>
               </button>
            </div>

         	<div className={iconDiv} >
               <button className="icon-btn" onClick={e => changeVisibility(2)}>
                  <div className={iconClass}>
                     <img className={iconImg} alt='právo nemovitosti' src="./images/house.svg" height="89.39px" width="89.39px"/>
                  </div>
                  <div className={iconClass}>
                     <p className={text}>Právo nemovitosti</p>
               	</div>
               </button>
            </div>

         	<div className={iconDiv} >
               <button className="icon-btn" onClick={e => changeVisibility(3)}>
                  <div className={iconClass}>
                     <img className={iconImg} alt='insolvence' src="./images/money.svg" height="89.39px" width="89.39px"/>
                  </div>
                  <div className={iconClass}>
                     <p className={text}>Insolvence</p>
               	</div>
               </button>   
            </div>

         	<div className={iconDiv + "pb0-m pb5"} >
               <button className="icon-btn" onClick={e => changeVisibility(4)}>
                  <div className={iconClass}>
                     <img className={iconImg} alt='trestní právo' src="./images/auction.svg" height="89.39px" width="89.39px"/>
                  </div>
                  <div className={iconClass}>
                     <p className={text}>Trestní právo</p>
               	</div>
               </button>
            </div>
	     </div>
        <div id="myModal" className="popup w-100 pa2 bg--white" style={{display:`${display}`}}>
            <div className="modal-content" >
            <div className="close " onClick={changeVisibility}>X</div>
               <h1 className="tc ttu w-100 fw9 pb0-ns v-mid mt4-ns mt2 pa2-ns pa2">{items[content].title}</h1>
               <div className=" w-80-ns w-100 tl db center lh-copy pa2-ns pa0 mb4-ns">
                  {items[content].desc}
               </div>
            </div>
         </div>
   	</div>
		)
}

export default IconContainer;

