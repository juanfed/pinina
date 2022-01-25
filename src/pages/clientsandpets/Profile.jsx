import MainLayout from '../../layouts/MainLayout';
import ProfileComponent from '../../components/ClientsAndPets/ProfileComponent';
import ClinicHistoryComponent from '../../components/ClientsAndPets/ClinicHistoryComponent';
import CPNavBar from '../../components/ClientsAndPets/CPNavBar';
import AppBar from '../../layouts/AppBar';
import { Grid, Paper } from '@material-ui/core';
import Vaccines from '../../components/ClientsAndPets/Vaccines';
import { Typography } from '@material-ui/core';
import profileStyles from '../../assets/css/js/profileStyles';

export default function Profile() {
	const classes = profileStyles();
	return (
		<>
			<Grid container className={classes.background}>
				<Grid item xs={1}>
					<AppBar />
				</Grid>
				<Grid item xs={11}>
					<Grid container spacing={4} className={classes.root}>
						<Grid item xs={12}>
							<CPNavBar />
						</Grid>
						<Grid item xs={12}>
							<Paper
							square
							>
								<ProfileComponent />
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid item xs={12} style={{ textAlign: 'center' }}>
									<Paper
										elevation={5}
										className={classes.titlePaper}
										square
									>
										<Typography
											variant='h5'
										>
											Historia Clínica
										</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Paper
								square
								elevation={1}
							>
								<ClinicHistoryComponent />
							</Paper>
						</Grid>
						<Grid item xs={12}>
							<Grid container spacing={0} justify='center'>
								<Grid item xs={12} style={{ textAlign: 'center' }}>
									<Paper
										elevation={5}
										className={classes.titlePaper}
										square
									>
										<Typography
											variant='h5'
										>
											Vacunas
										</Typography>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Paper
								square
								elevation={2}
							>
								<Vaccines />
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
}
