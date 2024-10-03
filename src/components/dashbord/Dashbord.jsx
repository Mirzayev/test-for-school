import logo from '../../assets/images/logo.webp'


export default function Dashbord(){

    return(
        <div  className={'px-5 shadow-xl min-h-screen'}>
            <div className={'flex justify-between   text-center items-center border-b-2 pb-4'}>
                <img className={'object-contain max-w-[60px]'} src={logo} alt=""/>
                <p className={'font-mono text-xl'}>Test Solution</p>
            </div>
            <div className={'mt-10 font-mono '}>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-square-poll-vertical"></i>
                    <p>My result</p>
                </div>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-circle-question"></i>
                    <p>Quiz</p>
                </div>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-square-poll-vertical"></i>
                    <p>Rating</p>
                </div>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-address-card"></i>
                    <p>About</p>
                </div>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-circle-info"></i>
                    <p>Help</p>
                </div>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-share"></i>
                    <p>Others</p>
                </div>
                <div
                    className={'flex items-center gap-2 cursor-pointer  text-xl hover:bg-slate-100 py-3 rounded text-slate-700 hover:text-slate-600 px-2'}>
                    <i className="fa-solid fa-gear"></i>
                    <p>Settings</p>
                </div>
            </div>
            <div>
                <div>
                    <p></p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}