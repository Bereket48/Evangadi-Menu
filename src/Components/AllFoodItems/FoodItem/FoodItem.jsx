import { Component } from "react"; // Q1???? On this particular component we didn't need to have a constructor function. Why was the reason?

// import propTypes from "prop-types" // After having installed "npm i prop-types", this code help us to make validation.

class FoodItem extends Component {
  render() {
    const { img, title, price, desc } = this.props;
    const shortDesc = desc.length > 290 ? desc.slice(0, 290) + "..." : desc; 
    FoodItem.defaultProps = {
      img: "https://placehold.co/300x200",
      title: "Ethiopian traditional cuisine",
      price: 55,
      desc: "Menu loading....",
    };
    // FoodItem.propTypes{
    //   img: String,
    //   title: String,
    //   desc: String,
    //   price: Number
    // }

    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={img} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">{shortDesc}</div>
        </div>
      </>
    );
  }
}

export default FoodItem;

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// import { Component } from "react";

// class FoodItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showFullDesc: false, // initial state
//     };
//   }

//   toggleDescription = () => {
//     this.setState((prevState) => ({
//       showFullDesc: !prevState.showFullDesc,
//     }));
//   };

//   render() {
//     const { img, title, price, desc } = this.props;
//     const { showFullDesc } = this.state;

//     const shortDesc = desc.length > 100 ? desc.slice(0, 100) + "..." : desc;

//     return (
//       <div className="single-food">
//         <div className="img">
//           <img src={img} />
//         </div>
//         <div className="title-price">
//           <h3>{title}</h3>
//           <p>{price}</p>
//         </div>
//         <div className="food-desc">
//           {showFullDesc ? desc : shortDesc}
//           {desc.length > 100 && (
//             <button
//               onClick={this.toggleDescription}
//               style={{ marginLeft: "10px", cursor: "pointer" }}
//             >
//               {showFullDesc ? "Show Less" : "Show More"}
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default FoodItem;

// 💥 What this does:
// It uses this.state to track whether the full description is shown.

// Clicking the button toggles the state with this.setState.

// The UI automatically updates based on the state — React magic!

// constructor      | Initializes state
// this.state       | Stores internal data
// this.setState()  | Changes state and causes re-render
// render()         | Reads props and state to determine UI
// Conditional JSX  | Changes what’s shown based on logic (like a ternary)

// Going deeper and doing this with functional components + hooks too. Adding also a filter/search state in AllFoodItems.
// ✨ Step 1: Convert FoodItem to Functional Component + Toggle Description
// Here’s how your FoodItem looks with hooks:

// jsx
// Copy
// Edit
// import { useState } from "react";

// function FoodItem({ img, title, price, desc }) {
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   const toggleDescription = () => {
//     setShowFullDesc(!showFullDesc);
//   };

//   const shortDesc = desc.length > 60 ? desc.slice(0, 60) + "..." : desc;

//   return (
//     <div className="single-food">
//       <div className="img">
//         <img src={img} />
//       </div>
//       <div className="title-price">
//         <h3>{title}</h3>
//         <p>{price}</p>
//       </div>
//       <div className="food-desc">
//         {showFullDesc ? desc : shortDesc}
//         {desc.length > 60 && (
//           <button onClick={toggleDescription} style={{ marginLeft: "10px" }}>
//             {showFullDesc ? "Show Less" : "Show More"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default FoodItem;

// 🚀 Step 2: Add a Search Bar to AllFoodItems (with State)
// Let’s now convert AllFoodItems to a functional component and add a search filter!

// jsx
// Copy
// Edit
// import { useState } from "react";
// import FoodItem from "./FoodItem/FoodItem";
// import { menu } from "../../assets/data";

// function AllFoodItems() {
//   const [search, setSearch] = useState("");

//   const filteredMenu = menu.filter((item) =>
//     item.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           placeholder="Search food..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={{
//             padding: "10px",
//             width: "100%",
//             maxWidth: "300px",
//             fontSize: "16px",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//           }}
//         />
//       </div>
//       <div className="foods-container">
//         {filteredMenu.length > 0 ? (
//           filteredMenu.map((item) => (
//             <FoodItem
//               key={item.id}
//               img={item.img}
//               desc={item.desc}
//               title={item.title}
//               price={item.price}
//             />
//           ))
//         ) : (
//           <p>No food found!</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default AllFoodItems;

// 🧠 What You Just Learned:

// Concept	What it does
// useState	Adds state to functional components
// Controlled Input	value + onChange = live typing
// filter()	Filters data based on user input
// Props + Composition	Clean, reusable component structure
