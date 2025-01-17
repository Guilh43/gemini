/**
 * Component: App
 *
 * Description:
 * This component represents the main application interface, combining camera streaming
 * and Gemini's response display.
 *
 * Dependencies:
 * - "@/hooks/useApp": Custom hook for handling camera initialization and speech recognition.
 *
 * @returns {JSX.Element} - The JSX representation of the App component.
 */
import { Flex, Link, Text } from "@radix-ui/themes";
import useApp from "@/hooks/useApp";
import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const App = () => {
  // Destructure values from the custom hook
  const { isLoading, videoRef, response, listening } = useApp();

  return (
    <div className="flex flex-col sm:flex-row h-screen bg-black p-8">
      <Flex
        position={"absolute"}
        gap={"2"}
        align={"center"}
        className="z-50 right-16"
      >
        <Link
          href={"https://srikanthnani.com/"}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <Text size={"4"} className="text-white text-center">
            srikanthnani.com/
          </Text>
        </Link>

        <Link
          href={"https://github.com/iamsrikanthnani/gemini"}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <GitHubLogoIcon color="#fff" width={18} height={18} />
        </Link>
        <Link
          href={"https://linkedin.com/in/iamsrikanthnani/"}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <LinkedInLogoIcon color="#fff" width={18} height={18} />
        </Link>
        <Link
          href={"https://twitter.com/truly_sn"}
          target="_blank"
          rel="me noopener noreferrer"
        >
          <TwitterLogoIcon color="#fff" width={18} height={18} />
        </Link>

        <Link
          href={"mailto:srikanthnani1202@gmail.com"}
          target="_blank"
          className="cursor-pointer"
          rel="me noopener noreferrer"
        >
          <EnvelopeOpenIcon color="#fff" width={18} height={18} />
        </Link>
      </Flex>
      {/* Camera layout */}
      <div className="lg:w-2/3 lg:h-full md:w-2/3 md:h-full sm:w-full h-4/6 sm:mr-2 mb-2 sm:mb-0">
        <div
          className={`justify-center overflow-hidden flex items-center rounded-[30px] h-full ${
            isLoading ? "border-anim p-[3px]" : "border-[3.5px]"
          }`}
        >
          <video
            ref={videoRef}
            className="w-full h-full video-container"
            autoPlay
            playsInline
            muted
            style={{ borderRadius: isLoading ? 30 : 0 }}
          />
        </div>
      </div>

      {/* Gemini response layout */}
      <div className="lg:w-1/3 lg:h-full md:w-1/3 md:h-full sm:w-full h-2/6">
        <div className="bg-black p-4 ml-6 h-full w-full justify-center flex items-center">
          {/* Display Gemini response or loading/listening message */}
          <Flex direction={"column"} gap={"5"}>
            <Text
              className="text-white text-center"
              size={"6"}
              weight={"medium"}
            >
              {response
                ? response
                : listening
                ? "Listening..."
                : isLoading
                ? "Getting text..."
                : `say "Hey Gemini"`}
            </Text>
          </Flex>
          {/* FOOTER */}
          <div className="absolute bottom-0 py-4 text-center">
            <Text
              className="text-white text-center"
              size={"4"}
              weight={"medium"}
            >
              PS: Hey Gemini
            </Text>
            {/* Gemini logo or related image */}
            <img
              className="w-28 ml-3"
              src={
                "https://ppc.land/content/images/size/w1200/2023/12/Google-Gemini-AI-2.webp"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
