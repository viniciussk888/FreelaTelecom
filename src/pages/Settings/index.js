import React, { useState, useEffect } from 'react'
import Dashboard from '../../components/Dashboard'
import firebase from '../../config/firebase'
import apiCep from '../../services/apiCep'
import api from '../../services/api'

import { useSelector, useDispatch } from 'react-redux';

export default function Settings() {
  const [uid, setUid] = useState(useSelector(state => state.uid))
  const [id, setId] = useState(useSelector(state => state.userId))
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [name, setName] = useState(useSelector(state => state.userName))
  const [email, setEmail] = useState(useSelector(state => state.userEmail))
  const [profession, setProfession] = useState('')
  const [value, setValue] = useState('')
  const [skills, setSkills] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState(useSelector(state => state.userType) || 'Freelancer')
  const [profileUrl, setProfileUrl] = useState(useSelector(state => state.userProfileUrl) || 'images/user-avatar-small-01.jpg')
  const [cvURL, setCvURL] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`users/${id}`)
        setCep(response.data.cep)
        setUf(response.data.uf)
        setCity(response.data.city)
        setProfession(response.data.profession)
        setCvURL(response.data.cvURL)
        setValue(response.data.value || "0")
        setSkills(response.data.skills)
        setDescription(response.data.description)

      } catch (error) {
        alert(error)
      }
    }
    fetchData();
  }, [])

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
                      <img class="profile-pic" src={profileUrl} alt="" />
                      <div class="upload-button"></div>
                      <input class="file-upload" type="file" accept="image/*" />
                    </div>
                  </div>

                  <div class="col">
                    <div class="row">

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Nome</h5>
                          <input type="text" class="with-border" value={name} />
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Email</h5>
                          <input type="text" class="with-border" value={email} />
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
                            <input class="bidding-slider" type="text" value={value} data-slider-handle="custom" data-slider-currency="$" data-slider-min="5" data-slider-max="150" data-slider-value={value} data-slider-step="1" data-slider-tooltip="hide" />
                          </div>
                        </div>
                      </div>

                      <div class="col-xl-4">
                        <div class="submit-field">
                          <h5>Habilidades <i class="help-icon" data-tippy-placement="right" title="Ate 10 habilidades"></i></h5>
                          <input type="text" class="with-border" value={skills} />
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
                            <span class="uploadButton-file-name">{cvURL}</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>Profissão</h5>
                          <input type="text" class="with-border" value={profession} />
                        </div>
                      </div>

                      <div class="col-xl-6">
                        <div class="submit-field">
                          <h5>CEP</h5>
                          <input type="text" class="with-border" value={cep} />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="submit-field">
                          <h5>CIDADE - UF</h5>
                          <input disabled type="text" class="with-border" value={city + " " + uf} />
                        </div>
                      </div>

                      <div class="col-xl-12">
                        <div class="submit-field">
                          <h5>Descrição</h5>
                          <textarea cols="30" rows="5" class="with-border" value={description}></textarea>
                        </div>
                      </div>

                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div class="col-xl-12">
            <a href="!#" class="button ripple-effect big margin-top-30">Salvar alterações</a>
          </div>

        </div>
      </Dashboard>
    </>
  )
}