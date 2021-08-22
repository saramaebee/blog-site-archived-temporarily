import React, {useState} from "react";
import AppBar from '../molecules/AppBar';
import Content from '../molecules/Content';

const PageTemplate = (props) => {

    const [columns, setColumns] = useState(1);
    const dbLength = props.dbContent ? props.dbContent.length : 0;
    const childrenLength = props.children ? props.children.length : 0;
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    let columnCount = Math.min(columns, childrenLength + dbLength, 6);
    return (
        <div>
            <AppBar pColumns={columnCount} pSetColumns={setColumns} name='SARA TONIN SAYS' />
            <Content contentJson={props.dbContent ? props.dbContent : null} pColumns={columnCount}>
                {props.children}
            </Content>
        </div>
    );
}

export default PageTemplate;
