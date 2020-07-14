import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header/index";

import {
  Container,
  Nome,
  NewLink,
  NewText,
  LogOut,
  LogOutText,
} from "./styles";

export default function Profile() {
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <Container>
      <Header />
      <Nome>{user && user.nome}</Nome>
      <NewLink onPress={() => navigation.navigate("Registrar")}>
        <NewText>Registrar Gastos</NewText>
      </NewLink>

      <LogOut onPress={() => signOut()}>
        <LogOutText>Sair</LogOutText>
      </LogOut>
    </Container>
  );
}
