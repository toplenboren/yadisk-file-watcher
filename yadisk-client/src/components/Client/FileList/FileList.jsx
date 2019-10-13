import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {fetchData} from "../../../Store/Actions/DataActions";
import DataCard from "./DataCard/DataCard";

class FileList extends Component {

    componentDidMount() {
        this.props.fetchData('/', this.props.token)
    }

    render() {

        const createDataViews = dataArray => {
            let result = dataArray.map(dataUnit => <DataCard {...dataUnit} />);
            return result;
        };

        const getViewByState = () => {
            if (this.props.isFetching) {
                return (
                    <p>Загрузка...</p>
                )
            } else if (this.props.data === null || this.props.data === undefined) {
                return (
                    <p>Что-то идёт не так...</p>
                )
            } else if (this.props.data._embedded.items !== undefined) {
                if (this.props.data._embedded.items.length === 0) {
                    return (
                        <h3>Пустой диск</h3>
                    );
                }
                return (
                    <div>
                    {createDataViews(this.props.data._embedded.items)}
                    </div>
                )
            }
        };

        return (
            <React.Fragment>
                {getViewByState()}
            </React.Fragment>
        );
    }
}

const MapStateToProps = store => ({
    token: store.AuthReducer.token,
    isFetching: store.DataReducer.isFetching,
    data: store.DataReducer.data
});

const MapDispatchToProps = dispatch => ({
    fetchData: (path, token) => dispatch(fetchData(path, token))
});

export default connect(MapStateToProps, MapDispatchToProps)(FileList);
