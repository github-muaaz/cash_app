import {Box, Typography} from "@mui/material";
import Icon from "../elements/icon";
import {sendNotification} from "../../api/telegram";

const Header = () => {

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                padding: '20px',
                backgroundColor: 'blue',
                paddingBottom: '100px'
            }}
        >
            <Icon width={'25px'} icon={'menu'}/>

            <Typography variant={'h2'}>Budgets</Typography>

            <Box
                sx={{
                    position: 'absolute',
                    top: 'calc(50% + 25px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    backgroundColor: 'white',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '90%',
                    padding: '20px',
                    borderRadius: '20px',
                    boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}
                >
                    <Typography variant={'h4'} color={'black'}>Total</Typography>
                    <Typography variant={'h1'} color={'blue'} fontSize={'35px !important'}>$ 5834.34</Typography>
                    <Typography variant={'h4'} color={'orange'}>-$ 120.30 today</Typography>
                </Box>

                <Icon
                    icon={'plus'}
                    width={'60px'}
                    height={'60px'}
                    cursor={'pointer'}
                    color={'rgb(84, 111, 237)'}
                />
            </Box>
        </Box>
    )
}

export default Header