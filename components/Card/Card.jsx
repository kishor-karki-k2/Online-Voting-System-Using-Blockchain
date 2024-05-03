import React from "react";

import Style from "../card/card.module.css";
import image from "../../assets/candidate1.png";

const card = ({ candidateArray, giveVote, admin, alreadyVoted, isVoteEnd }) => {
  return (
    <div className={Style.card}>
      {candidateArray.map((el, i) => (
        <div className={Style.card_box}>
          <div className={Style.image}>
            <img src={el[3]} alt="Profile photo" />
          </div>

          <div className={Style.card_info}>
            <h2>
              {el[1]} #{el[2].toNumber()}
            </h2>
            <p>{el[0]}</p>
            <p>Address: {el[6].slice(0, 30)}..</p>
            <p className={Style.total}>Total Votes</p>
          </div>

          <div className={Style.card_vote}>
            <p>{el[4].toNumber()}</p>
          </div>

          {!admin && !alreadyVoted && !isVoteEnd && (
            <div className={Style.card_button}>
              <button
                onClick={() =>
                  giveVote({ id: el[2].toNumber(), address: el[6] })
                }
              >
                Give Vote
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default card;
