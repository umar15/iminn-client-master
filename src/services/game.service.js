import firebase from "../firebase";

const db = firebase.firestore().collection("/game");

class GameService {
	getAll() {
		return db;
	}

	create(game) {
		return db.add(game);
	}

	joinGame1(id, value) {
		return db
			.doc(id)
			.update({ team1: firebase.firestore.FieldValue.arrayUnion(value) });
	}
	joinGame2(id, value) {
		return db
			.doc(id)
			.update({ team2: firebase.firestore.FieldValue.arrayUnion(value) });
	}

	deleteUserInGame(gameId) {
		console.log(gameId);
		console.log(db.doc(gameId));
		return db
			.doc(gameId)
			.update()
			.then(() => {
				// File deleted successfully
			})
			.catch((error) => {
				console.log(error);
			});
	}

	getGameById(id) {
		return db.doc(id).get();
	}
}

export default new GameService();
