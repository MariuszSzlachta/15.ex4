Button = React.createClass({
  // default state
  getInitialState(){
    return {
      clicked: false
    }
  },
  //funkcją na klik zmieniająca stan
  handleClick(){
    this.setState({
      clicked: true
    });
    
    this.props.onClick(this.state.clicked);
  },
  // render
  render(){
    return <button onClick={this.handleClick} onClick={this.props.handleGenerate}>Click me</button>
  }
})