import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <footer className="footer">
            <div className="container-fluid">
              <nav className="float-left">
                <ul>
                  <li>
                    <a href="#">
                      Rabia Qasim
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Licenses
                    </a>
                  </li>
                </ul>
              </nav>

              <nav className="float-right">
                <ul>
                  <li>
                    <a href="#">
                      Rabia Qasim made this project
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
         );
    }
}
 
export default Footer;