import { doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

export const getObjectFromFirestore = async (objectId: string) => {
  try {
    const docRef = doc(db, "fatores", objectId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("Documento não encontrado");
    }
  } catch (error) {
    console.error("Erro ao buscar o objeto:", error);
    throw error;
  }
};