import React from 'react'
import Navbar from '../../components/Navbar'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
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
                    <input id="autocomplete-input" type="text" placeholder="Localização" />
                  </div>
                  <i class="icon-material-outline-location-on"></i>
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
                <h3>Palavras-chave</h3>
                <div class="keywords-container">
                  <div class="keyword-input-container">
                    <input type="text" class="keyword-input" placeholder="Ex: Nome ou carreira" />
                    <button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
                  </div>
                  <div class="keywords-list"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="clearfix"></div>

              <div class="margin-bottom-40"></div>

            </div>
            <div class="sidebar-search-button-container">
              <button class="button ripple-effect">Buscar</button>
            </div>

          </div>
        </div>
        <div class="full-page-content-container" data-simplebar>
          <div class="full-page-content-inner">

            <h3 class="page-title">Resultados</h3>

            <div class="freelancers-container freelancers-grid-layout margin-top-35">

              <div class="freelancer">

                <div class="freelancer-overview">
                  <div class="freelancer-overview-inner">

                    <span class="bookmark-icon"></span>

                    <div class="freelancer-avatar">
                      <div class="verified-badge"></div>
                      <a href="single-freelancer-profile.html"><img src="images/user-avatar-big-02.jpg" alt="" /></a>
                    </div>

                    <div class="freelancer-name">
                      <h4><a href="!#">David Peterson <img class="flag" src="images/flags/de.svg" alt="" title="Germany" data-tippy-placement="top" /></a></h4>
                      <span>iOS Expert + Node Dev</span>
                    </div>

                    <div class="freelancer-rating">
                      <div class="star-rating" data-rating="4.2"></div>
                    </div>
                  </div>
                </div>

                <div class="freelancer-details">
                  <div class="freelancer-details-list">
                    <ul>
                      <li>Localização <strong><i class="icon-material-outline-location-on"></i> Berlin</strong></li>
                      <li>Taxa <strong>R$40 / hr</strong></li>
                      <li>Sucesso <strong>88%</strong></li>
                    </ul>
                  </div>
                  <a href="single-freelancer-profile.html" class="button button-sliding-icon ripple-effect">Ver Perfil<i class="icon-material-outline-arrow-right-alt"></i></a>
                </div>
              </div>

            </div>
            <div class="clearfix"></div>
            <div class="pagination-container margin-top-20 margin-bottom-20">
              <nav class="pagination">
                <ul>
                  <li class="pagination-arrow"><a href="!#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-left"></i></a></li>
                  <li><a href="!#" class="ripple-effect">1</a></li>
                  <li><a href="!#" class="ripple-effect current-page">2</a></li>
                  <li><a href="!#" class="ripple-effect">3</a></li>
                  <li><a href="!#" class="ripple-effect">4</a></li>
                  <li class="pagination-arrow"><a href="!#" class="ripple-effect"><i class="icon-material-outline-keyboard-arrow-right"></i></a></li>
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
                  <a href="!#" title="Facebook" data-tippy-placement="top">
                    <i class="icon-brand-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="!#" title="Twitter" data-tippy-placement="top">
                    <i class="icon-brand-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="!#" title="Google Plus" data-tippy-placement="top">
                    <i class="icon-brand-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="!#" title="LinkedIn" data-tippy-placement="top">
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