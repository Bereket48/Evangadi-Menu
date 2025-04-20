import { Component } from "react";
class FoodItem extends Component {
  render() {
    // ({img, title, price, desc }=this.props); // I couldn't use this and avoid this.props beneath
    return (
      <>
        <div className="single-food">
          <div className="img">
            <img src={this.props.img} />
          </div>
          <div className="title-price">
            <h3>{this.props.title}</h3>
            <p>{this.props.price}</p>
          </div>
          <div className="food-desc">{this.props.desc}</div>
        </div>
      </>
    );
  }
}

export default FoodItem;
