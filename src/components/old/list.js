import {Box} from "@mui/material";
import {useState} from "react";
import CardBox from "./cardBox";

const List = () => {

    const [list] = useState([
        {
            image: 'car',
            name: "Auto & Transport",
            left: '$ 700 left',
            amount: '$ 1,200',
            dif: '$ 500 of 1,200'
        },
        {
            image: 'food',
            name: "Food & Drinks",
            left: '$ 2,100 left',
            amount: '$ 3,700',
            dif: '$ 1,600 of 3,700'
        },
        {
            image: 'sports',
            name: "Sports",
            left: '$ 350 left',
            amount: '$ 950',
            dif: '$ 600 of 950'
        },
        {
            image: 'education',
            name: "Education",
            left: '$ 1,020 left',
            amount: '$ 1,250',
            dif: '$ 230 of 1,250'
        },
        {
            image: 'entertainment',
            name: "Entertainment",
            left: '$ 650 left',
            amount: '$ 1,150',
            dif: '$ 300 of 1,150'
        },
    ])

    return(
        <Box
            sx={{
                backgroundColor: 'white',
                padding: '20px',
                paddingTop: '100px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: '70vh',
                overflowY: 'scroll'
            }}
        >
            {list.map((item, index) => (
                <CardBox item={item} key={index}/>
            ))}
        </Box>
    )
}

export default List
