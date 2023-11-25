import { Link } from "react-router-dom";
import "./Unauthorized.css";

function Unauthorized() {
  return (
    <>
     <div className="w-full p-4">
     <div className="flex items-center justify-center min-h-screen bg-indigo-500  bg-fixed bg-cover bg-bottom error-bg">
	<div className="container">
		<div className="row">
			<div className="col-sm-8 offset-sm-2 text-gray-50 text-center -mt-52">
				<div className="relative ">
				<h1 className="relative text-9xl tracking-tighter-less text-shadow font-sans font-bold">
					<span>4</span><span>0</span><span>1</span></h1>
					<span className="absolute  top-0   -ml-12  text-gray-300 font-semibold">Sorry!</span>
					</div>
				<h5 className="text-gray-300 font-semibold -mr-10 -mt-3">Unauthorized</h5>
				<p className="text-gray-100 mt-2 mb-6">You are not authorized to access</p>
				<Link
                className="bg-green-400  px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg" to='/home'>
					Got to Home
				</Link>
			</div>
		</div>
	</div>
</div>
</div>
    </>
  )
}

export default Unauthorized