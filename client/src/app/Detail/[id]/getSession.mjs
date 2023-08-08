import { getSession } from "next-auth/react";

async function main() {
  try {
    const session = await getSession();

    if (session?.user) {
      console.log("Información del usuario:", session.user);
    } else {
      console.log("No se encontró información de usuario en la sesión.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
