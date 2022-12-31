import { useState } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleOpen = () => setCartOpen(!cartOpen);
  return (
    <>
      <header>
        <Navbar />
      </header>
      {/*
      // This Cart doesn't really work… yet!
      <Cart cartOpen={cartOpen} handleOpen={handleOpen} />
      */}
      <main className="mb-20">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
