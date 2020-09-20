import React from "react";

import logo from "../assets/images/odiance-logo.svg";
// import { Image } from 'semantic-ui-react'

const Credit = () => (
    <p className='credit'>
        <b className="text-white">Powered by</b>{" "}
        <span>
            <a target='_blank' rel='noopener noreferrer' href='https://www.odiance.com/'>
                <img width='100' height='100' src={logo} alt='' />
            </a>
        </span>{" "}
    </p>
);

export default Credit;
