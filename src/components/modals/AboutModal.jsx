

export default function AboutModal({ handleClose }) {

    function closeProjects() {
        handleClose("about")
      }

  return (
    <div>
        <button onClick={closeProjects}>&#10005;</button>
        <h3>About me</h3>
        <p>details</p>
    </div>
  )
}
