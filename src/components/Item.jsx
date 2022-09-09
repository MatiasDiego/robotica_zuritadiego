const Item = ({ title, price, picture }) => {

    console.log(picture)
    return (
      <>
        <div className="card">
            <img src={picture} id="imgProducts" className="card-img-top" alt="Robots" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Precio: ${price}</p>
                <a href="#" id="btn-details" className="btn btn-primary">Ver detalle</a>
            </div>
        </div>
      </>
    );
  };
  
  export default Item;