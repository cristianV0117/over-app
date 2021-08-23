import Banner from '../assets/banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { MDBAnimation, MDBCard, MDBBtn } from 'mdbreact'
import Link from 'next/link';


const Welcome = () => {
	return (
		<div className="container col-md-12">
	    	<MDBAnimation type="fadeInLeft">
	    		<MDBCard className="shadow-lg">
			    	<div className="row">
			    		<div className="col-md-6">
			    			<img
						      src={Banner}
						      alt='MDBReact'
						      className='img-fluid mt-4'
						    />
			    		</div>
			    		<div className="col-md-6 text-center">
			    			<div className="default mt-4 mr-4">
			    				<h1>
			    					Bienvenido a <strong>¡OVER APP!</strong>
			    				</h1>
			    				<hr />
			    				<div className="text-justify pl-2">
			    					Esta es una pequeña aplicación hecho por mí
			    					para fortalecer mi portafolio y ser de apoyo
			    					y soporte en mi experiencia tanto profesional
			    					como de desarrollador. &#x1F600;<br />
			    					En esta aplicación podrás crear tareas y monitorear
			    					tus ingresos y salidas de la plataforma
			    					<hr />
			    					Si quieres conocer como esta diseñada esta plataforma lo puedes
			    					consultar en su respectivo repositorio que voy dejar a continuación.
			    					<h2 className="mt-3">
			    						<FontAwesomeIcon className="black-items" icon={faGithub} />
			    						<Link href='https://github.com/cristianV0117/over-app'>
				    						<a>
				    							<MDBBtn outline color="indigo" >
				    								Repositorio		    							
				    							</MDBBtn>
				    						</a>	
				    					</Link>
			    					</h2>
			    					<hr />
			    					<strong>¿Quieres saber mas sobre mí?</strong><br/>aquí está mi perfil de LinkedIn y mi Portafolio. ¡Nos vemos pronto! &#x1F642;
			    					<h2 className="mt-2">
			    						<FontAwesomeIcon className="black-items" icon={faLinkedin} />
			    						<Link href='/'>
				    						<a>
				    							<MDBBtn outline color="indigo" >
				    								LinkedIn			    							
				    							</MDBBtn>
				    						</a>
				    					</Link>
			    					</h2>
			    				</div>
			    			</div>
			    		</div>
			    	</div>
			    </MDBCard>
		    </MDBAnimation>
    	</div>
	)
}

export default Welcome