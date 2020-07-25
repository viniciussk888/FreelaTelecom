import React from 'react'
import Dashboard from '../../components/Dashboard'
import { useHistory } from 'react-router-dom'

export default function ManagerCandidates() {
  const history = useHistory()
  return (
    <>
      <Dashboard>
        <div class="row">
          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">

              <div class="headline">
                <h3><i class="icon-material-outline-supervisor-account"></i> 3 Candidates</h3>
              </div>

              <div class="content">
                <ul class="dashboard-box-list">
                  <li>
                    <div class="freelancer-overview manage-candidates">
                      <div class="freelancer-overview-inner">

                        <div class="freelancer-avatar">
                          <div class="verified-badge"></div>
                          <a href="!#"><img src="images/user-avatar-big-03.jpg" alt="" /></a>
                        </div>

                        <div class="freelancer-name">
                          <h4><a href="!#">Sindy Forest <img class="flag" src="images/flags/au.svg" alt="" title="Australia" data-tippy-placement="top" /></a></h4>

                          <span class="freelancer-detail-item"><a href="!#"><i class="icon-feather-mail"></i> sindy@example.com</a></span>
                          <span class="freelancer-detail-item"><i class="icon-feather-phone"></i> (+61) 123-456-789</span>

                          <div class="freelancer-rating">
                            <div class="star-rating" data-rating="5.0"></div>
                          </div>

                          <div class="buttons-to-right always-visible margin-top-25 margin-bottom-5">
                            <a href="!#" class="button ripple-effect"><i class="icon-feather-file-text"></i> Download CV</a>
                            <a href="#small-dialog" class="popup-with-zoom-anim button dark ripple-effect"><i class="icon-feather-mail"></i> Send Message</a>
                            <a href="!#" class="button gray ripple-effect ico" title="Remove Candidate" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                          </div>
                        </div>
                      </div>
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