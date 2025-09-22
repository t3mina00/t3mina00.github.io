import Chip from '@mui/material/Chip';

export default function RoleTypeChip(props) {
    const type = props.type;
    let color = "default"
    if (type == "DB") {
        color = "success"
    } else if (type == "Frontend") {
        color = "warning"
    } else if (type == "Backend") {
        color = "secondary"
    } else if (type == "UI") {
        color = "primary"
    } else if (type == "Maintenance") {
        color = "error"
    } else {
        color = "default"
    }

    return (
        <Chip 
            label={type} 
            color={color} 
            size="small" 
            className='role-type-chip'
            sx={{fontSize: '1rem', width: 80}}
        />
    )
}
