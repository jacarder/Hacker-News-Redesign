import { db } from "../utils/firebase"
import { DataSnapshot, onValue, ref } from "firebase/database"
export default new class HackerNewsService {
	getTopNews = () => ({
		value: async <T>() => (await db.ref('v0/topstories').get()).val() as T,
		subscribe: async (callback: (snapshot: DataSnapshot) => void) => onValue(ref(db, 'v0/topstories'), callback)
	})
	getItemById = (id: number) => ({
		value: async <T>() => (await db.ref(`v0/item/${id}`).get()).val() as T,
	})
}()
