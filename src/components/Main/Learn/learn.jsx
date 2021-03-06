import React from 'react'

const Learn = () => {
  return (
    <div>
    <nav className="topnav sticky">
      <a href="index.html">
        <img src="{companyLogo}" alt="BigCo Inc. logo" />
      </a>
      <div>
        <a href="track.html">Track</a>
        <a href="learn.html">Learn</a>
        <a href="play.html">Play</a>
        <a href="plan.html">Plan</a>
        <a href="login.html">Login</a>
      </div>
    </nav>
    <main>
      {/* figure out formatting in css */}
      <h1 className="tracktitles"><b>Learn</b></h1>
      <h3 style={{textAlign: 'center'}}>finance basics</h3>
      {/*
        <div id="learn-top">
            <h1 style="font-size:45px"><b>Learn</b></h1>
            <br />
            <i>
            */}
      <div className="toc">
        <h2>Table of Contents</h2>
        <ol>
          <li style={{fontSize: '20px'}}>~ Basic Vocabulary</li>
          <li style={{fontSize: '20px'}}>~ Budgeting</li>
          <li style={{fontSize: '20px'}}>~ Savings</li>
          <li style={{fontSize: '20px'}}>~ Investments</li>
        </ol>
      </div>
      <br /> <br /> <br /> <br />
      <div id="cospace">
        {/* im putting in an example photo of a character to see if it works */}
        <section>
          <label><img width={150} height={150} src="https://media.discordapp.net/attachments/874657099660017725/876313471803879464/Asset_1.png" />
            <h4 style={{fontSize: '20px'}}>"Hello! My name is Piggy! Let's start by learning Level 1: Basic Vocab!"</h4>
          </label>
          <iframe width={1000} height={750} frameBorder={0} src="https://edu.cospaces.io/PKV-HWF" />
        </section>
        <br /> <br /> <br /> <br />
        <section>
          <label><img width={150} height={150} src="https://media.discordapp.net/attachments/874657099660017725/876313733452935228/Asset_2.png" />
            <h4 style={{fontSize: '20px'}}>"Hey! My name is Max! Let's try to understand Level 2: Budgeting!"</h4>
          </label>
          <iframe width={1000} height={750} frameBorder={0} src="https://edu.cospaces.io/FLZ-LLW" />
        </section>
        <br /> <br /> <br /> <br />
        <section>
          <label><img width={150} height={150} src="https://media.discordapp.net/attachments/874657099660017725/876313752054661160/Asset_3.png" />
            <h4 style={{fontSize: '20px'}}>"Hi! My name is Ace! We will now learn Level 3: Savings!"</h4>
          </label>
          <iframe width={1000} height={750} frameBorder={0} src="https://edu.cospaces.io/MEQ-HTE" />
        </section>
        <br /> <br /> <br /> <br />
        <section>
          <label><img width={150} height={150} src="https://media.discordapp.net/attachments/874657099660017725/876313762766913536/Asset_4.png" />
            <h4 style={{fontSize: '20px'}}>"Hello, my name is Olivia! Let's learn Level 4: Investments!"</h4>
          </label>
          <iframe width={1000} height={750} frameBorder={0} src="https://edu.cospaces.io/TPD-MJT" />
        </section>
      </div>
      <br /> <br /> <br />
    </main>
    <footer className="footer">
      ?? Coink! 2021
      <p> Contact us at coink@gmail.com</p>
    </footer>
  </div>
  );
}

export default Learn
