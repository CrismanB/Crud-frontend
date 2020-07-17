import React, { useState, useCallback, useRef } from "react";
import { parseISO, isValid } from "date-fns";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { Container, FormContainer, Button } from "./styles";

import api from "./../../services/api";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth_date, setBirthDate] = useState(null);

  const history = useHistory();
  const dateRef = useRef();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault(false);

      if (!name) {
        return toast.error("Campo Nome vazio, verifique os dados.");
      }

      if (!email) {
        return toast.error("Campo Email vazio, verifique os dados.");
      }

      if (!password) {
        return toast.error("Campo Senha vazio, verifique os dados.");
      }

      if (password.length < 8) {
        return toast.error("Campo Senha tem que ter no mínimo 8 digitos.");
      }

      const checkDate = birth_date ? isValid(parseISO(birth_date)) : null;

      if (!checkDate && checkDate !== null) {
        return toast.error("Data invalida.");
      }

      try {
        await api.post("/users", { name, email, password, birth_date });

        toast.success("Criado com sucesso.");

        history.push("/");
      } catch (error) {
        toast.error("Algo deu errado, tente novamente.");
      }
    },
    [name, email, password, birth_date, history]
  );

  const handleCancelButton = useCallback(() => {
    history.push("/");
  }, [history]);

  const handleDateInput = useCallback(() => {
    setBirthDate(dateRef.current.value);
  }, []);

  return (
    <Container>
      <FormContainer>
        <header>
          <h1>Criar Usuário</h1>
        </header>
        <form>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label>Data de Nascimento</label>
            <input type="date" ref={dateRef} onBlur={handleDateInput} />
          </div>

          <div>
            <Button type="submit" themeColor="create" onClick={handleSubmit}>
              Criar
            </Button>

            <Button
              type="button"
              themeColor="cancel"
              onClick={handleCancelButton}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </FormContainer>
    </Container>
  );
}

export default CreateUser;
