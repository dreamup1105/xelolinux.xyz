import styled from "styled-components";
import Box from "./Box";
import Card from "./Card";
import Title from "./Title";
import { CONTENT } from "../content/FeaturesContent";

const Features = () => {
  return (
    <FeaturesSection id="Features">
      <div className="container">
        <Title text="Features" />
        <Box>
          <Cards>
            <Card
              icon={
                <svg
                  width="126"
                  height="126"
                  viewBox="0 0 126 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.0299 2.66494C35.7195 3.52804 2.21737 37.0617 1.70707 37.9878C1.45129 38.4666 1.25977 39.4569 1.25977 40.1915C1.25977 41.5334 1.32403 41.5964 10.4263 50.7629C15.4726 55.8092 20.0716 60.1839 20.6776 60.4712C22.9129 61.5246 22.6256 61.7489 41.9162 42.491C59.1618 25.1811 59.7049 24.6066 59.7049 23.4562C59.7049 22.7859 59.5448 21.9228 59.3533 21.5397C58.8418 20.5494 41.5319 3.17524 40.4785 2.60068C39.3294 1.99462 37.9875 2.02612 37.0299 2.66494Z"
                    fill="white"
                  />
                  <path
                    d="M97.4547 9.21189C89.5986 10.4253 83.4977 14.6097 80.3363 21.0282C78.5484 24.6368 78.0053 27.0648 77.6223 33.3245C77.2078 39.84 76.7605 40.9891 73.1833 44.6947L70.4365 47.5373L78.0696 55.1704L85.7027 62.8035L88.4495 60.1524C92.0909 56.6395 93.3043 56.1922 99.6912 55.8092C105.088 55.4577 107.835 54.9146 110.677 53.574C113.104 52.3921 116.585 49.678 118.246 47.6973C121.376 43.9287 123.835 38.6278 124.537 34.2204C124.952 31.7293 124.76 30.9633 123.675 30.5475C122.972 30.2917 121.919 30.8032 114.637 34.9864C110.134 37.606 106.047 39.8412 105.567 39.9685C102.98 40.6073 99.2111 37.5732 97.0074 33.1342C94.8352 28.7268 94.7079 25.9485 96.6559 24.1593C97.1662 23.712 100.648 21.5725 104.416 19.4003C114.253 13.7794 113.741 14.1309 113.614 12.9176C113.55 12.0557 113.295 11.7672 112.081 11.1926C108.632 9.46767 101.766 8.54157 97.4547 9.21189Z"
                    fill="white"
                  />
                  <path
                    d="M46.1638 47.473C39.8398 53.797 38.8822 54.8831 39.0422 55.5219C39.1708 55.9692 53.9569 71.0111 73.0559 90.0459C99.6281 116.65 107.005 123.835 107.611 123.835C108.219 123.835 110.134 122.11 115.692 116.554C120.259 111.986 122.942 109.081 122.942 108.665C122.942 108.25 111.189 96.2741 89.0252 74.1094C61.973 47.0572 54.9145 40.1587 54.2756 40.1587C53.6683 40.1587 51.8161 41.8207 46.1638 47.473Z"
                    fill="white"
                  />
                  <path
                    d="M44.8545 73.0548C42.0119 75.9604 38.2118 77.2065 32.1436 77.2065C23.3286 77.238 15.4398 82.7316 11.2881 91.7381C10.1705 94.1976 8.92432 98.6681 8.92432 100.393C8.92432 101.575 9.91468 102.597 10.8408 102.341C11.1923 102.245 15.1197 100.073 19.5915 97.519C28.2779 92.5042 28.8852 92.2811 31.1532 93.3673C34.1873 94.8049 37.9232 100.745 38.2433 104.577C38.5305 108.09 38.5305 108.09 28.7895 113.68C23.5517 116.714 20.2618 118.822 20.103 119.205C19.6885 120.354 20.2631 121.09 22.1153 121.823C25.0536 123.036 27.4488 123.548 30.866 123.74C42.5235 124.41 51.6887 118.406 54.9143 108.026C55.3931 106.461 55.6804 104.289 55.9047 100.84C56.3192 93.7188 56.9908 91.7696 59.9606 88.6082L61.7486 86.756L54.084 79.0902L46.4509 71.4571L44.8545 73.0548Z"
                    fill="white"
                  />
                </svg>
              }
<<<<<<< HEAD
              title="Improved"
              text="XeroLinux runs fast due to the many, many fixes and under the hood tweaks that will save you time and provide you with a better & smoother experience"
=======
              title={CONTENT[0].title}
              text={CONTENT[0].text}
>>>>>>> 59d97721793b574f54a58c729a33874cc8b1449a
            />
            <Card
              icon={
                <svg
                  width="126"
                  height="126"
                  viewBox="0 0 126 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M102.165 42L106.312 32.8125L115.5 28.665C115.958 28.4562 116.347 28.1199 116.619 27.6964C116.892 27.2728 117.037 26.7798 117.037 26.2762C117.037 25.7726 116.892 25.2796 116.619 24.8561C116.347 24.4325 115.958 24.0963 115.5 23.8875L106.312 19.74L102.165 10.5C101.956 10.0417 101.62 9.65312 101.196 9.38066C100.773 9.10819 100.28 8.96332 99.7762 8.96332C99.2726 8.96332 98.7796 9.10819 98.356 9.38066C97.9325 9.65312 97.5963 10.0417 97.3875 10.5L93.24 19.6875L84 23.835C83.5417 24.0438 83.1531 24.38 82.8806 24.8036C82.6082 25.2271 82.4633 25.7201 82.4633 26.2237C82.4633 26.7273 82.6082 27.2203 82.8806 27.6439C83.1531 28.0674 83.5417 28.4037 84 28.6125L93.1875 32.76L97.335 42C98.28 44.0475 101.22 44.0475 102.165 42ZM60.375 49.875L52.0275 31.5C50.19 27.405 44.31 27.405 42.4725 31.5L34.125 49.875L15.75 58.2225C11.655 60.1125 11.655 65.94 15.75 67.7775L34.125 76.125L42.4725 94.5C44.3625 98.595 50.19 98.595 52.0275 94.5L60.375 76.125L78.75 67.7775C82.845 65.8875 82.845 60.06 78.75 58.2225L60.375 49.875ZM97.335 84L93.1875 93.1875L84 97.335C83.5417 97.5438 83.1531 97.88 82.8806 98.3036C82.6082 98.7271 82.4633 99.2201 82.4633 99.7237C82.4633 100.227 82.6082 100.72 82.8806 101.144C83.1531 101.567 83.5417 101.904 84 102.112L93.1875 106.26L97.335 115.5C97.5438 115.958 97.88 116.347 98.3035 116.619C98.7271 116.892 99.2201 117.037 99.7237 117.037C100.227 117.037 100.72 116.892 101.144 116.619C101.567 116.347 101.904 115.958 102.112 115.5L106.26 106.312L115.5 102.165C115.958 101.956 116.347 101.62 116.619 101.196C116.892 100.773 117.037 100.28 117.037 99.7762C117.037 99.2726 116.892 98.7796 116.619 98.3561C116.347 97.9325 115.958 97.5963 115.5 97.3875L106.312 93.24L102.165 84C101.95 83.541 101.609 83.1529 101.181 82.881C100.753 82.609 100.257 82.4646 99.75 82.4646C99.2431 82.4646 98.7468 82.609 98.3191 82.881C97.8914 83.1529 97.55 83.541 97.335 84V84Z"
                    fill="white"
                  />
                </svg>
              }
<<<<<<< HEAD
              title={"Stunning"}
              text="XeroLinux looks Stunning out of the box. Using almost everything at our disposal from KDE making it look sexy without compromising performance. We also offer many alternate rices as well."
=======
              title={CONTENT[1].title}
              text={CONTENT[1].text}
>>>>>>> 59d97721793b574f54a58c729a33874cc8b1449a
            />
            <Card
              icon={
                <svg
                  width="125"
                  height="122"
                  viewBox="0 0 125 122"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M97.7143 26.6833C103.393 32.531 107.533 39.7038 109.759 47.5554H125V74.4267H109.759C107.535 82.2847 103.396 89.464 97.7143 95.3167L105.348 108.569L82.1518 122L74.5357 108.748C66.6385 110.745 58.3704 110.745 50.4732 108.748L42.8482 122L19.6518 108.569L27.2857 95.3167C21.604 89.464 17.4647 82.2847 15.2411 74.4267H0V47.5643H15.2411C17.4647 39.7063 21.604 32.5271 27.2857 26.6743L19.6429 13.4312L42.8304 0H42.8571L50.4821 13.2342C58.3793 11.2367 66.6475 11.2367 74.5446 13.2342L82.1429 0H82.1607L105.357 13.4312L97.7232 26.6833H97.7143ZM89.2857 60.9955C89.2857 53.8712 86.4637 47.0386 81.4404 42.0009C76.4171 36.9633 69.604 34.1331 62.5 34.1331C55.396 34.1331 48.5829 36.9633 43.5596 42.0009C38.5363 47.0386 35.7143 53.8712 35.7143 60.9955C35.7143 68.1199 38.5363 74.9524 43.5596 79.9901C48.5829 85.0278 55.396 87.8579 62.5 87.8579C69.604 87.8579 76.4171 85.0278 81.4404 79.9901C86.4637 74.9524 89.2857 68.1199 89.2857 60.9955V60.9955Z"
                    fill="white"
                  />
                </svg>
              }
<<<<<<< HEAD
              title="Powerful"
              text="With built-in support for AUR and Flatpaks, as well as the topgrade T.U.I updater, XeroLinux gives you the power to shape your Linux system YOUR way, the easy way."
=======
              title={CONTENT[2].title}
              text={CONTENT[2].text}
>>>>>>> 59d97721793b574f54a58c729a33874cc8b1449a
            />
          </Cards>
        </Box>
      </div>
    </FeaturesSection>
  );
};

const FeaturesSection = styled.div`
  padding-block: var(--padding-section);
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem;

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

export default Features;
