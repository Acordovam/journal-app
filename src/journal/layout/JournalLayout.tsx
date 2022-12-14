import React from 'react';
import {Box, Toolbar} from "@mui/material";
import {Navbar, SideBar} from "../components";
const drawerWidth = 240;

export const JournalLayout = ({children}: any) => {
    return (
        <Box sx={{display: 'flex'}} className='animate__animated animate__fadeIn animate__faster'>
        <Navbar drawerWidth={drawerWidth} />
       <SideBar drawerWidth={drawerWidth}></SideBar>
           <Box component='main' sx={{flexGrow: 1, p: 3}}>
               <Toolbar/>
               {children}
           </Box>
        </Box>
    );
};
