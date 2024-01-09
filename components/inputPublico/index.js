/*Arquivo responsável pelos campos e imagens da página de login*/

import Image from "next/image";

export default function InputPublico({
  imagem,
  tipo,
  texto,
  valor = '',
  exibirMensagemValidacao = false,
  mensagemValidacao = '',
  aoAlterarValor

}) {
  return (
    <>
      <div className='inputPublicoContainer'> {/*Vai encapsular tudo*/}
        <div className="inputPublico">
          <Image
            src={imagem} //Prop
            alt="imagem do campo"
            className="iconeInputPublico"
            width={20}
            height={20}
          />
          <input
            /*campo*/
            type={tipo}
            placeholder={texto}
            value={valor}
            onChange={aoAlterarValor}
          />
        </div>
        {/*Mensagem de validação*/}
        {exibirMensagemValidacao && <p className="mensagemValidacao">{mensagemValidacao}</p>}
      </div>
    </>
  )
}