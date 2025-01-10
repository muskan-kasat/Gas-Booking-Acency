import { db, collection, addDoc } from "./fb.js";

window.firestore = db;
window.collection = collection;
window.addDoc = addDoc;
