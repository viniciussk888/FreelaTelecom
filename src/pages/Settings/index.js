import React from 'react'
import Dashboard from '../../components/Dashboard'
import { useHistory } from 'react-router-dom'

export default function Settings() {
  const history = useHistory()
  return (
    <>
      <Dashboard>
        <div class="row">

          <div class="col-xl-12">
            <div class="dashboard-box margin-top-0">

              <div class="headline">
                <h3><i class="icon-material-outline-account-circle"></i>Minha Conta</h3>
              </div>

              <div class="content with-padding padding-bottom-0">

                <div class="row">

                  <div class="col-auto">
                    <div class="avatar-wrapper" data-tippy-placement="bottom" title="Change Avatar">
                      <img class="profile-pic" src="images/user-avatar-placeholder.png" alt="" />
                      <div class="upload-button"></div>
                      <input class="file-upload" type="file" accept="image/*" />
                    </div>
                  </div>

                  <div class="col">
                    <div class="row">

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Nome</h5>
                          <input type="text" class="with-border" value="Tom" />
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Sobrenome</h5>
                          <input type="text" class="with-border" value="Smith" />
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Email</h5>
                          <input type="text" class="with-border" value="tom@example.com" />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="col-xl-12">
            <div class="dashboard-box">

              <div class="headline">
                <h3><i class="icon-material-outline-face"></i> Meu Perfil</h3>
              </div>

              <div class="content">
                <ul class="fields-ul">
                  <li>
                    <div class="row">
                      <div class="col-xl-4">
                        <div class="submit-field">
                          <div class="bidding-widget">
                            <span class="bidding-detail">Selecione o <strong>valor cobrado</strong></span>

                            <div class="bidding-value margin-bottom-10">R$<span id="biddingVal"></span></div>
                            <input class="bidding-slider" type="text" value="" data-slider-handle="custom" data-slider-currency="$" data-slider-min="5" data-slider-max="150" data-slider-value="35" data-slider-step="1" data-slider-tooltip="hide" />
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>Habilidades <i class="help-icon" data-tippy-placement="right" title="Ate 10 habilidades"></i></h5>

                          <div class="keywords-container">
                            <div class="keyword-input-container">
                              <input type="text" class="keyword-input with-border" placeholder="e.g. Angular, Laravel" />
                              <button class="keyword-input-button ripple-effect"><i class="icon-material-outline-add"></i></button>
                            </div>
                            <div class="keywords-list">
                              <span class="keyword"><span class="keyword-remove"></span><span class="keyword-text">Angular</span></span>
                              <span class="keyword"><span class="keyword-remove"></span><span class="keyword-text">Vue JS</span></span>
                              <span class="keyword"><span class="keyword-remove"></span><span class="keyword-text">iOS</span></span>
                              <span class="keyword"><span class="keyword-remove"></span><span class="keyword-text">Android</span></span>
                              <span class="keyword"><span class="keyword-remove"></span><span class="keyword-text">Laravel</span></span>
                            </div>
                            <div class="clearfix"></div>
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>CV</h5>

                          <div class="attachments-container margin-top-0 margin-bottom-0">
                            <div class="attachment-box ripple-effect">
                              <span>Cover Letter</span>
                              <i>PDF</i>
                              <button class="remove-attachment" data-tippy-placement="top" title="Remove"></button>
                            </div>
                          </div>
                          <div class="clearfix"></div>

                          <div class="uploadButton margin-top-0">
                            <input class="uploadButton-input" type="file" accept="image/*, application/pdf" id="upload" multiple />
                            <label class="uploadButton-button ripple-effect" for="upload">Upload Files</label>
                            <span class="uploadButton-file-name">Maximum file size: 10 MB</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Tags</h5>
                          <input type="text" class="with-border" value="iOS Expert + Node Dev" />
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Nacionalidade</h5>
                          <select class="selectpicker with-border" data-size="7" title="Select Job Type" data-live-search="true">
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Côte d'Ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CW">Curaçao</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-Bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Réunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="GB">United Kingdom</option>
                            <option value="US" selected>United States</option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                          </select>
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="submit-field">
                          <h5>Fale sobre você</h5>
                          <textarea cols="30" rows="5" class="with-border">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</textarea>
                        </div>
                      </div>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div id="test1" class="dashboard-box">

              <div class="headline">
                <h3><i class="icon-material-outline-lock"></i> Senha & Segurança</h3>
              </div>

              <div class="content with-padding">
                <div class="row">
                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Senha atual</h5>
                      <input type="password" class="with-border" />
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Nova senha</h5>
                      <input type="password" class="with-border" />
                    </div>
                  </div>

                  <div class="col-xl-4">
                    <div class="submit-field">
                      <h5>Repetir nova senha</h5>
                      <input type="password" class="with-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-12">
            <a href="#" class="button ripple-effect big margin-top-30">Salvar alterações</a>
          </div>

        </div>
      </Dashboard>
    </>
  )
}