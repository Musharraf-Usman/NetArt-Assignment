var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <title>C.R.I Fluid Systems</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="style.css" />


        {/* Header */}
        <div className="header">
          <img src="asserts\logo.png" width={500} height={200} alt="logo" />
        </div>


        {/* The flexible grid (content) */}
        <div className="row">
          <div className="side">
            <img src="asserts\1.png" width={300} height={500} alt="trophe" />
          </div>

          <div className="main">
            <h2>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
            <ul>
              <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy. </li>
              <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
            </ul>
            <img src="asserts\2.png" width={700} height={400} alt="award photo" />
            <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha &amp; Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>

        </div>


        {/*Prefooter*/}
        <div className="preFooter">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
          </p>
          <img src="/asserts/3.png" width={800} height={350} alt="product photos" />
          <p>Valves - Pumps - Pipes - IoT Drives &amp; Controllers - Wires &amp; Cables - Solar Systems - Motors </p>
        </div>


        <br />
        <hr style={{height: '2px', borderWidth: 0, color: '#b22222', backgroundColor: '#b22222'}} />
        <br />

        
        {/*Footer*/}
        <div className="footer">
          <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
          <br />
          <br />
          <p><b>CHEMICALS &amp; PROCESS POWER WATER &amp; WASTE WATER OILS &amp; GAS PHARMA SUGARS &amp; DISTILLERIES PAPER &amp; PULP MARINE &amp; DEFENCE METAL &amp; MINING FOOD &amp; BEVERAGE PETROCHEMICAL &amp; REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE &amp; RESIDENTIAL</b></p>
        </div>
      </div>
    );
  }
});