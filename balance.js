function Balance(){
  const currentBalance = React.useContext(BalContext);
  return (
    <>
    <h1>YOU FOUND THE SECRET BALANCE PAGE!</h1>
    <h2>Current Balance is: {currentBalance}</h2>
    <h6>Remember that all play and no work makes me a poor boy</h6>
    
    </>
  );
}
