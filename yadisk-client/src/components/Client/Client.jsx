import React from 'react';
import FileBreadCrumb from './FileBreadCrumb/FileBreadCrumb'
import FileManagement from './FileManagement/FileManagement'
import FileList from './FileList/FileList'
import {Container} from "@material-ui/core";

function Client() {
    return (
        <React.Fragment>
            <Container>
                <FileBreadCrumb/>
                <FileManagement/>
                <FileList/>
            </Container>
        </React.Fragment>
    );
}

export default Client;
