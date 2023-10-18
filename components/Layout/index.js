
import React, { useEffect, useState } from "react"


import { NavBar, Footer, Header, DomHead } from ".."
import { ResponsiveNavbar } from "../Navbar"


function Layout({ children }) {

  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
  }, [windowWidth])

  return (
    <div className={`w-screen h-screen`}>
      <DomHead />
      <Header>
        <NavBar />
      </Header>
      {children}
      <script src="https://w.ladicdn.com/ladichat/sdk.js" id="652ceda6d5dbbc0012694766_652cff30d5dbbc00126b713c" async></script>
      {windowWidth <= 700 && <ResponsiveNavbar />}
    </div>
  )
}

export default Layout

