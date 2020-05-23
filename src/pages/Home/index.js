import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar>
        <div class="intro-banner" data-background-image="images/home-background.jpg">
          <div class="container">

            <div class="row">
              <div class="col-md-12">
                <div class="banner-headline">
                  <h3>
                    <strong>Contrate especialistas ou seja contratado para qualquer trabalho, a qualquer momento.</strong>
                    <br />
                    <span>Pequenas e grandes empresas usam o <strong class="color">Freela Telecom</strong> para encontrar você.</span>
                  </h3>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="intro-banner-search-form margin-top-95">

                  <div class="intro-search-field with-autocomplete">
                    <label for="autocomplete-input" class="field-title ripple-effect">Onde?</label>
                    <div class="input-with-icon">
                      <input id="autocomplete-input" type="text" placeholder="Trabalho Online" />
                      <i class="icon-material-outline-location-on"></i>
                    </div>
                  </div>

                  <div class="intro-search-field">
                    <label for="intro-keywords" class="field-title ripple-effect">
                      Qual trabalho você precisa?</label>
                    <input id="intro-keywords" type="text" placeholder="Cargo ou Palavras-chave" />
                  </div>

                  <div class="intro-search-button">
                    <button class="button ripple-effect"
                      onclick="window.location.href='jobs-list-layout-full-page-map.html'">Buscar</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <ul class="intro-stats margin-top-45 hide-under-992px">
                  <li>
                    <strong class="counter">1,586</strong>
                    <span>Empregos Publicados</span>
                  </li>
                  <li>
                    <strong class="counter">3,543</strong>
                    <span>Freelancers</span>
                  </li>
                  <li>
                    <strong class="counter">1,232</strong>
                    <span>Negociações Concluidas</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* FIM CABEÇALHO BUSCA*/}

        <div class="section margin-top-65">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">

                <div class="section-headline centered margin-bottom-15">
                  <h3>Categorias de empregos populares</h3>
                </div>

                <div class="categories-container">

                  <a href="jobs-grid-layout-full-page.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-file-code-o"></i>
                    </div>
                    <div class="category-box-counter">612</div>
                    <div class="category-box-content">
                      <h3>Web & Software Dev</h3>
                      <p>Software Engineer, Web / Mobile Developer & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-full-page-map.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-cloud-upload"></i>
                    </div>
                    <div class="category-box-counter">113</div>
                    <div class="category-box-content">
                      <h3>Data Science & Analitycs</h3>
                      <p>Data Specialist / Scientist, Data Analyst & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-full-page-map.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-suitcase"></i>
                    </div>
                    <div class="category-box-counter">186</div>
                    <div class="category-box-content">
                      <h3>Accounting & Consulting</h3>
                      <p>Auditor, Accountant, Fnancial Analyst & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-1.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-pencil"></i>
                    </div>
                    <div class="category-box-counter">298</div>
                    <div class="category-box-content">
                      <h3>Writing & Translations</h3>
                      <p>Copywriter, Creative Writer, Translator & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-2.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-pie-chart"></i>
                    </div>
                    <div class="category-box-counter">549</div>
                    <div class="category-box-content">
                      <h3>Sales & Marketing</h3>
                      <p>Brand Manager, Marketing Coordinator & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-1.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-image"></i>
                    </div>
                    <div class="category-box-counter">873</div>
                    <div class="category-box-content">
                      <h3>Graphics & Design</h3>
                      <p>Creative Director, Web Designer & More</p>
                    </div>
                  </a>

                  <a href="jobs-list-layout-2.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-bullhorn"></i>
                    </div>
                    <div class="category-box-counter">125</div>
                    <div class="category-box-content">
                      <h3>Digital Marketing</h3>
                      <p>Darketing Analyst, Social Profile Admin & More</p>
                    </div>
                  </a>

                  <a href="jobs-grid-layout-full-page.html" class="category-box">
                    <div class="category-box-icon">
                      <i class="icon-line-awesome-graduation-cap"></i>
                    </div>
                    <div class="category-box-counter">445</div>
                    <div class="category-box-content">
                      <h3>Education & Training</h3>
                      <p>Advisor, Coach, Education Coordinator & More</p>
                    </div>
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/*FIM CATEGORIAS*/}

        <div class="section gray padding-top-65 padding-bottom-70 full-width-carousel-fix">
          <div class="container">
            <div class="row">

              <div class="col-xl-12">
                <div class="section-headline margin-top-0 margin-bottom-25">
                  <h3>Freelancers com melhor classificação</h3>
                  <a href="freelancers-grid-layout.html" class="headline-link">Procurar Todos os Freelancers</a>
                </div>
              </div>

              <div class="col-xl-12">
                <div class="default-slick-carousel freelancers-container freelancers-grid-layout">


                  <div class="freelancer">


                    <div class="freelancer-overview">
                      <div class="freelancer-overview-inner">


                        <span class="bookmark-icon"></span>


                        <div class="freelancer-avatar">
                          <div class="verified-badge"></div>
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-01.jpg" alt="" /></a>
                        </div>


                        <div class="freelancer-name">
                          <h4><a href="single-freelancer-profile.html">Tom Smith <img class="flag" src="images/flags/gb.svg"
                            alt="" title="United Kingdom" data-tippy-placement="top" /></a></h4>
                          <span>UI/UX Designer</span>
                        </div>


                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="5.0"></div>
                        </div>
                      </div>
                    </div>


                    <div class="freelancer-details">
                      <div class="freelancer-details-list">
                        <ul>
                          <li>Localização <strong><i class="icon-material-outline-location-on"></i> London</strong></li>
                          <li>Taxa <strong>$60 / hr</strong></li>
                          <li>Sucesso <strong>95%</strong></li>
                        </ul>
                      </div>
                      <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil
										<i class="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                  </div>



                  <div class="freelancer">


                    <div class="freelancer-overview">
                      <div class="freelancer-overview-inner">


                        <span class="bookmark-icon"></span>


                        <div class="freelancer-avatar">
                          <div class="verified-badge"></div>
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
                        </div>


                        <div class="freelancer-name">
                          <h4><a href="#">David Peterson <img class="flag" src="images/flags/de.svg" alt="" title="Germany"
                            data-tippy-placement="top" /></a></h4>
                          <span>iOS Expert + Node Dev</span>
                        </div>


                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="5.0"></div>
                        </div>
                      </div>
                    </div>


                    <div class="freelancer-details">
                      <div class="freelancer-details-list">
                        <ul>
                          <li>Localização <strong><i class="icon-material-outline-location-on"></i> Berlin</strong></li>
                          <li>Taxa <strong>$40 / hr</strong></li>
                          <li>Sucesso <strong>88%</strong></li>
                        </ul>
                      </div>
                      <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil
										<i class="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                  </div>



                  <div class="freelancer">


                    <div class="freelancer-overview">
                      <div class="freelancer-overview-inner">

                        <span class="bookmark-icon"></span>


                        <div class="freelancer-avatar">
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                        </div>


                        <div class="freelancer-name">
                          <h4><a href="#">Marcin Kowalski <img class="flag" src="images/flags/pl.svg" alt="" title="Poland"
                            data-tippy-placement="top" /></a></h4>
                          <span>Front-End Developer</span>
                        </div>


                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="4.9"></div>
                        </div>
                      </div>
                    </div>


                    <div class="freelancer-details">
                      <div class="freelancer-details-list">
                        <ul>
                          <li>Localização <strong><i class="icon-material-outline-location-on"></i> Warsaw</strong></li>
                          <li>Taxa <strong>$50 / hr</strong></li>
                          <li>Sucesso <strong>100%</strong></li>
                        </ul>
                      </div>
                      <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil
										<i class="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                  </div>



                  <div class="freelancer">


                    <div class="freelancer-overview">
                      <div class="freelancer-overview-inner">

                        <span class="bookmark-icon"></span>


                        <div class="freelancer-avatar">
                          <div class="verified-badge"></div>
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-03.jpg" alt="" /></a>
                        </div>


                        <div class="freelancer-name">
                          <h4><a href="#">Sindy Forest <img class="flag" src="images/flags/au.svg" alt="" title="Australia"
                            data-tippy-placement="top" /></a></h4>
                          <span>Magento Certified Developer</span>
                        </div>


                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="5.0"></div>
                        </div>
                      </div>
                    </div>


                    <div class="freelancer-details">
                      <div class="freelancer-details-list">
                        <ul>
                          <li>Localização <strong><i class="icon-material-outline-location-on"></i> Brisbane</strong></li>
                          <li>Taxa <strong>$70 / hr</strong></li>
                          <li>Sucesso <strong>100%</strong></li>
                        </ul>
                      </div>
                      <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil
										<i class="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                  </div>



                  <div class="freelancer">


                    <div class="freelancer-overview">
                      <div class="freelancer-overview-inner">

                        <span class="bookmark-icon"></span>


                        <div class="freelancer-avatar">
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                        </div>


                        <div class="freelancer-name">
                          <h4><a href="#">Sebastiano Piccio <img class="flag" src="images/flags/it.svg" alt="" title="Italy"
                            data-tippy-placement="top" /></a></h4>
                          <span>Laravel Dev</span>
                        </div>


                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="4.5"></div>
                        </div>
                      </div>
                    </div>


                    <div class="freelancer-details">
                      <div class="freelancer-details-list">
                        <ul>
                          <li>Localização <strong><i class="icon-material-outline-location-on"></i> Milan</strong></li>
                          <li>Taxa <strong>$80 / hr</strong></li>
                          <li>Sucesso <strong>89%</strong></li>
                        </ul>
                      </div>
                      <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil
										<i class="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                  </div>

                  <div class="freelancer">

                    <div class="freelancer-overview">
                      <div class="freelancer-overview-inner">
                        <span class="bookmark-icon"></span>

                        <div class="freelancer-avatar">
                          <a href="single-freelancer-profile.html"><img src="images/user-avatar-placeholder.png" alt="" /></a>
                        </div>

                        <div class="freelancer-name">
                          <h4><a href="#">Gabriel Lagueux <img class="flag" src="images/flags/fr.svg" alt="" title="France"
                            data-tippy-placement="top" /></a></h4>
                          <span>WordPress Expert</span>
                        </div>

                        <div class="freelancer-rating">
                          <div class="star-rating" data-rating="5.0"></div>
                        </div>
                      </div>
                    </div>

                    <div class="freelancer-details">
                      <div class="freelancer-details-list">
                        <ul>
                          <li>Localização <strong><i class="icon-material-outline-location-on"></i> Paris</strong></li>
                          <li>Taxa <strong>$50 / hr</strong></li>
                          <li>Sucesso <strong>100%</strong></li>
                        </ul>
                      </div>
                      <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil
										<i class="icon-material-outline-arrow-right-alt"></i></a>
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </div>
        </div>

        {/*FIM MELHORES FREELANCER*/}

        <div class="section gray margin-top-45 padding-top-65 padding-bottom-75">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">

                <div class="section-headline margin-top-0 margin-bottom-35">
                  <h3>Empregos em destaque</h3>
                  <a href="jobs-list-layout-full-page-map.html" class="headline-link">Procurar todos os empregos</a>
                </div>

                <div class="listings-container compact-list-layout margin-top-35">


                  <a href="single-job-page.html" class="job-listing with-apply-button">


                    <div class="job-listing-details">


                      <div class="job-listing-company-logo">
                        <img src="images/company-logo-01.png" alt="" />
                      </div>


                      <div class="job-listing-description">
                        <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>


                        <div class="job-listing-footer">
                          <ul>
                            <li><i class="icon-material-outline-business"></i> Hexagon <div class="verified-badge"
                              title="Verified Employer" data-tippy-placement="top"></div>
                            </li>
                            <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span class="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>



                  <a href="single-job-page.html" class="job-listing with-apply-button">


                    <div class="job-listing-details">


                      <div class="job-listing-company-logo">
                        <img src="images/company-logo-05.png" alt="" />
                      </div>


                      <div class="job-listing-description">
                        <h3 class="job-listing-title">Competition Law Officer</h3>


                        <div class="job-listing-footer">
                          <ul>
                            <li><i class="icon-material-outline-business"></i> Laxo</li>
                            <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span class="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>

                  <a href="single-job-page.html" class="job-listing with-apply-button">


                    <div class="job-listing-details">


                      <div class="job-listing-company-logo">
                        <img src="images/company-logo-02.png" alt="" />
                      </div>


                      <div class="job-listing-description">
                        <h3 class="job-listing-title">Barista and Cashier</h3>


                        <div class="job-listing-footer">
                          <ul>
                            <li><i class="icon-material-outline-business"></i> Coffee</li>
                            <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span class="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>



                  <a href="single-job-page.html" class="job-listing with-apply-button">


                    <div class="job-listing-details">


                      <div class="job-listing-company-logo">
                        <img src="images/company-logo-03.png" alt="" />
                      </div>


                      <div class="job-listing-description">
                        <h3 class="job-listing-title">Restaurant General Manager</h3>


                        <div class="job-listing-footer">
                          <ul>
                            <li><i class="icon-material-outline-business"></i> King <div class="verified-badge"
                              title="Verified Employer" data-tippy-placement="top"></div>
                            </li>
                            <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span class="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>


                  <a href="single-job-page.html" class="job-listing with-apply-button">


                    <div class="job-listing-details">


                      <div class="job-listing-company-logo">
                        <img src="images/company-logo-05.png" alt="" />
                      </div>


                      <div class="job-listing-description">
                        <h3 class="job-listing-title">International Marketing Coordinator</h3>


                        <div class="job-listing-footer">
                          <ul>
                            <li><i class="icon-material-outline-business"></i> Skyist</li>
                            <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                            <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                            <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                          </ul>
                        </div>
                      </div>


                      <span class="list-apply-button ripple-effect">Candidatar-se</span>
                    </div>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FIM MELHORES EMPREGOS */}

        <div class="section margin-top-65 margin-bottom-65">
          <div class="container">
            <div class="row">

              <div class="col-xl-12">
                <div class="section-headline centered margin-top-0 margin-bottom-45">
                  <h3>Cidades em destaque</h3>
                </div>
              </div>

              <div class="col-xl-3 col-md-6">

                <a href="jobs-list-layout-1.html" class="photo-box" data-background-image="images/featured-city-01.jpg">
                  <div class="photo-box-content">
                    <h3>São Paulo</h3>
                    <span>376 Empregos</span>
                  </div>
                </a>
              </div>

              <div class="col-xl-3 col-md-6">

                <a href="jobs-list-layout-full-page-map.html" class="photo-box"
                  data-background-image="images/featured-city-02.jpg">
                  <div class="photo-box-content">
                    <h3>Rio de Janeiro</h3>
                    <span>645 Empregos</span>
                  </div>
                </a>
              </div>

              <div class="col-xl-3 col-md-6">

                <a href="jobs-grid-layout-full-page.html" class="photo-box"
                  data-background-image="images/featured-city-03.jpg">
                  <div class="photo-box-content">
                    <h3>Distrito Federal</h3>
                    <span>832 Empregos</span>
                  </div>
                </a>
              </div>

              <div class="col-xl-3 col-md-6">

                <a href="jobs-list-layout-2.html" class="photo-box" data-background-image="images/featured-city-04.jpg">
                  <div class="photo-box-content">
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