import { Unsubscribe } from "@firebase/util"
import { DataSnapshot } from "firebase/database"
import { useEffect, useState } from "react"
/**
 * Used to subscribe to methods defined to watch for changes from firebase.
 * It will continue to run callback method on changes passed from firebase.
 * Generics FTW.
 * @param subscription onValue change method from firebase
 * @returns val() as T returned from firebase onValue change
 */
export const useSubscription = <T>(subscription: (callback: (snapshot: DataSnapshot) => void) => Unsubscribe) => {
	const [data, setData] = useState<T>()
	useEffect(() => {

		const unsubscribe = subscription((data) => {
			setData(data.val());
		})

		return () => {
			unsubscribe()
		}
	}, [subscription])
	//	TODO maybe pass back the unsubscribe method to allow manual unsubscribe.
	return [data]
}