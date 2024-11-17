import { NextResponse } from "next/server";
import connect from "@/src/utils/db";
import Email from "@/src/models/Email";

export const POST = async (request) => {
    try {
        await connect();
        const { correo } = await request.json();
        await Email.create({correo});
        return NextResponse.json({message:"Email guardado"}, { status: 201 });
    } catch (err) {
        return new NextResponse("Error guardando email:" + err, {
            status: 500,
        });
    }
}

export const DELETE = async (request) => {
    try {
      await connect();
      const { correo } = await request.json();
      await Email.deleteOne({ correo });
      return NextResponse.json({ message: "Email eliminado" }, { status: 200 });
    } catch (err) {
      return new NextResponse("Error eliminando email:" + err, {
        status: 500,
      });
    }
  };