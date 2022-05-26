import React, { useState } from 'react'


//icons
import { AiOutlineCloseCircle } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"


//utils
import { AnimatePresence, motion } from "framer-motion"
import classes from "./Header.module.scss"
import logo from "../../assets/logo1.png"

const Header = () => {


  const menuItems = [
    {
      id: 1,
      label: "Services",
      url: "#services"
    },
    {
      id: 2,
      label: "About Us",
      url: "#about"
    },
    {
      id: 3,
      label: "Our Team",
      url: "#our_team"
    },
    {
      id: 4,
      label: "Contact Us@",
      url: "#contact_us"
    }
  ]

  const [openMenu, setOpenMenu] = useState(false)


  const handleClickDesktop = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
      behavior: 'smooth'
    })
  }



  const handleClickMobile = (e) => {
    e.preventDefault()
    setOpenMenu(false)
    const target = e.target.getAttribute('href')
    const location = document.querySelector(target).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
      behavior: 'smooth'
    })
  }


  return (
    <header className={classes.header} >
      {/* DESKTOP */}
      <div className={classes.header__desktop}>
        <img src={logo} alt="logo_App" className={classes.header__logo} />
        <div className={classes.header__menu}>
          {
            menuItems.map((item) => (
              <a href={item.url} onClick={handleClickDesktop} key={item.id} style={{ color: "white" }}>
                {item.label}
              </a>
            ))
          }
        </div>
      </div>

      {/* MOBILE */}
      <div className={classes.header__mobile}>
        <img src={logo} alt="logo_App" className={classes.header__logo} />
        <GiHamburgerMenu fontSize={30} style={{ cursor: "pointer" }} onClick={() => { setOpenMenu(!openMenu) }} />
      </div>
      <AnimatePresence>

        {
          openMenu &&
          <motion.div initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key={"Slider"}
            exit={{ opacity: 0, y: 300, transition: { duration: 0.5 } }} className={classes.header__mobile__menu}>

            <div className={classes.header_mobile_close_icon}>
              <AiOutlineCloseCircle color='white' fontSize={40} onClick={() => { setOpenMenu(!openMenu) }} />
            </div>

            {
              menuItems.map((item, index) => (
                <a key={index} href={item.url} onClick={handleClickMobile} className={classes.header_mobile_section}>
                  {item.label}

                </a>
              ))
            }

          </motion.div>

        }
      </AnimatePresence>


    </header>
  )
}

export default Header