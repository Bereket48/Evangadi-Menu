import { Component } from "react";
import FoodItem from "./FoodItem/FoodItem";
import { menu } from "../../assets/data";
class AllFoodItems extends Component {
  render() {
    return (
      <>
        <div className="foods-container">
          {menu.map(function (element, index) {
            return (
              <FoodItem
                img={element.img}
                desc={element.desc}
                key={element.id}
                title={element.title}
                price={element.price}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default AllFoodItems;
