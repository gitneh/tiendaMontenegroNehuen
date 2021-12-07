import db from './firebase';
import { query, where, orderBy, collection, getDocs } from "firebase/firestore";

const firefetch = async (idCategory) => {
    let a;
    if (idCategory){
        a = query(collection(db,"products"), where ('categoryId', '==', idCategory));
    } else {
        a = query(collection(db,"products"), orderBy ('name'));    
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.doc.map (document => ({
       id: document.id,
       ...document.data()
   }));
   return dataFromFirestore;
    }
export default firefetch;