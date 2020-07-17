import React, { useEffect, useState, useCallback } from "react";
import { format, parseISO } from "date-fns";
import pt from "date-fns/locale/pt";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import api from "./../../services/api";

import {
  Container,
  List,
  TableUsers,
  Button,
  CreateUserButton,
} from "./styles";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const { data } = await api.get("/users");

      data.forEach(function (element) {
        element.date_formatted = format(
          parseISO(element.created_at),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        );
      });

      setUsers(data);
    }

    loadUsers();
  }, []);

  const history = useHistory();

  const handleCreatePage = useCallback(() => {
    history.push("/create");
  }, [history]);

  const handleEditPage = useCallback(
    (user) => {
      history.push({ pathname: "/edit", state: { user } });
    },
    [history]
  );

  const handleDelete = useCallback(
    async (id) => {
      var message = window.confirm(
        "Você tem certeza que deseja excluir esse usuário?"
      );

      try {
        if (message === true) {
          await api.delete(`/users/${id}`);

          setUsers(users.filter((user) => user.id !== id));

          toast.success("Usuário excluído com sucesso!");
        }
      } catch (error) {
        toast.error("Erro ao excluir usuário.");
      }
    },
    [users]
  );

  return (
    <Container>
      {users.length > 0 ? (
        <List>
          <header>
            <h1>Listagem dos usuários</h1>
            <Button themeColor={"create"} onClick={handleCreatePage}>
              Criar Usuário
            </Button>
          </header>
          <div>
            <TableUsers>
              <thead>
                <tr>
                  <th>None</th>
                  <th>E-mail</th>
                  <th>Data de criação</th>
                  <th colSpan="2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.date_formatted}</td>
                    <td>
                      <div>
                        <Button
                          type="button"
                          themeColor="confirm"
                          onClick={() => handleEditPage(user)}
                        >
                          Editar
                        </Button>
                        <Button
                          type="button"
                          themeColor="cancel"
                          onClick={() => handleDelete(user.id)}
                        >
                          Excluir
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableUsers>
          </div>
        </List>
      ) : (
        <CreateUserButton to={"/create"}>Criar Usuário</CreateUserButton>
      )}
    </Container>
  );
}

export default ListUsers;
