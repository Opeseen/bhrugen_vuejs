import { db } from '@/utility/firebaseConfig';
import { collection, addDoc, getDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const productCollection = collection(db, 'products');

export default {
  async createProduct(productData) {
    const docRef = await addDoc(productCollection, productData);
    return { id: docRef.id, ...productData };
  },

  async getProducts() {
    const snapshot = await getDocs(productCollection);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  async getProductById(id) {
    const docRef = doc(db, 'products', id);
    const snapshot = await getDoc(docRef);
    return { ...snapshot.data() };
  },

  async updateProduct(id, productData) {
    console.log('ProductData', productData);
    const docRef = doc(db, 'products', id);
    await updateDoc(docRef, productData);
    return { id, ...productData };
  },

  async deleteProduct(id) {
    const docRef = doc(db, 'products', id);
    await deleteDoc(docRef);
    return true;
  },
};
