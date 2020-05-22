import React from 'react'
import '../../template/css/styles.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div id="footer">
          <div class="footer-top-section">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">

                  <div class="footer-rows-container">

                    <div class="footer-rows-left">
                      <div class="footer-row">
                        <div class="footer-row-inner footer-logo">
                          <img src="images/logo2.png" alt="" />
                        </div>
                      </div>
                    </div>

                    <div class="footer-rows-right">

                      <div class="footer-row">
                        <div class="footer-row-inner">
                          <ul class="footer-social-links">
                            <li>
                              <a href="#" title="Facebook" data-tippy-placement="bottom" data-tippy-theme="light">
                                <i class="icon-brand-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Twitter" data-tippy-placement="bottom" data-tippy-theme="light">
                                <i class="icon-brand-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Google Plus" data-tippy-placement="bottom" data-tippy-theme="light">
                                <i class="icon-brand-google-plus-g"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="LinkedIn" data-tippy-placement="bottom" data-tippy-theme="light">
                                <i class="icon-brand-linkedin-in"></i>
                              </a>
                            </li>
                          </ul>
                          <div class="clearfix"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom-section">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  © 2020 <strong>Desenvolvido por <a href="https://viniciusportfolio.herokuapp.com/#about">Vinicius Martins</a></strong>. Todos os direitos reservados.
      </div>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}