import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import styles from "./Post.module.css";
import "./quill.css";
import { useNavigate } from "react-router-dom";

export default function Post() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [text, setText] = useState("");
  const [unicOpen, setUnicOpen] = useState(false);

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }, "blockquote"],
      ["link", "image", "video"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const navigate = useNavigate();

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const file = event.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const handleFileUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    handleFileUpload(file);
  };

  const handleContainerClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className={styles.cont}>
      <div className={styles.post_left_side}>
        <div
          className={styles.upload_img_cont}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleContainerClick}
          style={{ cursor: "pointer" }}
        >
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className={styles.uploaded_img}
            />
          ) : (
            <div className={styles.upload_img_content}>
              <img
                className={styles.upload_img_ico}
                src="/images/Post/upload_ico.svg"
                alt="Upload Icon"
              />
              <p className={styles.upload_img_p1}>
                Загрузить изображение основной статьи
              </p>
              <p className={styles.upload_img_format}>
                png, jpg, gif, webp, mp4
              </p>
              <div className={styles.upload_img_size}>Max 200 mb</div>
            </div>
          )}
        </div>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        <div className={styles.media_btn_cont}>
          <div className={styles.media_btn_container}>
            <div className={styles.media_connect}>
              <h1 className={styles.media_title}>Соц. сети:</h1>
              <div className={styles.media_first_line}>
                <div
                  className={styles.media_1}
                  style={{
                    backgroundImage: "url(/images/Post/connect_media_1.png)",
                  }}
                ></div>
                <div
                  className={styles.media_1}
                  style={{
                    backgroundImage: "url(/images/Post/connect_media_2.png)",
                  }}
                ></div>
              </div>
              <div className={styles.media_first_line}>
                <div
                  className={styles.media_1}
                  style={{
                    backgroundImage: "url(/images/Post/connect_media_3.png)",
                  }}
                ></div>
                <div
                  className={styles.media_1}
                  style={{
                    backgroundImage: "url(/images/Post/connect_media_4.png)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.edit_media_btn}>
          <p className={styles.edit_media_btn_p}>Редактировать ресурсы</p>
          <img
            className={styles.edit_media_img}
            src="/images/Post/pencil-02.svg"
            alt="Edit Icon"
          />
        </button>
      </div>
      <div className={styles.right_side_post}>
        <input
          className={styles.namePost_input}
          placeholder="Название поста"
        ></input>
        <ReactQuill
          theme="snow"
          value={text}
          modules={modules}
          formats={formats}
          onChange={setText}
          placeholder="Описание..."
        />
        <div className={styles.second_line_right}>
          <div className={styles.unic_cont}>
            <button
              className={styles.Unify}
              onClick={() => setUnicOpen(!unicOpen)}
            >
              Уникализировать заголовки
            </button>
            <div
              className={`${styles.unic_menu} ${unicOpen ? styles.active : ""}`}
            >
              <div className={styles.first_line_unic}>
                <p className={styles.unic_title}>Уникализация заголовков</p>
                <img
                  className={styles.close_btn_unic}
                  src="\images\Post\close_btn.svg"
                  onClick={() => {
                    setUnicOpen(!unicOpen);
                  }}
                ></img>
              </div>
              <form className={styles.cont_resource}>
                <div className={styles.name_res}>
                  <p className={styles.name_t}>Название ресурса</p>
                  <input
                    className={styles.name_i}
                    placeholder="Название ресурса"
                  ></input>
                  <button className={styles.save_btn}>
                    Добавить{" "}
                    <img
                      className={styles.add_res}
                      src="\images\Post\add_res.svg"
                    ></img>
                  </button>
                </div>
                <div className={styles.name_res}>
                  <p className={styles.name_t}>Заголовок ресурса</p>
                  <input
                    className={styles.zag_i}
                    placeholder="Заголовок ресурса"
                  ></input>
                </div>
                <div className={styles.btn_res}>
                  <button className={styles.save_res_ico}></button>
                  <button className={styles.delete_res_ico}></button>
                </div>
              </form>
              <form className={styles.cont_resource}>
                <div className={styles.name_res}>
                  {/* <p className={styles.name_t}>Название ресурса</p> */}
                  <input
                    className={styles.name_i}
                    placeholder="Название ресурса"
                  ></input>
                  <button className={styles.save_btn}>
                    Добавить{" "}
                    <img
                      className={styles.add_res}
                      src="\images\Post\add_res.svg"
                    ></img>
                  </button>
                </div>
                <div className={styles.name_res}>
                  {/* <p className={styles.name_t}>Заголовок ресурса</p> */}
                  <input
                    className={styles.zag_i}
                    placeholder="Заголовок ресурса"
                  ></input>
                </div>
                <div className={styles.btn_res_2}>
                  <button className={styles.save_res_ico}></button>
                  <button className={styles.delete_res_ico}></button>
                </div>
              </form>
            </div>
          </div>
          <select className={styles.chose_site}>
            <option value="">Выбрать сайты</option>
            <option value="site1">Сайт 1</option>
            <option value="site2">Сайт 2</option>
            <option value="site3">Сайт 3</option>
          </select>
        </div>
        <div className={styles.right_third_line}>
          <input
            className={styles.autor_post}
            placeholder="Автор публикации"
          ></input>
          <div></div>
        </div>
        <input className={styles.hashtag} placeholder="#хештеги"></input>
        <div className={styles.radioGroup}>
          <label className={styles.radioButton}>
            <input type="radio" />
            <span className={styles.customRadio}></span>
            Все связи ведут на указанный источник
          </label>

          <label className={styles.radioButton}>
            <input type="radio" />
            <span className={styles.customRadio}></span>
            Случайное построение ссылок
          </label>
        </div>
        <input
          className={`${styles.source} ${unicOpen ? styles.active : ""}`}
          placeholder="Ссылка на источник"
        ></input>
        <div
          onClick={() => {
            navigate("/post/profit");
          }}
          className={`${styles.next_btn} ${unicOpen ? styles.active : ""}`}
        >
          Далее
        </div>
      </div>
    </div>
  );
}
