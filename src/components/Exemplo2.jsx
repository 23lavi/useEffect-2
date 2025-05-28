import { useState, useEffect} from "react"
import axios from "axios"

export function Exemplo2() {
    const [cep, setCep] = useState("")

    useEffect(() => {
    if (cep.length === 8){
        axios.get(`<https: />viacep.com.br/ws/${cep}/json/`).then((response) =>{
            console.log(response)
        })
    }
    }, [cep])

    return (
        <section>
            <h2>Exemplo 2: Buscar endereço</h2>

            <div>
                <input type="number" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)}/>
            </div>
        </section>
    )
}