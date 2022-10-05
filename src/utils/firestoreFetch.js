import { query, where, collection, getDocs } from '@firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const firestoreFetch = async (idCategory) => {
    let q;
    if (idCategory) {
        q = query(collection(db, "products"), where('idCategory', '==', idCategory));
    } else {
        q = query(collection(db, "products"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const createOrderInFirestore = async (order) => {
    // Add a new document with a generated id
    const newOrderRef = doc(collection(db, "orders"));

    // later...
    await setDoc(newOrderRef, order);
    return newOrderRef;
}