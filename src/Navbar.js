import React, { useState } from 'react'
import logo from './images/logo.svg'
import iconArrowDown from './images/icon-arrow-down.svg'
import iconArrowUp from './images/icon-arrow-up.svg'
import iconTodo from './images/icon-todo.svg'
import iconCalendar from './images/icon-calendar.svg'
import iconPlanning from './images/icon-planning.svg'
import iconReminders from './images/icon-reminders.svg'
import iconMenu from './images/icon-menu.svg'
import iconCloseMenu from './images/icon-close-menu.svg'






function Navbar() {
    const [openFeaturesPopup, setOpenFeaturesPopup] = useState(false)
    const [openCompanyPopup, setOpenCompanyPopup] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)


    const [featuresIcon, setFeaturesIcon] = useState(iconArrowDown)
    const [iconMenuBtn, setIconMenuBtn] = useState(iconMenu)


    const handleFeaturesClick =()=>{
        setOpenFeaturesPopup(!openFeaturesPopup)
        if(openFeaturesPopup){
            setFeaturesIcon(iconArrowDown)
        }else{
            setFeaturesIcon(iconArrowUp)
        }
        
    }
    const handleCompanyClick =()=>{
        setOpenCompanyPopup(!openCompanyPopup)
        if(openCompanyPopup){
            setFeaturesIcon(iconArrowDown)
        }else{
            setFeaturesIcon(iconArrowUp)
        }
        
    }

    const handleMenuBtn =()=>{
        setOpenMenu(!openMenu)
        if(openMenu){
            setIconMenuBtn(iconMenu)
        }else{
            setIconMenuBtn(iconCloseMenu)
        }
    }
  return (
    <nav>
        <img src={logo} alt="logo" className="logo" />

        <div className="all-links">
            <button className="menu-btn" onClick={handleMenuBtn} ><img src={iconMenuBtn} alt="menu" /></button>

            <div className={openMenu?'right-navbar open':'right-navbar'}>
                <div className='left-part'>
                    <ul className="links">
                        <li className='features-li' onClick={handleFeaturesClick}>
                            <div className="top-li">
                                <div className="name">Features</div>
                                <img src={featuresIcon} alt="icon-arrow" />

                            </div> 
                            {openFeaturesPopup?
                                <div className="features-popup">
                                    <ul className='popup-links'>
                                        <li><img className='features-popup-logo' src={iconTodo}/>Todo list</li>
                                        <li><img className='features-popup-logo' src={iconCalendar}/>Calendar</li>
                                        <li><img className='features-popup-logo' src={iconReminders}/>Reminders</li>
                                        <li><img className='features-popup-logo' src={iconPlanning}/>Planning</li>
                                    </ul>
                                </div>
                                :''
                            }
                        </li>
                        <li className='company-li' onClick={handleCompanyClick} >
                            <div className="top-li">
                                <div className="name">Company</div>
                                <img src={featuresIcon} alt="icon-arrow" />
                            </div>  

                                {openCompanyPopup?
                                    <div className="features-popup">
                                        <ul className='popup-links'>
                                            <li>History</li>
                                            <li>Our team</li>
                                            <li>Blog</li>
                                        </ul>
                                    </div>
                                :''
                            }

                        </li>
                        <li>Careers </li>
                        <li>About  </li>

                    </ul>
                </div>
                <div className="right-part">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
                    

                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar