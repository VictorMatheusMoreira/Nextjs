import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
    return (
        <div className=" flex  justify-around">
            <Circulo texto="Circ #1" />
            <Circulo texto="Circ #2" />
            <Circulo texto="Circ #3" /> 
            <Circulo texto="quad #4" quasePerfeito /> 
            

        </div>
    )
}