import {Box} from "@mui/material";
import TitleBox from "../elements/titleBox";
import {useState} from "react";
import Icon from "../elements/icon";
import Button from "../elements/button";

const BalanceBox = () => {

    const [balance, setBalance] = useState(4402.32)

    return(
        <Box
            sx={{
                padding: "20px",
                backgroundColor: 'grey',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}
        >
            <Box
                display={'flex'}
                justifyContent={'space-between'}
            >
                <TitleBox
                    title={`$ ${balance}`}
                    subtitle={'Your balance'}
                    color={'white'}
                    titleVariant={'h1'}
                    subtitleVariant={'paragraph'}
                    gap={'5px'}
                />

                <Icon icon={'dots'} height={'25px'}/>
            </Box>

            <Button bgColor={'yellow'} >
                REPLENISH
            </Button>
        </Box>
    )
}

export default BalanceBox