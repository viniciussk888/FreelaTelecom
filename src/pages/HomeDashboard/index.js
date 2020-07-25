import React from 'react'
import Dashboard from '../../components/Dashboard'
import { useHistory } from 'react-router-dom'

export default function HomeDashboard() {
  const history = useHistory()
  return (
    <>
      <Dashboard>
        <div class="dashboard-headline">
          <h3>Olá, Username!</h3>
          <span>Estamos felizes em vê-lo novamente!</span>
        </div>

        <div class="fun-facts-container">
          <div class="fun-fact" data-fun-fact-color="#36bd78">
            <div class="fun-fact-text">
              <span>Trabalhos Concluídos</span>
              <h4>22</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-material-outline-gavel"></i></div>
          </div>
          <div class="fun-fact" data-fun-fact-color="#b81b7f">
            <div class="fun-fact-text">
              <span>Vagas Lançadas</span>
              <h4>4</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-material-outline-business-center"></i></div>
          </div>
          <div class="fun-fact" data-fun-fact-color="#efa80f">
            <div class="fun-fact-text">
              <span>Avaliações</span>
              <h4>28</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-material-outline-rate-review"></i></div>
          </div>

          <div class="fun-fact" data-fun-fact-color="#2a41e6">
            <div class="fun-fact-text">
              <span>This Month Views</span>
              <h4>987</h4>
            </div>
            <div class="fun-fact-icon"><i class="icon-feather-trending-up"></i></div>
          </div>
        </div>

        <div class="row">

          <div class="col-xl-8">
            <div class="dashboard-box main-box-in-row">
              <div class="headline">
                <h3><i class="icon-feather-bar-chart-2"></i>Visualizações do seu perfil</h3>
                <div class="sort-by">
                  <option>Ultimos 6 Meses</option>
                </div>
              </div>
              <div class="content">
                <div class="chart">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <canvas id="chart" width="400" height="45"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">

            <div class="dashboard-box child-box-in-row">
              <div class="headline">
                <h3><i class="icon-material-outline-note-add"></i> Notas</h3>
              </div>

              <div class="content with-padding">
                <div class="dashboard-note">
                  <p>Meeting with candidate at 3pm who applied for Bilingual Event Support Specialist</p>
                  <div class="note-footer">
                    <span class="note-priority high">Prioridade Alta</span>
                    <div class="note-buttons">
                      <a href="!#" title="Remove" data-tippy-placement="top"><i class="icon-feather-trash-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="add-note-button">
                <a href="#small-dialog" class="popup-with-zoom-anim button full-width button-sliding-icon">Adicionar Nota <i class="icon-material-outline-arrow-right-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  )
}