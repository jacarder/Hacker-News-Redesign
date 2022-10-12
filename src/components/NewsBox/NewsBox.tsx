import { CircularProgress, Grid, Pagination } from "@mui/material";
import Card from "@mui/material/Card";
import { ReactElement } from "react"
import { usePagination } from "react-use-pagination";
import { useSubscription } from "../../hooks/useSubscription";
import HackerNewsService from "../../services/HackerNews.service";
import NewsBanner from "../NewsBanner/NewsBanner";
import './news-box.scss';

const NewsBox = (): ReactElement => {
	const [bannerData = []] = useSubscription<number[]>(HackerNewsService.getTopNews.subscribe)
	const { totalPages, startIndex, endIndex, setPage } = usePagination({ totalItems: bannerData.length, initialPageSize: 10 });
	return (
		<Grid container className="news-box">
			<Grid item xs={12}>
				<Card className="card-container">
					{
						bannerData.length > 0 ?
							bannerData.slice(startIndex, (endIndex < 0 ? 0 : endIndex + 1)).map((value, index) => <NewsBanner key={`${value}-${index}`} postId={value} timeoutMultiplier={index} />)
							: <CircularProgress />
					}
				</Card>
				<Grid container className="pagination-container">
					<Pagination count={totalPages - 1} showFirstButton showLastButton onChange={(e, pageNumber) => setPage(pageNumber - 1)} />
				</Grid>
			</Grid>
		</Grid>
	)
}

export default NewsBox