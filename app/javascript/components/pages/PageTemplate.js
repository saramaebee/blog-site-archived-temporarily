import React, {useState} from "react";
import AppBar from '../molecules/AppBar';
import Content from '../molecules/Content';

const PageTemplate = (props) => {

    const [columns, setColumns] = useState(1);
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    return (
        <div>
            <AppBar pColumns={columns} pSetColumns={setColumns} name='SARA TONIN SAYS' />
            <Content pColumns={Math.min(columns, props.children.length, 6)} pSetColumns={setColumns}>
                {props.children}
            </Content>
        </div>
    );
}

export default PageTemplate;
