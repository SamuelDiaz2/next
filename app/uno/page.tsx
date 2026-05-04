"use client";
import Props from "./props";
import { useAppContext } from "../contexto/AppContext";


export default function Uno({}){
    
    const context = useAppContext();
    const nombre = context?.nombre ?? "";

    return (
        <div>
            uno

            <Props nombre="este es un props">
                {nombre}
            </Props>
        </div>
    );
}