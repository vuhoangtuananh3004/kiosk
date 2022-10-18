import db from '../firebaseConfig'
import { collection, query, where, onSnapshot, getDocs, doc, setDoc, addDoc, deleteDoc  } from "firebase/firestore";


export const getMenu = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    return querySnapshot.docs.map((doc) => doc.data())
}

export const addNewDoc = async (collectionName, docName) =>{
    await setDoc(doc(db, collectionName, docName), {
            id: Date.now().toLocaleString(),
            name: docName,
          });
}
export const createModel = async (collectionName, name, model, products) =>{
    await setDoc(doc(db, collectionName, name), {
            id: Date.now().toLocaleString(),
            name: name,
            model,
            products
          });
}
export const loadModelData = async (name) => {
    const q = query(collection(db, "models"), where("name", "==", name));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => doc.data())
}

export const removeDoc = async(collectionName, docName) =>{
    const q = query(collection(db, collectionName), where("name", "==", docName));
    const querySnapshot = await getDocs(q);
    // await deleteDoc(doc(db, collectionName, querySnapshot.docs[0].id));
    await deleteDoc(doc(db, collectionName, docName));
}