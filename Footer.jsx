import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="container">
        <h3>Top companies choose Udemy Business to build in-demand career skills.</h3>
        <hr />
        <div className="table">
        <table>
            <tr>
                <td>Udemy Business</td>
                <td>Careers</td>
                <td>Terms</td>
            </tr>
            <tr>
                <td>Teach on Udemy</td>
                <td>Blog</td>
                <td>Privacy policy</td>
            </tr>
            <tr>
                <td>Get the app</td>
                <td>Help and Support</td>
                <td>Cookie Settings</td>
                <td></td>
            </tr>
            <tr>
                <td>About us</td>
                <td>Affiliate</td>
                <td>Sitemap</td>

            </tr>
            <tr>
                <td>Contact us</td>
                <td>Investors</td>
                <td>Accessibility statement</td>
            </tr>
        </table>
        </div>
        <img src="https://logospng.org/download/udemy/udemy-4096.png" alt="logo"  className='logoF'/>
      </div>
    </>
  )
}

export default Footer
