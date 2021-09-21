import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tweet extends Component(props) {

    render() {
        return (
            <div className= 'tweet'>

            </div>
        )
    }

}

function mapStateToProps ({tweets, users, authedUser}, {id}){

}

export default connect(mapStateToProps)(Tweet)