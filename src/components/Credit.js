import styled from "styled-components";
import CreditButton from "./CreditButton";

const Credit = () => {
  const discordIcon = () => (
    <svg width="32" height="31" viewBox="0 0 32 31" fill="none">
      <g clipPath="url(#clip0_82_14)">
        <path
          d="M27.0511 5.78955C25.0791 4.90024 22.9654 4.24293 20.755 3.86916C20.7353 3.86538 20.7149 3.86782 20.6967 3.87613C20.6784 3.88444 20.6632 3.89822 20.6532 3.91556C20.3825 4.39115 20.0809 5.01109 19.8696 5.50085C17.5252 5.15059 15.1419 5.15059 12.7976 5.50085C12.5622 4.95806 12.2967 4.42881 12.0024 3.91556C11.9924 3.89801 11.9773 3.88392 11.9591 3.87517C11.9409 3.86641 11.9205 3.86342 11.9006 3.86658C9.69145 4.24035 7.57773 4.89767 5.60449 5.78827C5.58751 5.79539 5.57312 5.80753 5.56325 5.82306C1.55233 11.7196 0.452932 17.4705 0.992962 23.1492C0.994465 23.1631 0.998782 23.1765 1.00565 23.1887C1.01252 23.2009 1.0218 23.2116 1.03292 23.22C3.37399 24.9245 5.98514 26.2228 8.75703 27.0608C8.77636 27.0668 8.79702 27.0668 8.81634 27.0608C8.83565 27.0548 8.85271 27.0431 8.8653 27.0273C9.46177 26.2296 9.99034 25.3833 10.4454 24.4973C10.4518 24.4852 10.4554 24.4719 10.4561 24.4582C10.4568 24.4446 10.4546 24.4309 10.4496 24.4182C10.4446 24.4055 10.4369 24.394 10.4271 24.3845C10.4172 24.3751 10.4055 24.3678 10.3926 24.3633C9.56 24.0497 8.75328 23.6714 7.97985 23.2316C7.96596 23.2237 7.95424 23.2125 7.94577 23.1989C7.9373 23.1853 7.93233 23.1698 7.93131 23.1539C7.93028 23.1379 7.93324 23.1219 7.93992 23.1074C7.94659 23.0928 7.95677 23.0802 7.96954 23.0705C8.13194 22.9507 8.29433 22.8257 8.449 22.7006C8.46292 22.6894 8.47969 22.6822 8.49744 22.68C8.51519 22.6777 8.53322 22.6804 8.54953 22.6877C13.6109 24.9613 19.0924 24.9613 24.0944 22.6877C24.1108 22.6799 24.129 22.6769 24.147 22.6789C24.165 22.681 24.1821 22.6881 24.1962 22.6993C24.3509 22.8257 24.512 22.9507 24.6757 23.0705C24.6886 23.08 24.6989 23.0925 24.7058 23.1069C24.7127 23.1213 24.7159 23.1372 24.7152 23.1532C24.7144 23.1691 24.7097 23.1847 24.7014 23.1983C24.6932 23.212 24.6817 23.2235 24.668 23.2316C23.8972 23.675 23.0956 24.0501 22.2539 24.362C22.241 24.3667 22.2292 24.3741 22.2194 24.3837C22.2096 24.3933 22.2019 24.4049 22.1969 24.4177C22.1919 24.4305 22.1897 24.4442 22.1904 24.4579C22.1911 24.4717 22.1948 24.4851 22.2011 24.4973C22.6651 25.3827 23.1961 26.2257 23.7799 27.026C23.7921 27.0425 23.809 27.0547 23.8284 27.0612C23.8477 27.0677 23.8686 27.068 23.8882 27.0621C26.6649 26.2265 29.2803 24.9275 31.6239 23.22C31.6354 23.2121 31.645 23.2017 31.6521 23.1897C31.6592 23.1777 31.6636 23.1643 31.6652 23.1504C32.3096 16.585 30.5851 10.8805 27.091 5.82564C27.0824 5.80922 27.0683 5.79641 27.0511 5.78955ZM11.202 19.6912C9.67857 19.6912 8.42193 18.3134 8.42193 16.6237C8.42193 14.9327 9.65408 13.5562 11.202 13.5562C12.7615 13.5562 14.0065 14.9443 13.9821 16.6237C13.9821 18.3147 12.7499 19.6912 11.202 19.6912V19.6912ZM21.4806 19.6912C19.9559 19.6912 18.7006 18.3134 18.7006 16.6237C18.7006 14.9327 19.9314 13.5562 21.4806 13.5562C23.0401 13.5562 24.2852 14.9443 24.2607 16.6237C24.2607 18.3147 23.0414 19.6912 21.4806 19.6912V19.6912Z"
          fill="rgb(var(--fg))"
        />
      </g>
      <defs>
        <clipPath id="clip0_82_14">
          <rect
            width="30.9326"
            height="30.9326"
            fill="rgb(var(--fg))"
            transform="translate(0.865234)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  const telegramIcon = () => (
    <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
      <path
        d="M28.921 5.9574L24.837 25.2177C24.5286 26.5768 23.7253 26.9152 22.5837 26.2753L16.3605 21.6895L13.3581 24.5778C13.0256 24.9104 12.7481 25.1878 12.1073 25.1878L12.5548 18.8505L24.0878 8.42911C24.5895 7.98252 23.9786 7.73409 23.3087 8.18164L9.05074 17.1598L2.91256 15.2381C1.57763 14.8215 1.55346 13.9032 3.19096 13.2623L27.1994 4.01252C28.3111 3.59589 29.2835 4.25998 28.921 5.95837V5.9574Z"
        fill="rgb(var(--fg))"
      />
    </svg>
  );

  return (
    <Div className="container">
      <Content>
        <P>
          <svg width="282" height="168" viewBox="0 0 282 168" fill="none">
            <path
              d="M5.375 67.4L11.625 61.1358V39.8377M11.625 39.8377V26.9962M11.625 39.8377L1.625 29.8151V17.6L14.4375 4.75849M117.25 156.664H181L188.5 164.181H244.75M199.438 17.6H145.688L134.438 6.32453H73.1875M276.938 57.6906L271.938 62.7019V99.3472L276.938 104.358M31.3125 156.664H56.3125L63.8125 149.147H183.188L190.688 156.664H269.438L276.938 149.147V112.815L264.75 100.6V61.7623L276.938 49.5472V34.8264L259.75 17.6H212.562L205.062 25.117H143.188L131.938 13.8415H56.3125L47.25 4.75849H31.3125L18.5 17.6V67.4L5.375 80.5547V129.728L31.3125 156.664ZM6.625 68.966C6.625 70.5229 5.3658 71.7849 3.8125 71.7849C2.2592 71.7849 1 70.5229 1 68.966C1 67.4092 2.2592 66.1472 3.8125 66.1472C5.3658 66.1472 6.625 67.4092 6.625 68.966ZM14.125 24.8038C14.125 26.1876 13.0057 27.3094 11.625 27.3094C10.2443 27.3094 9.125 26.1876 9.125 24.8038C9.125 23.4199 10.2443 22.2981 11.625 22.2981C13.0057 22.2981 14.125 23.4199 14.125 24.8038ZM17.875 3.50566C17.875 4.8895 16.7557 6.01132 15.375 6.01132C13.9943 6.01132 12.875 4.8895 12.875 3.50566C12.875 2.12182 13.9943 1 15.375 1C16.7557 1 17.875 2.12182 17.875 3.50566ZM73.5 6.63774C73.5 8.02157 72.3807 9.1434 71 9.1434C69.6193 9.1434 68.5 8.02157 68.5 6.63774C68.5 5.2539 69.6193 4.13208 71 4.13208C72.3807 4.13208 73.5 5.2539 73.5 6.63774ZM203.5 17.9132C203.5 19.297 202.381 20.4189 201 20.4189C199.619 20.4189 198.5 19.297 198.5 17.9132C198.5 16.5294 199.619 15.4075 201 15.4075C202.381 15.4075 203.5 16.5294 203.5 17.9132ZM117.875 156.351C117.875 157.735 116.756 158.857 115.375 158.857C113.994 158.857 112.875 157.735 112.875 156.351C112.875 154.967 113.994 153.845 115.375 153.845C116.756 153.845 117.875 154.967 117.875 156.351ZM249.125 164.494C249.125 165.878 248.006 167 246.625 167C245.244 167 244.125 165.878 244.125 164.494C244.125 163.11 245.244 161.989 246.625 161.989C248.006 161.989 249.125 163.11 249.125 164.494ZM281 56.7509C281 58.1348 279.881 59.2566 278.5 59.2566C277.119 59.2566 276 58.1348 276 56.7509C276 55.3671 277.119 54.2453 278.5 54.2453C279.881 54.2453 281 55.3671 281 56.7509ZM281 105.611C281 106.995 279.881 108.117 278.5 108.117C277.119 108.117 276 106.995 276 105.611C276 104.227 277.119 103.106 278.5 103.106C279.881 103.106 281 104.227 281 105.611Z"
              stroke="rgb(var(--fg))"
              strokeWidth="3"
            />
          </svg>
          Credit
        </P>
        <CreditButtons>
          <CreditButton
            icon={discordIcon()}
            name="GamerKing64"
            url="https://github.com/gamerking64"
          />
          <CreditButton
            icon={discordIcon()}
            name="alan#1000"
            url="https://github.com/alannxq"
          />
          <CreditButton
            icon={telegramIcon()}
            name="RoyMarkham"
            url="https://t.me/RoyMarkham"
          />
          <CreditButton
            icon={discordIcon()}
            name="Ripl3yPlays"
            url="https://twitch.tv/ripl3yplays"
          />
        </CreditButtons>
      </Content>
    </Div>
  );
};

const P = styled.p`
  text-align: center;
  color: rgb(var(--fg2));
  font-weight: bold;
  font-size: var(--fz-2);
  position: relative;
  margin-inline-end: 3rem;

  & > svg {
    position: absolute;
    inset: -1.65rem auto auto -3.5rem;
    height: 250%;
    width: 250%;
  }
`;

const Div = styled.div`
  padding-block: var(--padding-section);
  overflow-x: hidden;
  padding-inline-start: 5rem;
`;

const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: stretch;
  gap: .75rem;
  padding: 1rem 1rem 0;
}
`;

const CreditButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: start;
    border-inline-start: 2px solid rgb(var(--fg));
    position: relative;
    margin-top: 2rem;

    &::after,
    &::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      border: 2px solid rgb(var(--fg));
      border-radius: 50%;
    }
    &::before {
      inset: 0 0 auto 0;
      transform: translate(-60%, -90%);
    }
    &::after {
      inset: auto 0 0;
      transform: translate(-60%, 90%);
    }
  }

  @media(min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export default Credit;
