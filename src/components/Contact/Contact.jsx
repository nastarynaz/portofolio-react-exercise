import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a href="mailto:khoirunasmuhammad@gmail.com">
            khoirunasmuhammad@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a href="https://linkedin.com/in/khoirunas">
            linkedin.com/in/khoirunas
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a href="https://github.com/nastarynaz">github.com/nastarynaz</a>
        </li>
      </ul>
    </footer>
  );
};
