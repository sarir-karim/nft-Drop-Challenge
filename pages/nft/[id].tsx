import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

const NFTDropPage = () => {
  // Auth

  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  console.log(address)
  return (
    <div className=" flex h-screen flex-col lg:grid lg:grid-cols-10 ">
      {/* left side */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className=" rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white ">Papa</h1>
            <h3 className="text-gray-300">
              A collection of PapaFam apes who live & breath React
            </h3>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{''}{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              {' '}
              PAPAFAM
            </span>
            {''} NFT market place
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="bg-gray rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-5 lg:text-base"
          >
            {address ? 'SignOut' : 'SignIn'}
          </button>
        </header>

        <hr className="my-2 border" />

        {address && <p className="text-center text-sm text-rose-400"> You're loggedin with wallet {address.substring(0, 5)}...{address.substring(address.length -5)}</p>}

        {/* content */}

        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            className="obejct-cover w-80 pb-10 lg:h-40 lg:p-0"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-3xl lg:font-extrabold lg:py-5">
            The PAPAFAM Ape Coding Club | NFT Drop
          </h1>

          <p className="pt-2 text-xl text-green-500 ">13 / 13 NFT'S claimed</p>
        </div>
        <button className="lg-mt-10 h-16 w-full rounded-full bg-red-600 text-white">
          Mint NFT (0.0 ETH
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage
