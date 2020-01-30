import React from 'react';
import axios from "axios"

function JoinPresenter(props) {

   let submitF=(e)=>{

        e.preventDefault();
        let uid = e.target.uid.value;
        let upws = e.target.upws.value;
        let uname = e.target.uname.value;
        axios.post("/users/join", {
            uid,
            upws,
            uname
        })
            .then(function (response) {
                if (response.data.code === 0) {
                    alert(response.data.msg)
                    console.log("가입성공")
                    props.routerPush("/login")

                } else {
                    console.log("가입실패")
                    alert(response.data.msg)
                }
            })
            .catch(function (error) {
                alert("통신에러")
                console.log(error);
            });
    }



    return (
        <div>
            <h1>Join페이지</h1>
            <form
                onSubmit={(e) => {
                    submitF(e);
                }}>
                <p>id: <input id="uid" name="uid" /></p>
                <p>password: <input type="password" id="upws" name="upws" /></p>
                <p>name: <input id="uname" name="uname" /></p>
                <p><input type="submit" /></p>

            </form>
        </div>
    );

}

export default JoinPresenter;