import useDialog from "../../hooks/useDialog"
import { Dialog } from '@mui/material'
//components
import CheckEmailModal from "./CheckEmailModal"


export default function VerifyRegister({ dialog, setDialog }) {
    return (
        <>
            <Dialog
                open={dialog}
                onClose={() => setDialog(false)}
            >
                <CheckEmailModal />
            </Dialog>
        </>
    )
}
