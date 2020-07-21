import React from 'react'
import Navbar from '../../components/Navbar'

export default function Dashboard(props) {
  const date = new Date;

  return (
    <>
      <Navbar />
      <div class="clearfix mt-5"><br /></div>
      <div class="dashboard-container">
        <div class="dashboard-sidebar">
          <div class="dashboard-sidebar-inner" data-simplebar>
            <div class="dashboard-nav-container">

              <a href="#" class="dashboard-responsive-nav-trigger">
                <span class="hamburger hamburger--collapse" >
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </span>
                <span class="trigger-title">Navegação</span>
              </a>

              <div class="dashboard-nav">
                <div class="dashboard-nav-inner">

                  <ul data-submenu-title="Início">
                    <li><a href="/homedashboard"><i class="icon-material-outline-dashboard"></i> Dashboard</a></li>
                    <li><a href="/bookmarks"><i class="icon-material-outline-star-border"></i> Favoritos</a></li>
                    <li><a href="/reviews"><i class="icon-material-outline-rate-review"></i> Avaliações</a></li>
                  </ul>

                  <ul data-submenu-title="Empregador">
                    <li><a href="/managerjob"><i class="icon-material-outline-business-center"></i>Gerenciar vagas</a></li>
                    <li><a href="/managercandidates"><i class="icon-material-outline-supervisor-account"></i>Gerenciar candidatos</a></li>
                    <li><a href="/postjob"><i class="icon-feather-edit"></i>Postar uma vaga</a></li>
                  </ul>
                  <ul data-submenu-title="Freelancer">
                    <li><a href="/myapplications"><i class="icon-material-outline-assignment"></i>Candidaturas</a>
                    </li>
                  </ul>

                  <ul data-submenu-title="Minha Conta">
                    <li><a href="/settings"><i class="icon-material-outline-settings"></i> Ajustes</a></li>
                    <li><a href="/#"><i class="icon-material-outline-power-settings-new"></i> Sair</a></li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="dashboard-content-container" data-simplebar>
          <div class="dashboard-content-inner" >
            {props.children}
          </div>
          <div class="dashboard-footer-spacer"></div>
          <div class="small-footer margin-top-15">
            <ul class="footer-social-links">
              <li>
                <a href="#" title="Facebook" data-tippy-placement="top">
                  <i class="icon-brand-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Twitter" data-tippy-placement="top">
                  <i class="icon-brand-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" title="Google Plus" data-tippy-placement="top">
                  <i class="icon-brand-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="#" title="LinkedIn" data-tippy-placement="top">
                  <i class="icon-brand-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <div class="clearfix">&ensp;&ensp;&ensp;&ensp;</div>
          </div>
        </div>
      </div>

    </>
  )
}