<<<<<<< HEAD
import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
      <header>
          <div className="logo">
              <h3>ポートフォリオ</h3>
          </div>

          <nav>
              <ul>
                  <li>
                      <Link to="/">ホーム</Link>
                  </li>
                  <li>
                      <Link to="/blog">ダミー</Link>
                  </li>
                  <li>
                      <Link to="https://github.com/kteworks/">Github</Link>
                  </li>
              </ul>
          </nav>
        </header>
  )
}

=======
import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
      <header>
          <div className="logo">
              <h3>ポートフォリオ</h3>
          </div>

          <nav>
              <ul>
                  <li>
                      <Link to="/">ホーム</Link>
                  </li>
                  <li>
                      <Link to="/blog">ブログ</Link>
                  </li>
                  <li>
                      <a href="#">SNS</a>
                  </li>
              </ul>
          </nav>
        </header>
  )
}

>>>>>>> origin/master
export default Header