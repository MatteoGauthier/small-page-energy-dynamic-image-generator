import { ImageResponse } from "next/og"
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge"

export async function GET() {
  const extraBold = await (
    await fetch("https://smallpageenergy.mmibordeaux.com/fonts/CabinetGrotesk-Extrabold.ttf")
  ).arrayBuffer()
  const black = await (
    await fetch("https://smallpageenergy.mmibordeaux.com/fonts/CabinetGrotesk-Black.ttf")
  ).arrayBuffer()

  const byteValueNumberFormatter = Intl.NumberFormat("fr", {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow",
  })

  const brand = "Nike"

  const rank = 455
  const weight = byteValueNumberFormatter.format(2_000_000)

  const categoryName = "Mode & Luxe"

  const categoryRank = 2
  const fontBlack = {
    fontFamily: "Black",
  }
  const fontExtraBold = {
    fontFamily: "ExtraBold",
  }

  const categoriesRanks = [
    {
      name: "Mode & Luxe",
      rank: 2,
    },
    {
      name: "High-Tech",
      rank: 1,
    },
    // {
    //   name: "Maison & Jardin",
    //   rank: 3,
    // },
  ]

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundImage:
            "url(https://cdn.jsdelivr.net/gh/MatteoGauthier/small-page-energy-front@master/public/template-website-share.jpg?)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          fontSize: 32,
          fontWeight: 600,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "60%",
            left: "11.5%",

            width: 400,
          }}
          tw="flex items-center flex-col justify-center"
        >
          {brand.length > 10 ? (
            <div style={fontBlack} tw="flex items-center text-[87px] text-[#35209D] text-center justify-center">
              {brand}
            </div>
          ) : (
            <div style={fontBlack} tw="flex items-center text-[132px] text-[#35209D] text-center justify-center">
              {brand}
            </div>
          )}

          <div tw="flex px-[68px] py-[40px] mt-12 rounded-full font-light bg-[#F005AE] text-[70px] text-white">
            <div tw="">{weight}</div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "28%",
            left: "11.5%",

            width: 400,
          }}
          tw="flex items-center flex-col justify-center"
        >
          <div style={fontExtraBold} tw="flex text-white text-[253px]">
            {rank}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 170,
            left: 786,

            width: 500,
          }}
          tw="flex items-center flex-col justify-center"
        >
          <div style={fontBlack} tw="flex text-[#35209D] text-[102px]">
            {weight}, tu peux mieux faire non ?
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 580,
            left: 786,

            width: 500,
            height: 450,
          }}
          tw="flex flex-col items-center justify-center"
        >
          {categoriesRanks.map((category, index) => (
            <div tw="flex items-center w-full justify-start" key={category.name}>
              <div style={fontExtraBold} tw="flex pr-4 leading-none text-[#35209D] text-[120px]">
                {category.rank}
              </div>
              <div style={fontExtraBold} tw="flex flex-1 leading-none text-[#35209D] text-[45px]">
                {`du classement ${category.name}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1350,
      height: 1350,
      // debug: true,
      fonts: [
        {
          data: extraBold,
          name: "ExtraBold",
          weight: 600,
        },
        {
          data: black,
          name: "Black",
          weight: 600,
        },
      ],
    }
  )
}
