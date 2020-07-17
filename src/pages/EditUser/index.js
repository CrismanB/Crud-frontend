import React, { useState, useCallback, useRef, useEffect } from "react";
import { parseISO, isValid, format } from "date-fns";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";
import { Container, FormContainer, Button } from "./styles";

import api from "./../../services/api";

function EditUser() {
  const history = useHistory();

  const [user] = useState(history.location.state.user);
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");
  const [birth_date, setBirthDate] = useState(() => {
    if (user.birth_date) {
      return format(parseISO(user.birth_date), "yyyy-MM-dd");
    } else {
      return null;
    }
  });

  const dateRef = useRef();

  useEffect(() => {}, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault(false);

      if (!name) {
        return toast.error("Campo Nome vazio, verifique os dados.");
      }

      if (!email) {
        return toast.error("Campo Email vazio, verifique os dados.");
      }

      if (password?.length > 0 && password?.length < 8) {
        toast.error("Campo Senha tem que ter no mínimo 8 digitos.");

        setPassword("");
        return;
      }

      const checkDate = birth_date ? isValid(parseISO(birth_date)) : null;

      if (!checkDate && checkDate !== null) {
        return toast.error("Data invalida.");
      }

      try {
        const data = {
          name,
          email,
          password,
          birth_date,
        };

        if (!password) {
          delete data.password;
        }

        await api.put(`/users/${user.id}`, data);

        toast.success("Atualizado com sucesso.");

        history.push("/");
      } catch (error) {
        toast.error("Algo deu errado, tente novamente.");
      }
    },
    [name, email, password, birth_date, user.id, history]
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
          <h1>Editar Usuário</h1>
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
            <input
              type="date"
              ref={dateRef}
              defaultValue={birth_date}
              onBlur={handleDateInput}
            />
          </div>

          <div>
            <Button type="submit" themeColor="create" onClick={handleSubmit}>
              Atualizar
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

export default EditUser;
