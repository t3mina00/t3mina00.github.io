import { useState } from 'react'
import  styles from '../Navbar.module.css';
import LangSelector from './LangSelector';

function HeaderNavbar(props) {
  // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  let home = props.resumeBasicInfo?.section_name?.home || "HOME";
  let about = props.resumeBasicInfo?.section_name?.about || "About me";
  let projects = props.resumeBasicInfo?.section_name?.projects || "Projects";
    
  return (
    <div className={`${styles.navDiv}`}>
        <nav className={`${styles.navbar}`}>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                <li onClick={removeActive}>
                    <a href='#home' className={`${styles.navLink}`}>{home}</a>
                </li>
                <li onClick={removeActive}>
                    <a href='#about' className={`${styles.navLink}`}>{about}</a>
                </li>
                <li onClick={removeActive}>
                    <a href='#portfolio' className={`${styles.navLink}`}>{projects}</a>
                </li>
                <li>
                    <LangSelector className={`${styles.navLink}`} selectLang={props.selectLang}/>
                </li>
                
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
                <span className={`${styles.bar}`}></span>
            </div>
        </nav>
    </div>
  );
}
export default HeaderNavbar;
