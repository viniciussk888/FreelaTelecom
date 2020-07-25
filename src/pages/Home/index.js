import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import api from '../../services/api'


export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await api.get('users')
      setData(response.data)
    }
    fetchData();
  }, []);




  return (
    <>
      <Navbar>
        <div className="intro-banner" data-background-image="images/home-background.jpg">
          <div className="container">

            <div className="row">
              <div className="col-md-12">
                <div className="banner-headline">
                  <h3>
                    <strong>Contrate especialistas ou seja contratado para qualquer trabalho, a qualquer momento.</strong>
                    <br />
                    <span>Pequenas e grandes empresas usam o <strong className="color">Freela Telecom</strong> para encontrar você.</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="intro-banner-search-form margin-top-95">

                  <div className="intro-search-field with-autocomplete">
                    <label for="autocomplete-input" className="field-title ripple-effect">Onde?</label>
                    <div className="input-with-icon">
                      <input id="autocomplete-input" type="text" placeholder="Trabalho Online" />
                      <i className="icon-material-outline-location-on"></i>
                    </div>
                  </div>

                  <div className="intro-search-field">
                    <label for="intro-keywords" className="field-title ripple-effect">
                      Qual trabalho você precisa?</label>
                    <input id="intro-keywords" type="text" placeholder="Cargo ou Palavras-chave" />
                  </div>

                  <div className="intro-search-button">
                    <button className="button ripple-effect"
                      onclick="window.location.href='jobs-list-layout-full-page-map.html'">Buscar</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <ul className="intro-stats margin-top-45 hide-under-992px">
                  <li>
                    <strong className="counter">1,586</strong>
                    <span>Empregos Publicados</span>
                  </li>
                  <li>
                    <strong className="counter">3,543</strong>
                    <span>Freelancers</span>
                  </li>
                  <li>
                    <strong className="counter">1,232</strong>
                    <span>Negociações Concluidas</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* FIM CABEÇALHO BUSCA*/}

        {/*<div className="section margin-top-65">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">

                <div className="section-headline centered margin-bottom-15">
                  <h3>Categorias de empregos populares</h3>
                </div>

                <div className="categories-container">

                  <a href="jobs-grid-layout-full-page.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-file-code-o"></i>
                    </div>
                    <div className="category-box-counter">612</div>
                    <div className="category-box-content">
                      <h3>Web & Software Dev</h3>
                      <p>Software Engineer, Web / Mobile Developer & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-full-page-map.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-cloud-upload"></i>
                    </div>
                    <div className="category-box-counter">113</div>
                    <div className="category-box-content">
                      <h3>Data Science & Analitycs</h3>
                      <p>Data Specialist / Scientist, Data Analyst & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-full-page-map.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-suitcase"></i>
                    </div>
                    <div className="category-box-counter">186</div>
                    <div className="category-box-content">
                      <h3>Accounting & Consulting</h3>
                      <p>Auditor, Accountant, Fnancial Analyst & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-1.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-pencil"></i>
                    </div>
                    <div className="category-box-counter">298</div>
                    <div className="category-box-content">
                      <h3>Writing & Translations</h3>
                      <p>Copywriter, Creative Writer, Translator & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-2.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-pie-chart"></i>
                    </div>
                    <div className="category-box-counter">549</div>
                    <div className="category-box-content">
                      <h3>Sales & Marketing</h3>
                      <p>Brand Manager, Marketing Coordinator & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-1.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-image"></i>
                    </div>
                    <div className="category-box-counter">873</div>
                    <div className="category-box-content">
                      <h3>Graphics & Design</h3>
                      <p>Creative Director, Web Designer & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-2.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-bullhorn"></i>
                    </div>
                    <div className="category-box-counter">125</div>
                    <div className="category-box-content">
                      <h3>Digital Marketing</h3>
                      <p>Darketing Analyst, Social Profile Admin & More</p>
                    </div>
                  </a>

                  <a href="jobs-grid-layout-full-page.html" className="category-box">
                    <div className="category-box-icon">
                      <i className="icon-line-awesome-graduation-cap"></i>
                    </div>
                    <div className="category-box-counter">445</div>
                    <div className="category-box-content">
                      <h3>Education & Training</h3>
                      <p>Advisor, Coach, Education Coordinator & More</p>
                    </div>
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>*/}

        {/*FIM CATEGORIAS*/}

        <div className="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
          <div className="container">
            <div className="row">

              <div className="col-xl-12">
                <div className="section-headline margin-top-0 margin-bottom-25">
                  <h3>Freelancers com melhor classificação</h3>
                  <a href="/findfreelancer" className="headline-link">Procurar Todos os Freelancers</a>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="default-slick-carousel freelancers-container freelancers-grid-layout">

                  {data.map((item) => (

                    <div className="freelancer">

                      <div className="freelancer-overview">
                        <div className="freelancer-overview-inner">

                          <div className="freelancer-avatar">
                            <div className="verified-badge"></div>
                            <a href="single-freelancer-profile.html"><img src={item.photoURL} alt="" /></a>
                          </div>


                          <div className="freelancer-name">
                            <h4><a href="single-freelancer-profile.html">{item.name}</a></h4>
                            <span>{item.profession}</span>
                          </div>

                        </div>
                      </div>


                      <div className="freelancer-details">
                        <div className="freelancer-details-list">
                          <ul>
                            <li>Localização <strong><i className="icon-material-outline-location-on"></i>{item.city + " " + item.uf}</strong></li>
                            <li>Taxa <strong>R$ {item.value} / hr</strong></li>
                          </ul>
                        </div>
                        <a href="single-freelancer-profile.html" className="button button-sliding-icon ripple-effect">Ver Perfil
                        <i className="icon-material-outline-arrow-right-alt"></i></a>
                      </div>
                    </div>
                  ))}



                </div>
              </div>

            </div>
          </div>
        </div>

        {/*FIM MELHORES FREELANCER*/}

        <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">

                <div className="section-headline margin-top-0 margin-bottom-35">
                  <h3>Empregos em destaque</h3>
                  <a href="jobs-list-layout-full-page-map.html" className="headline-link">Procurar todos os empregos</a>
                </div>

                <div className="listings-container compact-list-layout margin-top-35">


                  <a href="single-job-page.html" className="job-listing with-apply-button">


                    <div className="job-listing-details">


                      <div className="job-listing-company-logo">
                        <img src="images/company-logo-01.png" alt="" />
                      </div>


                      <div className="job-listing-description">
                        <h3 className="job-listing-title">Bilingual Event Support Specialist</h3>


                        <div className="job-listing-footer">
                          <ul>
                            <li><i className="icon-material-outline-business"></i> Hexagon <div className="verified-badge"
                              title="Verified Employer" data-tippy-placement="top"></div>
                            </li>
                            <li><i className="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span className="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>



                  <a href="single-job-page.html" className="job-listing with-apply-button">


                    <div className="job-listing-details">


                      <div className="job-listing-company-logo">
                        <img src="images/company-logo-05.png" alt="" />
                      </div>


                      <div className="job-listing-description">
                        <h3 className="job-listing-title">Competition Law Officer</h3>


                        <div className="job-listing-footer">
                          <ul>
                            <li><i className="icon-material-outline-business"></i> Laxo</li>
                            <li><i className="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span className="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>

                  <a href="single-job-page.html" className="job-listing with-apply-button">


                    <div className="job-listing-details">


                      <div className="job-listing-company-logo">
                        <img src="images/company-logo-02.png" alt="" />
                      </div>


                      <div className="job-listing-description">
                        <h3 className="job-listing-title">Barista and Cashier</h3>


                        <div className="job-listing-footer">
                          <ul>
                            <li><i className="icon-material-outline-business"></i> Coffee</li>
                            <li><i className="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span className="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>



                  <a href="single-job-page.html" className="job-listing with-apply-button">


                    <div className="job-listing-details">


                      <div className="job-listing-company-logo">
                        <img src="images/company-logo-03.png" alt="" />
                      </div>


                      <div className="job-listing-description">
                        <h3 className="job-listing-title">Restaurant General Manager</h3>


                        <div className="job-listing-footer">
                          <ul>
                            <li><i className="icon-material-outline-business"></i> King <div className="verified-badge"
                              title="Verified Employer" data-tippy-placement="top"></div>
                            </li>
                            <li><i className="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span className="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>


                  <a href="single-job-page.html" className="job-listing with-apply-button">


                    <div className="job-listing-details">


                      <div className="job-listing-company-logo">
                        <img src="images/company-logo-05.png" alt="" />
                      </div>


                      <div className="job-listing-description">
                        <h3 className="job-listing-title">International Marketing Coordinator</h3>


                        <div className="job-listing-footer">
                          <ul>
                            <li><i className="icon-material-outline-business"></i> Skyist</li>
                            <li><i className="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i className="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i className="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span className="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FIM MELHORES EMPREGOS */}

        <div className="section margin-top-65 margin-bottom-65">
          <div className="container">
            <div className="row">

              <div className="col-xl-12">
                <div className="section-headline centered margin-top-0 margin-bottom-45">
                  <h3>Cidades em destaque</h3>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">

                <a href="jobs-list-layout-1.html" className="photo-box" data-background-image="images/featured-city-01.jpg">
                  <div className="photo-box-content">
                    <h3>São Paulo</h3>
                    <span>376 Empregos</span>
                  </div>
                </a>
              </div>

              <div className="col-xl-3 col-md-6">

                <a href="jobs-list-layout-full-page-map.html" className="photo-box"
                  data-background-image="images/featured-city-02.jpg">
                  <div className="photo-box-content">
                    <h3>Rio de Janeiro</h3>
                    <span>645 Empregos</span>
                  </div>
                </a>
              </div>

              <div className="col-xl-3 col-md-6">

                <a href="jobs-grid-layout-full-page.html" className="photo-box"
                  data-background-image="images/featured-city-03.jpg">
                  <div className="photo-box-content">
                    <h3>Distrito Federal</h3>
                    <span>832 Empregos</span>
                  </div>
                </a>
              </div>

              <div className="col-xl-3 col-md-6">

                <a href="jobs-list-layout-2.html" className="photo-box" data-background-image="images/featured-city-04.jpg">
                  <div className="photo-box-content">
                    <h3>Curitiba</h3>
                    <span>513 Empregos</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>


      </Navbar>
      <Footer />
    </>
  )
}