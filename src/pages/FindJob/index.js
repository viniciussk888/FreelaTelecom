import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'

export default function FindJob() {
  const date = new Date;

  return (
    <>
      <Navbar />
      <div class="clearfix mt-5"><br /></div>
      <div class="full-page-container">

        <div class="full-page-sidebar">
          <div class="full-page-sidebar-inner" data-simplebar>
            <div class="sidebar-container">

              <div class="sidebar-widget">
                <h3>Localização</h3>
                <div class="input-with-icon">
                  <div id="autocomplete-container">
                    <input id="autocomplete-input" type="text" placeholder="Location" />
                  </div>
                  <i class="icon-material-outline-location-on"></i>
                </div>
              </div>


              <div class="sidebar-widget">
                <h3>Palavras-chave</h3>
                <div class="keywords-container">
                  <div class="keyword-input-container">
                    <input type="text" class="keyword-input" placeholder="Ex: Título do emprego" />
                    <button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
                  </div>
                  <div class="keywords-list"></div>
                  <div class="clearfix"></div>
                </div>
              </div>

              <div class="sidebar-widget">
                <h3>Categorias</h3>
                <select class="selectpicker default" multiple data-selected-text-format="count" data-size="7" title="Todas as Categorias" >
                  <option>Admin Support</option>
                  <option>Customer Service</option>
                  <option>Data Analytics</option>
                  <option>Design & Creative</option>
                  <option>Legal</option>
                  <option>Software Developing</option>
                  <option>IT & Networking</option>
                  <option>Writing</option>
                  <option>Translation</option>
                  <option>Sales & Marketing</option>
                </select>
              </div>

              <div class="sidebar-widget">
                <h3>Tipo de emprego</h3>

                <div class="switches-list">
                  <div class="switch-container">
                    <label class="switch"><input type="checkbox" /><span class="switch-button"></span> Freelance</label>
                  </div>

                  <div class="switch-container">
                    <label class="switch"><input type="checkbox" /><span class="switch-button"></span>Tempo integral</label>
                  </div>

                  <div class="switch-container">
                    <label class="switch"><input type="checkbox" /><span class="switch-button"></span>Meio período</label>
                  </div>

                  <div class="switch-container">
                    <label class="switch"><input type="checkbox" /><span class="switch-button"></span>Estágio</label>
                  </div>
                  <div class="switch-container">
                    <label class="switch"><input type="checkbox" /><span class="switch-button"></span>Temporário</label>
                  </div>
                </div>

              </div>



            </div>

            <div class="sidebar-search-button-container">
              <button class="button ripple-effect">Buscar</button>
            </div>

          </div>
        </div>

        <div class="full-page-content-container" data-simplebar>
          <div class="full-page-content-inner">

            <h3 class="page-title">Resultados</h3>

            <div class="listings-container grid-layout margin-top-35">

              <a href="single-job-page.html" class="job-listing">

                <div class="job-listing-details">

                  <div class="job-listing-company-logo">
                    <img src="images/company-logo-01.png" alt="" />
                  </div>

                  <div class="job-listing-description">
                    <h4 class="job-listing-company">Hexagon <span class="verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h4>
                    <h3 class="job-listing-title">Bilingual Event Support Specialist</h3>
                  </div>
                </div>

                <div class="job-listing-footer">
                  <ul>
                    <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                    <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                    <li><i class="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                    <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                  </ul>
                </div>
              </a>

              <a href="single-job-page.html" class="job-listing">

                <div class="job-listing-details">

                  <div class="job-listing-company-logo">
                    <img src="images/company-logo-05.png" alt="" />
                  </div>

                  <div class="job-listing-description">
                    <h4 class="job-listing-company">Laxo</h4>
                    <h3 class="job-listing-title">Competition Law Officer</h3>
                  </div>
                </div>

                <div class="job-listing-footer">
                  <ul>
                    <li><i class="icon-material-outline-location-on"></i> San Francissco</li>
                    <li><i class="icon-material-outline-business-center"></i> Full Time</li>
                    <li><i class="icon-material-outline-account-balance-wallet"></i> $35000-$38000</li>
                    <li><i class="icon-material-outline-access-time"></i> 2 days ago</li>
                  </ul>
                </div>
              </a>

            </div>

            <div class="clearfix"></div>
            <div class="pagination-container margin-top-20 margin-bottom-20">
              <nav class="pagination">
                <ul>
                  <li class="pagination-arrow"><a class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></a></li>
                  <li><a class="ripple-effect">1</a></li>
                  <li><a class="ripple-effect current-page">2</a></li>
                  <li><a class="ripple-effect">3</a></li>
                  <li><a class="ripple-effect">4</a></li>
                  <li class="pagination-arrow"><a class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></a></li>
                </ul>
              </nav>
            </div>
            <div class="clearfix"></div>

            <div class="small-footer margin-top-15">
              <div class="small-footer-copyrights">
                © {date.getFullYear()} <strong>Freela Telecom</strong>. All Rights Reserved.
      </div>
              <ul class="footer-social-links">
                <li>
                  <a title="Facebook" data-tippy-placement="top">
                    <i class="icon-brand-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a title="Twitter" data-tippy-placement="top">
                    <i class="icon-brand-twitter"></i>
                  </a>
                </li>
                <li>
                  <a title="Google Plus" data-tippy-placement="top">
                    <i class="icon-brand-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a title="LinkedIn" data-tippy-placement="top">
                    <i class="icon-brand-linkedin-in"></i>
                  </a>
                </li>
              </ul>
              <div class="clearfix"></div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}