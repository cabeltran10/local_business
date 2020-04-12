import React, { useState, useEffect } from "react";
import FormSignup from "./FormSignup.js";
import Profile from "./Profile.js";
import FormAddStore from "./FormAddStore.js";

const Signup = () => {
    const [user, setUser] = useState(null);

    const onLogout = () => {
        fetch("/logout").then(() => setUser(null));
    };

    useEffect(() => {
        fetch("/getUser")
            .then((res) => res.json())
            .then((user) => setUser(user));
    }, []);

    return (
        <div>
            {!user ? (
                <FormSignup></FormSignup>
            ) : (
                <div>
                    <div className="row">
                        <div className="col-sm-3 col-sm-offset-3"></div>
                        <div className="col-sm-3 col-sm-offset-3">
                            <Profile
                                username={user.username}
                                _id={user._id}
                                password={user.password}
                            ></Profile>
                        </div>
                        <div className="col-sm-3 col-sm-offset-3">
                            <button
                                onClick={onLogout}
                                className="btn btn-primary"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                    <div>
                        <FormAddStore></FormAddStore>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;