import React from 'react'
import ClinicHistoryComponent from '../../components/ClientsAndPets/ClinicHistoryComponent'
import CPNavBar from '../../components/ClientsAndPets/CPNavBar'
import MainLayout from '../../layouts/mainLayout'

export default function ClinicHistory() {
    return (
        <>    
            <MainLayout title="Pinina Pet - Historia Clínica">
            <CPNavBar />
            <ClinicHistoryComponent />
            </MainLayout>
        </>
    )
}
