import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function(){


    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [totalStars, setTotalStars] = useState(5);


    const handleChange = (e) => {
        setTotalStars(parseInt(Boolean(e.target.value, 10) ? e.target.value : 5));
      };

    const navigate = useNavigate();

    return(
        <>
        <h1>Feedback</h1>


        <h1>Star rating</h1>
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className="star"
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
      <br />
      <br />
      <p>Your rating is: {rating}</p>
      <br />
      {/* <label style={{ fontWeight: 400 }}>
        Number of stars:
        <input
          style={{ marginLeft: "12px", maxWidth: "50px" }}
          onChange={handleChange}
          value={totalStars}
          type="number"
          min={1}
        />
      </label> */}


        <br></br><br></br>
        <button onClick={() => navigate(-1)} style={{padding:"7px", backgroundColor:"blue", color:"white"}}>Go Back</button> &emsp;


        <button onClick={() => navigate('/')} style={{padding:"7px", backgroundColor:"blue", color:"white"}}>Go Home Page</button>



        </>
    )
}