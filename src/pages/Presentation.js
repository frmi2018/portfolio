import React from "react";
import Navigation from "../components/Navigation";

const Presentation = () => {
  return (
    <div className="presentation">
      <Navigation />
      <div className="presentationContent">
        <div className="header"></div>
        <div className="videoBox">
          <video controls width="100%">
            <source src="../../media/video/me.webm" type="video/webm" />
            <source src="../../media/video/me.mp4" type="video/mp4" />
            Sorry, your browser doesn't support the video tag but you can{" "}
            <a href="http://portfolio.michaudfranck.ovh/media/video/me.mp4">
              download (2.56Mo)
            </a>
            it.
          </video>
        </div>
        <div className="presentationBox">
          <p>
            En reconversion professionnel depuis février 2021 après 25 ans dans
            le domaine de l’expertise automobile, je découvre chaque jour un peu
            plus les facettes du métier de développeur.
          </p>
          <p>
            Je développe en Javascript côté front avec la bibliothèque React de
            Facebook et côté back avec Node.js. Pour les applications mobiles
            j'utilise le framework Expo. J'ai aussi quelques notions du
            framework open-source Vue.js dans sa version 3.
          </p>
          <p>
            Je travail sous environnement Windows ou Mac et j'utilise Visual
            Studio Code.
          </p>
          <p>
            J'ai suivi la formation bootcamp Développeur Web et mobile de 3 mois
            au Reacteur (Paris 10e). Depuis, je continue de me former pour
            améliorer mes connaissances et apprendre de nouvelles compétences.
          </p>
          <p>
            Je suis d'un tempérament curieux, souvent autodidacte, j'ai le sens
            des priorités dans l'organisation de mes missions et j'aime être
            polyvalent dans les fonctions que j'occupe au quotidien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
