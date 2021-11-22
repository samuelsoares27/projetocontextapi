import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {
    const { alunos, setAluno } = useContext(UserContext);
  return (
    <div>
          <span style={{ color: 'red' }}>Bem vindo: {alunos}</span><br />
          <button value={alunos} onClick={() => setAluno("aoba fc")} >click</button>
         
    </div>
  );
}

export default Nome;
