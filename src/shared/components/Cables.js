import React from 'react'

class Cables extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.patch = null;
  }

  async componentDidMount() {

        if (this.patch === null) {
            this.patch = new window.CABLES.Patch({
              patch: window.CABLES.exportedPatch,
              glCanvasId:'glcanvas',
              onError: function(e) {
                console.error('err', e);
              }
            });
          }
          window.cgl = this.patch.cgl;
    }

  render() {
    return (
        <div id="MYCONTAINERELEMENT" ref={this.canvasRef} style={{ width: "100%", "minHeight": "600px" }}/>
    );
  }
}

export default Cables
