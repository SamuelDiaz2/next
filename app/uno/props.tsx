import { ReactNode } from "react";

export default function Props({ nombre, children }: { nombre: string; children?: ReactNode }){
    return (
        <div>
            {nombre}
            {children}
        </div>
    )
}