import {Box, Typography} from "@mui/material";
import Icon from "../elements/icon";

const TitleCard = ({icon, text}) => {

    return(
        <Box
            sx={{
                backgroundColor: 'light_grey',
                padding: '15px 20px 10px 20px',
                minWidth: '75px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '3px'
            }}
        >
            <Icon icon={icon} width={'30px'} color={'rgb(154, 151, 103)'}/>
            <Typography variant={'tiny'}>{text}</Typography>
        </Box>
    )
}

export default TitleCard