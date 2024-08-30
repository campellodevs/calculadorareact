
/*Base de dados calc*/

const Dados=(resultado)=>{
    if(resultado < 18.5){
        return( 
        <>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18.5</td>
        </>
            )
    
    }
    else if(resultado > 18.4 && resultado <25){
        return( 
        <>
            <td>Peso Normal</td>
            <td>18.5 - 24.9</td>
        </>
        )
        

    }
    else if(resultado > 24 && resultado < 30){
        return(
        <>
            <td>Sobre Peso</td>
            <td>25 - 29.9</td>
        </>
        )

     
    }
    else if(resultado > 29 && resultado < 35){
        return(
        <>
        <td>Obesidade Grau - I</td>
        <td>30 - 34.9</td>
        </>
        )
    }
    else{
        return(
            <>
            <td>Overdose de Peso</td>
            <td>Maior que 40</td>
            </>
        )
    }

}

const Resultado=({resultado})=>{ 

    return(
        <>
        <div className="resultado">
            <h2>
                    Seu Imc é de: <span className="imcSpan">{resultado}</span>
            </h2>
            <table className="tabela">
                <thead className="tableHeader">
                    <tr>
                        <th>Classificação</th>
                        <th>IMC</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    <tr>
                        {Dados(resultado)}
                    </tr>
                </tbody>

            </table>
        </div>
        </>
    )
}

export default Resultado