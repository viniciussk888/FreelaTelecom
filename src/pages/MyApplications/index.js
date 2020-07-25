import React from 'react'
import Dashboard from '../../components/Dashboard'
import { useHistory } from 'react-router-dom'

export default function MyApplications() {
  const history = useHistory()
  return (
    <>
      <Dashboard>
        <div class="row">

          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">

              <div class="headline">
                <h3><i class="icon-material-outline-assignment"></i>Minhas Candidaturas</h3>
              </div>

              <div class="content">
                <ul class="dashboard-box-list">
                  <li>
                    <div class="job-listing width-adjustment">

                      <div class="job-listing-details">

                        <div class="job-listing-description">
                          <h3 class="job-listing-title"><a href="!#">Design a Landing Page</a> <span class="dashboard-status-button yellow">Expiring</span></h3>

                          <div class="job-listing-footer">
                            <ul>
                              <li><i class="icon-material-outline-access-time"></i> 23 hours left</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*<ul class="dashboard-task-info">
                      <li><strong>3</strong><span>Bids</span></li>
                      <li><strong>$22</strong><span>Avg. Bid</span></li>
                      <li><strong>$15 - $30</strong><span>Hourly Rate</span></li>
  </ul>*/}

                    <div class="buttons-to-right always-visible">
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