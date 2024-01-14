import Cabecalho from "@/components/layout/Cabecalho";
import Navegacao from "@/components/layout/Navegacao";
import Rodape from "@/components/layout/Rodape";
import UsuarioService from "@/services/UsuarioService"
import { useRouter } from "next/router";
import Loading from "@/components/loading";

const usuarioService = new UsuarioService();

export default function comAutorizacao(Component) {
  return (props) => {
    const router = useRouter();
    if(typeof window !== 'undefined'){
      if(!usuarioService.estaAutenticado()){
        router.replace('/'); //Substitui a URL atual que eu estou
        return null;
      }

      const usuarioLogado = usuarioService.obterInformacoesUsuarioLogado();

      return(
        <>
        <Cabecalho usuarioLogado={usuarioLogado}/>
        <Loading />
        <Component usuarioLogado={usuarioLogado} {...props} /> {/* ...props é utilizado para passar todos os atributos de um objeto para outro componente*/}
        <Rodape usuarioLogado={usuarioLogado} />
        </>

      )  
    }
    return null;
  }
}