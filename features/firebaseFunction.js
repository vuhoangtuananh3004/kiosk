import db from '../firebaseConfig'
import { collection, query, where, onSnapshot, getDocs, doc, setDoc, addDoc, deleteDoc  } from "firebase/firestore";
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

export const addNewDoc = async (collectionName, docName) =>{
    // const docRef = await addDoc(collection(db, collectionName, docName), {
    //     id: Date.now().toLocaleString(),
    //     name: docName,
    //   });
    await setDoc(doc(db, collectionName, docName), {
            id: Date.now().toLocaleString(),
            name: docName,
          });
}
export const createModel = async (collectionName, name, model) =>{
    await setDoc(doc(db, collectionName, name), {
            id: Date.now().toLocaleString(),
            name: name,
            model
          });
}
export const loadModelData = async () => {
    // const querySnapshot = await getDocs(collection(db, "models"));


    const q = query(collection(db, "models"), where("name", "==", "Flatbread"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data())
}

export const removeDoc = async(collectionName, docName) =>{
    const q = query(collection(db, collectionName), where("name", "==", docName));
    const querySnapshot = await getDocs(q);
    // await deleteDoc(doc(db, collectionName, querySnapshot.docs[0].id));
    await deleteDoc(doc(db, collectionName, docName));
}