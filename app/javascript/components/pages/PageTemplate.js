import React from "react";
import AppBar from '../molecules/AppBar';
import Content from '../molecules/Content';

class PageTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: 2,
            blogPosts: []
        }

    }

    componentDidMount() {
        this.mounted = true;

        if (this.mounted) {
            fetch(this.props.fetchUrl).then(res => {
                res.json().then(
                    blogPosts => this.setState(state => ({columns: state.columns, blogPosts: blogPosts}))
                ).catch(e => alert(e));
            }).catch(e => alert(e));
        }
    }

    componentWillUnmount() {
        this.mounted = false;
    }


    handleColumnChange = (e) => {
        console.log('Test');
        // alert('beeep');

        let columns = Math.min(e.target.value, this.state.blogPosts, 6);
        this.setState(state => ({blogPosts: state.blogPosts, columns: columns}))
    }

    render() {
        return (
            <div>
                <AppBar columns={this.state.columns} handleColumnChange={this.handleColumnChange.bind(this)}
                        name='SARA TONIN SAYS'/>
                <Content dbContent={this.state.blogPosts} pColumns={this.state.columns}>

                </Content>
            </div>
        );
    }
}


export default PageTemplate;
