import OldLayout from "./oldLayout";
import NewLayout from "./newLayout";
import React, {useState} from "react";
import Button from "../components/elements/button";

const LayoutManager = () => {

    const [chatId, setChatId] = useState(null);

  useEffect(() => {
    // Ensure the Telegram WebApp object is available
    if (window.Telegram.WebApp) {
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

      // Extract chat_id from the initDataUnsafe object
      if (initDataUnsafe && initDataUnsafe.user) {
        setChatId(initDataUnsafe.user.id); // This is usually the user ID (chat ID for private chats)
      }
    }
  }, []);

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
                        top: '60px',
                        right: '0px',
                        fontSize: '10px !important',
                        padding: '5px 10px !important'
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
