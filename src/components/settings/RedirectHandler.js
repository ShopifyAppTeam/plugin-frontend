import React from 'react';
import api from "../../api/axiousConfig";
import { HttpStatusCode } from 'axios';
import { useNavigate } from 'react-router-dom';

function RedirectHandler() {
    const url_str = window.location.href;
    const url = new URL(url_str);
    const subdom = localStorage.getItem("through-track-plugin-add-subdomain");
    localStorage.removeItem("through-track-plugin-add-subdomain");
    const code = url.searchParams.get("code");
    const navigate = useNavigate();
    async function sendData() {
        try {
            const response = await api("user/add_shop/" + subdom + "/code=" + code, {
                validateStatus: function (status) {
                    return status == HttpStatusCode.Ok;
                }

            });
            if (response) {
                navigate("/settings");
            }
        } catch (e) {
            console.log(e);
        }

    }
    sendData();

}

export default RedirectHandler