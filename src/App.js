import {Parallax} from 'react-parallax';
function App() {


  const pStyle={
    backgroundColor:'white',
   position:'absolute',
   padding:20,
    left:'50%',
    top:'50%',
    transform:'translate(-50%,-50%)'
  
  }
  return (
    <div  style={{textAlign:'center'}}>
      <div>
    <Parallax bgImage="img1.jpg" strength={280} >
      <div style={{height:500}}>
        <p style={pStyle}>DATA</p>
      </div>
     



    </Parallax>
    </div>
    <h1> | ] | ]</h1>
    <Parallax bgImage="img2.jpg" strength={280}  blur={{ min: -15, max: 15 }}>
      <div style={{height:500}}>
        <p style={pStyle}>BLUR EFFECT</p>
      </div>
     



    </Parallax>
    <h1> | ] | ]</h1>
    <Parallax bgImage="img3.jpg" strength={-280}  >
      <div style={{height:500}}>
        <p style={pStyle}>Negative strength for reverse EFFECT</p>
      </div>
     



    </Parallax>
    <h1> | ] | ]</h1>
    <Parallax bgImage="img4.jpg" strength={-280} 
    renderLayer={percentage => (
      <div
          style={{
              position: 'absolute',
              background: `rgba(255, 125, 0, ${percentage * 1})`,
              left: '50%',
              top: '50%',
              transform:'translate(-50%,-50%)',
              width: percentage * 250,
              height: percentage * 250,
              borderRadius:'50%'
          }}
      />
  )}
  >
      <div style={{height:500}}>
        <div style={pStyle}> Render  EFFECT</div>
      </div>
     



    </Parallax>
    <div style={{height:490}}></div>
    </div>
  );
}

export default App;
