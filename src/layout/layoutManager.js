import OldLayout from "./oldLayout";
import NewLayout from "./newLayout";
import React, {useState, useEffect} from "react";
import Button from "../components/elements/button";

const LayoutManager = () => {

    const [chat_id] = useState(null);

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

    return (
      <Layout/>
    )
}

export default LayoutManager;
