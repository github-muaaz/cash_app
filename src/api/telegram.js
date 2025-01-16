import axios from "axios";

const telegramBotKey = process.env.TELEGRAM_BOT_TOKEN;
const chat_id = process.env.TELEGRAM_USER_ID;

export const sendNotification = async (text, parse_mode) => {
    const endpoint = `https://api.telegram.org/bot${telegramBotKey}/sendMessage`;

    axios.post(
        endpoint,
        {
            text,
            parse_mode,
            chat_id
        }
    ).then(res => {})
}