import { AppBar, Box, Grid, IconButton, Typography } from "@mui/material"
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import './header-footer.scss'

type Props = {
	children: JSX.Element
}

const HeaderFooter = ({ children }: Props) => {
	return (
		<Grid container className="header-footer">
			<AppBar position="static" color="primary">
				<Typography variant="h4">
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 1, ml: 1 }}
					>
						<SettingsInputAntennaIcon />
					</IconButton>
					Hacker News
				</Typography>
			</AppBar>
			<Box className="children-container">
				{children}
			</Box>
		</Grid>
	)
}

export default HeaderFooter