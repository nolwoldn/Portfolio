import { useState, useEffect } from "react";
import '../static/css/stars.css'
import Star from '../static/images/Star.png'
class Rand {
  range(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  }
  choice(list) {
    const multiplier = list.length;
    const idx = Math.floor(Math.random() * multiplier);
    return { id: idx, choice: list[idx] };
  }
}

function Stars() {
  const [crrStars, addStar] = useState([]);

  const starTypes = ["Small", "Mid","Large"];

  useEffect(() => {
    const random = new Rand();
    const spawnStar = () => {
      const starType = random.choice(starTypes);
      const xCor = random.range(1, 100);
      const yCor = random.range(1, 100);

      const newStar = {
        id: Date.now() + Math.random(),
        type: starType.choice,
        x: xCor,
        y: yCor,
      };

      addStar((prev) => [...prev, newStar]);
    };
    const interval = setInterval(spawnStar, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>  
      {crrStars.map((star) => (
        <img
          className={`star${star.type} star `}
          key={star.id}
          style={{
            left:`${star.x}%`,
            top:`${star.y}%`
          }}
          src={Star}
          onAnimationEnd={() => {
            addStar((prev) => prev.filter((s) => s.id !== star.id));
          }}
        />
      ))}
    </>
  );
}
export default Stars;
