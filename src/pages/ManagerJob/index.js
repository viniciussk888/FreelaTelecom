import React from 'react'
import Dashboard from '../../components/Dashboard'
import { useHistory } from 'react-router-dom'

export default function ManagerJob() {
  const history = useHistory()
  return (
    <>
      <Dashboard>
        <div class="row">

          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">

              <div class="headline">
                <h3><i class="icon-material-outline-business-center"></i>Minhas Ofertas de Emprego</h3>
              </div>

              <div class="content">
                <ul class="dashboard-box-list">
                  <li>
                    <div class="job-listing">

                      <div class="job-listing-details">

                        <div class="job-listing-description">
                          <h3 class="job-listing-title"><a href="!#">Frontend React Developer</a> <span class="dashboard-status-button green">Pending Approval</span></h3>

                          <div class="job-listing-footer">
                            <ul>
                              <li><i class="icon-material-outline-date-range"></i> Posted on 10 July, 2018</li>
                              <li><i class="icon-material-outline-date-range"></i> Expiring on 10 August, 2018</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="buttons-to-right always-visible">
                      <a href="dashboard-manage-candidates.html" class="button ripple-effect"><i class="icon-material-outline-supervisor-account"></i> Manage Candidates <span class="button-info">0</span></a>
                      <a href="!#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
                      <a href="!#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                    </div>
                  </li>

                  <li>
                    <div class="job-listing">

                      <div class="job-listing-details">

                        <div class="job-listing-description">
                          <h3 class="job-listing-title"><a href="!#">Full Stack PHP Developer</a> <span class="dashboard-status-button yellow">Expiring</span></h3>

                          <div class="job-listing-footer">
                            <ul>
                              <li><i class="icon-material-outline-date-range"></i> Posted on 28 June, 2018</li>
                              <li><i class="icon-material-outline-date-range"></i> Expiring on 28 July, 2018</li>
                            </ul>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="buttons-to-right always-visible">
                      <a href="dashboard-manage-candidates.html" class="button ripple-effect"><i class="icon-material-outline-supervisor-account"></i> Manage Candidates <span class="button-info">3</span></a>
                      <a href="!#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
                      <a href="!#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                    </div>
                  </li>

                  <li>
                    <div class="job-listing">

                      <div class="job-listing-details">

                        <div class="job-listing-description">
                          <h3 class="job-listing-title"><a href="!#">Node.js Developer</a> <span class="dashboard-status-button red">Expired</span></h3>

                          <div class="job-listing-footer">
                            <ul>
                              <li><i class="icon-material-outline-date-range"></i> Posted on 16 May, 2018</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="buttons-to-right always-visible">
                      <a href="dashboard-manage-candidates.html" class="button ripple-effect"><i class="icon-material-outline-supervisor-account"></i> Manage Candidates <span class="button-info">7</span></a>
                      <a href="!#" class="button dark ripple-effect"><i class="icon-feather-rotate-ccw"></i> Refresh</a>
                      <a href="!#" class="button gray ripple-effect ico" title="Edit" data-tippy-placement="top"><i class="icon-feather-edit"></i></a>
                      <a href="!#" class="button gray ripple-effect ico" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>

        </div>
      </Dashboard>
    </>
  )
}