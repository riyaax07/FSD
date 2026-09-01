
import './Book.css'

const Book = () => {
  return (
    <div className="book">
      <img src={"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzCTVV-GU8Op3zkUVYjMtkQ-IyNsknTChW7zqtzCmASuK7xrkGelPTynYXzDWLi291ymXCno0mGnhQhwmidddl39vvEaRc3FRsAbH179VCR4d9fTk8L8Gfww"} width="100" height="100" alt="Book Image" />
      <h3>Title: React Js</h3>
      <h3>Price: ₹29.99</h3>
      <button>Add to Cart</button>
    </div>
  )
}

export default Book
