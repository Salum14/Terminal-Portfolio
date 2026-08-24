function Counter(){
    const [count, setCount] = useState(0);

    setCount((currentCount) => {
        return currentCount+1;
    });

    return(
        <div>
            Count: {count }
            <button onClick={increment}>+1</button>

            
        </div>
    )
}