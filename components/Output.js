Output = React.createClass({

  render(){
    return (
      <div>
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>
      </div>
    )
  }
})