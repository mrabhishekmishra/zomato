import ZomatoApp from "../assets/images/zomato_app.avif";

const zomatoapp = () => {
  return (
   <>
   <div className=" container border m-auto p-2 grid grid-cols-2">
    <div className="border text-center  p-2">
        <img src={ZomatoApp} alt="" className="w-[70%] m-auto" />
    </div>
    <div className="border p-2 text-center p-2" >
        <h1 className="font-[500] text-[50px]">Get the zomato app </h1>
        <p className="text-[22px] text-start">We will send you a link, open it on your phone to download the app</p>
    </div>
   </div>
   </>
  )
}

export default zomatoapp
