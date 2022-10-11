'use strict';

function About() {
  return <React.Fragment>
    <p>The creator of this page is currently a Hackbright
        student with big ambitions. She intends on becoming
        a fullstack software engineer by the end of the 
        bootcamp.If you would like to learn more about her
        work, click the link below.</p>
    <div>
        <a href='https://github.com/brookeseiter'>Brooke's GitHub Profile</a>
    </div>
    <div>
      <a href='/'>Return to Homepage</a>
    </div>
  </React.Fragment>;
}

ReactDOM.render(<About />, document.querySelector('#about'));