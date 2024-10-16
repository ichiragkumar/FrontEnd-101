
const Greeting = () => {
  const name = "chirag kumar"
  const date = new Date()
  return (
    <div>
      
      <h1>Hii , {name} How are you doing today</h1>
      <p>Date: { date.getDate()} {date.getMonth()}ß {date.getFullYear()}</p>
    </div>
  )
}

export default Greeting
