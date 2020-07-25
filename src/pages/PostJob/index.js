import React from 'react'
import Dashboard from '../../components/Dashboard'
import { useHistory } from 'react-router-dom'

export default function PostJob() {
  const history = useHistory()
  return (
    <>
      <Dashboard>
        <div class="row">
          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">

              <div class="headline">
                <h3><i class="icon-feather-folder-plus"></i>Formulário de envio de vaga</h3>
              </div>

              <div class="content with-padding padding-bottom-10">
                <div class="row">

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Titulo do trabalho</h5>
                      <input type="text" class="with-border" />
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Tipo de emprego</h5>
                      <select class="selectpicker with-border" data-size="7" title="Selecione o tipo">
                        <option>Full Time</option>
                        <option>Freelance</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Temporary</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Categoria</h5>
                      <select class="selectpicker with-border" data-size="7" title="Selecione a categoria">
                        <option>Accounting and Finance</option>
                        <option>Clerical & Data Entry</option>
                        <option>Counseling</option>
                        <option>Court Administration</option>
                        <option>Human Resources</option>
                        <option>Investigative</option>
                        <option>IT and Computers</option>
                        <option>Law Enforcement</option>
                        <option>Management</option>
                        <option>Miscellaneous</option>
                        <option>Public Relations</option>
                      </select>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Localização</h5>
                      <div class="input-with-icon">
                        <div id="autocomplete-container">
                          <input id="autocomplete-input" class="with-border" type="text" placeholder="Digite a cidade" />
                        </div>
                        <i class="icon-material-outline-location-on"></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Salario</h5>
                      <div class="row">
                        <div class="col-xl-6">
                          <div class="input-with-icon">
                            <input class="with-border" type="text" placeholder="Min" />
                            <i class="currency">BRL</i>
                          </div>
                        </div>
                        <div class="col-xl-6">
                          <div class="input-with-icon">
                            <input class="with-border" type="text" placeholder="Max" />
                            <i class="currency">BRL</i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Tags <span>(opicional)</span>  <i class="help-icon" data-tippy-placement="right" title="Maximo de 10 tags"></i></h5>
                      <div class="keywords-container">
                        <div class="keyword-input-container">
                          <input type="text" class="keyword-input with-border" placeholder="Ex. titulo, responsabilidades" />
                          <button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
                        </div>
                        <div class="keywords-list"></div>
                        <div class="clearfix"></div>
                      </div>

                    </div>
                  </div>

                  <div class="col-xl-12">
                    <div class="submit-field">
                      <h5>Descrição da vaga</h5>
                      <textarea cols="30" rows="5" class="with-border"></textarea>
                      <div class="uploadButton margin-top-30">
                        <input class="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                        <label class="uploadButton-button ripple-effect" for="upload">Upload de imagem</label>
                        <span class="uploadButton-file-name">Imagem que ajuda a descrever a vaga</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-12">
            <a href="!#" class="button ripple-effect big margin-top-30"><i class="icon-feather-plus"></i> Postar vaga</a>
          </div>

        </div>
      </Dashboard>
    </>
  )
}