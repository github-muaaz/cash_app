import React, {useState} from "react";
import {Box, Typography} from "@mui/material";
import TitleBox from "../elements/titleBox";
import Avatar1 from "../../assets/images/avatar1.svg";
import Avatar2 from "../../assets/images/avatar2.webp";
import Avatar3 from "../../assets/images/avatar3.jpg";
import Avatar4 from "../../assets/images/avatar4.png";

const HistoryBox = ({ref}) => {

    const [list] = useState([
        {
            name: 'Simon Pegg',
            time: '3 June, 5:33 PM',
            type: 'Transfer',
            amount: '$1203.40',
            avatar: Avatar1
        },
        {
            name: 'Apple Music',
            time: '1 June, 1:36 PM',
            type: 'Subscription',
            amount: '-$13.0',
            avatar: Avatar2
        },
        {
            name: 'Steam',
            time: '31 May, 5:52 AM',
            type: 'Subscription',
            amount: '-$1203.10',
            avatar: Avatar3
        },
        {
            name: 'Programiz',
            time: '24 May, 5:33 PM',
            type: 'Transfer',
            amount: '$12.440',
            avatar: Avatar4
        },
        {
            name: 'Simon Pegg',
            time: '14 May, 6:33 PM',
            type: 'Transfer',
            amount: '$103.40',
            avatar: Avatar2
        },
    ])

    return (
        <Box
            sx={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}
        >
            <Typography variant={'h4'}>Yesterday</Typography>

            <Box
                sx={{
                    overflowY: 'scroll',
                    height: ref?.current?.offsetHeight
                }}
            >
                {list.map((item, index) => (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TitleBox
                            image={item.avatar}
                            title={item.name}
                            subtitle={item.time}
                            titleVariant={'h5'}
                            subtitleVariant={'small'}
                        />

                        <TitleBox
                            textAlign={'right'}
                            title={item.amount}
                            subtitle={item.type}
                            titleVariant={'h5'}
                            subtitleVariant={'small'}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default HistoryBox