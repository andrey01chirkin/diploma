import React, {useEffect, useState} from "react"
import './App.css'
import FirstPage from "./FirstPage/FirstPage"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {FocusStyleManager} from "@blueprintjs/core";
import EditingPage from "./EditingPage/EditingPage";
import {observer} from "mobx-react";

const App = observer(() => {

    FocusStyleManager.onlyShowFocusOnTabs();

    return (
        <Router>
            <Routes>
                <Route path="/" element={<FirstPage/>}/>
                <Route path="content/:tech_id" element={<EditingPage/>}/>
            </Routes>
        </Router>
    );
})

export default App

