"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { usePathname, useRouter } from 'next/navigation';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const pathname = usePathname(); // Get the current pathname
  const router = useRouter(); // Call useRouter at the top level

  React.useEffect(() => {
    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/prispevky':
        setValue(1);
        break;
      case '/registracia':
        setValue(2);
        break;
      case '/prihlasenie':
        setValue(3);
        break;
      default:
        setValue(0); // Fallback case
    }
  }, [pathname]);

  const handleNavigation = (newValue: number, href: string) => {
    setValue(newValue);
    router.push(href); // Use the router variable to navigate
  };

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation showLabels value={value}>
        <BottomNavigationAction
          label="Domov"
          icon={<RestoreIcon />}
          onClick={() => handleNavigation(0, '/')}
        />
        <BottomNavigationAction
          label="Príspevky"
          icon={<FavoriteIcon />}
          onClick={() => handleNavigation(1, '/prispevky')}
        />
        <BottomNavigationAction
          label="Registrácia"
          icon={<LocationOnIcon />}
          onClick={() => handleNavigation(2, '/registracia')}
        />
        <BottomNavigationAction
          label="Prihlásenie"
          icon={<LocationOnIcon />}
          onClick={() => handleNavigation(3, '/prihlasenie')}
        />
      </BottomNavigation>
    </Box>
  );
}
