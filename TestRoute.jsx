import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
const { Component } = React;

const TestRoute = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Test/>}/>
                {/*<Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/hiworksInfo' element={<HiworksInfo/>}/>
    
                <Route path='/main' element={<Main/>}/>
    */}
                </Routes>
        </BrowserRouter>
        );
};

const Test = () => {
    const [test,setTest] = useState('');

    useEffect(()=>{
        axios.get('/api')
        .then(response => setTest(response.data))
        .catch(error => console.log(error))
    },[]);

    return <div>{test}</div>;
};

export default TestRoute;