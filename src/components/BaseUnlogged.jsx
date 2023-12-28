import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BaseUnlogged = (props) => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }

    const navigateToLogin = () => {
        navigate("/login");
    }

    return(
        <div className='text-wrap'>
        <div className="absolute bg-primary left-0 inset-y-0 w-96 h-auto bg-base-200">
            <div className="w-auto h-auto m-10">
                <img class="static rounded-xl" src="./images/main-logo.jpg" alt="image description"/>
            </div>
            <ul class="menu m-1 mx-10 space-y-4">
              <li onClick={navigateToHome} className='w-full bg-accent rounded-md'>
                  <div className='block text-center'>
                    <a className='font-bold text-xl'>
                        На главную
                    </a>
                  </div>
                </li>
                <li onClick={navigateToLogin} className='w-full bg-accent rounded-md'>
                  <div className='block text-center'>
                    <a className='font-bold text-xl'>
                          Вход
                    </a>
                  </div>
                </li>
            </ul>  
        </div>
        <div className="ml-96">
            {props.children}
        </div>
      </div>  
    )
}
export default BaseUnlogged;