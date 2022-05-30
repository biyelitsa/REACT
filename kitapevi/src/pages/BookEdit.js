import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Stack, PrimaryButton, TextField } from '@fluentui/react'
import ToolBar from '../Toolbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


export default function BookEdit() {
  const location = useLocation();
  const [pageData, setPageData] = useState({
    id: 0,
    name: "",
    author: "",
    imgUrl: "",
    about: ""
  });
  const onChangeText = (e) => {
    const { name, value } = e.target;
    setPageData({ ...pageData, [name]: value })
  }
  function EditBook() {
    axios
      //.put("http://api-bookseller.herokuapp.com/books/" + location.state.id, pageData)
      .put("https://book-store-api-test.herokuapp.com/books/" + location.state.id, pageData)
      //https://book-store-api-test.herokuapp.com/books/
      .then((response) => {
        if (response.status == 200) {
          alert("Book successfully updated.");
        }
      });
  }
  function FetchBookById() {
    axios
    //.get("http://api-bookseller.herokuapp.com/books/" + location.state.id)
      .get("https://book-store-api-test.herokuapp.com/books/" + location.state.id)
      .then((response) => {
        setPageData(response.data)
      });
  }
  useEffect(() => {
    FetchBookById();
  }, []);


  return (
    <>
      <ToolBar />
      <div className="content">
        <div className="content-header">Edit Book</div>
        <Stack
          tokens={{ childerGap: 10 }}
          styles={
            {
              root: {
                width: 700,
                marginLeft: 10,
                marginTop: 10
              }
            }
          }>
          <TextField
            label="name"
            name="name"
            value={pageData.name}

            onChange={onChangeText}
            required
          />
          <TextField
            label="Author"
            name="author"
            value={pageData.author}

            onChange={onChangeText}
            required
          />
          <TextField
            label="ImgUrl"
            name="imgUrl"
            value={pageData.imgUrl}

            onChange={onChangeText}
            required
          />
          <TextField
            label="About"
            name="about"
            value={pageData.about}

            onChange={onChangeText}
            required
          />
          <PrimaryButton
            text="Edit Book"
            onClick={() => EditBook()}
            style={{ width: "10%", height: "50px" }}
            onChange={onChangeText} />
        </Stack>
      </div>
    </>
  )
}
