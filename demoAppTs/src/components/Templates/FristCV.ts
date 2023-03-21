export interface CVProps {
  firstName: string;
  lastName: string;
  email: string;
}
export const FirstCV = (props: CVProps) => {
  return {
    html: `
    <body>
  <section class="container-fluid">
    <div class="header">
      <div class="header__nav">
        <div class="header__nav--name">
          <p class="">curiculum</p>
          <p>vitae</p>
        </div>
        <div class="nav__avatar">
          <img
            src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
            alt=""
          />
        </div>
      </div>
      <div class="header__navright">
        <div class="header__navright--contact">
          <ul class="contact-items">
            <li>
              <svg
                width="40"
                height="40"
                viewBox="0 0 227 228"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M160.711 33.75C160.711 32.4972 160.213 31.2957 159.327 30.4099C158.441 29.524 157.24 29.0263 155.987 29.0263H132.368C120.475 28.4339 108.831 32.5728 99.9802 40.5387C91.1292 48.5046 85.7908 59.6499 85.1316 71.5395V97.0474H61.5131C60.2603 97.0474 59.0589 97.545 58.173 98.4309C57.2871 99.3168 56.7895 100.518 56.7895 101.771V126.334C56.7895 127.587 57.2871 128.788 58.173 129.674C59.0589 130.56 60.2603 131.058 61.5131 131.058H85.1316V194.355C85.1316 195.608 85.6292 196.81 86.5151 197.695C87.401 198.581 88.6025 199.079 89.8552 199.079H118.197C119.45 199.079 120.652 198.581 121.538 197.695C122.423 196.81 122.921 195.608 122.921 194.355V131.058H147.673C148.724 131.073 149.749 130.737 150.587 130.104C151.426 129.471 152.029 128.577 152.302 127.562L159.104 102.999C159.292 102.301 159.318 101.569 159.178 100.86C159.039 100.151 158.739 99.4832 158.301 98.9082C157.863 98.3333 157.298 97.8665 156.652 97.5439C156.005 97.2213 155.293 97.0514 154.57 97.0474H122.921V71.5395C123.156 69.201 124.254 67.0341 126.001 65.4619C127.748 63.8897 130.018 63.0251 132.368 63.0368H155.987C157.24 63.0368 158.441 62.5392 159.327 61.6533C160.213 60.7674 160.711 59.566 160.711 58.3132V33.75Z"
                  
                />
              </svg>
            </li>
            <li>
              <svg
                width="40"
                height="40"
                viewBox="0 0 227 227"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.6291 0.68021C78.7218 0.125942 82.5763 0 113.368 0C144.166 0 148.015 0.132229 160.101 0.68021C172.175 1.22819 180.42 3.14917 187.631 5.95184C195.195 8.79955 202.046 13.2614 207.709 19.027C213.476 24.6896 217.938 31.5418 220.785 39.1058C223.587 46.3173 225.502 54.5617 226.057 66.6291C226.611 78.7218 226.737 82.5763 226.737 113.368C226.737 144.16 226.605 148.015 226.057 160.108C225.508 172.175 223.587 180.42 220.785 187.631C217.888 195.082 214.008 201.411 207.709 207.709C202.047 213.476 195.195 217.938 187.631 220.785C180.42 223.587 172.175 225.502 160.108 226.057C148.015 226.611 144.16 226.737 113.368 226.737C82.5763 226.737 78.7218 226.605 66.6291 226.057C54.5617 225.508 46.3173 223.587 39.1058 220.785C31.6549 217.888 25.3253 214.008 19.027 207.709C13.2604 202.047 8.79821 195.195 5.95184 187.631C3.14917 180.42 1.23448 172.175 0.68021 160.108C0.125942 148.015 0 144.166 0 113.368C0 82.57 0.132229 78.7218 0.68021 66.6355C1.22819 54.5617 3.14917 46.3173 5.95184 39.1058C8.79955 31.5423 13.2614 24.6904 19.027 19.027C24.6895 13.2604 31.5417 8.79821 39.1058 5.95184C46.3173 3.14917 54.5617 1.23448 66.6291 0.68021ZM159.182 21.0865C147.227 20.5448 143.638 20.4252 113.368 20.4252C83.0991 20.4252 79.5091 20.5448 67.555 21.0865C56.5016 21.5904 50.4993 23.4357 46.5062 24.9915C41.2157 27.0447 37.4367 29.5009 33.4688 33.4688C29.5073 37.4367 27.0447 41.2157 24.9915 46.5062C23.4357 50.4993 21.5904 56.5016 21.0865 67.555C20.5448 79.5091 20.4252 83.0991 20.4252 113.368C20.4252 143.638 20.5448 147.227 21.0865 159.182C21.5904 170.235 23.4357 176.237 24.9915 180.231C26.8076 185.155 29.7045 189.61 33.4688 193.268C37.1265 197.032 41.5816 199.929 46.5062 201.745C50.4993 203.302 56.5016 205.146 67.555 205.65C79.5091 206.192 83.0928 206.312 113.368 206.312C143.644 206.312 147.227 206.192 159.182 205.65C170.235 205.146 176.237 203.302 180.231 201.745C185.521 199.692 189.301 197.236 193.268 193.268C197.032 189.611 199.929 185.155 201.745 180.231C203.302 176.237 205.146 170.235 205.65 159.182C206.192 147.227 206.312 143.638 206.312 113.368C206.312 83.0991 206.192 79.5091 205.65 67.555C205.146 56.5016 203.302 50.4993 201.745 46.5062C199.692 41.2157 197.236 37.4367 193.268 33.4688C189.301 29.5073 185.521 27.0447 180.231 24.9915C176.237 23.4357 170.235 21.5904 159.182 21.0865ZM98.8933 148.316C103.483 150.217 108.401 151.195 113.368 151.195C123.402 151.195 133.022 147.21 140.116 140.116C147.211 133.022 151.196 123.4 151.196 113.368C151.196 103.336 147.211 93.7145 140.116 86.6205C133.022 79.5265 123.402 75.5411 113.368 75.5411C108.401 75.5411 103.483 76.5196 98.8933 78.4205C94.3029 80.3215 90.1334 83.1078 86.6208 86.6205C83.1082 90.1331 80.3218 94.3029 78.4209 98.8923C76.5199 103.482 75.5415 108.401 75.5415 113.368C75.5415 118.336 76.5199 123.255 78.4209 127.845C80.3218 132.434 83.1082 136.604 86.6208 140.116C90.1334 143.629 94.3029 146.415 98.8933 148.316ZM72.1647 72.1643C83.0927 61.2363 97.9142 55.097 113.368 55.097C128.824 55.097 143.645 61.2363 154.573 72.1643C165.5 83.0923 171.64 97.9142 171.64 113.368C171.64 128.823 165.5 143.644 154.573 154.573C143.645 165.5 128.824 171.64 113.368 171.64C97.9142 171.64 83.0927 165.5 72.1647 154.573C61.2367 143.644 55.0974 128.823 55.0974 113.368C55.0974 97.9142 61.2367 83.0923 72.1647 72.1643ZM184.561 63.7788C187.143 61.1955 188.595 57.6921 188.595 54.0389C188.595 50.3857 187.143 46.8822 184.561 44.299C181.977 41.7159 178.474 40.2646 174.82 40.2646C171.168 40.2646 167.664 41.7159 165.081 44.299C162.497 46.8822 161.046 50.3857 161.046 54.0389C161.046 57.6921 162.497 61.1955 165.081 63.7788C167.664 66.362 171.168 67.8132 174.82 67.8132C178.474 67.8132 181.977 66.362 184.561 63.7788Z"
                  
                />
              </svg>
            </li>
            <li>
              <svg
                width="40"
                height="40"
                viewBox="0 0 227 240"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M201.168 23.2833C195.237 17.8199 171.236 0.402648 117.723 0.169172C117.723 0.169172 54.6382 -3.61313 23.9128 24.5907C6.82234 41.6812 0.798665 66.7565 0.144933 97.8087C-0.508799 128.861 -1.30262 187.043 54.7783 202.826H54.825L54.7783 226.921C54.7783 226.921 54.4047 236.68 60.8486 238.641C68.6 241.069 73.1761 233.645 80.6007 225.66C84.6631 221.271 90.2666 214.827 94.5158 209.924C132.899 213.146 162.364 205.768 165.726 204.694C173.477 202.172 217.324 196.569 224.422 138.387C231.8 78.3368 220.873 40.4204 201.168 23.2833ZM207.658 133.997C201.634 182.56 166.099 185.642 159.562 187.744C156.76 188.631 130.845 195.075 98.2981 192.973C98.2981 192.973 74.0167 222.251 66.452 229.863C63.9772 232.337 61.2689 232.104 61.3156 227.201C61.3156 223.979 61.5024 187.183 61.5024 187.183C61.4557 187.183 61.4557 187.183 61.5024 187.183C13.9667 174.015 16.7684 124.472 17.2821 98.5558C17.7957 72.64 22.6987 51.3937 37.1742 37.105C63.1834 13.524 116.743 17.0261 116.743 17.0261C161.99 17.2129 183.657 30.8479 188.7 35.424C205.37 49.7127 213.869 83.8936 207.658 133.997ZM142.752 96.2678C142.939 100.284 136.915 100.564 136.728 96.548C136.215 86.275 131.405 81.2786 121.506 80.7183C117.49 80.4848 117.863 74.4612 121.832 74.6946C134.86 75.3951 142.098 82.8663 142.752 96.2678ZM152.231 101.544C152.698 81.7456 140.324 66.2428 116.836 64.5151C112.867 64.2349 113.287 58.2112 117.256 58.4914C144.34 60.4526 158.768 79.084 158.255 101.684C158.208 105.7 152.138 105.513 152.231 101.544ZM174.178 107.801C174.224 111.817 168.154 111.864 168.154 107.848C167.874 69.7916 142.518 49.059 111.746 48.8255C107.777 48.7788 107.777 42.8018 111.746 42.8018C146.161 43.0353 173.851 66.8031 174.178 107.801ZM168.901 153.609V153.703C163.858 162.575 154.426 172.381 144.713 169.252L144.62 169.112C134.767 166.357 111.56 154.403 96.8973 142.729C89.3327 136.752 82.4218 129.701 77.0985 122.931C72.2889 116.907 67.4326 109.763 62.7164 101.171C52.7704 83.1931 50.5757 75.1616 50.5757 75.1616C47.4471 65.449 57.2064 56.0166 66.1252 50.9735H66.2186C70.5145 48.7321 74.6237 49.4792 77.3787 52.7946C77.3787 52.7946 83.1689 59.7055 85.6437 63.1142C87.9785 66.2895 91.1071 71.3793 92.7414 74.2277C95.5898 79.3174 93.8154 84.5006 91.0137 86.6486L85.4103 91.1313C82.5619 93.4194 82.9354 97.6686 82.9354 97.6686C82.9354 97.6686 91.2472 129.094 122.299 137.033C122.299 137.033 126.549 137.406 128.837 134.558L133.32 128.954C135.467 126.153 140.651 124.378 145.74 127.227C152.605 131.102 161.337 137.126 167.127 142.589C170.395 145.251 171.143 149.313 168.901 153.609Z"
                  
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main container">
      <div class="main__user">
        <div class="main__user--title">${props.firstName} ${props.lastName}</div>
        <div class="main__user--label">graphic designer</div>
        <div class="main__user--info">
          <ul class="info--items">
            <li class="list-items items-email">
              <svg
                width="40"
                height="40"
                viewBox="0 0 227 228"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M226.842 114.342C226.842 177.113 176.085 228 113.474 228C50.862 228 0.105255 177.113 0.105255 114.342C0.105255 51.5706 50.862 0.684212 113.474 0.684212C176.085 0.684212 226.842 51.5706 226.842 114.342ZM56.8462 80.2447C56.8462 73.9936 61.891 68.8789 68.1263 68.8789H158.821C165.056 68.8789 170.158 73.9936 170.158 80.2447V148.439C170.158 154.691 165.056 159.805 158.821 159.805H68.1263C61.891 159.805 56.7895 154.691 56.7895 148.439L56.8462 80.2447ZM113.474 120.025L68.1264 91.6102V148.439H158.821V91.6102L113.474 120.025ZM113.474 108.659L68.1264 80.2448H158.821L113.474 108.659Z"
                  
                />
              </svg>
              <span>${props.email}</span>
            </li>
            <li class="list-items items-phone">
              <svg
                width="40"
                height="40"
                viewBox="0 0 227 227"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M113.368 0C50.7567 0 0 50.7567 0 113.368C0 175.98 50.7567 226.737 113.368 226.737C175.98 226.737 226.737 175.98 226.737 113.368C226.737 50.7567 175.98 0 113.368 0ZM72.6266 45.0318C74.9624 44.8941 77.0737 46.2902 78.6743 48.7683L94.1738 78.162C95.8058 81.6451 94.8784 85.3746 92.444 87.8632L85.3447 94.9625C84.9065 95.563 84.6182 96.2392 84.6112 96.9829C87.3337 107.521 95.5923 117.242 102.879 123.927C110.165 130.612 117.996 139.663 128.162 141.807C129.419 142.158 130.958 142.283 131.857 141.448L140.105 133.047C142.952 130.89 147.071 129.844 150.111 131.608H150.249L178.217 148.118C182.323 150.691 182.748 155.665 179.809 158.691L160.545 177.803C157.701 180.72 153.921 181.701 150.249 181.705C134.01 181.218 118.665 173.248 106.062 165.057C85.374 150.007 66.3974 131.34 54.4839 108.788C49.9148 99.331 44.5474 87.2648 45.0596 76.7094C45.1053 72.7385 46.1797 68.8483 48.9761 66.2888L68.2399 47.025C69.7405 45.7481 71.225 45.1146 72.6266 45.0318Z"
                  
                />
              </svg>
              <p>
                +123 <span>898920928290</span>
              </p>
            </li>
            <li class="list-items items-address">
              <svg
                width="40"
                height="40"
                viewBox="0 0 227 228"
                
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M193.511 33.3107C172.54 11.3772 143.521 -0.44194 113.368 0.012641C83.2158 -0.44194 54.31 11.3772 33.3392 33.3107C11.3482 54.3351 -0.440814 83.4282 0.0126088 113.658C-0.440814 143.888 11.3482 172.867 33.2259 193.891C54.1967 215.939 83.2158 227.758 113.368 227.303C143.521 227.758 172.427 215.939 193.398 194.005C215.389 172.981 227.178 143.888 226.724 113.658C227.178 83.4282 215.389 54.3351 193.511 33.3107ZM170.046 113.658V181.845H130.372V125.022H96.3651V181.845H56.6905V113.658H34.0194L113.368 34.1062L198.385 113.658H170.046Z"
                  
                />
              </svg>
              <span>North Country, Earth</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="main__profile">
        <div class="main__profile--title">profile</div>
        <div class="main__profile--text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Similique suscipit illum, ut dolore cum voluptatum expedita vel
          dignissimos incidunt. Ipsam iste dignissimos animi praesentium
          molestiae. Ducimus quis saepe temporibus excepturi! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Similique suscipit
          illum, ut dolore cum voluptatum expedita vel dignissimos
          incidunt. Ipsam iste dignissimos animi praesentium molestiae.
          Ducimus quis saepe temporibus excepturi!
        </div>
        <div class="main__profile--more">
          <div class="more__left">
            <div class="more__left--items">
              <div class="items-layout">
                <div class="items-layout__title">
                  <div>language</div>
                </div>
                <div class="items-layout__bar">
                  <div class="items-layout__bar--show">
                    <p class="title">English</p>
                    <div class="chart">
                      <div class="english chart--color">90%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Indian</p>
                    <div class="chart">
                      <div class="indian chart--color">80%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Spanish</p>
                    <div class="chart">
                      <div class="spanish chart--color">70%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="items-layout">
                <div class="items-layout__title">
                  <div>skills</div>
                </div>
                <div class="items-layout__bar">
                  <div class="items-layout__bar--show">
                    <p class="title">Drawing</p>
                    <div class="chart">
                      <div class="drawing chart--color">90%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Ilustration</p>
                    <div class="chart">
                      <div class="ilustration chart--color">80%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Layout</p>
                    <div class="chart">
                      <div class="layout chart--color">70%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Typography</p>
                    <div class="chart">
                      <div class="typography chart--color">70%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Digital Draw</p>
                    <div class="chart">
                      <div class="digital chart--color">70%</div>
                    </div>
                  </div>
                  <div class="items-layout__bar--show">
                    <p class="title">Ui Design</p>
                    <div class="chart">
                      <div class="design chart--color">70%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="more__right">
            <div class="more__right--layout">
              <div class="layout__title">education</div>
              <div class="layout__label">
                <div class="layout__label--since">
                  <div class="label">design university</div>
                  <div class="since">
                    <span class="since__from">2012</span> -
                    <span class="since__to">2015</span>
                  </div>
                </div>
                <div class="name">Bachelor of Graphic Design</div>
                <div class="sub">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit.
                </div>
              </div>
              <div class="layout__label">
                <div class="layout__label--since">
                  <div class="label">graphic university</div>
                  <div class="since">
                    <span class="since__from">2015</span> -
                    <span class="since__to">2017</span>
                  </div>
                </div>
                <div class="name">Master of Graphic Design</div>
                <div class="sub">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit.
                </div>
              </div>
            </div>
            <div class="more__right--layout">
              <div class="layout__title">experience</div>
              <div class="layout__label">
                <div class="layout__label--since">
                  <div class="label">color company</div>
                  <div class="since">
                    <span class="since__from">2016</span> -
                    <span class="since__to">2017</span>
                  </div>
                </div>
                <div class="name">Graphic Illustrator (Itern)</div>
                <div class="sub">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit.
                </div>
              </div>
              <div class="layout__label">
                <div class="layout__label--since">
                  <div class="label">graphic university</div>
                  <div class="since">
                    <span class="since__from">2017</span> -
                    <span class="since__to">2018</span>
                  </div>
                </div>
                <div class="name">Art Director</div>
                <div class="sub">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
`,
    css: `
    * {
    box-sizing: border-box;
  }
  :root {
    --primaryText: #000000;
    --sectionTitle: #fff;
    --monogramBackground: #fbbc05;
    --monogramText: #fff;
    --background: #000000;
  }
  body {
    margin: 0;
    color: var(--primaryText);
  }
  * {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    box-sizing: border-box;
  }
  body {
    font-family: Roboto, sans-serif;
    background-color: rgb(221, 221, 221);
  }
  ul,
  li {
    list-style-position: initial;
    list-style-image: initial;
    list-style-type: none;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
  }
  .container-fluid {
    z-index: 1;
    width: 100%;
    max-width: 1400px;
    min-height: 100vh;
    margin-top: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    background-color: rgb(255, 255, 255);
    position: relative;
  }
  .container {
    width: 100%;
    padding-top: 0px;
    padding-right: 50px;
    padding-bottom: 70px;
    padding-left: 50px;
  }
  .header {
    display: grid;
    grid-template-columns: 65% 35%;
    padding-top: 100px;
  }
  .header__nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 130px;
    background-color: var(--background);
    position: relative;
    border-bottom-right-radius: 50px;
  }
  .header__nav--name {
    font-weight: 400;
    font-size: 30px;
    color: var(--sectionTitle);
    text-transform: uppercase;
    margin-left: 10rem;
    letter-spacing: 3px;
  }
  .header__nav .nav__avatar {
    position: absolute;
    top: 0px;
    right: 5%;
    transform: translate(-50px, -50px);
  }
  .header__nav .nav__avatar img {
    width: 230px;
    height: 230px;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-width: 14px;
    border-right-width: 14px;
    border-bottom-width: 14px;
    border-left-width: 14px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgb(255, 255, 255);
    border-right-color: rgb(255, 255, 255);
    border-bottom-color: rgb(255, 255, 255);
    border-left-color: rgb(255, 255, 255);
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .header__navright {
    position: relative;
    background-color: var(--background);
  }
  .header__navright--contact {
    position: absolute;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 50px;
  }
  .header__navright--contact .contact-items {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    margin-right: 133px;
    margin-bottom: 24px;
    margin-left: 133px;
  }
  .header__navright--contact .contact-items li {
    padding-top: 0px;
    padding-right: 20px;
    padding-bottom: 0px;
    padding-left: 20px;
  }
  .header__navright--contact .contact-items li svg {
    fill: var(--background);
  }
  .main__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    text-align: center;
    text-transform: uppercase;
  }
  .main__user--title {
    font-weight: 400;
    font-size: 4em;
    letter-spacing: 5px;
    margin-bottom: 14px;
  }
  .main__user--label {
    font-weight: 400;
    font-size: 1.4em;
    letter-spacing: 5px;
    background-color: var(--background);
    color: var(--sectionTitle);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-top: 5px;
    padding-right: 0px;
    padding-bottom: 5px;
    padding-left: 0px;
    width: 340px;
    margin-bottom: 40px;
  }
  .main__user--info {
    padding-bottom: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: var(--background);
  }
  .main__user--info .info--items {
    display: flex;
  }
  .main__user--info .info--items .list-items {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    text-transform: none;
  }
  .main__user--info .info--items .list-items svg {
    margin-left: 50px;
    margin-right: 20px;
    fill: var(--background);
  }
  .main__user--info .info--items .list-items:nth-child(n + 2) {
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: var(--background);
  }
  .main__profile {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .main__profile--title {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-size: 1.8em;
    font-weight: 400;
    letter-spacing: 5px;
  }
  .main__profile--text {
    width: 59rem;
    padding-bottom: 50px;
    overflow-wrap: break-word;
    line-height: 24px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: var(--background);
  }
  .main__profile--more {
    width: 59rem;
    margin-top: 30px;
    display: grid;
    grid-template-columns: 50% 50%;
    text-align: start;
  }
  .main__profile--more .more__left {
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: var(--background);
  }
  .main__profile--more .more__left--items .items-layout__title {
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: 3px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  .main__profile--more .more__left--items .items-layout__bar--show {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.7rem;
  }
  .main__profile--more .more__left--items .items-layout__bar--show .title {
    width: 11.25rem;
  }
  .main__profile--more .more__left--items .items-layout__bar--show .chart {
    width: 100%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart--color {
    background-color: var(--background);
    color: var(--sectionTitle);
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .english {
    width: 90%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .indian {
    width: 80%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .spanish {
    width: 70%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .drawing {
    width: 90%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .ilustration {
    width: 80%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .layout {
    width: 70%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .typography {
    width: 60%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .digital {
    width: 80%;
  }
  .main__profile--more
    .more__left--items
    .items-layout__bar--show
    .chart
    .design {
    width: 80%;
  }
  .main__profile--more .more__right {
    margin-left: 40px;
  }
  .main__profile--more .more__right--layout {
    margin-bottom: 30px;
  }
  .main__profile--more .more__right--layout .layout__title {
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: 3px;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .main__profile--more .more__right--layout .layout__label {
    margin-bottom: 30px;
  }
  .main__profile--more .more__right--layout .layout__label--since {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .main__profile--more .more__right--layout .layout__label--since .label {
    font-size: 16px;
    text-transform: uppercase;
    padding-right: 20px;
    border-right-width: 2px;
    border-right-style: solid;
    border-right-color: var(--background);
    letter-spacing: 1px;
  }
  .main__profile--more .more__right--layout .layout__label--since .since {
    margin-left: 20px;
    font-size: 14px;
  }
  .main__profile--more .more__right--layout .layout__label .name {
    margin-bottom: 10px;
  }
  .main__profile--more .more__right--layout .layout__label .sub {
    font-size: 14px;
  }
`,
  };
};
