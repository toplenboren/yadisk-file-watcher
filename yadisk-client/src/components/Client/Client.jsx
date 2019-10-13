import React from 'react';
import FileBreadCrumb from './FileBreadCrumb/FileBreadCrumb'
import FileManagement from './FileManagement/FileManagement'
import FileList from './FileList/FileList'
import {Container} from "@material-ui/core";
import {Redirect} from "react-router";
import connect from "react-redux/es/connect/connect";

function Client(props) {

    const isLoggedIn = () => {
        return props.token !== undefined
    };

    if(isLoggedIn()){
    return (
        <React.Fragment>
            <Container>
                {/*<FileBreadCrumb/>*/}
                {/*<FileManagement/>*/}
                <FileList/>
            </Container>
        </React.Fragment>
    );
    }
    else{
        return(
        <React.Fragment>
            {<Redirect to="/"/>}
        </React.Fragment>
        )
    }
}

const MapStateToProps = store => ({
    token: store.AuthReducer.token
});

export default connect(MapStateToProps, null)(Client);
