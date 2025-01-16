import {Box} from "@mui/material";
import TitleBox from "../elements/titleBox";

import avatar from "../../assets/images/avatar.png";
import Icon from "../elements/icon";

const Header = () => {

    const user = "Jacob"

    return(
        <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <TitleBox
                image={avatar}
                title={`Hello! ${user}`}
                subtitle={"Welcome to my CashMore"}
            />

            <Icon width={'25px'} icon={'bell'} pointer={true}/>
        </Box>
    )
}

export default Header