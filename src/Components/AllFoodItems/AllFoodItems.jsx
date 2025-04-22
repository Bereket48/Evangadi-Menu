import { Component } from "react";
import FoodItem from "./FoodItem/FoodItem";
import { menu } from "../../assets/data";
class AllFoodItems extends Component {
  render() {
    return (
      <>
        <div className="foods-container">
          {menu.map(function (element, index) {
            const {img, desc, id, title, price}=element
            return (
              <FoodItem
                img={img}
                desc={desc}
                key={id}
                title={title}
                price={price}
                // {...element} // We can avoid the above 4 lines of codes using these two instead
                // key={element.id}
              />
            );
          })}
          <FoodItem />
        </div>
      </>
    );
  }
}

export default AllFoodItems;
