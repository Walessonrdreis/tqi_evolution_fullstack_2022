import { Link } from "react-router-dom";
function Cart(props) {
  // console.log(props.cartList);
  return (
    <div className="cart-wrap" width="100%">
      <Link to="/" className="btn btn-primary">
        Back
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {props.cartList.map((livro, index) => (
            <tr key={`cart-index-${index}`}>
              <td>
                <img width="100px" src={livro.img} alt="" />
              </td>
              <td>{livro.titulo}</td>
              <td>
                <div className="mp-wrap">
                  <button className="mbtn btn btn-secondary">-</button>
                  <input type="text" name="name" value="1" readOnly />
                  <button className="pbtn btn btn-secondary">+</button>
                </div>
              </td>
              <td>{livro.preco}</td>
              <td>
                <button className="btn btn-danger">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Cart;