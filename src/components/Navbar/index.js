import React from 'react'
import '../../template/css/styles.css'

export default function Navbar(props) {
  return (
    <>
      <header id="header-container" class="fullwidth">

        <div id="header">
          <div class="container">

            <div class="left-side">

              <div id="logo">
                <a href="index.html"><img src="images/logo.png" alt="" /></a>
              </div>

              <nav id="navigation">
                <ul id="responsive">

                  <li><a href="#" class="current">Home</a>
                  </li>

                  <li><a href="#">Encontrar Trabalho</a>
                    <ul class="dropdown-nav">
                      <li><a href="#">Procurar Empregos</a>
                        <ul class="dropdown-nav">
                          <li><a href="jobs-list-layout-full-page-map.html">Full Page List + Map</a></li>
                          <li><a href="jobs-grid-layout-full-page-map.html">Full Page Grid + Map</a></li>
                          <li><a href="jobs-grid-layout-full-page.html">Full Page Grid</a></li>
                          <li><a href="jobs-list-layout-1.html">List Layout 1</a></li>
                          <li><a href="jobs-list-layout-2.html">List Layout 2</a></li>
                          <li><a href="jobs-grid-layout.html">Grid Layout</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Browse Tasks</a>
                        <ul class="dropdown-nav">
                          <li><a href="tasks-list-layout-1.html">List Layout 1</a></li>
                          <li><a href="tasks-list-layout-2.html">List Layout 2</a></li>
                          <li><a href="tasks-grid-layout.html">Grid Layout</a></li>
                          <li><a href="tasks-grid-layout-full-page.html">Full Page Grid</a></li>
                        </ul>
                      </li>
                      <li><a href="browse-companies.html">Browse Companies</a></li>
                      <li><a href="single-job-page.html">Job Page</a></li>
                      <li><a href="single-task-page.html">Task Page</a></li>
                      <li><a href="single-company-profile.html">Company Profile</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Para Empregadores</a>
                    <ul class="dropdown-nav">
                      <li><a href="#">Procurar um Freelancer</a>
                        <ul class="dropdown-nav">
                          <li><a href="freelancers-grid-layout-full-page.html">Full Page Grid</a></li>
                          <li><a href="freelancers-grid-layout.html">Grid Layout</a></li>
                          <li><a href="freelancers-list-layout-1.html">List Layout 1</a></li>
                          <li><a href="freelancers-list-layout-2.html">List Layout 2</a></li>
                        </ul>
                      </li>
                      <li><a href="single-freelancer-profile.html">Freelancer Profile</a></li>
                      <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                      <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Planos</a>
                    <ul class="dropdown-nav">
                      <li><a href="dashboard.html">Dashboard</a></li>
                      <li><a href="dashboard-messages.html">Messages</a></li>
                      <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                      <li><a href="dashboard-reviews.html">Reviews</a></li>
                      <li><a href="dashboard-manage-jobs.html">Jobs</a>
                        <ul class="dropdown-nav">
                          <li><a href="dashboard-manage-jobs.html">Manage Jobs</a></li>
                          <li><a href="dashboard-manage-candidates.html">Manage Candidates</a></li>
                          <li><a href="dashboard-post-a-job.html">Post a Job</a></li>
                        </ul>
                      </li>
                      <li><a href="dashboard-manage-tasks.html">Tasks</a>
                        <ul class="dropdown-nav">
                          <li><a href="dashboard-manage-tasks.html">Manage Tasks</a></li>
                          <li><a href="dashboard-manage-bidders.html">Manage Bidders</a></li>
                          <li><a href="dashboard-my-active-bids.html">My Active Bids</a></li>
                          <li><a href="dashboard-post-a-task.html">Post a Task</a></li>
                        </ul>
                      </li>
                      <li><a href="dashboard-settings.html">Settings</a></li>
                    </ul>
                  </li>

                  <li><a href="#">Contato</a>
                  </li>

                </ul>
              </nav>
              <div class="clearfix"></div>

            </div>
            <div class="right-side">

              <div class="header-widget hide-on-mobile">

                <div class="header-notifications">

                  <div class="header-notifications-trigger">
                    <a href="#"><i class="icon-feather-bell"></i><span>4</span></a>
                  </div>

                  <div class="header-notifications-dropdown">

                    <div class="header-notifications-headline">
                      <h4>Notifications</h4>
                      <button class="mark-as-read ripple-effect-dark" title="Mark all as read"
                        data-tippy-placement="left">
                        <i class="icon-feather-check-square"></i>
                      </button>
                    </div>

                    <div class="header-notifications-content">
                      <div class="header-notifications-scroll" data-simplebar>
                        <ul>
                          <li class="notifications-not-read">
                            <a href="dashboard-manage-candidates.html">
                              <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
                              <span class="notification-text">
                                <strong>Michael Shannah</strong> applied for a job <span class="color">Full Stack Software
                          Engineer</span>
                              </span>
                            </a>
                          </li>

                          <li>
                            <a href="dashboard-manage-bidders.html">
                              <span class="notification-icon"><i class=" icon-material-outline-gavel"></i></span>
                              <span class="notification-text">
                                <strong>Gilbert Allanis</strong> placed a bid on your <span class="color">iOS App
                          Development</span> project
                      </span>
                            </a>
                          </li>

                          <li>
                            <a href="dashboard-manage-jobs.html">
                              <span class="notification-icon"><i class="icon-material-outline-autorenew"></i></span>
                              <span class="notification-text">
                                Your job listing <span class="color">Full Stack PHP Developer</span> is expiring.
                      </span>
                            </a>
                          </li>

                          <li>
                            <a href="dashboard-manage-candidates.html">
                              <span class="notification-icon"><i class="icon-material-outline-group"></i></span>
                              <span class="notification-text">
                                <strong>Sindy Forrest</strong> applied for a job <span class="color">Full Stack Software
                          Engineer</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
              <div class="header-widget">

                <div class="header-notifications user-menu">
                  <div class="header-notifications-trigger">
                    <a href="#">
                      <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div>
                    </a>
                  </div>

                  <div class="header-notifications-dropdown">

                    <div class="user-status">

                      <div class="user-details">
                        <div class="user-avatar status-online"><img src="images/user-avatar-small-01.jpg" alt="" /></div>
                        <div class="user-name">
                          Tom Smith <span>Freelancer</span>
                        </div>
                      </div>
                    </div>

                    <ul class="user-menu-small-nav">
                      <li><a href="dashboard.html"><i class="icon-material-outline-dashboard"></i> Painel Administrativo</a></li>
                      <li><a href="dashboard-settings.html"><i class="icon-material-outline-settings"></i> Configurações</a>
                      </li>
                      <li><a href="index-logged-out.html"><i class="icon-material-outline-power-settings-new"></i>
                  Sair</a></li>
                    </ul>

                  </div>
                </div>

              </div>
              <span class="mmenu-trigger">
                <button class="hamburger hamburger--collapse" type="button">
                  <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                  </span>
                </button>
              </span>

            </div>

          </div>
        </div>

      </header>
      <div class="clearfix"></div>
      <section>
        <div className="children">
          {props.children}
        </div>
      </section>
    </>
  )
}