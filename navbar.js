//add highlights and whatever else rubric wanted
function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" id="tooltip" href="#">Home<span id ="tooltiptext">Go here to look at Strudel's picture again!</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" id="tooltip" aria-current="page" href="#/CreateAccount/">Create Account
          <span id ="tooltiptext">Become a customer! You've got nothing to lose</span></a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" id="tooltip" href="#/deposit/">Deposit<span id ="tooltiptext">Put some money in here, we'll lend it out and make interest!</span></a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" id="tooltip" href="#/withdraw/">Withdraw<span id ="tooltiptext">It's your money, use it when you need it</span></a>
        </li>
           <li className="nav-item"  >
          <a className="nav-link" id="tooltip" href="#/alldata/">All Data<span id ="tooltiptext">Why not just look at everyone's private information!?</span></a>
        </li>
        </ul>
      </div>
    </nav>
    </>
  );
}