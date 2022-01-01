import { useState } from "react"
import { useHistory } from "react-router-dom";

const CreateExpense = () => {

    const history = useHistory();

    const [type, setType] = useState('Debit')
    const [source, setSource] = useState('')
    const [amount, setAmount] = useState(0.00)
    const [category, setCategory] = useState('')
    const [summary, setSummary] = useState('')
    const [comments, setComments] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const currentTimestamp = new Date().toLocaleString()

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const expObj = {
            type,source,amount,category,summary,comments,currentTimestamp
        };

        fetch('http://localhost:8000/expenses',{
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(expObj)
        }).then( () => {
            setIsLoading(false)
            console.log("New expense has been added")
            history.push("/")
        }).catch( (error) => {
            setIsLoading(false);
            setError(error.message);
        })

    }
    return(
        <div className="create-expense">
            <h2>Create New Expense</h2>
            {error && <div>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>Type</label>
                <select value={type} onChange={(e) => {setType(e.target.value)}}>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                </select>
                <label>Source</label>
                <input required type="text" value={source} onChange={(e) => {setSource(e.target.value)}}></input>
                <label>Amount</label>
                <input required type="text" value={amount} onChange={(e) => {setAmount(e.target.value)}}></input>
                <label>Category</label>
                <input required type="text" value={category} onChange={(e) => {setCategory(e.target.value)}}></input>
                <label>Summary</label>
                <input required type="text" value={summary} onChange={(e) => {setSummary(e.target.value)}}></input>
                <label>Comments</label>
                <textarea required value={comments} onChange={(e) => {setComments(e.target.value)}}></textarea>
                <button>{isLoading ? 'Adding Expense':'Add Expense'}</button>
            </form>
        </div>
    );
}

export default CreateExpense;