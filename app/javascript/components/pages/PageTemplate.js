import React, {useState} from "react";
import AppBar from '../molecules/AppBar';
import Content from '../molecules/Content';

const PageTemplate = (props) => {

    const [columns, setColumns] = useState(1);
    const dbLength = props.dbPromise ? props.dbPromise.length : 0;
    const childrenLength = props.children ? props.children.length : 0;
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    let columnCount = Math.min(columns, childrenLength + dbLength, 6);
    return (
        <div>
            <AppBar pColumns={columnCount} pSetColumns={setColumns} name='SARA TONIN SAYS'/>
            <Content dbPromise={props.dbPromise ? props.dbPromise : null} pColumns={columnCount}>
                {props.children ? props.children : null}
            </Content>
        </div>
    );
}

export default PageTemplate;
