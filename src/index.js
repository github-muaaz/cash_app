import ReactDOM from "react-dom/client";
import {StyledEngineProvider} from "@mui/material";

import LayoutManager from "./layout/layoutManager";
import Theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StyledEngineProvider injectFirst>
        <Theme>
            <LayoutManager/>
        </Theme>
    </StyledEngineProvider>
)