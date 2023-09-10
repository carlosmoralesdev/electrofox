import { db } from "./firebaseConfig";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  query,
} from "firebase/firestore";

export const getProducts = async (nameProductCategory) => {
  const querySnapshot = await getDocs(query(collection(db, nameProductCategory)));
  let productsArray = [];
  querySnapshot.forEach((doc) => {
    //let id = doc.id;
    let product = doc.data();
    product.id = doc.id
    productsArray.push(product);
  });

  console.log("ProductsArray: ", productsArray)

  return productsArray;
};