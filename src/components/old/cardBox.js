import {Box} from "@mui/material";
import TitleBox from "../elements/titleBox";

const CardBox = ({item}) => {

    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
                borderRadius: '20px',
                padding: '5px 15px'
            }}
        >
            <TitleBox
                icon={item.image}
                gap={'10px'}
                iconSize={'40px'}
                title={item.name}
                subtitle={item.left}
                titleVariant={'h4'}
                titleColor={'black'}
                subtitleVariant={'paragraph'}
            />

            <TitleBox
                textAlign={'right'}
                title={item.amount}
                titleColor={'blue'}
                subtitle={item.dif}
                subtitleVariant={'paragraph'}
            />
        </Box>
    )
}

export default CardBox