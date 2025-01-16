import React, {useRef} from "react";

import Header from "../components/new/header";
import SearchBox from "../components/new/searchBox";
import {Box, Container} from "@mui/material";
import BalanceBox from "../components/new/balanceBox";
import FavouriteBox from "../components/new/favouriteBox";
import Resizeable from "../components/new/resizeable";
import HistoryBox from "../components/new/historyBox";

const NewLayout = () => {

    const ref = useRef(null);

    return(
        <Box
            sx={{
                position: 'relative'
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '10px 30px'
                }}
            >
                <Header/>

                <SearchBox/>

                <BalanceBox/>

                <FavouriteBox/>
            </Container>

            <Box
                ref={ref}
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: `calc(100% - ${ref?.current?.offsetHeight}px)`
                }}
            >
                <Resizeable>
                    <HistoryBox ref={ref}/>
                </Resizeable>
            </Box>
        </Box>
    )
}

export default NewLayout