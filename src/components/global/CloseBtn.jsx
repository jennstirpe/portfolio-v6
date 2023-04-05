import { StyledCloseBtn } from "./CloseBtn.styled"

export default function CloseBtn({ closeModal, modal }) {
  return (
    <StyledCloseBtn onClick={closeModal} aria-label={modal}>&#10005;</StyledCloseBtn>
  )
}
