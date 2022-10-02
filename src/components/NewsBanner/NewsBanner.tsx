import { Grow, Skeleton, Card } from "@mui/material";
import { useEffect, useState } from "react";
import { INewsPost } from "../../interfaces/newsPost";
import HackerNewsService from "../../services/HackerNews.service";
import NewsBannerContent from "../NewsBannerContent/NewsBannerContent";
import './news-banner.scss';

type Props = {
	postId: number,
	timeoutMultiplier: number
}
const NewsBanner = ({ postId, timeoutMultiplier }: Props) => {
	const [newsData, setNewsData] = useState<INewsPost>({} as INewsPost);
	useEffect(() => {
		const getData = async () => {
			setNewsData(await HackerNewsService.getItemById(postId).value<INewsPost>())
		}
		getData();
	}, [postId])

	return (
		<div className="news-banner">
			<Grow in timeout={500 * timeoutMultiplier}>
				<Card className="card-style">
					{
						newsData.title ?
							<NewsBannerContent {...newsData} />
							: <Skeleton />
					}
				</Card>
			</Grow>
		</div>
	)
}

export default NewsBanner
