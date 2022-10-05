import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { menuDocs } from '../../features/hotel/menuSlice'
import { getMenu } from '../../features/firebaseFunction'
import MenuCard from './MenuCard';
import AddIcon from '@mui/icons-material/Add';
import AddMenuModal from './AddMenuModal';
import AddMenuContext from '../Context/AddMenuContext';

function MenuBar() {
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const menuDoc = useSelector(state => state.menu.menuDoc)

    useEffect(() => {
        if (menuDoc.isLoading) {
            (async () => {
                await getMenu().then(data => {
                    console.log(data);
                    dispatch(menuDocs(data))
                })

            })();
            console.log("loading.....")
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