import React, { useState, useEffect } from 'react'
import '../../template/css/styles.css'

import firebase from '../../config/firebase'
import apiCep from '../../services/apiCep'
import api from '../../services/api'

import { useSelector, useDispatch } from 'react-redux';

const auth = firebase.auth();

export default function Navbar(props) {
  const dispatch = useDispatch();

  const [erroMessage, setErroMessage] = useState("")
  const [load, setLoad] = useState(0)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('2')


  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const [uid, setUid] = useState(0)
  const [cep, setCep] = useState('')
  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [name, setName] = useState(useSelector(state => state.userName))
  const [profession, setProfession] = useState('')
  const [type, setType] = useState(useSelector(state => state.userType) || 'Freelancer')
  const [profileUrl, setProfileUrl] = useState(useSelector(state => state.userProfileUrl) || 'images/user-avatar-small-01.jpg')

  async function login(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(emailLogin, passwordLogin).then(async () => {
      const response = await api.post('session', {
        uid: auth.currentUser.uid
      })
      if (response.data) {
        dispatch({
          type: 'LOG_IN',
          userId: response.data.id,
          userName: auth.currentUser.displayName,
          userEmail: emailLogin,
          userType: response.data.type,
          userProfileUrl: auth.currentUser.photoURL,
          uid: auth.currentUser.uid
        });
        setErroMessage('Sucesso!');
        window.location.reload()
      }

    }).catch(erro => {
      console.log(erro.message)
      setErroMessage(erro.message || "Erro não identificado!");
    });
  }
  async function register(e) {
    e.preventDefault();
    if (password !== password2) {
      return setErroMessage("As senhas não conferem!")
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).then(resultado => {
      setErroMessage('Sucesso!')
      setUid(firebase.auth().currentUser.uid)
    }).catch(erro => {
      switch (erro.message) {
        case 'Password should be at least 6 characters':
          setErroMessage('A senha deve ter pelo menos 6 caracteres!');
          break;
        case 'The email address is already in use by another account.':
          setErroMessage('Este email já está sendo utilizado por outro usuário!');
          break;
        case 'The email address is badly formatted.':
          setErroMessage('O formato do seu email é inválido!');
          break;
        default:
          setErroMessage('Não foi possível cadastrar. Tente novamente mais tarde!');
          break;
      }
    })
  }
  async function completeRegister() {
    setLoad(1)
    try {
      const response = await api.post('users', {
        type: type,
        name: name,
        email: email,
        uid: uid,
        cep: cep,
        city: city,
        photoURL: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png",
        uf: uf,
        profession: profession
      })
      if (response.data) {

        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name,
          email: email,
          photoURL: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png"
        })

        setLoad(0)
        dispatch({
          type: 'LOG_IN',
          userId: response.data.id,
          userName: name,
          userEmail: email,
          userType: type,
          userProfileUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png',
          uid: uid
        });
        window.location.href = '/settings'
      }
    } catch (error) {
      alert(error)
    }
  }
  async function handleCity() {
    const response = await apiCep.get(`${cep}/json`)
    console.log(response)
    setUf(response.data.uf)
    setCity(response.data.localidade)
  }
  async function logout() {
    firebase.auth().signOut().then(function () {
      dispatch({
        type: 'LOG_OUT'
      });
      window.location.reload()
    }).catch(function (error) {
      // An error happened.
    });
  }

  useEffect(() => {
    handleCity()
  }, [cep])

  return (
    <>
      <header id="header-container" class="fullwidth">

        <div id="header">
          <div class="container">

            <div class="left-side">

              <div id="logo">
                <a href="/"><img src="images/logo.png" alt="" /></a>
              </div>

              <nav id="navigation">
                <ul id="responsive">

                  <li><a href="/" class="current">Home</a>
                  </li>

                  <li><a >Encontrar Trabalho</a>
                    <ul class="dropdown-nav">
                      <li><a href="/findjob">Procurar Empregos</a>
                      </li>
                      <li><a href="/findcompani">Procurar Empresas</a></li>
                    </ul>
                  </li>

                  <li><a >Para Empregadores</a>
                    <ul class="dropdown-nav">
                      <li><a href="/findfreelancer">Procurar um Freelancer</a>
                      </li>
                      <li><a href="/homedashboard">Postar Vaga</a></li>
                    </ul>
                  </li>

                  <li><a >Contato</a>
                  </li>

                  <li><a >Sobre</a>
                  </li>

                </ul>
              </nav>
              <div class="clearfix"></div>

            </div>
            <div class="right-side">

              <div class="header-widget">
                {useSelector(state => state.usuarioLogado) === 0 ?
                  <a href="#sign-in-dialog" class="popup-with-zoom-anim log-in-button"><i class="icon-feather-log-in"></i> <span>Log In / Registo</span></a>
                  :
                  <div class="header-notifications user-menu">
                    <div class="header-notifications-trigger">
                      <a >
                        <div class="user-avatar status-online"><img src={profileUrl} alt="avatar" /></div>
                      </a>
                    </div>

                    <div class="header-notifications-dropdown">

                      <div class="user-status">

                        <div class="user-details">
                          <div class="user-avatar status-online"><img src={profileUrl} alt="" /></div>
                          <div class="user-name">
                            {name || "Carregando..."} <span></span>
                          </div>
                        </div>
                      </div>

                      <ul class="user-menu-small-nav">
                        <li><a href="/homedashboard"><i class="icon-material-outline-dashboard"></i> Painel Administrativo</a></li>
                        <li><a href="/settings"><i class="icon-material-outline-settings"></i> Configurações</a>
                        </li>
                        <li onClick={logout}><a><i class="icon-material-outline-power-settings-new"></i>
                        Sair</a></li>
                      </ul>

                    </div>
                  </div>}
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
        <div id="sign-in-dialog" class="zoom-anim-dialog mfp-hide dialog-with-tabs">

          <div class="sign-in-form">

            <ul class="popup-tabs-nav">
              <li><a onClick={() => (setErroMessage(""))} href="#login">Log In</a></li>
              <li><a onClick={() => (setErroMessage(""))} href="#register">Registro</a></li>
            </ul>

            <div class="popup-tabs-container">

              <div class="popup-tab-content" id="login">

                <div class="welcome-text">
                  <h3>Estamos felizes em vê-lo novamente!</h3>
                  <span>Não tem uma conta? <a class="register-tab">Registre-se!</a></span>
                </div>

                <form onSubmit={login} method="post" id="login-form">
                  <div class="input-with-icon-left">
                    <i class="icon-material-baseline-mail-outline"></i>
                    <input onChange={(e) => setEmailLogin(e.target.value)} type="text" class="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email" required />
                  </div>

                  <div class="input-with-icon-left">
                    <i class="icon-material-outline-lock"></i>
                    <input onChange={(e) => setPasswordLogin(e.target.value)} type="password" class="input-text with-border" name="password" id="password" placeholder="Senha" required />
                  </div>
                  <a class="forgot-password">Esqueceu sua senha?</a>
                </form>

                <button class="button full-width button-sliding-icon ripple-effect" type="submit" form="login-form">Entrar<i class="icon-material-outline-arrow-right-alt"></i></button>

                <div class="container messageErrorColor"><span>{erroMessage}</span></div>
                {/*<div class="social-login-buttons">
                  <button class="facebook-login ripple-effect"><i class="icon-brand-facebook-f"></i> Log In via Facebook</button>
                  <button class="google-login ripple-effect"><i class="icon-brand-google-plus-g"></i> Log In via Google+</button>
                </div>*/}

              </div>

              <div class="popup-tab-content" id="register">
                {uid === 0 ? <>
                  <div class="welcome-text">
                    <h3>Vamos criar sua conta!</h3>
                  </div>

                  <div class="account-type">
                    <div>
                      <input onClick={(e) => setType('Freelancer')} type="radio" name="account-type-radio" id="freelancer-radio" class="account-type-radio" checked />
                      <label for="freelancer-radio" class="ripple-effect-dark"><i class="icon-material-outline-account-circle"></i> Freelancer</label>
                    </div>

                    <div>
                      <input onClick={(e) => setType('Empresa')} type="radio" name="account-type-radio" id="employer-radio" class="account-type-radio" />
                      <label for="employer-radio" class="ripple-effect-dark"><i class="icon-material-outline-business-center"></i>Empresa</label>
                    </div>
                  </div>

                  <form onSubmit={register} method="post" id="register-account-form">
                    <div class="input-with-icon-left">
                      <i class="icon-material-baseline-mail-outline"></i>
                      <input onChange={(e) => setEmail(e.target.value)} type="text" class="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Email" required />
                    </div>

                    <div class="input-with-icon-left" title="Should be at least 8 characters long" data-tippy-placement="bottom">
                      <i class="icon-material-outline-lock"></i>
                      <input onChange={(e) => setPassword(e.target.value)} type="password" class="input-text with-border" name="password-register" id="password-register" placeholder="Senha" required />
                    </div>

                    <div class="input-with-icon-left">
                      <i class="icon-material-outline-lock"></i>
                      <input onChange={(e) => setPassword2(e.target.value)} type="password" class="input-text with-border" name="password-repeat-register" id="password-repeat-register" placeholder="Repetir Senha" required />
                    </div>
                  </form>

                  <button class="margin-top-10 button full-width button-sliding-icon ripple-effect" type="submit" form="register-account-form">Registrar <i class="icon-material-outline-arrow-right-alt"></i></button>

                  <div class="container messageErrorColor"><span>{erroMessage}</span></div>
                </> : <><div class="welcome-text">
                  <h3>Continuar cadastro!</h3>
                </div>
                    <div class="input-with-icon-left">
                      <i class="icon-feather-user"></i>
                      <input onChange={(e) => setName(e.target.value)} type="text" class="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Nome ou Razão Social" required />
                    </div>

                    <div class="input-with-icon-left">
                      <i class="icon-feather-briefcase"></i>
                      <input onChange={(e) => setProfession(e.target.value)} type="text" class="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="Profissão ou Ramo Empresarial" required />
                    </div>

                    <div class="input-with-icon-left">
                      <i class="icon-feather-navigation"></i>
                      <input onChange={(e) => setCep(e.target.value)} type="text" class="input-text with-border" name="emailaddress-register" id="emailaddress-register" placeholder="CEP" required />
                    </div>
                    <div class="input-with-icon-left">
                      <i class="icon-feather-home"></i>
                      <input onChange={(e) => setCep(e.target.value)} type="text" class="input-text with-border" value={city + " " + uf} placeholder="Cidade - UF" required />
                    </div>
                    {load === 1 ? <>
                      <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div></> : <> <button onClick={completeRegister} class="margin-top-10 button full-width button-sliding-icon ripple-effect" type="button" >Gravar <i class="icon-material-outline-arrow-right-alt"></i></button></>}
                  </>
                }

              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}