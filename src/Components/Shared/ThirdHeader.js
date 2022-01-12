import { Link } from "react-router-dom";
import "./ThirdHeader.css";

export default function ThirdHeader() {
	return (
		<nav className="container">
			<div class="col-md-6">
				<div class="section-nav">
					<ul class="section-tab-nav tab-nav">
						<li class="active">
							<Link to="/">Home</Link>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	);
}
