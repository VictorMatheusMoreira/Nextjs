interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}


export default function Circulo(props: any) {
    console.log(props)
    return (
        <div className={`
             flex justify-center items-center
             h-64  w-64   bg-cyan-600 
              text-black text text-4xl font-black mt-2
              ${props.quasePerfeito ? 'rounded-md' : 'rounded-full'}
        `}>
            {props.texto}
            
        </div>
    )
}