import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Container from '@mui/system/Container';
import Button from '@mui/material/Button';
const ConnectDapp = () => {
  return (
    <Container>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: '60px' }}>
          <svg
            width="362"
            height="96"
            viewBox="0 0 362 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="362" height="96" rx="30" fill="#EDF7FF" />
            <mask id="path-2-inside-1_985_5852" fill="white">
              <path d="M76 50C76 41.1634 83.1634 34 92 34H170C178.837 34 186 41.1634 186 50V70C186 78.8366 178.837 86 170 86H92C83.1634 86 76 78.8366 76 70V50Z" />
            </mask>
            <path
              d="M76 34H186H76ZM186 70C186 80.4934 177.493 89 167 89H92C81.5066 89 73 80.4934 73 70H79C79 77.1797 84.8203 83 92 83H170C178.837 83 186 77.1797 186 70ZM92 89C81.5066 89 73 80.4934 73 70V53C73 42.5066 81.5066 34 92 34C84.8203 34 79 41.1634 79 50V70C79 77.1797 84.8203 83 92 83V89ZM186 34V86V34Z"
              fill="#2382F7"
              mask="url(#path-2-inside-1_985_5852)"
            />
            <mask id="path-4-inside-2_985_5852" fill="white">
              <path d="M275 50C275 58.8366 267.837 66 259 66L202 66C193.163 66 186 58.8366 186 50V26C186 17.1634 193.163 10 202 10L259 10C267.837 10 275 17.1634 275 26V50Z" />
            </mask>
            <path
              d="M275 66L186 66L275 66ZM186 26C186 15.5066 194.507 7 205 7L259 7C269.493 7 278 15.5066 278 26H272C272 18.8203 266.18 13 259 13L202 13C193.163 13 186 18.8203 186 26ZM259 7C269.493 7 278 15.5066 278 26V47C278 57.4934 269.493 66 259 66C266.18 66 272 58.8366 272 50V26C272 18.8203 266.18 13 259 13V7ZM186 66V10V66Z"
              fill="#2382F7"
              mask="url(#path-4-inside-2_985_5852)"
            />
            <rect x="10" y="19" width="342" height="58" rx="20" fill="white" />
            <path
              d="M36.4148 45.2216H33.7557C33.6534 44.6534 33.4631 44.1534 33.1847 43.7216C32.9063 43.2898 32.5653 42.9233 32.1619 42.6222C31.7585 42.321 31.3068 42.0937 30.8068 41.9403C30.3125 41.7869 29.7869 41.7102 29.2301 41.7102C28.2244 41.7102 27.3239 41.9631 26.5284 42.4688C25.7386 42.9744 25.1136 43.7159 24.6534 44.6932C24.1989 45.6705 23.9716 46.8636 23.9716 48.2727C23.9716 49.6932 24.1989 50.892 24.6534 51.8693C25.1136 52.8466 25.7415 53.5852 26.5369 54.0852C27.3324 54.5852 28.2273 54.8352 29.2216 54.8352C29.7727 54.8352 30.2955 54.7614 30.7898 54.6136C31.2898 54.4602 31.7415 54.2358 32.1449 53.9403C32.5483 53.6449 32.8892 53.2841 33.1676 52.858C33.4517 52.4261 33.6477 51.9318 33.7557 51.375L36.4148 51.3835C36.2727 52.2415 35.9972 53.0312 35.5881 53.7528C35.1847 54.4688 34.6648 55.0881 34.0284 55.6108C33.3977 56.1278 32.6761 56.5284 31.8636 56.8125C31.0511 57.0966 30.1648 57.2386 29.2045 57.2386C27.6932 57.2386 26.3466 56.8807 25.1648 56.1648C23.983 55.4432 23.0511 54.4119 22.3693 53.071C21.6932 51.7301 21.3551 50.1307 21.3551 48.2727C21.3551 46.4091 21.696 44.8097 22.3778 43.4744C23.0597 42.1335 23.9915 41.1051 25.1733 40.3892C26.3551 39.6676 27.6989 39.3068 29.2045 39.3068C30.1307 39.3068 30.9943 39.4403 31.7955 39.7074C32.6023 39.9687 33.3267 40.3551 33.9688 40.8665C34.6108 41.3722 35.142 41.9915 35.5625 42.7244C35.983 43.4517 36.267 44.2841 36.4148 45.2216ZM41.9098 49.2273V57H39.3615V39.5455H41.8757V46.0398H42.0376C42.3445 45.3352 42.8132 44.7756 43.4439 44.3608C44.0746 43.946 44.8984 43.7386 45.9155 43.7386C46.8132 43.7386 47.5973 43.9233 48.2678 44.2926C48.9439 44.6619 49.4666 45.2131 49.8359 45.946C50.2109 46.6733 50.3984 47.5824 50.3984 48.6733V57H47.8501V48.9801C47.8501 48.0199 47.603 47.2756 47.1087 46.7472C46.6143 46.2131 45.9268 45.946 45.0462 45.946C44.4439 45.946 43.9041 46.0739 43.4268 46.3295C42.9553 46.5852 42.5831 46.9602 42.3104 47.4545C42.0433 47.9432 41.9098 48.5341 41.9098 49.2273ZM57.6087 57.2898C56.7791 57.2898 56.0291 57.1364 55.3587 56.8295C54.6882 56.517 54.157 56.0653 53.7649 55.4744C53.3786 54.8835 53.1854 54.1591 53.1854 53.3011C53.1854 52.5625 53.3274 51.9545 53.6115 51.4773C53.8956 51 54.2791 50.6222 54.7621 50.3438C55.245 50.0653 55.7848 49.8551 56.3814 49.7131C56.978 49.571 57.5859 49.4631 58.2053 49.3892C58.9893 49.2983 59.6257 49.2244 60.1143 49.1676C60.603 49.1051 60.9581 49.0057 61.1797 48.8693C61.4013 48.733 61.5121 48.5114 61.5121 48.2045V48.1449C61.5121 47.4006 61.3018 46.8239 60.8814 46.4148C60.4666 46.0057 59.8473 45.8011 59.0234 45.8011C58.1655 45.8011 57.4893 45.9915 56.995 46.3722C56.5064 46.7472 56.1683 47.1648 55.9808 47.625L53.5859 47.0795C53.87 46.2841 54.2848 45.642 54.8303 45.1534C55.3814 44.6591 56.0149 44.3011 56.7308 44.0795C57.4467 43.8523 58.1996 43.7386 58.9893 43.7386C59.5121 43.7386 60.0661 43.8011 60.6513 43.9261C61.2422 44.0455 61.7933 44.267 62.3047 44.5909C62.8217 44.9148 63.245 45.3778 63.5746 45.9801C63.9041 46.5767 64.0689 47.3523 64.0689 48.3068V57H61.5803V55.2102H61.478C61.3132 55.5398 61.0661 55.8636 60.7365 56.1818C60.407 56.5 59.9837 56.7642 59.4666 56.9744C58.9496 57.1847 58.3303 57.2898 57.6087 57.2898ZM58.1626 55.2443C58.8672 55.2443 59.4695 55.1051 59.9695 54.8267C60.4751 54.5483 60.8587 54.1847 61.12 53.7358C61.3871 53.2812 61.5206 52.7955 61.5206 52.2784V50.5909C61.4297 50.6818 61.2536 50.767 60.9922 50.8466C60.7365 50.9205 60.4439 50.9858 60.1143 51.0426C59.7848 51.0937 59.4638 51.142 59.1513 51.1875C58.8388 51.2273 58.5774 51.2614 58.3672 51.2898C57.8729 51.3523 57.4212 51.4574 57.0121 51.6051C56.6087 51.7528 56.2848 51.9659 56.0405 52.2443C55.8018 52.517 55.6825 52.8807 55.6825 53.3352C55.6825 53.9659 55.9155 54.4432 56.3814 54.767C56.8473 55.0852 57.4411 55.2443 58.1626 55.2443ZM67.4631 57V43.9091H70.0114V57H67.4631ZM68.75 41.8892C68.3068 41.8892 67.9261 41.7415 67.608 41.446C67.2955 41.1449 67.1392 40.7869 67.1392 40.3722C67.1392 39.9517 67.2955 39.5937 67.608 39.2983C67.9261 38.9972 68.3068 38.8466 68.75 38.8466C69.1932 38.8466 69.571 38.9972 69.8835 39.2983C70.2017 39.5937 70.3608 39.9517 70.3608 40.3722C70.3608 40.7869 70.2017 41.1449 69.8835 41.446C69.571 41.7415 69.1932 41.8892 68.75 41.8892ZM77.8821 57L73.0412 39.5455H75.8111L79.2116 53.0625H79.3736L82.9105 39.5455H85.6548L89.1918 53.071H89.3537L92.7457 39.5455H95.5241L90.6747 57H88.0241L84.3509 43.9261H84.2145L80.5412 57H77.8821ZM100.241 57.2898C99.4119 57.2898 98.6619 57.1364 97.9915 56.8295C97.321 56.517 96.7898 56.0653 96.3977 55.4744C96.0114 54.8835 95.8182 54.1591 95.8182 53.3011C95.8182 52.5625 95.9602 51.9545 96.2443 51.4773C96.5284 51 96.9119 50.6222 97.3949 50.3438C97.8778 50.0653 98.4176 49.8551 99.0142 49.7131C99.6108 49.571 100.219 49.4631 100.838 49.3892C101.622 49.2983 102.259 49.2244 102.747 49.1676C103.236 49.1051 103.591 49.0057 103.812 48.8693C104.034 48.733 104.145 48.5114 104.145 48.2045V48.1449C104.145 47.4006 103.935 46.8239 103.514 46.4148C103.099 46.0057 102.48 45.8011 101.656 45.8011C100.798 45.8011 100.122 45.9915 99.6278 46.3722C99.1392 46.7472 98.8011 47.1648 98.6136 47.625L96.2188 47.0795C96.5028 46.2841 96.9176 45.642 97.4631 45.1534C98.0142 44.6591 98.6477 44.3011 99.3636 44.0795C100.08 43.8523 100.832 43.7386 101.622 43.7386C102.145 43.7386 102.699 43.8011 103.284 43.9261C103.875 44.0455 104.426 44.267 104.938 44.5909C105.455 44.9148 105.878 45.3778 106.207 45.9801C106.537 46.5767 106.702 47.3523 106.702 48.3068V57H104.213V55.2102H104.111C103.946 55.5398 103.699 55.8636 103.369 56.1818C103.04 56.5 102.616 56.7642 102.099 56.9744C101.582 57.1847 100.963 57.2898 100.241 57.2898ZM100.795 55.2443C101.5 55.2443 102.102 55.1051 102.602 54.8267C103.108 54.5483 103.491 54.1847 103.753 53.7358C104.02 53.2812 104.153 52.7955 104.153 52.2784V50.5909C104.063 50.6818 103.886 50.767 103.625 50.8466C103.369 50.9205 103.077 50.9858 102.747 51.0426C102.418 51.0937 102.097 51.142 101.784 51.1875C101.472 51.2273 101.21 51.2614 101 51.2898C100.506 51.3523 100.054 51.4574 99.6449 51.6051C99.2415 51.7528 98.9176 51.9659 98.6733 52.2443C98.4347 52.517 98.3153 52.8807 98.3153 53.3352C98.3153 53.9659 98.5483 54.4432 99.0142 54.767C99.4801 55.0852 100.074 55.2443 100.795 55.2443ZM112.644 39.5455V57H110.096V39.5455H112.644ZM118.621 39.5455V57H116.072V39.5455H118.621ZM127.691 57.2642C126.401 57.2642 125.29 56.9886 124.359 56.4375C123.433 55.8807 122.717 55.0994 122.211 54.0938C121.711 53.0824 121.461 51.8977 121.461 50.5398C121.461 49.1989 121.711 48.017 122.211 46.9943C122.717 45.9716 123.421 45.1733 124.325 44.5994C125.234 44.0256 126.296 43.7386 127.512 43.7386C128.251 43.7386 128.967 43.8608 129.66 44.1051C130.353 44.3494 130.975 44.733 131.526 45.2557C132.077 45.7784 132.512 46.4574 132.83 47.2926C133.148 48.1222 133.308 49.1307 133.308 50.3182V51.2216H122.901V49.3125H130.81C130.81 48.642 130.674 48.0483 130.401 47.5312C130.129 47.0085 129.745 46.5966 129.251 46.2955C128.762 45.9943 128.188 45.8438 127.529 45.8438C126.813 45.8438 126.188 46.0199 125.654 46.3722C125.126 46.7187 124.717 47.1733 124.427 47.7358C124.143 48.2926 124.001 48.8977 124.001 49.5511V51.0426C124.001 51.9176 124.154 52.6619 124.461 53.2756C124.773 53.8892 125.208 54.358 125.765 54.6818C126.322 55 126.972 55.1591 127.717 55.1591C128.2 55.1591 128.64 55.0909 129.038 54.9545C129.435 54.8125 129.779 54.6023 130.069 54.3239C130.359 54.0455 130.58 53.7017 130.734 53.2926L133.146 53.7273C132.952 54.4375 132.606 55.0597 132.106 55.5938C131.612 56.1222 130.989 56.5341 130.239 56.8295C129.495 57.1193 128.646 57.2642 127.691 57.2642ZM142.246 43.9091V45.9545H135.095V43.9091H142.246ZM137.013 40.7727H139.561V53.1562C139.561 53.6506 139.635 54.0227 139.783 54.2727C139.93 54.517 140.121 54.6847 140.354 54.7756C140.592 54.8608 140.851 54.9034 141.129 54.9034C141.334 54.9034 141.513 54.8892 141.666 54.8608C141.82 54.8324 141.939 54.8097 142.024 54.7926L142.484 56.8977C142.337 56.9545 142.126 57.0114 141.854 57.0682C141.581 57.1307 141.24 57.1648 140.831 57.1705C140.161 57.1818 139.536 57.0625 138.956 56.8125C138.376 56.5625 137.908 56.1761 137.55 55.6534C137.192 55.1307 137.013 54.4744 137.013 53.6847V40.7727Z"
              fill="#334155"
            />
            <path
              d="M146.744 57.1619C146.278 57.1619 145.877 56.9972 145.542 56.6676C145.207 56.3324 145.039 55.929 145.039 55.4574C145.039 54.9915 145.207 54.5937 145.542 54.2642C145.877 53.929 146.278 53.7614 146.744 53.7614C147.21 53.7614 147.61 53.929 147.945 54.2642C148.281 54.5937 148.448 54.9915 148.448 55.4574C148.448 55.7699 148.369 56.0568 148.21 56.3182C148.056 56.5739 147.852 56.7784 147.596 56.9318C147.34 57.0852 147.056 57.1619 146.744 57.1619Z"
              fill="#FF902A"
            />
            <rect
              x="162"
              y="19"
              width="62"
              height="58"
              rx="10"
              fill="#EDF7FF"
            />
            <path
              d="M188.062 39H181C178.613 39 176.324 39.9482 174.636 41.636C172.948 43.3239 172 45.6131 172 48C172 50.3869 172.948 52.6761 174.636 54.364C176.324 56.0518 178.613 57 181 57H190C191.44 57.0008 192.86 56.6559 194.139 55.9943C195.418 55.3327 196.52 54.3738 197.352 53.1981C198.184 52.0224 198.721 50.6642 198.919 49.2376C199.117 47.8111 198.97 46.3579 198.49 45H196C195.742 45 195.49 45.03 195.25 45.093C195.756 46.0065 196.015 47.0363 196.001 48.0804C195.987 49.1246 195.7 50.1471 195.17 51.0467C194.64 51.9463 193.884 52.692 192.977 53.2099C192.071 53.7279 191.044 54.0002 190 54H181C179.409 54 177.883 53.3679 176.757 52.2426C175.632 51.1174 175 49.5913 175 48C175 46.4087 175.632 44.8826 176.757 43.7574C177.883 42.6321 179.409 42 181 42H185.605C186.259 40.872 187.09 39.858 188.065 39H188.062Z"
              fill="#2382F7"
            />
            <path
              d="M196 39C194.56 38.9992 193.14 39.3441 191.861 40.0057C190.582 40.6673 189.48 41.6262 188.648 42.8019C187.816 43.9776 187.279 45.3358 187.081 46.7624C186.883 48.1889 187.03 49.6421 187.51 51H190.804C190.277 50.0879 190 49.0532 190 48C190 46.9468 190.277 45.9122 190.804 45.0001C191.331 44.088 192.088 43.3305 193 42.8039C193.912 42.2773 194.947 42 196 42H205C206.591 42 208.117 42.6321 209.243 43.7574C210.368 44.8826 211 46.4087 211 48C211 49.5913 210.368 51.1174 209.243 52.2426C208.117 53.3679 206.591 54 205 54H200.395C199.742 55.1262 198.912 56.1393 197.935 57H205C206.182 57 207.352 56.7672 208.444 56.3149C209.536 55.8626 210.528 55.1997 211.364 54.364C212.2 53.5282 212.863 52.5361 213.315 51.4442C213.767 50.3522 214 49.1819 214 48C214 46.8181 213.767 45.6478 213.315 44.5559C212.863 43.4639 212.2 42.4718 211.364 41.636C210.528 40.8003 209.536 40.1374 208.444 39.6851C207.352 39.2328 206.182 39 205 39H196Z"
              fill="#2382F7"
            />
            <path
              d="M251.415 45.2216H248.756C248.653 44.6534 248.463 44.1534 248.185 43.7216C247.906 43.2898 247.565 42.9233 247.162 42.6222C246.759 42.321 246.307 42.0937 245.807 41.9403C245.313 41.7869 244.787 41.7102 244.23 41.7102C243.224 41.7102 242.324 41.9631 241.528 42.4688C240.739 42.9744 240.114 43.7159 239.653 44.6932C239.199 45.6705 238.972 46.8636 238.972 48.2727C238.972 49.6932 239.199 50.892 239.653 51.8693C240.114 52.8466 240.741 53.5852 241.537 54.0852C242.332 54.5852 243.227 54.8352 244.222 54.8352C244.773 54.8352 245.295 54.7614 245.79 54.6136C246.29 54.4602 246.741 54.2358 247.145 53.9403C247.548 53.6449 247.889 53.2841 248.168 52.858C248.452 52.4261 248.648 51.9318 248.756 51.375L251.415 51.3835C251.273 52.2415 250.997 53.0312 250.588 53.7528C250.185 54.4688 249.665 55.0881 249.028 55.6108C248.398 56.1278 247.676 56.5284 246.864 56.8125C246.051 57.0966 245.165 57.2386 244.205 57.2386C242.693 57.2386 241.347 56.8807 240.165 56.1648C238.983 55.4432 238.051 54.4119 237.369 53.071C236.693 51.7301 236.355 50.1307 236.355 48.2727C236.355 46.4091 236.696 44.8097 237.378 43.4744C238.06 42.1335 238.991 41.1051 240.173 40.3892C241.355 39.6676 242.699 39.3068 244.205 39.3068C245.131 39.3068 245.994 39.4403 246.795 39.7074C247.602 39.9687 248.327 40.3551 248.969 40.8665C249.611 41.3722 250.142 41.9915 250.562 42.7244C250.983 43.4517 251.267 44.2841 251.415 45.2216ZM256.91 49.2273V57H254.362V39.5455H256.876V46.0398H257.038C257.344 45.3352 257.813 44.7756 258.444 44.3608C259.075 43.946 259.898 43.7386 260.915 43.7386C261.813 43.7386 262.597 43.9233 263.268 44.2926C263.944 44.6619 264.467 45.2131 264.836 45.946C265.211 46.6733 265.398 47.5824 265.398 48.6733V57H262.85V48.9801C262.85 48.0199 262.603 47.2756 262.109 46.7472C261.614 46.2131 260.927 45.946 260.046 45.946C259.444 45.946 258.904 46.0739 258.427 46.3295C257.955 46.5852 257.583 46.9602 257.31 47.4545C257.043 47.9432 256.91 48.5341 256.91 49.2273ZM272.609 57.2898C271.779 57.2898 271.029 57.1364 270.359 56.8295C269.688 56.517 269.157 56.0653 268.765 55.4744C268.379 54.8835 268.185 54.1591 268.185 53.3011C268.185 52.5625 268.327 51.9545 268.612 51.4773C268.896 51 269.279 50.6222 269.762 50.3438C270.245 50.0653 270.785 49.8551 271.381 49.7131C271.978 49.571 272.586 49.4631 273.205 49.3892C273.989 49.2983 274.626 49.2244 275.114 49.1676C275.603 49.1051 275.958 49.0057 276.18 48.8693C276.401 48.733 276.512 48.5114 276.512 48.2045V48.1449C276.512 47.4006 276.302 46.8239 275.881 46.4148C275.467 46.0057 274.847 45.8011 274.023 45.8011C273.165 45.8011 272.489 45.9915 271.995 46.3722C271.506 46.7472 271.168 47.1648 270.981 47.625L268.586 47.0795C268.87 46.2841 269.285 45.642 269.83 45.1534C270.381 44.6591 271.015 44.3011 271.731 44.0795C272.447 43.8523 273.2 43.7386 273.989 43.7386C274.512 43.7386 275.066 43.8011 275.651 43.9261C276.242 44.0455 276.793 44.267 277.305 44.5909C277.822 44.9148 278.245 45.3778 278.575 45.9801C278.904 46.5767 279.069 47.3523 279.069 48.3068V57H276.58V55.2102H276.478C276.313 55.5398 276.066 55.8636 275.737 56.1818C275.407 56.5 274.984 56.7642 274.467 56.9744C273.95 57.1847 273.33 57.2898 272.609 57.2898ZM273.163 55.2443C273.867 55.2443 274.469 55.1051 274.969 54.8267C275.475 54.5483 275.859 54.1847 276.12 53.7358C276.387 53.2812 276.521 52.7955 276.521 52.2784V50.5909C276.43 50.6818 276.254 50.767 275.992 50.8466C275.737 50.9205 275.444 50.9858 275.114 51.0426C274.785 51.0937 274.464 51.142 274.151 51.1875C273.839 51.2273 273.577 51.2614 273.367 51.2898C272.873 51.3523 272.421 51.4574 272.012 51.6051C271.609 51.7528 271.285 51.9659 271.04 52.2443C270.802 52.517 270.683 52.8807 270.683 53.3352C270.683 53.9659 270.915 54.4432 271.381 54.767C271.847 55.0852 272.441 55.2443 273.163 55.2443ZM282.463 57V43.9091H285.011V57H282.463ZM283.75 41.8892C283.307 41.8892 282.926 41.7415 282.608 41.446C282.295 41.1449 282.139 40.7869 282.139 40.3722C282.139 39.9517 282.295 39.5937 282.608 39.2983C282.926 38.9972 283.307 38.8466 283.75 38.8466C284.193 38.8466 284.571 38.9972 284.884 39.2983C285.202 39.5937 285.361 39.9517 285.361 40.3722C285.361 40.7869 285.202 41.1449 284.884 41.446C284.571 41.7415 284.193 41.8892 283.75 41.8892ZM294.295 57H288.644V39.5455H294.474C296.184 39.5455 297.653 39.8949 298.88 40.5938C300.107 41.2869 301.048 42.2841 301.701 43.5852C302.36 44.8807 302.69 46.4347 302.69 48.2472C302.69 50.0653 302.357 51.6278 301.692 52.9347C301.033 54.2415 300.079 55.2472 298.829 55.9517C297.579 56.6506 296.067 57 294.295 57ZM291.278 54.6989H294.15C295.479 54.6989 296.585 54.4489 297.465 53.9489C298.346 53.4432 299.005 52.7131 299.442 51.7585C299.88 50.7983 300.099 49.6278 300.099 48.2472C300.099 46.8778 299.88 45.7159 299.442 44.7614C299.011 43.8068 298.366 43.0824 297.508 42.5881C296.65 42.0937 295.585 41.8466 294.312 41.8466H291.278V54.6989ZM305.964 57V39.5455H316.908V41.8125H308.598V47.1307H316.337V49.3892H308.598V54.733H317.01V57H305.964ZM322.258 39.5455L326.434 46.3722H326.57L330.746 39.5455H333.798L328.36 48.2727L333.832 57H330.763L326.57 50.267H326.434L322.241 57H319.173L324.738 48.2727L319.207 39.5455H322.258Z"
              fill="#334155"
            />
            <path
              d="M337.884 57.1619C337.418 57.1619 337.018 56.9972 336.683 56.6676C336.347 56.3324 336.18 55.929 336.18 55.4574C336.18 54.9915 336.347 54.5937 336.683 54.2642C337.018 53.929 337.418 53.7614 337.884 53.7614C338.35 53.7614 338.751 53.929 339.086 54.2642C339.421 54.5937 339.589 54.9915 339.589 55.4574C339.589 55.7699 339.509 56.0568 339.35 56.3182C339.197 56.5739 338.992 56.7784 338.737 56.9318C338.481 57.0852 338.197 57.1619 337.884 57.1619Z"
              fill="#FF902A"
            />
          </svg>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
          <Typography variant="smbold">Connect to website</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="t_sm_meidum">chaidex.io</Typography>
        </Box>

        {/* list */}

        <Box sx={{ justifyContent: 'center', maxWidth: '90%' }}>
          <Box
            sx={{
              display: 'flex',
              mt: '15px',
              alignItems: 'center',
            }}
          >
            <Box>
              <AccountBalanceWalletIcon sx={{ fontSize: '40px' }} />
            </Box>
            <Box sx={{ ml: '15px' }}>
              <Typography>
                Let it see your wallet balance and activity
              </Typography>
            </Box>
          </Box>

          {/* 2 point */}
          <Box
            sx={{
              display: 'flex',
              mt: '10px',
              alignItems: 'center',
            }}
          >
            <Box>
              <TaskAltIcon sx={{ fontSize: '40px' }} />
            </Box>
            <Box sx={{ ml: '15px' }}>
              <Typography>Let it see you requests for transactions</Typography>
            </Box>
          </Box>

          {/* 3 point */}
          <Box
            sx={{
              display: 'flex',
              mt: '10px',
              alignItems: 'center',
            }}
          >
            <Box>
              <DoDisturbIcon sx={{ fontSize: '40px' }} />
            </Box>
            <Box sx={{ ml: '15px' }}>
              <Typography>Let it see you requests for transactions</Typography>
            </Box>
          </Box>
        </Box>

        {/* buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: '25px' }}>
          <Button
            variant="outlined"
            sx={{
              width: '150px',
              height: '59px',
              borderRadius: '15px',
              mr: '10px',
            }}
          >
            Deny
          </Button>
          <Button
            variant="contained"
            sx={{ width: '150px', height: '59px', borderRadius: '15px' }}
          >
            Connect
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ConnectDapp;