import './Spinner.css';

function Spinner() {
  return (
    <div className="spinner__container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner;