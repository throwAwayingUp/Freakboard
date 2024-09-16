import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import FAQ2 from '../components/faq2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Curly Frozen Leopard</title>
        <meta property="og:title" content="Curly Frozen Leopard" />
      </Helmet>
      <Banner1
        content1={
          <Fragment>
            <span className="home-text10 thq-heading-3">Freak</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text11">Call to Action</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text12 thq-heading-2">
              MatchMyTechnlogies
            </span>
          </Fragment>
        }
      ></Banner1>
      <img
        src="/screenshot%202024-09-16%20115052-800w.png"
        alt="image"
        className="home-image"
      />
      <FAQ2
        faq2Question={
          <Fragment>
            <span className="home-text13 thq-body-large">
              Frequently Asked Questions
            </span>
          </Fragment>
        }
        faq3Answer={
          <Fragment>
            <span className="home-text14 thq-body-small">
              i dont like ideas
            </span>
          </Fragment>
        }
        faq2Answer={
          <Fragment>
            <span className="home-text15 thq-body-small">
              Nikita manninnanikov told me this would cost a lot
            </span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="home-text16 thq-body-large">
              Frequently Asked Questions
            </span>
          </Fragment>
        }
        faq4Answer={
          <Fragment>
            <span className="home-text17 thq-body-small">
              cost or something this must cost 3 billion dollars
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text18 thq-body-large">
              Yall askin quesitons
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text19 thq-heading-2">FAQs</span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="home-text20 thq-body-large">answer</span>
          </Fragment>
        }
        faq5Answer={
          <Fragment>
            <span className="home-text21 thq-body-small">
              yeah i paid three trillion dolllars for this
            </span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="home-text22 thq-body-large">
              Frequently Asked Questions
            </span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="home-text23 thq-body-large">
              Frequently Asked Questions
            </span>
          </Fragment>
        }
        faq1Answer={
          <Fragment>
            <span className="home-text24 thq-body-small">
              How will you deliver on promisies
            </span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="home-text25 thq-body-small">Contact</span>
          </Fragment>
        }
      ></FAQ2>
    </div>
  )
}

export default Home
