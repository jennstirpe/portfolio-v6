import { StyledContactModal } from "./styled/ContactModal.styled";
import CloseBtn from "../global/CloseBtn";

export default function ContactModal({ handleClose }) {

    function closeContact() {
        handleClose("contact")
      }

  return (
    <StyledContactModal className="modal">
        <CloseBtn closeModal={closeContact} modal="Close contact modal" />
        <h3 className="modal-header">Send Me a Message!</h3>

        <form className="contact-form" action="https://formsubmit.io/send/d7e574ec-8e96-4097-896a-be431d3255fb" method="POST">
            <input type="hidden" name="_subject" value="New submission from portfolio site!" />
        
            <input name="name" type="text" id="name" placeholder="Name" required />
            <input name="email" type="email" id="email" placeholder="Email Address" required />
            <textarea name="comment" id="comment" rows="3" placeholder="Leave your message here" required></textarea>
                        
            <input name="_formsubmit_id" type="text" style={{"display": "none"}} />
        
            <input id="contact__submit" value="Submit" type="submit" />
        
            <input type="text" name="_honey" style={{"display": "none"}} />
        </form> 
        
    </StyledContactModal>
  )
}
