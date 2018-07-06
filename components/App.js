App = React.createClass({
  getInitialState(){
    return {
      status: 'ready',
      post: {}
    }
  },

  handleGenerate(){
    // zmiana stanu
    this.setState({
      status: 'loading'
    })
     // obsługa promisa
    this.getData()
      .then(post => {
        this.setState({
          status: 'ready',
          post: post
        })
      })
      .catch(error => console.log(`error: ${error}`))
  },

  getData(){
    return (
      new Promise((resolve, reject) => {
        // new http request
        const url = 'https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * 10 + 1);
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url)
        xhr.onload = () => {
          if (xhr.status === 200){
            const data = JSON.parse(xhr.response)
            const post = {
              title: data.title,
              body: data.body
            }
            resolve(post);
          } else {
            reject (new Error(this.status))
          }
        }
        xhr.onerror = () => {
          reject (new Error(`Some error occurred ${this.status}`))
        };
        xhr.send()
      })
    )
  },

  render(){
    return( 
      <div>
        <h1>Posts</h1>
        <Button handleGenerate={this.handleGenerate} />
        <Output title={this.state.post.title} body={this.state.post.body}></Output>
      </div>
    )
  }
})