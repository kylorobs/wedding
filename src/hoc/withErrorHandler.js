import React from 'react';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }

        componentWillMount(){
            this.requestInterceptor = axios.interceptors.request.use( req => {
                this.setState({error: null});
                return req;
            })
            this.responseInterceptor = axios.interceptors.response.use( res => res, error => {
                this.setState({error: error})
            })
        }

        render(){
            return (
                <React.Fragment>
                    <p>{this.state.error? this.state.error.message : null} </p>
                    <WrappedComponent  />
                </React.Fragment>
            )
        }
    }
}

export default withErrorHandler;