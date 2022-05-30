import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DetailsList, Stack, PrimaryButton, SelectionMode } from '@fluentui/react';
// import ToolBar from '../Toolbar';

const columnProps = {
  tokens: { childrenGap: 20 },
  style: { root: { width: 100 } }
}

export default function Cart() {
  const columns = [
    {
      key: "id",
      name: "Id",
      fieldName: "id",
      minWidth: 10,
      maxWidth: 50,
      isRowHeader: true,
    },
    {
      key: "imgUrl",
      name: "Image",
      fieldName: "id",
      minWidth: 200,
      maxWidth: 250,
      isRowHeader: true,
      onRender: (item) => (
        <img
          src={item.imgUrl}
          style={{ width: "200px", height: "250px" }}
          alt={`${item.name} - ${item.author}`} />
      )
    },
    {
      key: "name",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 150,
      isRowHeader: true,
    },
    {
      key: "author",
      name: "Author",
      fieldName: "author",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "about",
      name: "About",
      fieldName: "about",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
    },
    {
      key: "process",
      name: "Action",
      fieldName: "process",
      minWidth: 100,
      maxWidth: 200,
      isRowHeader: true,
      onRender: (item) => (
        <Stack {...columnProps} horizontal>
          <PrimaryButton text="Delete Cart" onClick={async () => await DeleteCart(item.id)} />
        </Stack>
      )
    }
  ];
  async function DeleteCart(cartID) {
    const response = await axios.delete(`http://api-bookseller.herokuapp.com/carts/${cartID}`);
    GetCart();
    if (response.status == 200) {
      GetCart();
    }
  }
  const GetCart = () => {
    axios
      .get("http://api-bookseller.herokuapp.com/carts")
      .then((response) => {
        setCart(response.data)
      });
  }

  const [cart, setCart] = useState([]);

  useEffect(() => {
    GetCart();
  }, []);

  return (
    <>
      {/* <ToolBar /> */}
      <div className="content">
        <div className="content-header">
          {cart.length > 0 ? "Books in cart" : "Cart is empty"}
        </div>
        {cart.length > 0 && (
          <DetailsList
            items={cart}
            columns={columns}
            SelectionMode={SelectionMode.none} />
        )}
      </div>
    </>
  )
}