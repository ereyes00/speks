var React = require('react');
import 'bootstrap/dist/css/bootstrap.css';

var Footer = React.createClass({

	render: function() {
		return(
			<div>
        		<div className="row">
  					
  					<div className="col-sm-4">
  						Follow Us On Twitter!
  					</div>

  					<div className="col-sm-4">
  						&copy; SPEKS 2015 - {new Date().getFullYear()}
  					</div>

  					<div className="col-sm-4">
  						Subscribe To Our Mailing List
  					</div>

				</div>
			</div>
		)
	}
});

export default Footer;