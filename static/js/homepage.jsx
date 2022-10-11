'use strict';

function Homepage() {
  return <React.Fragment>
    <p>Welcome to Trading Cards.</p>
    <div>
      <a href='/cards'>View the cards</a>
    </div>
    <div>
      <a href='/about'>About the Author</a>
    </div>
    <img src='/static/img/balloonicorn.jpg' />
  </React.Fragment>;
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
