import {Bell} from "./icons/bell";
import {Search} from "./icons/search";
import {Dots} from "./icons/dots";
import {Transfer} from "./icons/transfer";
import {Wallet} from "./icons/wallet";
import {Games} from "./icons/games";
import {Ticket} from "./icons/ticket";
import {Saving} from "./icons/saving";
import {Card} from "./icons/card";
import {X} from "./icons/x";
import {Plus} from "./icons/plus";
import {Car} from "./icons/car";
import {Food} from "./icons/food";
import {Sport} from "./icons/sport";
import {Education} from "./icons/education";
import {Entertainment} from "./icons/entertainment";
import {Menu} from "./icons/menu";

const Icon = ({ icon, color, pointer, ...rest }) => {

    const icons= {
        bell: <Bell style={{cursor: pointer ? "pointer" : ""}} stroke={color} {...rest}/>,
        dots: <Dots style={{ transform: "rotate(90deg) translateY(15px)", cursor: pointer ? "pointer" : ""}} stroke={color} {...rest}/>,
        search: <Search style={{cursor: pointer ? "pointer" : ""}} stroke={color} {...rest}/>,
        transfers: <Transfer style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        payments: <Wallet style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        games: <Games style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        tickets: <Ticket style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        savings: <Saving style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        x: <X style={{cursor: pointer ? "pointer" : ""}} stroke={color} {...rest}/>,
        cards: <Card style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        plus: <Plus style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        car: <Car style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        food: <Food style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        sports: <Sport style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        education: <Education style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        entertainment: <Entertainment style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
        menu: <Menu style={{cursor: pointer ? "pointer" : ""}} fill={color} {...rest}/>,
    };

    return icons[icon];
};

export default Icon;
