import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useHistory } from 'react-router-dom'

export default function FindCompani() {
  const history = useHistory()
  return (
    <>
      <Navbar />
      <div class="clearfix"><br /></div>
      <div id="titlebar" class="gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h2>Resultados</h2>

            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="letters-list">
              <a class="current">A</a>
              <a >B</a>
              <a >C</a>
              <a >D</a>
              <a >E</a>
              <a >F</a>
              <a >G</a>
              <a >H</a>
              <a >I</a>
              <a >J</a>
              <a >K</a>
              <a >L</a>
              <a >M</a>
              <a >N</a>
              <a >O</a>
              <a >P</a>
              <a >Q</a>
              <a >R</a>
              <a >S</a>
              <a >T</a>
              <a >U</a>
              <a >V</a>
              <a >W</a>
              <a >X</a>
              <a >Y</a>
              <a >Z</a>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="companies-list">
              <a href="single-company-profile.html" class="company">
                <div class="company-inner-alignment">
                  <span class="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
                  <h4>Acra</h4>
                  <div class="star-rating" data-rating="3.5"></div>
                </div>
              </a>
              <a href="single-company-profile.html" class="company">
                <div class="company-inner-alignment">
                  <span class="company-logo"><img src="images/browse-companies-02.png" alt="" /></span>
                  <h4>Acue</h4>
                  <div class="star-rating" data-rating="5.0"></div>
                </div>
              </a>
              <a href="single-company-profile.html" class="company">
                <div class="company-inner-alignment">
                  <span class="company-logo"><img src="images/browse-companies-04.png" alt="" /></span>
                  <h4>Acorta</h4>
                  <span class="company-not-rated">Minimum of 3 votes required</span>
                </div>
              </a>
              <a href="single-company-profile.html" class="company">
                <div class="company-inner-alignment">
                  <span class="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
                  <h4>Acuneol</h4>
                  <span class="company-not-rated">Minimum of 3 votes required</span>
                </div>
              </a>
              <a href="single-company-profile.html" class="company">
                <div class="company-inner-alignment">
                  <span class="company-logo"><img src="images/browse-companies-03.png" alt="" /></span>
                  <h4>Acodia</h4>
                  <div class="star-rating" data-rating="4.9"></div>
                </div>
              </a>
              <a href="single-company-profile.html" class="company">
                <div class="company-inner-alignment">
                  <span class="company-logo"><img src="images/company-logo-placeholder.png" alt="" /></span>
                  <h4>Acagic</h4>
                  <span class="company-not-rated">Minimum of 3 votes required</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}