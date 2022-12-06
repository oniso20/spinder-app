import React from "react";
import '../styles/onboard.css';


const Onboarding = () => {
  return (
<>
    
    <div className="form-cont">
        

    <form className="left-form" action="">
    <h2>Create an account</h2>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" name="name" />
      </div>

      <div>
        <label htmlFor="">Age</label>
        <input type="text" name="age"/>
      </div>

      <div>
        <label htmlFor="">Location</label>
        <input type="text" name="location" />
      </div>

      <div>
        <label htmlFor="">Short introduction</label>
        <textarea maxlength="200" name="intro"></textarea>
      </div>

      <small>Gender</small>

      <div className="radio">

        <input type="radio" id="male" name="gender" />
        <label for="male">Male</label>
       
        <input type="radio" id="female" name="gender" />
        <label for="female">Female</label>
      
        <input type="radio" id="other" name="gender" />
        <label for="other">Other</label>

        </div>

        <small>Interested in</small>

      <div className="radio">

        <input type="radio" id="men" name="interested-in" />
        <label for="men">Men</label>
        
        <input type="radio" id="women" name="interested-in" />
        <label for="women">Women</label>
        
        <input type="radio" id="everyone" name="interested-in" />
        <label for="everyone">Everyone</label>
        
        </div>

      </form>

      <form className="right-form"action="">

      <div>
        <label htmlFor="">Lyrics or melody, which is more important to you?</label>
        <input type="text" name="q1"/>
      </div>

      <div>
        <label htmlFor="">In the movie of your life, which song plays at the end credits?</label>
        <input type="text" name="q2" />
      </div>

      <div>
        <label htmlFor="">Let's get spicy! Song to get you into the mood?</label>
        <input type="text" name="q3" />
      </div>

      <small>What are your favorite eras of music?</small>

      <div className="eras">

      <div>

      <div>
        <input type="checkbox" name="" id="" value="50s" />
        <label htmlFor="">50s</label>
      </div>
      
      <div>
        <input type="checkbox" name="" id="" value="60s" />
        <label htmlFor="">60s</label>
      </div>

      <div>
        <input type="checkbox" name="" id="" value="70s" />
        <label htmlFor="">70s</label>
      </div>
     
      <div>
      <input type="checkbox" name="" id="" value="80s" />
      <label htmlFor="">80s</label>
      </div>

      </div>

      <div>

      <div>
        <input type="checkbox" name="" id="" value="90s" />
        <label htmlFor="">90s</label>
      </div>

      <div>
        <input type="checkbox" name="" id="" value="00s" />
        <label htmlFor="">00s</label>
      </div>

      <div>
        <input type="checkbox" name="" id="" value="10s" />
        <label htmlFor="">10s</label>
      </div>
      </div>
      </div>


      <button type="submit">Submit</button>
      </form>

      
    </div>

    </>

  )
};

export default Onboarding;
