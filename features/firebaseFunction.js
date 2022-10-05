import db from '../firebaseConfig'
import { collection, query, where, onSnapshot, getDocs, doc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';


export const getMenu = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
//     querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         // console.log(doc.id, " => ", doc.data());
// })
//     // querySnapshot.docs.map(doc => console.log(doc.id))
    return querySnapshot.docs.map((doc) => doc.data())
}

export const addMenu = async () =>{
    
}