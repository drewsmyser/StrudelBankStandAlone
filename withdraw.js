function Withdraw(){
  const [balance, setBalance] = React.useState('');
  const [withdrawl, setWithdrawl] = React.useState('');
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
  setWithdrawl('');
  setShow(true);
};

// it recognizes the deposit and its amount, but isn't updating state.
  function makeWithdrawl(){
    console.log("You withDREW", withdrawl ,"dollars..")
    if (!validate(withdrawl,'gotta be a number!')) return;
    if (withdrawl < 0) return (window.alert("can't be a negative number!"), clearForm());
    console.log(parseFloat(balctx.balance) - parseFloat(withdrawl));
    let newBalance = parseFloat(balctx.balance) - parseFloat(withdrawl);
    balctx.balance = newBalance;
    setShow(false);
    console.log(balctx.balance);
    return balctx.balance;
  } 

  return (
    <Card
      bgcolor="danger"
      header="Make a withdrawl"
      status={status}
      body={show ? (  
        
        <>
        Current Balance is: {balctx.balance}<br/>
        You can make a withdrawl!<br/>
        <input type="number" className="form-control" id="withdrawl" placeholder="How much?"
        value={withdrawl} onChange={e => setWithdrawl(e.currentTarget.value)} /><br />
        <button type="submit" className="btn btn-light"
        onClick={makeWithdrawl}>Gimme my money!</button>
       </>
            ):(
              <>
              <h5>Success, new balance is {balctx.balance}</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Take out s'more</button>
              </>
            )}
    />
  )
            }
