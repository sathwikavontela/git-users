//import React from "react";
import { useEffect, useState } from 'react'
import Usercard from './Usercard'
import { Link } from 'react-router-dom'
const ProfileCard = () => {
  const [listofUsers, setlistofUsers] = useState([])
  const [filteredUsers, setfilteredUsers] = useState([])
  const [searchtext, setSearchtext] = useState('')
  // const searchElement = document.getElementById("Search");
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const data = await fetch('https://api.github.com/users')
    const json = await data?.json()
    setlistofUsers(json)
    setfilteredUsers(json)
  }
  return (
    <div className="bg-sky-950 h-auto m-0 p-4">
      <div className="flex items-center justify-center ">
        <input
          type="input"
          placeholder="Search Username..."
          className="py-1 my-6 border-solid border-2 border-yellow-500 w-100 text-center rounded-lg hover:border-double"
          value={searchtext}
          onChange={(e) => {
            setSearchtext(e.target.value)
          }}
        />
        <button
          className="mx-4 py-1.5 bg-white border-none px-12 text-center rounded-lg hover:bg-slate-700 font-semibold"
          onClick={() => {
            const filteredUsers = listofUsers.filter((res) =>
              res.login.toLowerCase().includes(searchtext.toLowerCase())
            )
            setfilteredUsers(filteredUsers)
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap shadow-2xl items-center justify-center">
        {filteredUsers.map((users) => (
          <Usercard key={users.id} resdata={users} />
        ))}
      </div>
    </div>
  )
}

export default ProfileCard
