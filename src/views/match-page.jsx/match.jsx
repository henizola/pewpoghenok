import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./match-style";

const MatchPage = () => {
  let history = useHistory();
  return (
    <>
      <Container>
        <span
          className="back"
          onClick={(e) => {
            e.preventDefault();
            history.goBack();
          }}
        >
          Back
        </span>

        <div className="match-row">
          <span className="match-name">Match Name</span>
          <div className="sub-row">
            <span className="edit">Edit</span>
            <span>Date: 07.01.222</span>
            <span>Players: 3/5</span>
            <span>Loot: 3,000 pogs</span>
            <span>
              {" "}
              <button className="red">joined</button>
            </span>
          </div>
        </div>
        {/* <img src="" alt="homeHero" className="hero" /> */}
        <div className="hero"></div>
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
          quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs
          grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright
          vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.
          Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV
          quiz. How quickly daft jumping zebras vex. Two driven jocks help fax
          my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz
          Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed.
          Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug
          of bad milk. A very bad quack might jinx zippy fowls. Few quips
          galvanized the mock jury box. Quick brown dogs jump over the lazy fox.
          The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight
          for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A
          wizard’s job is to vex chumps quickly in fog. Watch "Jeopardy!", Alex
          Trebek"s fun TV quiz game.
        </p>
      </Container>
    </>
  );
};
export default MatchPage;
