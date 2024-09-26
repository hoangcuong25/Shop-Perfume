import ins_logo from '../../assets/instagram_icon.png'
import pin_logo from '../../assets/pintester_icon.png'
import whatsapp from '../../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="flex flex-col my-12">
            <ul className="flex justify-evenly">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="my-8">
                <div className="flex justify-evenly">
                    <img src={ins_logo} alt="" className="w-[25px] h-[25px]" />
                    <img src={pin_logo} alt="" className="w-[25px] h-[25px]" />
                    <img src={whatsapp} alt="" className="w-[25px] h-[25px]" />
                </div>
            </div>
            <hr className="w-[80%] place-self-center" />
            <div className="mt-5 place-self-center">
                <p>COPYRIGHT @ 2024 -ALL RIGHT RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer