import * as firebaseAuth from "firebase/auth";
import { auth, db } from "../FirebaseConfig";

export default class AuthService {
  async login(email: string, password: string) {
    return await firebaseAuth.signInWithEmailAndPassword(auth, email, password);
  }
  async register(name: string, lastName: string, email: string, password: string) {
    
    return await firebaseAuth.createUserWithEmailAndPassword(auth, email, password)
  }
}
