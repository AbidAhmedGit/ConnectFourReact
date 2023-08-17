import React, { useState, useEffect } from 'react';
import './App.css'

export default function PhoneInput() {
  // Write your code here.
  // var isCorrectFormat = false;
  // var isClicked = false;
  const [isIncorrectFormat, setIsIncorrectFormat] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [formattedNumber, setFormattedNumber] = useState('');


  useEffect(()=> {
    if ((formattedNumber.length) < 13){
      setIsIncorrectFormat(true);
    } else {
      setIsIncorrectFormat(false);
    }
  }, [formattedNumber])

  const modifyFormat = (number) => {
    const digitsOnly = number.replace(/\D/g, ''); // Remove non-digit characters

    if (digitsOnly.length > 10) return; // Limit to 10 digits

    let modifiedFormat = '';

    if (digitsOnly.length > 0) {
      modifiedFormat = `(${digitsOnly.slice(0, 3)}`;
    }
    if (digitsOnly.length > 3) {
      modifiedFormat += `)${digitsOnly.slice(3, 6)}`;
    }
    if (digitsOnly.length > 6) {
      modifiedFormat += `-${digitsOnly.slice(6)}`;
    }

    setFormattedNumber(modifiedFormat);
  };

  //******************************* */ non-working code
  // const modifyFormat = (number) => {
  //   const digitsOnly = number.replace(/\D/g, ''); // Remove non-digit characters

  //   if (Number.isNaN(Number(number)) || number.length > 13) return;

  //   let modifiedFormat = '';

  //   if (digitsOnly.length > 0) {
  //     modifiedFormat += `(${digitsOnly}`;
  //   }
  //   if (digitsOnly.length >2) {
  //     modifiedFormat += `${formattedNumber}${digitsOnly}) `;
  //   }
  //   if (digitsOnly.length > 3) {
  //     modifiedFormat += `${formattedNumber}${digitsOnly}-`;
  //   }
  //   modifiedFormat += `${digitsOnly}`;
    

  //   setFormattedNumber(modifiedFormat);
  // };
  //******************************* */ non-working code

  // const modifyFormat = (number) => {
  //   const digitsOnly = number.replace(/\D/g, ''); // Remove non-digit characters
  
  //   if (Number.isNaN(Number(digitsOnly)) || digitsOnly.length > 10) return;
  
  //   let modifiedFormat = '';
  
  //   if (digitsOnly.length > 0) {
  //     modifiedFormat = `(${digitsOnly}`;
  //   }
  //   if (digitsOnly.length > 3) {
  //     modifiedFormat += `) ${digitsOnly.slice(3, 6)}`;
  //   }
  //   if (digitsOnly.length > 6) {
  //     modifiedFormat += `-${digitsOnly.slice(6)}`;
  //   }
  
  //   setFormattedNumber(modifiedFormat);
  // };
  

  return (
    <>
      {/* Write your code here. */}
      <input placeholder="(555) 555-555" value={formattedNumber} onChange={(e)=>{
        // setFormattedNumber(e.target.value);
        // console.log('+++++++++e', e);
        modifyFormat(e.target.value);
        // checkFormat();
        // console.log('+++++++++e.target', e.target);
        
        console.log('+++++++++e.target.value', e.target.value);
        
        }}/>
      <button onClick={()=>{
        setFormattedNumber('');
        }} 
        disabled={isIncorrectFormat}
        >Submit</button>
    </>
  );
}