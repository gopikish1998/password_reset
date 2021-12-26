import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import env from './settings';
function Home() {
    return (
        <div>
            <div class='d-flex justify-content-center align-items-center'>
                <div class="row">
                <h1 class="mr-auto p-2 col-lg-12">Hello, Welcome to our site</h1><br/>
               {window.localStorage.getItem("login_app_token") ?<h3 className='col-lg-6'>You are now Logged in</h3>  :<div class="p-2"><Link to="/login" class="btn btn-blue text-center">Please SignUp/Login</Link>
                </div>}
                </div>
            </div>
            
            
        </div>
    )
}

export default Home
