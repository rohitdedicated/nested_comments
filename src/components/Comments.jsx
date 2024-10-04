import React, { useState, useRef, useEffect } from "react";
import { Button } from "@mui/material";
import {
  ArrowDropDownOutlined as ArrowDropDownOutlinedIcon,
  ArrowDropUpOutlined as ArrowDropUpOutlinedIcon,
} from "@mui/icons-material";
import Actions from "./Action";
import { display } from "@mui/system";
const Comments = ({ comment }) => {
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);
  console.log("comment", comment);

  const onAddComment = () => {};

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
        }}
      >
        {comment.id === 1 ? (
          <>
            <input
              style={{
                outline: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "50%",
                display: "block",
                padding: "10px",
                fontSize: "16px",
              }}
              type="text"
              autoFocus
              value={input}
              placeholder="type a comment..."
              onChange={(e) => setInput(e.target.value)}
            />
            <Actions
              className={"reply-comment"}
              type={"Comment"}
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span
              style={{
                overFloWrap: "break-word",
                backgroundColor: "#ccccff",
                border: "1px solid #ccccff",
                borderRadius: "4px",
                gap: "10px",
                padding: "10px",
                width: "50%",
              }}
            >
              {comment.name}
            </span>
            <div style={{ display: "flex" }}>
              {editMode ? (
                <>
                  {" "}
                  <Actions className={"save"} type={"Save"} color="primary" />
                  <Actions
                    className={"cancel"}
                    type="Cancel"
                    color="secondary"
                    handleClick={() => setEditMode(false)}
                  />
                </>
              ) : (
                <>
                  <Actions
                    className={"reply"}
                    type={"Reply"}
                    color="primary"
                    handleClick={handleNewComment}
                  />
                  <Actions
                    className={"reply"}
                    type="Edit"
                    color="secondary"
                    handleClick={() => setEditMode(true)}
                  />
                  <Actions className={"reply"} type="Delete" color="error" />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}>
        {showInput && (
          <div>
            <input
              style={{
                outline: "none",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "50%",
                display: "block",
                padding: "10px",
                fontSize: "16px",
                marginBottom: "5px",
              }}
              autoFocus
              onChange={(e) => setInput(e.target.value)}
            />
            <Actions
              className={"reply"}
              type={
                <>
                  {expand ? (
                    <ArrowDropUpOutlinedIcon style={{ fontSize: "14px" }} />
                  ) : (
                    <ArrowDropDownOutlinedIcon style={{ fontSize: "14px" }} />
                  )}
                  Reply
                </>
              }
              color="secondary"
            />{" "}
            <Actions
              className={"reply"}
              type="Cancel"
              color="error"
              handleClick={() => setShowInput(false)}
            />
          </div>
        )}
        {comment?.items?.map((item, idx) => {
          return <Comments key={`comment-${idx}`} comment={item} />;
        })}
      </div>
    </div>
  );
};

export default Comments;
