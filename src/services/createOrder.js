import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export async function createOrder({ buyer, cart }) {
  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const order = {
    buyer,
    items: cart.map((item) => ({
      id: item.id,
      title: item.nombre,
      price: item.precio,
      quantity: item.quantity
    })),
    total,
    date: serverTimestamp()
  };

  const ordersRef = collection(db, "orders");
  const orderDoc = await addDoc(ordersRef, order);

  return orderDoc.id;
}
