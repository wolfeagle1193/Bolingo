import "./share.css";
import React from 'react';
import{PermMedia,Label,Room,EmojiEmotions} from '@material-ui/icons'
import user from"../../assets/person/brigitteMacron.jpg"

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img 
            className="shareprofileImage"
            src={user}
            alt=""
          />
          <input placeholder="Quoi de neuf ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">Photo/Video</span>
            </div>
            <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
                <Room htmlColor="green" className="shareIcon"/>
                <span className="shareOptionText">Localisation</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                <span className="shareOptionText">Emotion</span>
            </div>
          </div>
          <button className="shareButton">Partager</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
