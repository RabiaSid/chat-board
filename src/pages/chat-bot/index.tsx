import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BsListColumnsReverse, BsPeople, BsChatDots } from "react-icons/bs";
import { GrNote } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { BiPencil, BiUser } from "react-icons/bi";
import { RiFilePaper2Line } from "react-icons/ri";
import { PiNotePencilDuotone } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { CiWallet } from "react-icons/ci";
import { AppBar, Drawer } from "@mui/material";
import IconButton from "../../components/IconButton";
import { logo } from "../../assets";
import MessageInput from "../../components/MessageInput";
import { sendMsgToOpenAi } from "../../config/open-ai/conversation";
import axios from "axios";

type Page = {
  name: string;
  route?: string;
  icon?: React.ReactNode;
};

// const apiKey = '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';

export default function ChatBot() {
  

  const [input ,  setInput] = useState("")


  const handleSend = async () => {
      const res = await sendMsgToOpenAi(input)
      console.log(res)
  }

  const pagesArr: Page[] = [
    {
      name: "Dashboard",
    },
    {
      name: "OrderList",
    },
    {
      name: "OrderDetail",
    },
    {
      name: "Customer",
    },
    {
      name: "Analytics",
    },
  ];

  const navigate = useNavigate();

  const openPage = (route: string) => {
    navigate(`/dashboard/${route}`);
  };

  return (
    <div
      className="row m-0 p-0"
      style={{
        border: "1px solid red",
        height: "100vh",
        background: "#000000",
      }}
    >
      <div
        className="col-2 d-flex flex-column justify-content-between"
        style={{ background: "#1A1A1A" }}
      >
        <div className="row py-3">
          {pagesArr.map((x, index) => (
            <div key={index}>
              <IconButton
                //   onClick={
                //       () => openPage(x.route)
                //   }
                className="item_active my-2 py-3"
                startIcon={x.icon ? x.icon : <PiNotePencilDuotone />}
                label={x.name}
              />
            </div>
          ))}
        </div>
        <div className="row py-3 ">
          <div className="d-flex justify-content-center">
            <img src={logo} />
          </div>
          <div>
            <IconButton
              //   onClick={
              //       () => openPage(x.route)
              //   }
              className="new-Chat my-2 py-3"
              startIcon={<PiNotePencilDuotone />}
              label="New Chat"
            />
          </div>
        </div>
      </div>
      <div className="col-10" style={{ background: "transparent" }}>
        <div className="row d-flex align-items-between justify-content-center border border-success h-100 m-0 p-0">
          <div
            className="col-11 border border-success "
            style={{
              height: `calc(100vh - 10rem)`,
              overflow: "hidden",
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
          >
            <div className="row border border-primary m-0 p-0">
              <img className="" src="" alt="" />
              <p className="">jdsklfglkdhldfhjkskfdhj</p>
            </div>

            <div className="row border border-primary m-0 p-0 ">
              <img className="" src="" alt="" />
              <p className="">jdsklfglkdhldfhjkskfdhj</p>
            </div>
          </div>
          <div className="col-11">
            <MessageInput
              placeholder="message"
              className="w-100 input_field py-2"
              value={input} 
              onChange={(e: any) => setInput(e.target.value)}
              onClick={handleSend}
            />
          </div>
        </div>
        {/* <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="order-list-page" element={<OrderListPage />} />
          <Route path="order-detail-page" element={<OrderDetailPage />} />
          <Route path="customer-page" element={<CustomerPage />} />
          <Route path="analytics-page" element={<AnalyticsPage />} />
          <Route path="reviews-page" element={<ReviewsPage />} />
          <Route path="food-page" element={<FoodPage />} />
          <Route path="food-detail-page" element={<FoodDetailPage />} />
          <Route path="customer-detail-page" element={<CustomerDetailPage />} />
          <Route path="calender-page" element={<CalenderPage />} />
          <Route path="chat-page" element={<ChatPage />} />
          <Route path="wallet-page" element={<WalletPage />} />
        </Routes>*/}
      </div>
    </div>
  );
}
