import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "75%" }} // Adjust width to occupy space from 25% left
      h={{ base: "90%", md: "80%" }} // Height 80% of the container
      borderRadius="lg"
      borderWidth="1px"
      position="absolute"
      top="10%" // Start 10% from the top
      left={{ base: "0", md: "25%" }} // From 25% left on medium screens and above
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
