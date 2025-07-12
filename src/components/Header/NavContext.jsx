import { createContext, useContext, useState } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <NavContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
