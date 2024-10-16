
const Expression = () => {

  const myName = "chirag Kumar"
  const multiply = (a,b) => a*b;
  return <div>
         <p>{2+2 }</p>

         <p>
            Me and My friend {myName} are going to have a great time
         </p>

         <p>
            My Friends List are 
            {
                ["chirag", "suraj", "kumar", "gupta", "sharma"]
            }

            {multiply(2,2)}
         </p>
    </div>
}

export default Expression
