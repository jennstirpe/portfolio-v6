import { StyledCloseBtn } from "./CloseBtn.styled"

export default function CloseBtn({ closeModal }) {
  return (
    <StyledCloseBtn onClick={closeModal}>&#10005;</StyledCloseBtn>
  )
}
