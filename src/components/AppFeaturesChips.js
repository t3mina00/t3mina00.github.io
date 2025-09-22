import React from 'react'
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function AppFeaturesChips(props) {
    const appFeatures = props.appFeatures;
    
    return (
        <div>
            {appFeatures.map((feature, index) => {
                return (
                    <Chip 
                        label={feature} 
                        sx={{margin: '4px', fontSize: '1.2rem'}} 
                    />
                );
            })}
        </div>    
    )
}
