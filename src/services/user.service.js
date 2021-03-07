import firebase from "../firebase";

const db = firebase.firestore().collection("/users");

class userService {
  getAll() {
    return db;
  }

  create(user) {
    return db.add(user);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }

  getUserById(id){
    return db.doc(id).get();
  }
  getUserByUID(uid){
    return db.where("uid", "==", uid).get();
  }
}

export default new userService();