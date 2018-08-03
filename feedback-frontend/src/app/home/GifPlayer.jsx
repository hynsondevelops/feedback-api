import React from 'react';


class GifPlayer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {curImage: this.props.still, gif: this.props.gif , still:  this.props.still}

	}

	toggleGif(e) {
		if (this.state.curImage == this.props.still) {
			this.setState({curImage: this.props.gif,})
		}
		else {
			this.setState({curImage: this.props.still})
		}
	}

	render() {
		let playButton = ""
		if (this.state.curImage == this.state.still) {
			playButton = (<div onClick={(e) => this.toggleGif(e)}  style={{position: "absolute",
				   display: "block",
				   background: "url(http://www.slatecube.com/images/play-btn.png) no-repeat center",
				    backgroundSize:"contain",
				   height: "30%",
				   width: "30%",
				   top: "35%",
				   left: "35%"}}>
				</div>)
		}
		return (
			<figure style={{position: "relative"}}>
			<div>
				<img src={this.state.curImage} onClick={(e) => this.toggleGif(e)} />
				{playButton}
				<figcaption>{this.props.caption}</figcaption>

			</div>	
			</figure>

		)
	}
}

export default GifPlayer;
{/* <figure style={{position: "relative"}}>
			<img ref="mcm_gif" id="mcm_gif" onClick={(e) => {if (e.target.src.includes(mcmGif)) {e.target.src = mcmStill} else {e.target.src=mcmGif}}} src={mcmStill} />
			<div onClick={() => {let image = React.findDOMNode(this.refs.mcm_gif); if (image.target.src.includes(mcmGif)) {image.target.src = mcmStill} else {image.target.src=mcmGif}}} src={mcmStill} style={{position: "absolute",
			   display: "block",
			   background: "url(http://www.slatecube.com/images/play-btn.png) no-repeat center",
			    backgroundSize:"contain",
			   height: "30%",
			   width: "30%",
			   top: "35%",
			   left: "35%"}}>
			</div>

			
			<figcaption>Mock Class Mentor Demo</figcaption>
		</figure> */}