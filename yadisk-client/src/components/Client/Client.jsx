import React from 'react';
import FileBreadCrumb from './FileBreadCrumb/FileBreadCrumb'
import FileManagement from './FileManagement/FileManagement'
import FileList from './FileList/FileList'

function Client() {
    return (
        <React.Fragment>
            <FileBreadCrumb/>
            <FileManagement/>
            <FileList/>
        </React.Fragment>
    );
}

export default Client;
