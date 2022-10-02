export interface INewsPost {
	by: string,
	descendents: number,
	id: number,
	kids: number[],
	score: number,
	time: number,
	title: string,
	type: string,
	url: string
} 