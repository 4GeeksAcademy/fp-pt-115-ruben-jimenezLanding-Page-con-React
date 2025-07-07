export const Jumbotron = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3 jumbotron container">
			<div className="container-fluid py-5">
				<h1 className="display-5 fw-bold">Trench Crusade</h1>
				<p className="col-md-8 fs-4">
					Durante las Cruzadas, un grupo herético de Templarios se atrevió a desafiar al Todopoderoso. Abandonando sus votos sagrados, desataron las fuerzas del infierno sobre la Tierra.<br></br>

					Más de 800 años después, en el Año de Nuestro Señor 1914, esta guerra brutal y despiadada entre las fuerzas del Cielo y el Infierno continúa. Esta no es simplemente una lucha por la supervivencia: es una lucha catastrófica que decidirá el destino mismo del alma de la humanidad.
				</p>
				<button className="btn btn-primary btn-lg" type="button" style={{ backgroundColor: "#431847", borderColor: "#5a1e61", cursor: "pointer" }}
					onMouseOver={(e) => {
						e.target.style.backgroundColor = "#5a1e61";
						e.target.style.borderColor = "#5a1e61";
					}} onMouseOut={(e) => {
						e.target.style.backgroundColor = "#431847";
						e.target.style.borderColor = "#5a1e61";
					}}>No tocar</button>


			</div>
		</div>

	);
};
