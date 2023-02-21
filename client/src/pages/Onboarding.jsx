import React from "react";
import "../styles/onboard.css";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Onboarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    location: "",
    show_gender: false,
    gender_identity: "male",
    gender_interest: "female",
    url: "",
    about: "",
    lyrics_melody_preference: "",
    credit_song_preference: "",
    mood_song_preference: "",
    eras: [],
    matches: [],
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // removed http://localhost:8000
      const response = await axios.put("https://spinder-api.cyclic.app/user", {
        formData,
      });
      const success = response.status === 200;
      if (success) navigate("/dash");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckbox = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      formData.eras = [...formData.eras, e.target.value];
    } else {
      const index = formData.eras.indexOf(e.target.value);
      formData.eras.splice(index, 1);
    }
  };

  const handleInput = (e) => {
    if (formData.dob_year.length > 4) {
      e.target.value = e.target.value.slice(0, 4);
    } else if (formData.dob_day.length > 2 || formData.dob_month.length > 2) {
      e.target.value = e.target.value.slice(0, 2);
    } else {
      return e.target.value;
    }
  };

  return (
    <>
      <div className="form-cont">
        <form onSubmit={handleSubmit}>
          <div className="left-form">
            <h2>Create an account</h2>
            <div>
              <label htmlFor="first_name">Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                placeholder="UserName"
                required={true}
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              {/* Made Changes to Birthday Inputs */}
              <label>Birthday</label>
              <div className="birthday-container">
                <input
                  id="dob_day"
                  type="number"
                  name="dob_day"
                  min="01"
                  max="31"
                  step="01"
                  placeholder="DD"
                  required={true}
                  value={formData.dob_day}
                  onChange={handleChange}
                  onInput={handleInput}
                />
                <input
                  id="dob_month"
                  type="number"
                  name="dob_month"
                  min="01"
                  max="12"
                  step="01"
                  placeholder="MM"
                  required={true}
                  value={formData.dob_month}
                  onChange={handleChange}
                  onInput={handleInput}
                />
                <input
                  id="dob_year"
                  type="number"
                  name="dob_year"
                  min="0000"
                  max="2004"
                  step="01"
                  placeholder="YYYY"
                  required={true}
                  value={formData.dob_year}
                  onChange={handleChange}
                  onInput={handleInput}
                />
              </div>
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Location"
                required={false}
                value={formData.location}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="about">Short introduction</label>
              <textarea
                maxLength="200"
                name="about"
                id="about"
                type="text"
                placeholder="Tell me about yourself"
                required={true}
                value={formData.about}
                onChange={handleChange}
              ></textarea>
            </div>
            <small>Gender</small>
            <div className="radio">
              <input
                id="male-gender-identity"
                type="radio"
                name="gender_identity"
                value="male"
                onChange={handleChange}
                checked={formData.gender_identity === "male"}
              />
              <label htmlFor="male-gender-identity">Male</label>
              <input
                id="female-gender-identity"
                type="radio"
                name="gender_identity"
                value="female"
                onChange={handleChange}
                checked={formData.gender_identity === "female"}
              />
              <label htmlFor="female-gender-identity">Female</label>
              <input
                id="other-gender-identity"
                type="radio"
                name="gender_identity"
                value="other"
                onChange={handleChange}
                checked={formData.gender_identity === "other"}
              />
              <label htmlFor="other-gender-identity">Other</label>
            </div>

            <input
              id="show_gender"
              type="checkbox"
              name="show_gender"
              onChange={handleChange}
              checked={formData.show_gender}
            />
            <label htmlFor="show_gender">Show Gender on my Profile</label>
            {/* <label>Show Me</label> */}
            <small>Interested in</small>
            <div className="radio">
              <input
                id="male-gender-interest"
                type="radio"
                name="gender_interest"
                value="male"
                onChange={handleChange}
                checked={formData.gender_interest === "male"}
              />
              <label htmlFor="male-gender-interest">Men</label>
              <input
                id="female-gender-interest"
                type="radio"
                name="gender_interest"
                value="female"
                onChange={handleChange}
                checked={formData.gender_interest === "female"}
              />
              <label htmlFor="female-gender-interest">Women</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>
          </div>

          <div className="right-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="lyrics_melody_preference">
                Lyrics or melody, which is more important to you?
              </label>
              <div className="radio1">
                <input
                  id="lyrics_preference"
                  type="radio"
                  name="lyrics_melody_preference"
                  value="Lyrics"
                  onChange={handleChange}
                />
                <label htmlFor="lyrics_preference">Lyrics</label>
                <input
                  id="melody_preference"
                  type="radio"
                  name="lyrics_melody_preference"
                  value="Melody"
                  onChange={handleChange}
                />
                <label htmlFor="melody_preference">Melody</label>
              </div>
            </div>

            <div>
              <label htmlFor="credit_song_preference">
                In the movie of your life, which song plays at the end credits?
              </label>
              <input
                id="credit_song_preference"
                type="text"
                name="credit_song_preference"
                value={formData.credit_song_preference}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="mood_song_preference">
                Let's get spicy! Song to get you into the mood?
              </label>
              <input
                id="mood_song_preference"
                type="text"
                name="mood_song_preference"
                value={formData.mood_song_preference}
                onChange={handleChange}
              />
            </div>

            <small>What are your favorite eras of music?</small>

            <div className="eras">
              <input
                type="checkbox"
                name="eras"
                id="50s"
                value="50s"
                checked={formData.eras["50s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="50s">50s</label>

              <input
                type="checkbox"
                name="eras"
                id="60s"
                value="60s"
                checked={formData.eras["60s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="">60s</label>

              <input
                type="checkbox"
                name="eras"
                id="70s"
                value="70s"
                checked={formData.eras["70s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="">70s</label>

              <input
                type="checkbox"
                name="eras"
                id="80s"
                value="80s"
                checked={formData.eras["80s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="">80s</label>

              <input
                type="checkbox"
                name="eras"
                id="90s"
                value="90s"
                checked={formData.eras["90s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="">90s</label>

              <input
                type="checkbox"
                name="eras"
                id="00s"
                value="00s"
                checked={formData.eras["00s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="">00s</label>

              <input
                type="checkbox"
                name="eras"
                id="10s"
                value="10s"
                checked={formData.eras["10s"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="">10s</label>
            </div>

            <section className="photo-upload">
              <div>
                <label htmlFor="url">Profile Photo</label>
                <input
                  type="url"
                  name="url"
                  id="url"
                  onChange={handleChange}
                  required={true}
                />
              </div>

              <div className="photo-container">
                {formData.url && (
                  <img src={formData.url} alt="profile pic preview" />
                )}
              </div>
            </section>

            <button type="submit">Submit</button>
          </div>
        </form>

        {/* <section>
          <label htmlFor="url">Profile Photo</label>
          <input
            type="url"
            name="url"
            id="url"
            onChange={handleChange}
            required={true}
          />
          <div className="photo-container">
            {formData.url && (
              <img src={formData.url} alt="profile pic preview" />
            )}
          </div>
        </section> */}
      </div>
    </>
  );
};

export default Onboarding;
