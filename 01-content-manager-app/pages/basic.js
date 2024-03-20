import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useState , useEffect }  from "react";

const inter = Inter({ subsets: ["latin"] });

function CompA(props){

  useEffect(() => {
    console.log("Comp A use effect");
 }, [props.myProps1])



  return (
    <div className="componentA">
    <h1>CompA</h1>
    <p>My prop1: {props.myProps1}</p>
    <p>My prop2: {props.myProps2}</p>
    <p>My prop3: {props.myProps3.toString()}</p>
    <p>My prop4: {<props.myProps4/>}</p>
    <CompB/>
    <ArrowFunction/>
    </div>
  )
}

function CompB(){
  return (
    <>
    <h1>CompB</h1>
    <p>hellooo</p>
    </>
  )
}

class CompC extends React.Component{
  // render(){
  //   return(
  //   <h1>CompC...</h1>
  //   )
  render(){
    return(
      React.createElement("h1",null, "by code without JSX")
    )
  }
  
}

class CompD extends React.Component{

  constructor(){
    super();
    this.state = {
      myValue:10
    }
  }
 

  changeState(incrementor){
    this.setState({
      myValue: incrementor
    })
    console.log(incrementor)
  }
  
  render(){
    const {myValue} = this.state;
    return(
      <>
       <h2> hello CompD</h2>
       current value: <h3>{myValue}</h3>
       <button onClick={() => this.changeState(myValue+1)}>+</button>
       <button onClick={() => this.changeState(myValue-1)}>-</button>
      </>
    )
  }
  
}

class CompE extends React.Component{

  constructor(){
    super();
    this.state = {
      myValue:10
    }
  }
 

  changeState(incrementor){
    this.setState({
      myValue: incrementor
    })
    console.log(incrementor)
  }
  
  render(){
    const {myValue} = this.state;
    const {myProps2 : MyProps2, myProps3: ComponentAv1, myProps4: ComponentAv2} = this.props;
    return(
      <>
       <hr></hr>
       <h2> hello CompE</h2>
       current value: <h3>{myValue}</h3>
       <button onClick={() => this.changeState(myValue+1)}>+</button>
       <button onClick={() => this.changeState(myValue-1)}>-</button>
       <h2>{this.props.myProps1}</h2>
       <h2>-- component as prop.. --</h2>
       <MyProps2/>
       <h2>-- component as prop with parameters. this case is required add each prop --</h2>
       <ComponentAv1
          myProps1={ myValue } 
          myProps2="first way to send a component with props"
          myProps3={ true } 
          myProps4={() =>  <span>it is JSX v1</span>}   
       />
       <h2>-- component as prop with parameters all in just a prop --</h2>
       <ComponentAv2/>
      </>
    )
  }
  
}

const ArrowFunction = () =>{
  return (
    <div>
      <h1>I am arrow function</h1>
    </div>
  )
}

function MyComponent(){
  return  <h1>My component to E</h1>
}

function CompF(props){
  return (
    <>
    <hr></hr>
    <h1>CompF</h1>
    {props.children}
    </>
  )
}


function Home() {
console.log("display home...");
// [stateValue, mutateState]
const [myValue, setValue] = useState(10);
const [myOtherValue, setOtherValue] = useState(100);
// const value = valueState[0];
// const setValue = valueState[1];

useEffect(() => {
   console.log("Use Effect Called!");
//}, [myValue, myOtherValue])
},[myOtherValue])

const incrementValue = () =>{
  console.log(myValue);
  setValue(myValue+1)
}

const decrementValue = () =>{
  console.log(myValue);
  setValue(myValue-1)
}

const changeValue = (valueIncrement) =>{
  setValue(myValue+valueIncrement)
}

  return (
    <div>
       Current value: <h1> { myValue } </h1>
       <p>
          <button onClick={incrementValue}>+</button>
          <button onClick={decrementValue}>-</button> 
       </p>

      
       <p>
        <button onClick={() => changeValue(+1)}>+</button>
        <button onClick={() => changeValue(-1)}>-</button>
       </p>

       <hr></hr>
       Other value: <h4>{ myOtherValue }</h4>
       <p>
        <button onClick={() => setOtherValue(myOtherValue+1)}>+</button>
        <button onClick={() => setOtherValue(myOtherValue-1)}>-</button>
       </p>

      <h1>
        Hello world!
      </h1>
      <CompA
        myProps1={ myValue } 
        myProps2="string prop.."
        myProps3={ true } 
        myProps4={() =>  <span>it is JSX</span>}   
      />
      <CompC/>
      <CompD/>
      <CompE
         myProps1={ myValue } 
         myProps2={MyComponent}
         myProps3={CompA}
         myProps4={() =>
                      <CompA
                      myProps1={ myValue } 
                      myProps2="second way to send a component with props"
                      myProps3={ true } 
                      myProps4={() =>  <span>it is JSX v2</span>}   
                    />
                  }
      />

      <CompF>
            <h2> this is a child</h2>
      </CompF>
      
    </div>
  );
}


export default Home;