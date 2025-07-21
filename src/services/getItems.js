import { collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export async function getItems({ category = null, id = null } = {}) {
  const itemsRef = collection(db, 'items');

  if (id) {
    const docRef = doc(itemsRef, id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      return null;
    }
  }

  let q = itemsRef;
  if (category) {
    q = query(itemsRef, where('category', '==', category));
  }

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
