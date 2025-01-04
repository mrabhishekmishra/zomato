import ZomatoApp from "../assets/images/zomato_app.avif";
import Google from "../assets/images/Google_Play_Store_badge_EN.svg"
import AppStor from "../assets/images/app-stor.png"

const zomatoapp = () => {

  let share = (e)=>{
      let key = e.target.name;
    if (key == '0') {
      window.location.href='https://play.google.com/store/games?device=windows';
    } else {
      window.location.href='https://apple.com/in/app-store/';
    }
    
  }
  return (
   <>
   <div className=" container  m-auto  grid grid-cols-2 p-3">
    <div className=" text-center  p-5">
        <img src={ZomatoApp} alt="" className="w-[70%] m-auto" />
    </div>
    <div className=" p-5" >
        <h1 className="font-[400] text-[45px] text-center">Get the zomato app </h1>
        <p className="text-[18px] text-star ">We will send you a link, open it on your phone to download <br /> the app</p>
        <div className="flex justify-around w-[300px] text-[22px] items-center">
          <input type="radio" name="" id="" /> <span>Email</span>
          <input type="radio" name="" id="" /> <span>Phone </span>
        </div>
        <div className="my-5">
          <input type="email" name="" id="" placeholder="Email" className="p-3 w-[70%] rounded-md text-[20px]" /> <button className="bg-[#c92020d9] rounded-md text-[white] p-3">Share APP Link </button>
          <input type="number" name="" id="" placeholder="Phone" className="p-3 w-[70%] rounded-md text-[20px]" /> <button className="bg-[#c92020d9] rounded-md text-[white] p-3">Share APP Link </button>
        </div>
        <p className="text-[#747171]">Download app from</p>
        <div className="flex justify-between w-[350px]">
        <button className="w-[150px] border rounded-md" onClick={share} name="1"><img src={Google} alt="" className="w-[100%] " name="0" /></button>
        <button className="w-[150px] border  rounded-md" onClick={share}><img src={AppStor} alt="" className="w-[100%]" name="1" /></button>
        </div>
        
    </div>
   </div>
   </>
  )
}

export default zomatoapp
