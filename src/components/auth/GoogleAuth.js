import React from "react";
import GoogleLogin from "react-google-login";

// Snackbar
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const GoogleAuth = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const respuestaGoogle = (respuesta) => {
    /* console.log(respuesta); */

    if (respuesta.accessToken) {
      enqueueSnackbar("Bienvenido a PetPinina", { variant: "success" });
      router.push("/petsAndClients");
    } else {
      enqueueSnackbar(response.msg, { variant: "error" });
    }
  };
  return (
    <div>
      <br></br>
      <GoogleLogin
        clientId="516929823924-svb8qslcllhfd6r8fesb2sh6tpgmo62a.apps.googleusercontent.com"
        /* buttonText="Ingresar con Google" */

        render={(renderProps) => (
          <a
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            class="googleRegistro"
          >
            Ingresar con Google
          </a>
        )}
        onSuccess={respuestaGoogle}
        onFailure={respuestaGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleAuth;
