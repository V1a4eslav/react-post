import styled from "styled-components";
import {TextField} from "../../UIKit/TextField/TextField";
import {TextareaField} from "../../UIKit/TextareaField/TextareaField";
import {PasswordTextField} from "../../UIKit/PasswordTextField/PasswordTextField";
import {Button} from "../../UIKit/Button/Button";

export const SSettingsContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding:24px 15px;
`;

export const SSettingsForm = styled.form`
  width: 100%;
`;

export const SSettingsImage = styled(TextField)`
  padding: 8px 12px;
`;

export const SSettingsName = styled(TextField)`
  padding: 12px 24px;
`;

export const SSettingsTextarea = styled(TextareaField)`
  padding: 12px 24px;
`;

export const SSettingsEmail = styled(TextField)`
  padding: 12px 24px;
`;

export const SSettingsPassword = styled(PasswordTextField)`
  padding: 12px 24px;
`;

export const SSettingsUpdateBtn = styled(Button)`
  display: block;
margin-left: auto;
`;

export const SSettingsLogOutBtn = styled.button`
  margin-top: 15px;
  display: inline-block;
  padding: 8px 16px;
  color: #b85c5c;
  background-color: transparent;
  border:1px solid #b85c5c;
  border-radius: 5px;
`