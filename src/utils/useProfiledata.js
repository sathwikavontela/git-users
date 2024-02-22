import { useEffect, useState } from 'react'

const useProfiledata = (id) => {
  const DATAURL = 'https://api.github.com/users/'
  const [userInfo, setuserInfo] = useState(null)
  useEffect(() => {
    fetchUserdata()
  }, [])
  const fetchUserdata = async () => {
    const data = await fetch(DATAURL + id)
    const json = await data.json()
    setuserInfo(json)
    //console.log(json)
  }
  return userInfo
}
export default useProfiledata
