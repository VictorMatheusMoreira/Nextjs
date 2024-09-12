import Caixa from "@/components/basicos/Caixa";

export default function PaginaCaixa(){
    return (
        <div className=" flex gap-7 p-7">
            <Caixa>#1 </Caixa>
            <Caixa>#2 </Caixa>
            <Caixa className=" list-disc"> 
                <ul>
                    <li>bora</li> 
                    <li>Dale</li>
                    <li>na lista</li>
                </ul>   
            </Caixa>
        </div>
    )
}