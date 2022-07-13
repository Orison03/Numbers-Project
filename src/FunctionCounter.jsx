import React, {useState, usestate} from "react";

const FunctionalComponent= () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <h1 className="counterHeading-2">Even Number</h1>
        <h3 className="description-2">Number : {count}</h3>
        <button
          className="btn-1"
          onClick={() => setCount( count + 2 )}
        >
         Increase
        </button>
        <button
          className="btn-2"
          onClick={() => setCount( count - 2 )}
        >
          Decrease
        </button>
      </div>
    );
}

export default FunctionalComponent