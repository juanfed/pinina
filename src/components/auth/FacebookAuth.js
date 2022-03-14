import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// Snackbar
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const FacebookAuth = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();

  const respuestaFacebook = (respuesta) => {
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
      <FacebookLogin
        appId="651206472658419"
        autoLoad={false}
        callback={respuestaFacebook}
        fields="name,email,picture"
        render={(renderProps) => (
          <a onClick={renderProps.onClick} class="googleRegistro">
            Ingresar con Facebook
          </a>
        )}
      />
    </div>
  );
};

export default FacebookAuth;
