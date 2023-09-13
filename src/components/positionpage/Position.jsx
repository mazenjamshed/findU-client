import { Flex, Text, chakra } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Position = () => {
  return (
    <Flex
      padding="30px 341px 53px 308px"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      gap="108.572px"
      borderRadius="24px"
      background="var(--Form-BG, #FFF)"
      margin={"auto"}
    >
      <Flex flexDirection="column" alignItems="flex-end" gap="32px">
        <Flex flexDirection="column" alignItems="center" gap="72px">
          <Flex width="170px" height="49.855px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="171"
              height="51"
              viewBox="0 0 171 51"
              fill="none"
            >
              <path
                d="M0.5 49.6671V8.5097H29.6333C29.6333 12.787 26.1639 16.2089 21.9341 16.2089H9.29228V24.8586H21.5064C25.7837 24.8586 29.2056 28.328 29.2056 32.5578H9.29228V40.8748C9.24476 45.77 5.34764 49.6671 0.5 49.6671Z"
                fill="#277DE3"
              />
              <path
                d="M79.2029 49.6671C74.8305 49.6671 71.3136 46.1502 71.3136 41.7778V31.6548C71.3136 27.9478 69.4601 26.0943 65.8006 26.0943C63.0916 26.0943 60.8103 27.2349 59.0044 29.5637V41.8254C59.0044 46.1502 55.4875 49.6671 51.1626 49.6671V19.8684H59.0044V23.718C60.0975 22.4348 61.5232 21.3417 63.3767 20.4862C65.2303 19.5832 67.2263 19.1555 69.4601 19.1555C72.6918 19.1555 75.1156 20.011 76.7315 21.6744C78.3949 23.3853 79.2029 25.6666 79.2029 28.6607V49.6671Z"
                fill="#277DE3"
              />
              <path
                d="M124.827 49.6671C123.544 49.6671 122.451 49.1919 121.548 48.2889C120.645 47.3859 120.17 46.2453 120.17 45.0096C120.17 43.7739 120.645 42.6333 121.548 41.7303C122.451 40.8273 123.544 40.3521 124.827 40.3521C126.158 40.3521 127.251 40.8273 128.154 41.7303C129.057 42.6333 129.533 43.7264 129.533 45.0096C129.533 46.2928 129.057 47.3859 128.154 48.2889C127.251 49.1919 126.158 49.6671 124.827 49.6671Z"
                fill="#277DE3"
              />
              <path
                d="M166.65 17.3496C167.791 16.7792 169.122 16.4941 170.452 16.4941V33.2232C170.452 38.4986 168.884 42.6809 165.747 45.77C162.611 48.8592 158.001 50.4276 151.87 50.4276C145.786 50.4276 141.176 48.8592 137.992 45.77C134.855 42.6809 133.287 38.4986 133.287 33.2232V0.572937C135.758 0.572937 137.945 1.57098 139.561 3.18686C141.176 4.80274 142.174 7.03645 142.174 9.46026V32.9856C142.174 35.9322 143.03 38.3085 144.693 40.0669C146.404 41.8254 148.781 42.6809 151.87 42.6809C154.959 42.6809 157.335 41.8254 158.999 40.0669C160.662 38.3085 161.517 35.9797 161.517 32.9856V25.4765C161.517 22.6249 162.848 20.0585 164.987 18.4427V13.1673C164.036 13.0247 163.228 12.597 162.516 11.8366C161.613 10.9336 161.137 9.79295 161.137 8.55728C161.137 7.27408 161.565 6.18099 162.516 5.27799C163.419 4.375 164.512 3.89975 165.795 3.89975C167.126 3.89975 168.219 4.375 169.122 5.27799C170.025 6.18099 170.5 7.27408 170.5 8.55728C170.5 9.84047 170.072 10.9336 169.122 11.8366C168.409 12.5494 167.601 12.9772 166.65 13.1673V17.3496Z"
                fill="#277DE3"
              />
              <path
                d="M107.386 8.41468V23.6705C105.104 20.6288 102.015 19.108 98.2132 19.108C94.316 19.108 91.1793 20.5338 88.708 23.3378C86.2366 26.1418 85.001 29.9439 85.001 34.744C85.001 39.5916 86.2366 43.4412 88.708 46.2453C91.1793 49.0493 94.316 50.4275 98.2132 50.4275C101.92 50.4275 104.962 48.9067 107.386 45.8651V49.7147C111.758 49.7147 115.275 46.1978 115.275 41.8254V0.572919C110.903 0.525393 107.386 4.08983 107.386 8.41468ZM100.685 43.8214C99.3063 43.8214 97.9755 43.4888 96.8349 42.9185L92.2724 44.5819C91.512 44.867 90.7041 44.1066 90.9892 43.2987L92.7002 38.7837C92.1299 37.5956 91.8447 36.3124 91.8447 34.9341C91.8447 30.7518 94.7913 27.2349 98.6884 26.2844C98.7835 26.2369 98.8785 26.2369 98.9736 26.2369C99.1162 26.1894 99.2587 26.1894 99.4013 26.1418C99.829 26.0468 100.304 26.0468 100.732 26.0468C105.627 26.0468 109.619 30.039 109.619 34.9341C109.524 39.8768 105.58 43.8214 100.685 43.8214Z"
                fill="#277DE3"
              />
              <path
                d="M104.439 36.0271C105.095 36.0271 105.627 35.4952 105.627 34.839C105.627 34.1828 105.095 33.6508 104.439 33.6508C103.783 33.6508 103.251 34.1828 103.251 34.839C103.251 35.4952 103.783 36.0271 104.439 36.0271Z"
                fill="#277DE3"
              />
              <path
                d="M100.447 36.0271C101.103 36.0271 101.635 35.4952 101.635 34.839C101.635 34.1828 101.103 33.6508 100.447 33.6508C99.7907 33.6508 99.2588 34.1828 99.2588 34.839C99.2588 35.4952 99.7907 36.0271 100.447 36.0271Z"
                fill="#277DE3"
              />
              <path
                d="M96.4547 36.0272C97.1109 36.0272 97.6429 35.4952 97.6429 34.839C97.6429 34.1828 97.1109 33.6509 96.4547 33.6509C95.7986 33.6509 95.2666 34.1828 95.2666 34.839C95.2666 35.4952 95.7986 36.0272 96.4547 36.0272Z"
                fill="#277DE3"
              />
              <path
                d="M40.2791 19.8684H43.3683V41.8253C43.3683 46.1502 39.8514 49.6671 35.5265 49.6671V19.8684H38.6157V16.5891C37.6652 16.4465 36.8573 16.0188 36.1444 15.2584C35.2414 14.3554 34.7661 13.2147 34.7661 11.9791C34.7661 10.6959 35.2414 9.60279 36.1444 8.69979C37.0474 7.7968 38.1405 7.32153 39.4237 7.32153C40.7544 7.32153 41.895 7.7968 42.798 8.69979C43.6535 9.55526 44.1287 10.6959 44.1287 11.884C44.1287 13.1672 43.701 14.3078 42.7505 15.2108C42.0376 15.9237 41.2296 16.3515 40.2791 16.5416V19.8684Z"
                fill="#277DE3"
              />
            </svg>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="32px">
            <Flex gap={"8px"}>
              <Text
                color="var(--Text, #131619)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="24px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="44px"
              >
                👋Hi
              </Text>
              <Text
                color="var(--Input-Text-In-Active, #787878)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="24px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="44px"
              >
                Your name here
                <chakra.span color="var(--Text, #131619)">!</chakra.span>
              </Text>
              <Text
                color="var(--Text, #131619)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="24px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="44px"
              >
                Tell us your position
              </Text>
            </Flex>
            <Flex flexDirection="column" alignItems="flex-start" gap="24px">
              <Flex width="791px" alignItems="flex-start" gap="24px">
                <Flex
                  padding="16px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="32px"
                  flex="1 0 0"
                  borderRadius="16px"
                  background="#F0F7FF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                  >
                    <path
                      d="M29.6 2.31158C28.8504 1.68481 27.9721 1.23076 27.0273 0.981662C26.0825 0.732561 25.0945 0.694521 24.1333 0.870242L19.0373 1.79558C17.8608 2.01163 16.7911 2.61694 16 3.51424C15.2069 2.61539 14.1341 2.00995 12.9547 1.79558L7.86667 0.870242C6.90554 0.694367 5.91751 0.731909 4.9725 0.98021C4.0275 1.22851 3.14862 1.6815 2.39809 2.30711C1.64756 2.93273 1.04371 3.71567 0.62931 4.60052C0.214904 5.48537 6.50833e-05 6.45049 0 7.42758L0 21.8182C7.66078e-05 23.3793 0.547969 24.8908 1.54818 26.0894C2.54839 27.2879 3.93748 28.0975 5.47333 28.3769L13.8547 29.9009C15.2733 30.1587 16.7267 30.1587 18.1453 29.9009L26.5333 28.3769C28.068 28.0961 29.4555 27.2859 30.4544 26.0875C31.4533 24.8891 32.0002 23.3784 32 21.8182V7.42758C32.0006 6.45083 31.7859 5.48597 31.371 4.6017C30.9562 3.71742 30.3515 2.93549 29.6 2.31158ZM14.6667 27.3316C14.5544 27.3153 14.4423 27.2971 14.3307 27.2769L5.95067 25.7542C5.02902 25.5866 4.19546 25.1007 3.59532 24.3814C2.99518 23.6621 2.66653 22.755 2.66667 21.8182V7.42758C2.66667 6.36671 3.08809 5.34929 3.83824 4.59915C4.58839 3.849 5.6058 3.42758 6.66667 3.42758C6.90812 3.42815 7.14905 3.45001 7.38667 3.49291L12.48 4.42624C13.0928 4.53838 13.647 4.86154 14.0465 5.33963C14.4459 5.81773 14.6653 6.42058 14.6667 7.04357V27.3316ZM29.3333 21.8182C29.3335 22.755 29.0048 23.6621 28.4047 24.3814C27.8045 25.1007 26.971 25.5866 26.0493 25.7542L17.6693 27.2769C17.5577 27.2971 17.4456 27.3153 17.3333 27.3316V7.04357C17.3332 6.41906 17.5523 5.81431 17.9524 5.33479C18.3525 4.85526 18.9082 4.53136 19.5227 4.41957L24.6173 3.48624C25.1943 3.38127 25.7873 3.40444 26.3543 3.55412C26.9213 3.7038 27.4485 3.97632 27.8984 4.35238C28.3484 4.72844 28.7102 5.19885 28.9582 5.73027C29.2061 6.2617 29.3342 6.84115 29.3333 7.42758V21.8182Z"
                      fill="#4B6481"
                    />
                  </svg>
                  <Text
                    color="#000"
                    textAlign="center"
                    className={plus_jakarta?.className}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="44px"
                  >
                    Student
                  </Text>
                </Flex>

                <Flex
                  padding="16px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="32px"
                  flex="1 0 0"
                  borderRadius="16px"
                  background="#F0F7FF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M10.6665 17.7609C9.47982 17.7609 8.31978 17.409 7.33308 16.7497C6.34639 16.0904 5.57735 15.1533 5.12323 14.057C4.6691 12.9606 4.55028 11.7542 4.78179 10.5903C5.0133 9.42646 5.58475 8.35736 6.42386 7.51825C7.26298 6.67913 8.33208 6.10769 9.49596 5.87618C10.6598 5.64466 11.8662 5.76348 12.9626 6.21761C14.059 6.67174 14.996 7.44077 15.6553 8.42747C16.3146 9.41416 16.6665 10.5742 16.6665 11.7609C16.6647 13.3516 16.032 14.8767 14.9072 16.0016C13.7824 17.1264 12.2573 17.7591 10.6665 17.7609ZM10.6665 8.42755C10.0072 8.42755 9.36277 8.62305 8.8146 8.98932C8.26644 9.35559 7.8392 9.87619 7.58691 10.4853C7.33461 11.0944 7.2686 11.7646 7.39722 12.4112C7.52584 13.0578 7.84331 13.6517 8.30948 14.1179C8.77566 14.5841 9.3696 14.9016 10.0162 15.0302C10.6628 15.1588 11.333 15.0928 11.9421 14.8405C12.5512 14.5882 13.0718 14.161 13.4381 13.6128C13.8043 13.0646 13.9998 12.4202 13.9998 11.7609C13.9998 10.8768 13.6486 10.029 13.0235 9.40386C12.3984 8.77874 11.5506 8.42755 10.6665 8.42755ZM20.6665 31.0942V30.4276C20.6665 27.7754 19.6129 25.2318 17.7376 23.3565C15.8622 21.4811 13.3187 20.4276 10.6665 20.4276C8.01434 20.4276 5.4708 21.4811 3.59544 23.3565C1.72007 25.2318 0.666504 27.7754 0.666504 30.4276L0.666504 31.0942C0.666504 31.4478 0.80698 31.787 1.05703 32.037C1.30708 32.2871 1.64622 32.4276 1.99984 32.4276C2.35346 32.4276 2.6926 32.2871 2.94265 32.037C3.19269 31.787 3.33317 31.4478 3.33317 31.0942V30.4276C3.33317 28.4826 4.10579 26.6174 5.48105 25.2421C6.85632 23.8668 8.72158 23.0942 10.6665 23.0942C12.6114 23.0942 14.4767 23.8668 15.852 25.2421C17.2272 26.6174 17.9998 28.4826 17.9998 30.4276V31.0942C17.9998 31.4478 18.1403 31.787 18.3904 32.037C18.6404 32.2871 18.9795 32.4276 19.3332 32.4276C19.6868 32.4276 20.0259 32.2871 20.276 32.037C20.526 31.787 20.6665 31.4478 20.6665 31.0942ZM32.6665 24.4276C32.6665 22.6258 32.1449 20.8626 31.1648 19.3507C30.1847 17.8389 28.7879 16.643 27.1431 15.9075C25.4983 15.172 23.6758 14.9283 21.8955 15.2059C20.1152 15.4834 18.4534 16.2703 17.1105 17.4716C16.9782 17.5878 16.8702 17.7291 16.7929 17.8874C16.7155 18.0456 16.6702 18.2176 16.6597 18.3934C16.6491 18.5692 16.6736 18.7454 16.7315 18.9117C16.7894 19.0781 16.8798 19.2313 16.9972 19.3625C17.1147 19.4937 17.2571 19.6004 17.416 19.6763C17.5749 19.7522 17.7473 19.7959 17.9233 19.8048C18.0992 19.8137 18.2751 19.7876 18.4409 19.7281C18.6067 19.6687 18.759 19.5769 18.8892 19.4582C19.8484 18.6004 21.0355 18.0385 22.307 17.8404C23.5786 17.6424 24.8803 17.8165 26.0551 18.342C27.2298 18.8674 28.2274 19.7216 28.9274 20.8014C29.6273 21.8813 29.9998 23.1407 29.9998 24.4276C29.9998 24.7812 30.1403 25.1203 30.3904 25.3704C30.6404 25.6204 30.9795 25.7609 31.3332 25.7609C31.6868 25.7609 32.0259 25.6204 32.276 25.3704C32.526 25.1203 32.6665 24.7812 32.6665 24.4276ZM23.9998 12.4276C22.8132 12.4276 21.6531 12.0757 20.6664 11.4164C19.6797 10.7571 18.9107 9.82001 18.4566 8.72365C18.0024 7.6273 17.8836 6.4209 18.1151 5.25701C18.3466 4.09313 18.9181 3.02403 19.7572 2.18491C20.5963 1.3458 21.6654 0.774354 22.8293 0.542842C23.9932 0.311331 25.1996 0.430151 26.2959 0.884277C27.3923 1.3384 28.3294 2.10744 28.9887 3.09413C29.6479 4.08083 29.9998 5.24087 29.9998 6.42755C29.9981 8.01831 29.3654 9.54341 28.2405 10.6682C27.1157 11.7931 25.5906 12.4258 23.9998 12.4276ZM23.9998 3.09422C23.3406 3.09422 22.6961 3.28972 22.1479 3.65599C21.5998 4.02226 21.1725 4.54286 20.9202 5.15194C20.6679 5.76103 20.6019 6.43125 20.7306 7.07786C20.8592 7.72446 21.1766 8.3184 21.6428 8.78458C22.109 9.25075 22.7029 9.56822 23.3495 9.69684C23.9961 9.82546 24.6664 9.75945 25.2754 9.50715C25.8845 9.25486 26.4051 8.82762 26.7714 8.27945C27.1377 7.73129 27.3332 7.08682 27.3332 6.42755C27.3332 5.5435 26.982 4.69565 26.3569 4.07053C25.7317 3.44541 24.8839 3.09422 23.9998 3.09422Z"
                      fill="#4B6481"
                    />
                  </svg>
                  <Text
                    color="#000"
                    textAlign="center"
                    className={plus_jakarta?.className}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="44px"
                  >
                    Parent
                  </Text>
                </Flex>

                <Flex
                  padding="16px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="32px"
                  flex="1 0 0"
                  borderRadius="16px"
                  background="#F0F7FF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="31"
                    viewBox="0 0 33 31"
                    fill="none"
                  >
                    <path
                      d="M29.743 6.40087L19.911 1.71687C17.7468 0.424124 15.053 0.401187 12.867 1.65687L2.92441 6.40087C2.8871 6.41956 2.84841 6.43956 2.81241 6.46087C0.452909 7.81 -0.366217 10.8164 0.982908 13.1759C1.44023 13.9758 2.11292 14.6312 2.92441 15.0676L5.6671 16.3742V22.9076C5.66872 25.829 7.56966 28.41 10.3591 29.2782C12.3003 29.8398 14.3131 30.1147 16.3338 30.0942C18.3541 30.1169 20.367 29.8442 22.3085 29.2849C25.0979 28.4167 26.9988 25.8357 27.0005 22.9142V16.3716L29.6672 15.0969V26.0942C29.6672 26.8306 30.2641 27.4275 31.0005 27.4275C31.7368 27.4275 32.3338 26.8306 32.3338 26.0942V10.0942C32.3427 8.5285 31.1064 7.08212 29.743 6.40087ZM24.3337 22.9142C24.3344 24.6617 23.2007 26.2074 21.5337 26.7316C19.8433 27.2146 18.0916 27.449 16.3337 27.4276C14.5758 27.449 12.8241 27.2146 11.1337 26.7316C9.46678 26.2073 8.33303 24.6617 8.33372 22.9142V17.6449L12.7564 19.7516C13.8476 20.3996 15.094 20.7401 16.3631 20.7369C17.5711 20.7455 18.7588 20.4257 19.7991 19.8116L24.3337 17.6449V22.9142ZM28.6004 12.6609L18.5444 17.4609C17.8563 17.8615 17.0723 18.0676 16.2761 18.057C15.4799 18.0465 14.7016 17.8197 14.0244 17.4009L4.18572 12.7209C3.08903 12.1295 2.67941 10.7611 3.27078 9.66444C3.4708 9.29357 3.77066 8.98611 4.13641 8.77687L14.1297 4.00356C14.8181 3.60374 15.602 3.39817 16.398 3.40873C17.194 3.4193 17.9722 3.64561 18.6497 4.06356L28.4817 8.74756C28.8369 8.94478 29.1337 9.23243 29.3418 9.58134C29.55 9.93024 29.6622 10.328 29.667 10.7342C29.6677 11.1196 29.5701 11.4987 29.3834 11.8358C29.1968 12.1729 28.9273 12.4569 28.6004 12.6609Z"
                      fill="#4B6481"
                    />
                  </svg>
                  <Text
                    color="#000"
                    textAlign="center"
                    className={plus_jakarta?.className}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="44px"
                  >
                    School Counselor
                  </Text>
                </Flex>
              </Flex>

              <Flex width="791px" alignItems="flex-start" gap="24px">
                <Flex
                  padding="16px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="32px"
                  flex="1 0 0"
                  borderRadius="16px"
                  background="#F0F7FF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M25.3333 8.42758H19.0947C18.5632 8.0488 17.9659 7.7721 17.3333 7.61158V7.09425L22.04 4.89158C22.2329 4.772 22.3922 4.60514 22.5026 4.40681C22.613 4.20848 22.671 3.98524 22.671 3.75825C22.671 3.53125 22.613 3.30801 22.5026 3.10968C22.3922 2.91135 22.2329 2.74449 22.04 2.62491L17.7733 0.624912C17.4402 0.469248 17.0731 0.400268 16.7062 0.424374C16.3393 0.44848 15.9844 0.56489 15.6745 0.762801C15.3646 0.960712 15.1098 1.23371 14.9336 1.55645C14.7574 1.87919 14.6656 2.24121 14.6667 2.60891V7.61158C14.0344 7.77187 13.4375 8.0486 12.9067 8.42758H6.66667C4.89921 8.4297 3.20474 9.13276 1.95496 10.3825C0.705176 11.6323 0.00211714 13.3268 0 15.0942L0 28.4276C0 29.4884 0.421427 30.5059 1.17157 31.256C1.92172 32.0062 2.93913 32.4276 4 32.4276H28C29.0609 32.4276 30.0783 32.0062 30.8284 31.256C31.5786 30.5059 32 29.4884 32 28.4276V15.0942C31.9979 13.3268 31.2948 11.6323 30.045 10.3825C28.7953 9.13276 27.1008 8.4297 25.3333 8.42758ZM29.088 13.7609H26.2093C25.149 13.7582 24.1327 13.337 23.3813 12.5889L21.8853 11.0942H25.3333C26.1577 11.0977 26.9608 11.3557 27.6329 11.833C28.305 12.3104 28.8132 12.9837 29.088 13.7609ZM6.66667 11.0942H10.1147L8.61867 12.5889C7.8673 13.337 6.85095 13.7582 5.79067 13.7609H2.912C3.18678 12.9837 3.69498 12.3104 4.36707 11.833C5.03916 11.3557 5.84232 11.0977 6.66667 11.0942ZM17.3333 29.7609H14.6667V25.7609C14.6667 25.4073 14.8071 25.0682 15.0572 24.8181C15.3072 24.5681 15.6464 24.4276 16 24.4276C16.3536 24.4276 16.6928 24.5681 16.9428 24.8181C17.1929 25.0682 17.3333 25.4073 17.3333 25.7609V29.7609ZM28 29.7609H20V25.7609C20 24.7001 19.5786 23.6826 18.8284 22.9325C18.0783 22.1823 17.0609 21.7609 16 21.7609C14.9391 21.7609 13.9217 22.1823 13.1716 22.9325C12.4214 23.6826 12 24.7001 12 25.7609V29.7609H4C3.64638 29.7609 3.30724 29.6204 3.05719 29.3704C2.80714 29.1203 2.66667 28.7812 2.66667 28.4276V16.4276H5.79067C6.66642 16.4297 7.53391 16.2582 8.34294 15.9229C9.15198 15.5876 9.88649 15.0952 10.504 14.4742L14.1147 10.8649C14.6147 10.365 15.2929 10.0841 16 10.0841C16.7071 10.0841 17.3853 10.365 17.8853 10.8649L21.496 14.4742C22.1135 15.0952 22.848 15.5876 23.6571 15.9229C24.4661 16.2582 25.3336 16.4297 26.2093 16.4276H29.3333V28.4276C29.3333 28.7812 29.1929 29.1203 28.9428 29.3704C28.6928 29.6204 28.3536 29.7609 28 29.7609ZM9.33333 20.4276C9.33333 20.7812 9.19286 21.1203 8.94281 21.3704C8.69276 21.6204 8.35362 21.7609 8 21.7609H6.66667C6.31305 21.7609 5.97391 21.6204 5.72386 21.3704C5.47381 21.1203 5.33333 20.7812 5.33333 20.4276C5.33333 20.074 5.47381 19.7348 5.72386 19.4848C5.97391 19.2347 6.31305 19.0942 6.66667 19.0942H8C8.35362 19.0942 8.69276 19.2347 8.94281 19.4848C9.19286 19.7348 9.33333 20.074 9.33333 20.4276ZM9.33333 25.7609C9.33333 26.1145 9.19286 26.4537 8.94281 26.7037C8.69276 26.9538 8.35362 27.0942 8 27.0942H6.66667C6.31305 27.0942 5.97391 26.9538 5.72386 26.7037C5.47381 26.4537 5.33333 26.1145 5.33333 25.7609C5.33333 25.4073 5.47381 25.0682 5.72386 24.8181C5.97391 24.5681 6.31305 24.4276 6.66667 24.4276H8C8.35362 24.4276 8.69276 24.5681 8.94281 24.8181C9.19286 25.0682 9.33333 25.4073 9.33333 25.7609ZM26.6667 20.4276C26.6667 20.7812 26.5262 21.1203 26.2761 21.3704C26.0261 21.6204 25.687 21.7609 25.3333 21.7609H24C23.6464 21.7609 23.3072 21.6204 23.0572 21.3704C22.8071 21.1203 22.6667 20.7812 22.6667 20.4276C22.6667 20.074 22.8071 19.7348 23.0572 19.4848C23.3072 19.2347 23.6464 19.0942 24 19.0942H25.3333C25.687 19.0942 26.0261 19.2347 26.2761 19.4848C26.5262 19.7348 26.6667 20.074 26.6667 20.4276ZM26.6667 25.7609C26.6667 26.1145 26.5262 26.4537 26.2761 26.7037C26.0261 26.9538 25.687 27.0942 25.3333 27.0942H24C23.6464 27.0942 23.3072 26.9538 23.0572 26.7037C22.8071 26.4537 22.6667 26.1145 22.6667 25.7609C22.6667 25.4073 22.8071 25.0682 23.0572 24.8181C23.3072 24.5681 23.6464 24.4276 24 24.4276H25.3333C25.687 24.4276 26.0261 24.5681 26.2761 24.8181C26.5262 25.0682 26.6667 25.4073 26.6667 25.7609ZM18.6667 16.4276C18.6667 16.955 18.5103 17.4706 18.2173 17.9091C17.9242 18.3476 17.5078 18.6894 17.0205 18.8913C16.5332 19.0931 15.997 19.1459 15.4798 19.043C14.9625 18.9401 14.4873 18.6861 14.1144 18.3132C13.7414 17.9403 13.4875 17.4651 13.3846 16.9478C13.2817 16.4305 13.3345 15.8944 13.5363 15.4071C13.7382 14.9198 14.0799 14.5033 14.5185 14.2103C14.957 13.9173 15.4726 13.7609 16 13.7609C16.7072 13.7609 17.3855 14.0419 17.8856 14.542C18.3857 15.0421 18.6667 15.7203 18.6667 16.4276Z"
                      fill="#4B6481"
                    />
                  </svg>
                  <Text
                    color="#000"
                    textAlign="center"
                    className={plus_jakarta?.className}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="44px"
                  >
                    University Agent
                  </Text>
                </Flex>

                <Flex
                  padding="16px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="32px"
                  flex="1 0 0"
                  borderRadius="16px"
                  background="#F0F7FF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="31"
                    viewBox="0 0 33 31"
                    fill="none"
                  >
                    <path
                      d="M30.2665 2.31158C29.5169 1.68481 28.6386 1.23076 27.6938 0.981662C26.749 0.732561 25.761 0.694521 24.7998 0.870242L19.7038 1.79558C18.5273 2.01163 17.4576 2.61694 16.6665 3.51424C15.8734 2.61539 14.8006 2.00995 13.6212 1.79558L8.53317 0.870242C7.57205 0.694367 6.58401 0.731909 5.63901 0.98021C4.694 1.22851 3.81512 1.6815 3.06459 2.30711C2.31406 2.93273 1.71022 3.71567 1.29581 4.60052C0.881408 5.48537 0.666569 6.45049 0.666504 7.42758L0.666504 21.8182C0.666581 23.3793 1.21447 24.8908 2.21468 26.0894C3.21489 27.2879 4.60398 28.0975 6.13984 28.3769L14.5212 29.9009C15.9398 30.1587 17.3932 30.1587 18.8118 29.9009L27.1998 28.3769C28.7345 28.0961 30.122 27.2859 31.1209 26.0875C32.1198 24.8891 32.6667 23.3784 32.6665 21.8182V7.42758C32.6671 6.45083 32.4524 5.48597 32.0375 4.6017C31.6227 3.71742 31.018 2.93549 30.2665 2.31158ZM15.3332 27.3316C15.2209 27.3153 15.1088 27.2971 14.9972 27.2769L6.61717 25.7542C5.69552 25.5866 4.86196 25.1007 4.26182 24.3814C3.66168 23.6621 3.33303 22.755 3.33317 21.8182V7.42758C3.33317 6.36671 3.7546 5.34929 4.50474 4.59915C5.25489 3.849 6.27231 3.42758 7.33317 3.42758C7.57462 3.42815 7.81556 3.45001 8.05317 3.49291L13.1465 4.42624C13.7593 4.53838 14.3135 4.86154 14.713 5.33963C15.1124 5.81773 15.3318 6.42058 15.3332 7.04357V27.3316ZM29.9998 21.8182C30 22.755 29.6713 23.6621 29.0712 24.3814C28.471 25.1007 27.6375 25.5866 26.7158 25.7542L18.3358 27.2769C18.2242 27.2971 18.1121 27.3153 17.9998 27.3316V7.04357C17.9997 6.41906 18.2188 5.81431 18.6189 5.33479C19.019 4.85526 19.5747 4.53136 20.1892 4.41957L25.2838 3.48624C25.8608 3.38127 26.4538 3.40444 27.0208 3.55412C27.5878 3.7038 28.115 3.97632 28.5649 4.35238C29.0149 4.72844 29.3767 5.19885 29.6247 5.73027C29.8726 6.2617 30.0007 6.84115 29.9998 7.42758V21.8182Z"
                      fill="#4B6481"
                    />
                  </svg>
                  <Text
                    color="#000"
                    textAlign="center"
                    className={plus_jakarta?.className}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="44px"
                  >
                    Teacher
                  </Text>
                </Flex>

                <Flex
                  padding="16px"
                  flexDirection="column"
                  alignItems="flex-start"
                  gap="32px"
                  flex="1 0 0"
                  borderRadius="16px"
                  background="#F0F7FF"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                  >
                    <path
                      d="M26.3335 0.427551H17.0002C15.4094 0.429316 13.8843 1.06202 12.7595 2.18686C11.6346 3.3117 11.0019 4.83679 11.0002 6.42755V21.0942C11.0002 23.6676 13.0935 25.7609 15.6668 25.7609H26.3335C29.6415 25.7609 32.3335 23.0689 32.3335 19.7609V6.42755C32.3335 3.11955 29.6415 0.427551 26.3335 0.427551ZM17.0002 3.09422H26.3335C28.1708 3.09422 29.6668 4.58888 29.6668 6.42755V16.4276H15.6668C14.9749 16.4272 14.2917 16.5812 13.6668 16.8782V6.42755C13.6668 4.58888 15.1628 3.09422 17.0002 3.09422ZM26.3335 23.0942H15.6668C14.5642 23.0942 13.6668 22.1969 13.6668 21.0942C13.6668 19.9916 14.5642 19.0942 15.6668 19.0942H29.6668V19.7609C29.6668 21.5996 28.1708 23.0942 26.3335 23.0942ZM19.8842 28.8276C20.0069 28.9525 20.1037 29.1004 20.1692 29.2628C20.2347 29.4252 20.2675 29.599 20.2658 29.7741C20.2641 29.9492 20.2278 30.1223 20.1591 30.2833C20.0904 30.4444 19.9907 30.5904 19.8655 30.7129C18.7463 31.8149 17.2375 32.4311 15.6668 32.4276H5.00016C2.42683 32.4276 0.333496 30.3342 0.333496 27.7609V13.0942C0.333496 9.78622 3.0255 7.09422 6.3335 7.09422H7.00016C7.35379 7.09422 7.69292 7.23469 7.94297 7.48474C8.19302 7.73479 8.3335 8.07393 8.3335 8.42755C8.3335 8.78117 8.19302 9.12031 7.94297 9.37036C7.69292 9.62041 7.35379 9.76089 7.00016 9.76089H6.3335C5.44977 9.76194 4.60253 10.1135 3.97764 10.7384C3.35275 11.3633 3.00122 12.2105 3.00016 13.0942V23.5449C3.62483 23.2472 4.30821 23.0933 5.00016 23.0942H7.00016C7.35379 23.0942 7.69292 23.2347 7.94297 23.4847C8.19302 23.7348 8.3335 24.0739 8.3335 24.4276C8.3335 24.7812 8.19302 25.1203 7.94297 25.3704C7.69292 25.6204 7.35379 25.7609 7.00016 25.7609H5.00016C3.8975 25.7609 3.00016 26.6582 3.00016 27.7609C3.00016 28.8636 3.8975 29.7609 5.00016 29.7609H15.6668C16.5442 29.7609 17.3735 29.4222 17.9988 28.8089C18.1238 28.6862 18.2717 28.5893 18.4341 28.5238C18.5965 28.4583 18.7703 28.4255 18.9454 28.4273C19.1205 28.429 19.2935 28.4652 19.4546 28.5339C19.6157 28.6026 19.7617 28.7024 19.8842 28.8276Z"
                      fill="#4B6481"
                    />
                  </svg>
                  <Text
                    color="#000"
                    textAlign="center"
                    className={plus_jakarta?.className}
                    fontSize="16px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="44px"
                  >
                    Others
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          height="48px"
          padding="8px 24px"
          justifyContent="center"
          alignItems="center"
          gap="12px"
          borderRadius="12px"
          background="var(--Primary, #277DE3)"
        >
          <Flex gap={"12px"}>
            <Text
              color="var(--Btn-Text-Color, #FFF)"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="0.15px"
            >
              Continue
            </Text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17 12.4276L13.6667 8.42755M17 12.4276L13.6667 16.4276M17 12.4276L7 12.4276"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" gap="16px">
        <Flex width="791px" padding="8px" alignItems="flex-start" gap="16px">
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="var(--Primary, #277DE3)"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
        </Flex>
        <Flex gap={"8px"}>
          <Text
            color="var(--Caption, #696969)"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="24px"
            letterSpacing="0.15px"
          >
            Already have an account?
          </Text>
          <Text
            color="var(--Primary, #277DE3)"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="24px"
            letterSpacing="0.15px"
          >
            Let’s Login
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Position;
