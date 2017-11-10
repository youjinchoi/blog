import React from 'react';

const Profile = () => {
    return (
		<div className="wrapper">
			<div className="post">
				<header className="post-header">
					<h1 className="post-title">profile</h1>
					<h5 className="post-description"></h5>
				</header>
				<article className="post-content">
					<p><img className="col one right" src="/profile.jpg"/></p>
					<p>
						Youjin Choi. Seoul, South Korea A developer, trying to be diligent to live a lazy life.
					</p>
					<hr/>
					<p>
						<br/>
						<span className="contacticon center">
							<a href="mailto:dev.youjin.choi@gmail.com"><i className="fa fa-envelope-square"></i></a>
							<a href="https://github.com/youjinchoi" target="_blank"><i className="fa fa-github-square"></i></a>
							<a href="https://www.linkedin.com/in/youjin-choi-511694109/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
						</span>
					</p>
						<div className="col three caption">
							You can even add a little note about which of these is the best way to reach you.
						</div>
				</article>
			</div>
		</div>

    );
}

export default Profile;
