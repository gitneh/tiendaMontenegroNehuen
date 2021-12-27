import db from './firebaseConfigs';
import { query, where, orderBy, collection, getDocs } from "firebase/firestore";

export const firesFetch = async (idCategory) => {
    let a;
    if (idCategory) {
        a = query(collection(db, "products"), where('categoryId', '==', idCategory));
    } else {
        a = query(collection(db, "products"), orderBy('name'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.doc.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}
export const firestoreFetchOne = async (idItem) => {
    const docRef = doc (db, "products", idItem);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    }else{
        //doc.data() will be undefined in this case
        console.log("No such document");
    }
}
export default firesFetch;