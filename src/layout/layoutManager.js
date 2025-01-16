import OldLayout from "./oldLayout";
import NewLayout from "./newLayout";
import React, {useState} from "react";
import Button from "../components/elements/button";

const LayoutManager = () => {

    const [chat_id, setChatId] = useState(process.env.TELEGRAM_USER_ID);

    const layouts = {
        old: OldLayout,
        new: NewLayout,
    }

    const Layout = layouts[chat_id % 2 === 0 ? 'new' : "old"];

    const randomChatId = () => {
        setChatId(parseInt(Math.random() * (100000 - 1000) + 1000))
    }

    return (
        <React.Fragment>
            <Layout/>


                <Button
                    sx={{
                        width: 'fit-content',
                        backgroundColor: 'yellow',
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                    }}
                    onClick={randomChatId}
                >
                    Change Chat Id =>
                    {chat_id}
                </Button>
        </React.Fragment>
    )
}

export default LayoutManager;