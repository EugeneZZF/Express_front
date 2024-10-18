import React from "react";
import styles from "./Landing.module.css";
import First_block from "./comp_landing/First_block";
import Second_block from "./comp_landing/Second_block";
import Third_block from "./comp_landing/Third_block";
import Foirth_block from "./comp_landing/Foirth_block";
import { useState } from "react";
import Modal from "./comp_landing/Modal";
import Footer_block from "./comp_landing/Footer_block";

export default function Landing() {
  const [activeModal, setActiveModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className={styles.landing_cont}>
      <First_block
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      ></First_block>
      <Second_block></Second_block>
      <Third_block></Third_block>
      <Foirth_block></Foirth_block>
      <Modal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      ></Modal>
      <Footer_block></Footer_block>
    </div>
  );
}
