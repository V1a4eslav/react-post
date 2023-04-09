import styled from "styled-components";
import {TextField} from "../../../../UIKit/TextField/TextField";
import {Button} from "../../../../UIKit/Button/Button";

export const SArticleForm = styled.form`
  max-width: 80%;
  margin: 0 auto;
`
export const SArticleTitleField = styled(TextField)`
  padding: 12px;
`
export const SArticleAboutField = styled(TextField)`
  padding: 8px 12px;
`
export const SArticleFormButton = styled(Button)`
  display: block;
  margin-left: auto;
`

export const SArticleTagsField = styled(TextField)`
  padding: 12px;
`