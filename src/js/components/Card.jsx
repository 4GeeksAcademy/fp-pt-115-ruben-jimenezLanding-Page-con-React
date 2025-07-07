export const Card = ({
    titulo, parrafo, urlImage,background
}) => {
   
    return (
       
        <div className=" card col-md-6 col-lg-3 p-0" style={{ width: "20.2rem",backgroundColor: background }}>
            <img src={urlImage} className="cardImg card-img-top" alt="..." />
            <div className="card-body cardLetter ">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{parrafo}</p>
                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#431847", borderColor: "#5a1e61", cursor: "pointer" }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = "#5a1e61";
                        e.target.style.borderColor = "#5a1e61";
                    }} onMouseOut={(e) => {
                        e.target.style.backgroundColor = "#431847";
                        e.target.style.borderColor = "#5a1e61";
                    }}>$30.00</a>
            </div >
       </div> 
    );
};