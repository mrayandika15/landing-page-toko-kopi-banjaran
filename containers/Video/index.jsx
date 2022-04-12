import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <Box w="full" h={["450px", "650px"]} bg="black">
      <ReactPlayer
        className="react-player"
        url="/assets/video/video.mp4"
        width="100%"
        height="100%"
        controls={true}
      />
    </Box>
  );
};

export default Video;
