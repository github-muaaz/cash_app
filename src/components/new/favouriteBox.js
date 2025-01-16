import {Box, Typography} from "@mui/material";
import Button from "../elements/button";
import {useState} from "react";
import TitleCard from "./titleCard";

const FavouriteBox = () => {

    const [list, setList] = useState([
        {
            name: 'Transfers',
            icon: 'transfers'
        },
        {
            name: 'Paymentd',
            icon: 'payments'
        },
        {
            name: 'Games',
            icon: 'games'
        },
        {
            name: 'Tickets',
            icon: 'tickets'
        },
        {
            name: 'Savings',
            icon: 'savings'
        },
        {
            name: 'Cards',
            icon: 'cards'
        },
        ])

    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <Typography variant={'h4'}>Favourites</Typography>

                <Button
                    width={'fit-content'}
                    sx={{
                        padding: '0px',
                        [`@media (max-width:600px)`]: {
                            fontSize: '14px',
                            padding: '0 4px',
                        },
                    }}
                >
                    All
                </Button>
            </Box>

            <Box
                display={'flex'}
                sx={{
                    overflowX: 'scroll',
                    gap: '10px'
                }}
            >
                {list.map((item, index) => (
                    <TitleCard
                        key={index+item.name}
                        icon={item.icon}
                        text={item.name}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default FavouriteBox