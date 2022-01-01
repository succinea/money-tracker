const AccountSummary = ({ expenses, title }) => {
  let expensesObj = JSON.parse(JSON.stringify(expenses));

  const groupBy = (items, key) =>
    items.reduce(
      (result, item) => ({
        ...result,
        [item[key]]: [...(result[item[key]] || []), item],
      }),
      {}
    );

  const groupedObj = groupBy(expensesObj, "source");
  let resultobj = [];
  Object.keys(groupedObj).forEach((key) => {
    let value = groupedObj[key];
    let sum = 0;
    for (let subkey in value) {
      if (value[subkey]["type"] === "Credit") {
        sum += parseFloat(value[subkey]["amount"]);
      } else {
        sum -= parseFloat(value[subkey]["amount"]);
      }
    }
    resultobj.push({ key, sum });
  });

  console.log(resultobj);

  return (
    <div className="account-summary">
      <h2>{title}</h2>
      {resultobj.map((result) => (
        <div key={result.key}>
          <p>{result.key}:</p>
          <span className={result.sum > 0 ? "summary-plus" : "summary-minus"}>
            $ {result.sum}
          </span>
        </div>
      ))}
    </div>
  );
};

export default AccountSummary;
