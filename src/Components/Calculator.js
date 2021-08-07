import React, {useState} from 'react';
import Footer from "./Footer";

const Calculator = () =>{

  const[option , setoption] = useState("OS");
  const [grams , setgrams] = useState();
  const[min , setmin] = useState();
  const[max , setmax] = useState();
  

 
  const calculate = () =>{  
     
    if(option === "OS")
    {
      let min = 3000*grams;
      setmin(min);
      let max= 3500*grams;
      setmax(max);

    }
    else if (option === "22CT"){
      let min = 3000*grams;
      setmin(min);

      let max = 3600*grams;
      setmax(max)
    }
    else if (option === "KDM"){
      let min = 3000*grams;
      setmin(min);

      let max = 3600*grams;
      setmax(max)
    }
    else if (option === "916"){
      let min = 3000*grams;
      setmin(min);

      let max = 3750*grams;
      setmax(max)
    }
  }

  

return(
  <>
 <div className="text-4xl lg:mt-24 mt-12 ml-24">GOLD LOAN CALCULATOR</div>
 <form className="mt-12">
 <div className="lg:flex ">
      <div className="lg:w-2/6 flex  mt-8">
   <label className="lg:ml-24 ">Name:</label>
   <input type="text" className="border-2 border-black  w-1/2 lg:ml-0 ml-4"/>
   </div>
   <div className="lg:w-2/6  mt-8">
   <label className="">Contact Number:</label>
   <input type="lg:text" className="border-2 border-black w-1/2"/>
   </div>
   <div className="lg:w-2/6  mt-8">
   <label className="">Email Address:</label>
   <input type="text" className="border-2 border-black w-1/2"/>
   </div>
</div>

<br />


<div className="lg:mt-2  lg:flex ">
  <div className="lg:w-2/6 mt-8">
 <label className="lg:ml-24  "> Gold Type :</label>
   <select  >
    <option value="WITH STONE" >WITH STONE</option>
    <option  value="CHAIN">CHAIN</option>
    <option  value="SOLID">SOLID</option>
  </select> 
  </div>

<div  className="lg:w-2/6 mt-8 ">
  <label className=" ">Purity of Gold :</label>
   <select name ='option'  onChange={ (event) => setoption(event.target.value) } >
    <option  value="OS" >OS</option>
    <option  value="22CT" >22CT</option>
    <option  value="KDM">KDM</option>
    <option  value="916">916</option>
  </select>
  </div>

  <div  className="lg:w-2/6 mt-8 ">
<label className="" >Weight in.gms :
  <input type="number" placeholder="weight in grams" className="border-2 border-black w-1/2 "  value={grams} onChange={ (e) => setgrams(e.target.value) }/> 
  </label>
</div>

  </div>

<br />
  <button className="bg-red-500 border-2 border-black lg:ml-24 lg:mt-16 ml-32"  type="button" onClick={() => calculate()} >CALCULATE</button>
  <div className="color-red-900 lg:mt-24 lg:ml-24 ">Min Amount :{min}</div>
  <div className="color-red-900 lg:ml-24 ">Max Amount :{max}</div>
  
  




 </form>

 <Footer />
  </>
)
}

export default Calculator; 


{/* <label className="ml-24"> Gold Type :</label>
   <select  >
    <option value="WITH STONE" >WITH STONE</option>
    <option  value="CHAIN">CHAIN</option>
    <option  value="SOLID">SOLID</option>
  </select> */}

/*const Calculator = () => {
const [result , setResult ] = useState("")

const handleClick = (e) =>{
  setResult(result.concat(e.target.name));
}

const clear =()=>{
        setResult("")
}

const backspace =()=>{
          setResult(result.slice(0,-1));
}

const calculate =()=>{
  try{
  setResult(eval(result).toString());
  }
  catch(err){
    setResult("Error")
  }
}

  return(
            <>

            <div className="container">
              <form>
             <input className="h-20 w-64 bg-gray-900 text-white text-right text-2xl font-medium" type="text" value={result} />
             </form>
             <div className="keypad">
                  <button className="highlight" onClick={clear} id="clear">Clear</button>
                  <button className="highlight" onClick={backspace} id="backspace">C</button>
                  <button className="highlight" name="/" onClick={handleClick}>&divide;</button>
                  <button name="7" onClick={handleClick}>7</button>
                  <button name="8" onClick={handleClick}>8</button>
                  <button name="9" onClick={handleClick}>9</button>
                  <button className="highlight" name="*" onClick={handleClick}>&times;</button>
                  <button name="4" onClick={handleClick}>4</button>
                  <button name="5" onClick={handleClick}>5</button>
                  <button name="6" onClick={handleClick}>6</button>
                  <button className="highlight" name="-" onClick={handleClick}>&ndash;</button>
                  <button name="1" onClick={handleClick}>1</button>
                  <button name="2" onClick={handleClick}>2</button>
                  <button name="3" onClick={handleClick} >3</button>
                  <button className="highlight" name="+" onClick={handleClick}>+</button>
                  <button name="0" onClick={handleClick}>0</button>
                  <button name="." onClick={handleClick}>.</button>
                  <button className="highlight" name="=" onClick={calculate} id="result">=</button>
             </div>
               </div>

              </> 
            );
}*/