import React, { Component } from 'react';
import axios from "axios"

class LoginContainer extends Component {

    submitF(e) {
        e.preventDefault();
        let uid = e.target.uid.value;
        let upws = e.target.upws.value;
        axios.post("/users/login", {
            uid,
            upws
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        return (
            <div>
                <h1>Login페이지</h1>
                <form
                    onSubmit={(e) => {
                        this.submitF(e);
                    }}>
                    <p>id: <input id="uid" name="uid" /></p>
                    <p>password: <input id="upws" name="upws" /></p>
                    <p><input type="submit" /></p>

                </form>
            </div>
        );
    }
}

export default LoginContainer;