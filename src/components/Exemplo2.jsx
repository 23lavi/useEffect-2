import { useEffect, useState } from "react"
import axios from "axios"

export function Exemplo2() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
    if (cep.length === 8){
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => {
                setLogradouro(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
                setEstado(response.data.estado)
                setUf(response.data.uf)
        })
    }
    }, [cep])

    return (
        <section>
            <h2>Ex. 2: Buscar endereços</h2>

            <input type="number" placeholder="Digite seu CEP" onChange={(input) => setCep(input.target.value)}/>

            <div>
                {cep.length === 8 && 
                <>
                <h3>Informações sobre o cep:</h3>
                <ul>
                    <li>{logradouro}</li>
                    <li>{bairro}</li>
                    <li>{cidade}</li>
                    <li>{estado} - {uf}</li>
                </ul>
                </>
}
            </div>
                
        </section>
    )
}