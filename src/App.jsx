import { useState } from "react";
import Comments from "./components/Comments";
import "./App.css";
import dummyData from "./utils/dummy.json";

const comments = {
  id: 1,
  items: [],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsetNode = ({ folderId, value }) => {
    const finalStructure = insertNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };
  const handleEditNode = ({ folderId, value }) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };
  const handleDeleteNode = ({ folderId, value }) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
  return (
    <>
      <Comments comment={commentsData} />
    </>
  );
}

export default App;
