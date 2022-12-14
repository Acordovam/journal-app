import React from 'react';
import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {TurnedInNot} from "@mui/icons-material";
import {useSelector} from "react-redux";

export const SideBar = ({drawerWidth}: any) => {
    const {displayName} = useSelector((state: any) => state.auth)
    return (
     <Box
     component='nav'
     sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
     >
        <Drawer
        variant='permanent' // temporary si se quiere ocultar condicionalmente
            open
         sx={{display: {sx: 'block'},
         '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}}}
        >
        <Toolbar>
            <Typography variant='h6' noWrap component='div'> {displayName} </Typography>
        </Toolbar>
            <Divider/>
            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map (text => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'asdfasdf asdf asdf asdf '} />
                                    </Grid>

                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
     </Box>
    );
};
