import React from "react";
import { oauth2 as SMART } from "fhirclient";

export default function Launcher() {
    const test = () => SMART.authorize({
        clientId: "my-client-id",
        scope: "launch launch/patient patient/read offline_access",
        redirectUri: "http://localhost:3000/home",
        iss:
            "https://launch.smarthealthit.org/v/r3/sim/" +
            "eyJoIjoiMSIsImIiOiJmMDQ2MjkzNi1lYjRiLTRkYT" +
            "EtYjQ1YS1mYmQ5NmViZjhjY2IiLCJlIjoic21hcnQt" +
            "UHJhY3RpdGlvbmVyLTcxNjE0NTAyIn0/fhir",
        completeInTarget: true
    })

    return(<div>{test()}</div>)
}