// src/app/components/NavBar.tsx
"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleNavigation = (newValue: number, href: string) => {
    setValue(newValue);
    router.push(href);
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
        {!session ? (
          <BottomNavigationAction
            label="Prihlásenie"
            icon={<LocationOnIcon />}
            onClick={() => handleNavigation(3, '/prihlasenie')}
          />
        ) : (
          <>
            <BottomNavigationAction
              label="Profil" // Add label for Profil
              icon={<AccountCircleIcon />}
              onClick={() => handleNavigation(4, '/profil')}
            />
            <BottomNavigationAction
              label="Odhlásenie" // Add label for Odhlásenie
              icon={<LogoutIcon />}
              onClick={() => signOut({ callbackUrl: '/' })}
            />
          </>
        )}
      </BottomNavigation>
    </Box>
  );
}
