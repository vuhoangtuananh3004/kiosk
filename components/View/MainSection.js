import React, { useState, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import DisplayView from "./DisplayView";
import Header from "../Header/Header"
import OrderView from "./OrderView";
import ViewContext from "../Context/ViewContext";
import ManagerView from "../View/ManagerView"
import db from '../../firebaseConfig'
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useDispatch, useSelector } from 'react-redux'
import MenuBar from "../Menu/MenuBar";

function MainSection() {
    const handle = useFullScreenHandle();
    const [view, setView] = useState('View');
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (loading) {
    //         console.log(loading)
    //     } else {
    //         dispatch(getData(value.docs[0].data()))
    //     }
    // }, [loading])

    return (
        <div>
                <FullScreen handle={handle} className='bg-white'>
                    <ViewContext.Provider value={{ view, setView }}>
                        <Header />
                        {
                            (view == "Manager Station") ? <ManagerView /> : <></>
                        }
                        {
                            (view == "Display Station") ? <DisplayView /> : <></>
                        }
                        {
                            (view == "Order Station") ? <OrderView /> : <></>
                        }
                    </ViewContext.Provider>
                </FullScreen>
        </div>
    )
}

export default MainSection