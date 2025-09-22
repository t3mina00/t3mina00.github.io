import Chip from '@mui/material/Chip';

export default function ProjectTypeChip(props) {
    const type = props.type;
    let color = "default"
    if (type == "Professional Project") {
        color = "green"
    } else if (type == "Internship Project") {
        color = "orange"
    } else if (type == "Academic Project") {
        color = "purple"
    } else if (type == "Company Oriented Project") {
        color = "blue"
    } else if (type == "Personal Project") {
        color = "red"
    } else {
        color = "grey"
    }

    return (
        <Chip 
            label={type} 
            size="medium" 
            variant="filled" 
            sx={{fontSize: '1.3rem', 
                width: 175, 
                height: 30, 
                backgroundColor: `${color} !important`, 
                color: `white !important`,
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                '& .MuiChip-label': {
                    lineHeight: 1, 
                    padding: 0, 
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
        />
    )
}
