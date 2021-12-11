
function Deposit(){
  const [balance, setBalance] = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const balctx = React.useContext(BalContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}
function clearForm(){
  setDeposit('');
  setShow(true);
};

// it recognizes the deposit and its amount, but isn't updating state.

  function makeDeposit(){
    console.log("You deposited", deposit ,"dollars..")
    if (!validate(deposit,'gotta be a number!')) return;
    if (deposit < 0) return (window.alert("can't be a negative number!"), clearForm());
    console.log(parseFloat(balctx.balance) + parseFloat(deposit));
    let newBalance = parseFloat(balctx.balance) + parseFloat(deposit);
    balctx.balance = newBalance;
    setShow(false);
    console.log(balctx.balance);
    return balctx.balance;
  }

  return (
    
    <Card
      bgcolor="primary"
      header="Make a Deposit"
      status={status}
      body={show ? (  
        
        <>
        Current Balance is: {balctx.balance}<br/>
        You can make a deposit!<br/>
        <input type="number" className="form-control" id="deposit" placeholder="How much?"
        value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br />
        <button type="submit" className="btn btn-light"
        onClick={makeDeposit}>put it in the bank!</button>
       </>
            ):(
              <>
              <h5>Success, new balance is {balctx.balance}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
              </>
            )}
    />
  )
            }
