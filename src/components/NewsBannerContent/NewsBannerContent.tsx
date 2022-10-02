import { Grid, Box, Typography, Link } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { INewsPost } from '../../interfaces/newsPost';
import { useMemo } from 'react';
import { createTimeLabel } from '../../utils/date';
import './news-banner-content.scss';

interface Props extends INewsPost {

}

const NewsBannerContent = ({ time, score, title, url, by }: Props) => {
	const convertedTimeLabel = useMemo(() => createTimeLabel(time), [time])
	return (
		<Grid container className='news-banner-content'>
			<Box className="points-upvote-container">
				<Box className="upvote">
					<ArrowCircleUpIcon />
				</Box>
				<Box className="points">
					<Typography variant="caption">
						{score}
					</Typography>
				</Box>
			</Box>
			<Grid item xs={'auto'}>
				<Grid item xs={12}>
					<Link href={url} target="_blank" underline="none" color="black">{title}</Link>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="caption">
						<Box className="meta-data-link-container">
							<span>created by <Link href={'#'} variant="body2">{by}</Link></span>
							<span>|</span>
							<span>{convertedTimeLabel}</span>
							{
								url ?
									<>
										<span>|</span>
										<span><Link href={'#'} variant="body2">Find simular posts</Link></span>
									</>
									: null
							}
						</Box>
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default NewsBannerContent