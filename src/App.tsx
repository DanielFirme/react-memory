import { useEffect, useState } from 'react'
import * as C from './App.styles';
import logoImage from './assets/devmemory_logo.png';
import RestartIcon from './svgs/restart.svg'
import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';
import { GridItemType } from './types/GridItemType';
import { items } from './data/items';
import { formatTimeElapsed } from './helpers/formatTimeElapsed';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(()=>resetAndCreateGrid(), []);
  
  useEffect(()=>{
    const timer = setInterval(()=>{
      if(playing) setTimeElapsed(timeElapsed + 1);
    }, 1000);
    return () => clearInterval(timer);
  },[playing, timeElapsed]);
  
  useEffect(()=>{
    if(shownCount === 2){
      const opened = gridItems.filter(items=>items.shown === true);
      if(opened.length === 2){
        const tmpGrid = [...gridItems];
        if(opened[0].item === opened[1].item){
          for(let item of tmpGrid){
            if(item.shown === true){
              item.shown = false;
              item.permanentShown = true;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          setTimeout(()=>{
            for(let item of tmpGrid){
                item.shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }
      }
      setMoveCount(moveCount => moveCount + 1);
    }
  }, [shownCount, gridItems]);

  useEffect(()=>{
    if(moveCount > 0 && gridItems.every(items => items.permanentShown === true)) setPlaying(false);
  }, [gridItems, moveCount]);


  const resetAndCreateGrid = ()=>{
    // passo 1 - resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    // passo 2 - criar o grid
    // passo 2.1 - criar um grid vazio
    let tmpGrid: GridItemType[] = [];
    for(let i = 0; i < (items.length * 2); i++) tmpGrid.push({
    item: null, permanentShown: false, shown: false })
    // passo 2.2 - preencher o grid
    for(let i = 0; i < 2; i++){
      for(let j = 0; j < items.length; j++){
        let pos = -1;
        while(pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = j;
      }
    }
    // passo 2.3 - jogar no state
    setGridItems(tmpGrid);
    // passo 3 - começar o jogo
    setPlaying(true);
  }

  const handleGridItemClick = (index: number) => {
    if(playing && shownCount <2){
      let tmpGrid = [...gridItems];
      if(!tmpGrid[index].permanentShown && !tmpGrid[index].shown){
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tmpGrid);
    }
  }

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>
        <C.InfoArea>
          <InfoItem label="Tempo" value={formatTimeElapsed(timeElapsed)}/>
          <InfoItem label="Movimentos" value={`${moveCount}`}/>
        </C.InfoArea>
        <Button label="Reiniciar" icon={RestartIcon} onClick={resetAndCreateGrid}/>
      </C.Info>
      <C.GridArea>
        <C.Grid>
          {gridItems.map((item, index)=>(
            <GridItem key={index} item={item} onClick={()=>handleGridItemClick(index)}/>
          ))}
        </C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;