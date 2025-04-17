import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

// Image metadata
export const alt = 'Threepointdev'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), 'assets/Inter-SemiBold.ttf')
  )

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#020618',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '46px',
            flexGrow: 1,
            background: '#020618',
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              marginBottom: '32px',
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="120" height="120" rx="60" fill="white" />
              <g clip-path="url(#clip0_3618_22)">
                <path d="M51.8418 19.78C58.5161 20.078 68.8298 21.8942 73.4297 32.6902L73.6445 33.2107C75.5062 37.8835 75.764 42.7252 74.9951 47.7058L74.8271 48.7039V48.7048C74.5338 50.3411 73.7862 53.3205 73.7861 55.9343C73.7861 57.2544 73.9707 58.6152 74.5801 59.7419C75.1779 60.8472 76.1524 61.6653 77.5635 62.0056L77.8516 62.0671C79.9954 62.4704 81.6499 61.8089 82.8506 60.7244C83.8642 59.8087 84.5313 58.6172 84.9619 57.5955L85.1318 57.1697C85.1958 57.0009 85.4124 56.9724 85.5186 57.0876C91.1804 63.529 91.8551 71.0914 90.7695 77.8162L90.6592 78.4646C88.3101 91.5568 74.9743 101.211 61.6553 101.212C53.2733 101.212 45.7981 98.8152 39.999 94.2976C34.3865 89.9252 30.2899 83.5252 28.4697 75.2537L28.3008 74.447C26.9399 67.6018 27.6134 54.1466 37.8496 44.4763L38.3447 44.0183L38.3486 44.0144C38.3927 43.9741 38.4298 43.9631 38.4609 43.9597C38.4987 43.9557 38.5485 43.9628 38.5986 43.988C38.6483 44.0131 38.6838 44.0483 38.7041 44.0828C38.7126 44.0972 38.7206 44.1151 38.7256 44.1375L38.7295 44.2214V44.2263C38.529 46.3649 38.3555 49.3535 38.5537 52.2273C38.748 55.0429 39.3106 57.982 40.7598 59.8308L43.0654 62.7722L42.5361 59.074C42.536 59.0732 42.5363 59.0722 42.5361 59.071C42.5351 59.0628 42.5335 59.0466 42.5312 59.0232C42.5267 58.9763 42.5206 58.8992 42.5156 58.7937C42.5056 58.5822 42.5003 58.2558 42.5254 57.8269C42.5755 56.9695 42.7448 55.6988 43.2314 54.1082C44.1725 51.0325 46.3114 46.723 51.1299 41.8699L51.6045 41.3982C55.9757 37.1201 57.1309 31.3079 55.7334 26.7585L55.5898 26.322V26.321L55.4111 25.8425C54.4795 23.4782 52.9577 21.5475 51.6553 20.197C51.4936 20.0281 51.6185 19.7712 51.8418 19.78Z" fill="url(#paint0_radial_3618_22)" stroke="white" strokeWidth="2" />
                <path d="M67.9212 69.831C61.6008 61.6958 64.4307 52.4134 65.9813 48.7144C66.1899 48.2276 65.6336 47.7687 65.1956 48.0677C62.4769 49.9172 56.9074 54.2699 54.3139 60.3956C50.8026 68.6768 51.0529 72.7304 53.1319 77.6811C54.3835 80.664 52.9303 81.2967 52.2002 81.4079C51.491 81.5192 50.8374 81.0464 50.3159 80.5527C48.8157 79.1124 47.7466 77.2825 47.2287 75.2683C47.1174 74.8372 46.5542 74.719 46.297 75.0737C44.3501 77.7645 43.3419 82.0824 43.2932 85.1348C43.1403 94.5702 50.9347 102.219 60.3631 102.219C72.246 102.219 80.9027 89.0772 74.0747 78.0913C72.0931 74.8929 70.2296 72.8 67.9212 69.831Z" fill="url(#paint1_radial_3618_22)" />
                <path d="M58.04 64.96V61.52H61.68V64.96H58.04ZM56.72 82.48L57.92 74.92H61.72L59.88 82.48H56.72Z" fill="black" />
              </g>
              <defs>
                <radialGradient id="paint0_radial_3618_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.2588 102.428) rotate(-179.751) scale(49.0805 80.5313)">
                  <stop offset="0.314" stopColor="#FF9800" />
                  <stop offset="0.662" stopColor="#FF6D00" />
                  <stop offset="0.972" stopColor="#F44336" />
                </radialGradient>
                <radialGradient id="paint1_radial_3618_22" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(61.0167 53.5874) rotate(90.5787) scale(51.3533 38.6472)">
                  <stop offset="0.214" stopColor="#FFF176" />
                  <stop offset="0.328" stopColor="#FFF27D" />
                  <stop offset="0.487" stopColor="#FFF48F" />
                  <stop offset="0.672" stopColor="#FFF7AD" />
                  <stop offset="0.793" stopColor="#FFF9C4" />
                  <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804" />
                  <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529" />
                  <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209" />
                  <stop offset="0.941" stopColor="#FFF176" stopOpacity="0" />
                </radialGradient>
                <clipPath id="clip0_3618_22">
                  <rect width="89" height="89" fill="white" transform="translate(15 16)" />
                </clipPath>
              </defs>
            </svg>
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#FFF085',
              }}
            >
              ThreePointDev;
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '24px',
              display: 'block',
              lineHeight: 1.1,
            }}
          >
            Full Stack SDE who is obsessed with UX
          </h1>
        </div>

        {/* Bottom Stats Section */}
        <div
          style={{
            display: 'flex',
            padding: '16px 32px',
            borderTop: '1px solid #FFF085',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '14px',
                height: '14px',
                backgroundColor: '#FFF085',
                borderRadius: '50%',
              }}
            />
            <span
              style={{
                color: 'white',
                fontSize: '16px',
                display: 'block',
              }}
            >
              Portfolio Website
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span
              style={{
                color: '#FFF085',
                fontSize: '16px',
                display: 'block',
              }}
            >
              https://threepointdev.com
            </span>
          </div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}