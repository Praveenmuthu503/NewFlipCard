import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import ZoomImage from './ZoomImage';

export interface CardProps {
  price: number;
  image: string;
  name: string;
  content: string;
  buttonText: string;
  changeColor: ()=> void;
  onClick: () => void;
}

export function NewFlipCard(props: CardProps) {
  const [toggleHeart,setToggleHeart] = useState(false)
  const styles = {
    cardWrap: {
      height: '60vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '4rm',
    } as React.CSSProperties,
    content: {
      height: '500px',
      width: '410px',
      borderRadius: '50px',
      background: '#fcfcfc',
      position: 'relative',
      cursor: 'pointer',
      marginBottom: '-7rem',
      boxShadow: '26px 26px 53px #a1a1a1',
      padding: '40px 20px',
    } as React.CSSProperties,
    price: {
      height: '60px',
      width: '60px',
      borderRadius: '50%',
      display: 'flex',
      backgroundColor: '#000',
      color: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-25px',
      left: '-25px',
      opacity:1,
    } as React.CSSProperties,
    pimage: {
      textAlign: 'center',
      height: '13rem',
      marginTop: '2rem',
      marginBottom: '2rem',
    } as React.CSSProperties,
    line: {
      width: '100%',
      height: '5px',
      backgroundColor: '#000',
      display: 'flex',
      marginTop: '5px',
      marginBottom: '5px',
    } as React.CSSProperties,
    tag: {
      marginTop: '2rem',
      fontSize: '20px',
    } as React.CSSProperties,
    btnStyle: {
      height: '45px',
      width: '100px',
      border: 'none',
      backgroundColor: 'black',
      borderRadius: '5px',
      color: 'white',
      position: 'absolute',
      bottom: '-20px',
      right: '20px',
      fontSize: '15px',
        opacity:1,
    } as React.CSSProperties,
    cardAction: {
      position: 'relative',
      float: 'right',
      marginTop: '-25px',
      marginRight: '20px',
      zIndex: 2,
      color: '#e26d5c',
      background: 'gainsboro',
      borderRadius: '100%',
      padding: '15px',
      fontSize: '15px',
      cursor: 'pointer',
      boxShadow: '0 1px 2px 0 rgba(0,0,0,0,0.2),0 1px 2px 0 rgba(0,0,0,0.19)',
      "&:hover":{
        color:"gainsboro",
        background:"#e26d5c"
      }
    } as React.CSSProperties,
    cardActive: {
      position: 'relative',
      float: 'right',
      marginTop: '-25px',
      marginRight: '20px',
      zIndex: 2,
      color: '#fff',
      background: '#e26d5c',
      borderRadius: '100%',
      padding: '15px',
      fontSize: '15px',
      cursor: 'pointer',
      boxShadow: '0 1px 2px 0 rgba(0,0,0,0,0.2),0 1px 2px 0 rgba(0,0,0,0.19)',
    } as React.CSSProperties,
  };
  const changeColorHeart =()=>{
    setToggleHeart(!toggleHeart)
    props.changeColor()
  }

  return (
    <div style={styles.cardWrap}>
      <div style={styles.content}>
        <span style={styles.price}>$ {props.price}</span>
        <div
          style={toggleHeart === true ? styles.cardActive : styles.cardAction}
          onClick={changeColorHeart}
        >
          <AiFillHeart />
        </div>
        <div style={styles.pimage}>
          <ZoomImage src={props.image} alt="proImage" />
        </div>
        <h4 style={styles.tag}>{props.name}</h4>
        <span style={styles.line}></span>
        <h4 style={styles.tag}>{props.content}</h4>
        <button style={styles.btnStyle} onClick={props.onClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}
