import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuDocs, reload } from '../../features/hotel/menuSlice'
import { getMenu } from '../../features/firebaseFunction'
import MenuCard from './MenuCard';
import AddIcon from '@mui/icons-material/Add';
import AddMenuModal from './AddMenuModal';
import AddMenuContext from '../Context/AddMenuContext';
import { onSnapshot, query, collection } from "firebase/firestore";
import db from '../../firebaseConfig'


function MenuBar() {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const menuDoc = useSelector(state => state.menu.menuDoc)

    useEffect(() => {
        const q = query(collection(db, "menu"));
        const realTimeUpDateMenu = onSnapshot(q, (querySnapshot) => {
            dispatch(reload())
        });
    }, [])

    useEffect(() => {
        if (menuDoc.isLoading) {
            (async () => {
                await getMenu().then(data => {
                    dispatch(menuDocs(data))
                })
            })();
        }
    }, [menuDoc.isLoading])


    const addMenu = () => {
        setModal(true)
    }
    return (
        <div >
            {
                (menuDoc.isLoading) ? <span>Loading....</span> :
                    <div>
                        <div className='flex flex-row w-full justify-between p-5 bg-sky-400/10'>
                            {menuDoc.data.map(doc => <MenuCard key={doc.id} name={doc.name} />)}
                            <div className='flex border border-dashed border-slate-900 rounded-full w-[40px] justify-center items-center text-[25px]' onClick={addMenu}><AddIcon fontSize='inherit' /></div>
                        </div>
                        <AddMenuContext.Provider value={{ setModal, menuDoc }}>
                            {
                                (modal) ? <AddMenuModal /> : <></>
                            }
                        </AddMenuContext.Provider>
                    </div>
            }
        </div>
    )
}

export default MenuBar