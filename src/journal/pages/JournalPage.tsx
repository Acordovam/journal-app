import React from 'react';
import {JournalLayout} from "../layout/JournalLayout";
import {IconButton, Typography} from "@mui/material";
import {NoteView, NothingSelectedView} from "../views";
import {AddOutlined} from "@mui/icons-material";

export const JournalPage = () => {
    return (
        <JournalLayout>
{/*
            <Typography> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid animi aut libero natus quod ratione reiciendis soluta, temporibus ut. Alias, distinctio dolorem eligendi facere minus neque perspiciatis sunt ut.</Typography>
*/}
            <NothingSelectedView/>
            <IconButton
            size='large'
            sx={{color: 'white', backgroundColor: 'error.main',
            ':hover': {backgroundColor: 'error.main', opacity: 0.7},
            position: 'fixed', right: 50, bottom: 50}}
            >
                <AddOutlined sx={{fontSize: 30}}/>

            </IconButton>
          {/*  <NoteView/>*/}
        </JournalLayout>
    );
};
