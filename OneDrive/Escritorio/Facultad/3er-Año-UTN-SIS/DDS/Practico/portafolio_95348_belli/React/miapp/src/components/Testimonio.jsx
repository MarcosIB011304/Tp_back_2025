import React from "react";
import '../styles/testimonio'

function Testimonio(){
	return(
		<div className="contenedor-testimonio">
			<img className="img-testimonio" src={require('../img/image.png')} alt="auto red bull" />
			<div className="texto-testimonio">
					<p className="nombre"> Marcos de cordoba</p>
					<p className="cargo"> analista de sistemas</p>
					<p className="descripcion"> me gusta la ingeniria</p>
					
			</div>
		</div>
		
	);
}


export default Testimonio;