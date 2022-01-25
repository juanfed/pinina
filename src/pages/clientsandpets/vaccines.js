import MainLayout from '../../layouts/mainLayout';
import CPNavBar from '../../components/ClientsAndPets/CPNavBar';
import Vaccines from '../../components/ClientsAndPets/Vaccines';

export default function () {
	return (
		<MainLayout title='Pet Pinina  Mascotas y clientes - Perfil'>
			<CPNavBar />
			<Vaccines />
		</MainLayout>
	);
}
