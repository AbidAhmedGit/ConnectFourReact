import React, { useState, useEffect } from 'react';
import './App.css'

const TILE_COLORS = ['red', 'green', 'blue', 'yellow'];

export default function Memory() {
  // Write your code here.

  // shuffle the board with 8 tiles
  // board = [red, yellow, blue, ...]
  const [board, setBoard] = useState(()=>{
    return shuffle([...TILE_COLORS, ...TILE_COLORS]);
  });

  // tracking tiles that are selected
  const [selectedTiles, setSelectedTiles] = useState([]);

  // tracking tiles that are matched
  const [matchedTiles, setMatchedTiles] = useState([]);


  const selectTiles = (i) => {
    if (selectedTiles.length >= 2 || selectedTiles.includes(i) || matchedTiles.includes(i)) return;
    setSelectedTiles([...selectedTiles, i])
  }


  useEffect(() => {
    // if less than 2 tiles are selected simply return
    if (selectedTiles.length < 2) return;
    // set matchedTiles if both tiles are same color
    if (board[selectedTiles[0]] === board[selectedTiles[1]]){
      setMatchedTiles([...matchedTiles, ...selectedTiles]);
      // empty the selectedTiles once done
      // this will allow you to also select tiles when you have already found 2 matching tiles
      setSelectedTiles([]);
    }
    // if they are not the same they should deselect after 1 sec
    // they will remain selected if they match
    else {
      const timeoutId = setTimeout(()=> {setSelectedTiles([]);}, 1000);
      return ()=> clearTimeout(timeoutId);
    }
  }, [selectedTiles]);

  const didPlayerWin = matchedTiles.length === board.length;

  // you need to reset all the states instead of just matched tiles to 
  // reshuffle the board as well
  const restartGame = () => {
    setBoard(shuffle([...TILE_COLORS, ...TILE_COLORS]));
    setMatchedTiles([]);
    setSelectedTiles([]);
  }
  
  return (
    <>
      {/* Write your code here. */}
      <h1>{didPlayerWin ? `You Win!` : `Memory`}</h1>
      <div className='board'>
        {board.map((tileColor, i)=>{
          const isTurnedOver = selectedTiles.includes(i) || matchedTiles.includes(i);
          const className = isTurnedOver ? `tile ${tileColor}` : `tile`;
          return(
            <div key={i} className={className} onClick={()=>{selectTiles(i)}}/>
          );
        })}
      </div>
      {/* we want to show the restart button only when the player has won */}
      {/* short circuit expression */}
      {didPlayerWin && <button onClick={()=>restartGame()}>Restart</button>}
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}