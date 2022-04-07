import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GradeIcon from '@mui/icons-material/Grade';

export const NavigationData =  [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/Home"
    },
    {
        title: "Calendar",
        icon: <CalendarMonthIcon/>,
        link: "/Calendar"
    },
    {
        title: "Rewards",
        icon: <GradeIcon/>,
        link: "/Rewards"
    },
    {
        title: "Logout",
        icon: <LogoutIcon/>,
        link: "/Logout"
    },
]

