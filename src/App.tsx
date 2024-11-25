import { useCallback, useEffect, useState } from 'react'
import './App.css'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import img8 from './images/img8.png'
import image_verso from './images/image_verso.png'

function App() {

  const [tab, setTab] = useState([] as string[]);


  useEffect(()=> {
      // let table=[] as string[]
      // table[0]='../public/images/image_verso.png';
      // table[1]='../public/images/image_verso.png';
      // table[2]='../public/images/image_verso.png';
      // table[3]='../public/images/image_verso.png';
      // table[4]='../public/images/image_verso.png';
      // table[5]='../public/images/image_verso.png';
      // table[6]='../public/images/image_verso.png';
      // table[7]='../public/images/image_verso.png';
      // table[8]='../public/images/image_verso.png';
      // table[9]='../public/images/image_verso.png';
      // table[10]='../public/images/image_verso.png';
      // table[11]='../public/images/image_verso.png';
      // table[12]='../public/images/image_verso.png';
      // table[13]='../public/images/image_verso.png';
      // table[14]='../public/images/image_verso.png';
      // table[15]='../public/images/image_verso.png';
      //table[0]='../public/images/img6.png';
      //table[1]='../public/images/img1.png';
      //table[2]='../public/images/img7.png'
      //table[3]='../public/images/img7.png'
      //table[4]='../public/images/img5.png'
      //table[5]='../public/images/img5.png'
      //table[6]='../public/images/img1.png'
      //table[7]='../public/images/img6.png'
      //table[8]='../public/images/img3.png'
      //table[9]='../public/images/img3.png'
      //table[10]='../public/images/img2.png'
      //table[11]='../public/images/img8.png'
      //table[12]='../public/images/img4.png'
      //table[13]='../public/images/img4.png'
      //table[14]='../public/images/img8.png'
      //table[15]='../public/images/img2.png'


      // setTab([table[0],table[1],table[2],table[3],
      //   table[4],table[5],table[6],table[7],table[8],table[9],
      //   table[10],table[11],table[12],table[13],table[14],table[15]
      // ])
      setTab([image_verso,image_verso,image_verso,image_verso,
        image_verso,image_verso,image_verso,image_verso,image_verso,image_verso,
        image_verso,image_verso,image_verso,image_verso,image_verso,image_verso
      ])
},[])

  const handleClick = useCallback(()=> {
    
    let table = [] as string[];
    table = [...tab]
    table[0]=img6;
    table[2]=img7;
    table[6]=img1;
    setTab([...table]);
},[tab])

const handleClick2 = useCallback(()=> {
    
  let table = [] as string[];
  table = [...tab]
  table[9] =img3;
  table[11] =img8;
  table[14] = img8;
  setTab([...table]);
},[tab])

const handleClick3 = useCallback(()=> {
    
  let table = [] as string[];
  table = [...tab]
  table[3] =img7;
  table[7] =img6;
  setTab([...table]);
},[tab])

const handleClick4 = useCallback(()=> {
    
  let table = [] as string[];
  table = [...tab]
  table[4] = img5;
  table[8] = img3;
  table[12] =img4;
  table[15] =img2;
  setTab([...table]);
},[tab])

const handleClick5 = useCallback(()=> {
    
  let table = [] as string[];
  table = [...tab]
  table[5] = img1;
  table[13] = img4;
  table[6] = image_verso;
  setTab([...table]);
},[tab])

const handleClick6 = useCallback(()=> {
    
  let table = [] as string[];
  table = [...tab]
  table[1] = img1;
  table[10] = img2
  table[0] = image_verso;
  setTab([...table]);
},[tab])

  return (
    <>
      <div>
        <div className='square'>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[0]} >
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick2}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[1]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick3}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[2]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick4}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[3]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick5}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[4]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick6}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[5]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick2}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[6]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[7]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[8]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick2}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[9]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[10]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick2}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[11]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[12]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick2}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[13]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[14]}>
              </img>
              </div>
          </div>
          <div className='square_little'>
              <div onClick={handleClick}>
              <img title='image' style={{width:"196px" , height:"196px"}} src={tab[15]} onClick={handleClick}>
              </img>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
