import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mahdi</h1>
        <p className={styles.description}>
        As a passionate Full Stack Developer with respectful knowledge in Web and App development. Skilled in dealing with technical and non-technical challenges eager to develop IT solutions and projects.
        </p>


        
        <a>
        <a href="mailto:GatriMahdi5@gmail.com" className={styles.contactBtn}>
          Contact Me
          </a>
        <a href="https://fastupload.io/21cae59b3f4354c1" className={styles.cv_download}>
          Resume Download
       
        </a>
        </a>
      </div>
      
      {/* Hero image using the updated getImageUrl function */}
      <img
        src={getImageUrl("hero/me.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      {/* Blur effects */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};














// import React from "react";

// import styles from "./Hero.module.css";
// import { getImageUrl } from "../../utils";

// export const Hero = () => {
//   return (
//     <section className={styles.container}>
//       <div className={styles.content}>
//         <h1 className={styles.title}>Hi, I'm Mahdi</h1>
//         <p className={styles.description}>
//           I'm a full-stack developer with 5 years of experience using React and
//           NodeJS. Reach out if you'd like to learn more!
//         </p>
//         <a href="mailto:myemail@email.com" className={styles.contactBtn}>
//           Contact Me
//         </a>
//       </div>
//       <img
//         src={getImageUrl("hero/heroImage.png")}
    
//         alt="Hero image of me"
//         className={styles.heroImg}
//       />




//       <div className={styles.topBlur} />
//       <div className={styles.bottomBlur} />
//     </section>
//   );
// };
