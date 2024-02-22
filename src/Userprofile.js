import { Link, useParams } from 'react-router-dom'
import useProfiledata from './utils/useProfiledata'

const Userprofile = () => {
  const { login } = useParams()
  const userInfo = useProfiledata(login)
  if (userInfo === null) return <h1>Loading</h1>
  console.log(userInfo.login)
  const {
    location,
    type,
    public_repos,
    public_gists,
    followers,
    following,
    html_url,
    id,
    site_admin,
  } = userInfo
  // const { location } = userInfo
  const IMAGEURL3 = 'https://avatars.githubusercontent.com/u/'

  return (
    <div className="bg-white  font-semibold bg-yellow-300 h-screen flex items-center justify-center ">
      <div className="py-4 bg-white shadow-2xl h-[550px] w-[320px] ">
        <img
          src={IMAGEURL3 + id}
          className="rounded-md h-[250px] w-[267px] mx-7"
          alt="Loading Profile"
        />
        <div className="pl-7 pt-4">
          <h1> {'Loaction:  ' + location}</h1>
          <h3>{'public_repos: ' + public_repos}</h3>
          <h3>{'public_gits: ' + public_gists}</h3>
          <h3>{'login: ' + login}</h3>
          <h1>{'type: ' + type}</h1>
          <h4>{'followers: ' + followers}</h4>
          <h4>{'following: ' + following}</h4>
          <p className="hover:cursor-pointer">
            <Link to={'https://github.com/' + login}>
              {'Github: ' + html_url}
            </Link>
          </p>
          <p>{'site_admin: ' + site_admin}</p>
        </div>
      </div>
    </div>
  )
}
export default Userprofile
