import React from "react";
import useFetch from "../hooks/useFetch.js";

const Home = () => {
    const url = 'api/v1/messages/index'
    const { data, loading, error, reFetch } = useFetch(url)
    return (
        <div className="message_container">
            <h1>{  data } David</h1>
        </div>
    );
}

export default Home;