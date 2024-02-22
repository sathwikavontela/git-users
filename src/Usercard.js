import React from 'react'
import { Link } from 'react-router-dom'

const Usercard = ({ resdata }) => {
  // console.log(resdata)
  const IMAGEURL = 'https://avatars.githubusercontent.com/u/'
  const IMGU = 'https://avatars.githubusercontent.com/u/'
  return (
    <Link to={'users/' + resdata.login}>
      <div className=" mx-4 my-3 bg-white h-[380px] w-[300px] rounded-lg transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300">
        <div className="px-4 py-3">
          <img
            src={IMAGEURL + resdata.id}
            className="rounded-md h-[250px] w-[267px]"
            alt="Loading Profile"
          />
          <h3 className="font-bold p-1 text-xl ">{resdata.login}</h3>
          <hr className="h-10 border-black"></hr>
          <div className="flex justify-between">
            <img
              src={IMGU + resdata.id}
              className="rounded-[50%] h-7 w-7"
              alt="Loading Profile"
            />
            <p>Github</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default Usercard
