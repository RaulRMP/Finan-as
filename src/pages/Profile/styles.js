import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #131313;
  align-items: center;
`;

export const Nome = styled.Text`
  text-align: center;
  font-size: 28px;
  margin-top: 25px;
  margin-bottom: 25px;
  color: #fff;
`;

export const NewLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 50;
  margin-bottom: 10px;
`;

export const NewText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const LogOut = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #c62c36;
  width: 90%;
  height: 45px;
  border-radius: 50;
`;

export const LogOutText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;
