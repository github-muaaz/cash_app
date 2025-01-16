import {Box, Typography} from "@mui/material";
import Image from "../img";
import Icon from "../icon";

const TitleBox = ({image, icon, gap, iconSize, title, subtitle, textAlign, color, titleColor, height, titleVariant, subtitleVariant, ...rest}) => {

    return(
        <Box
            display={'flex'}
            gap={gap || '5px'}
            padding={'10px 0'}
        >
            {image &&
                <Image src={image} width={'45px'}/>
            }

            {icon &&
                <Icon icon={icon} width={iconSize || '45px'} height={iconSize || '45px'}/>
            }

            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                {...rest}
                textAlign={textAlign}
                padding={'2px'}
            >
                <Typography variant={titleVariant || "h3"} color={titleColor}>{title}</Typography>
                <Typography variant={subtitleVariant || 'tiny'} color={color || 'grey'}>{subtitle}</Typography>
            </Box>
        </Box>
    )
}

export default TitleBox