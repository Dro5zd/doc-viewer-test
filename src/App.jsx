import React from 'react';
import {GlobalStyles} from './styles/GlobalStyles';
import Header from './components/Header/Header';
import {Hero} from './sections/Hero/Hero';
import {Reviews} from "./sections/Reviews/Reviews";

export const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Hero/>
            <Reviews/>
        </>
    );
};
