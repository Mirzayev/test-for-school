import user from '../../assets/images/user.jpg'
import eng from '../../assets/icons/eng.png'
import uzb from '../../assets/icons/uzb.png'
import {useTranslation} from "react-i18next";
import '../../i18n.js'
import {useState} from "react";
import Profil from "../profil-setting/Profil.jsx";

export default function Topbar() {
    const {t, i18n} = useTranslation()


    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    const [condition, setCondition] = useState(false)

    const conditionChevron = () => {
        setCondition(!condition)

    }

    return (<div>

        <div className={'flex relative z-50 items-center justify-between  lg:px-10  px-4'}>

            <div>
                <h3 className={'text-[20px] font-semibold'}>{t('menu.test-solving')}</h3>
            </div>

            <div className={'flex items-center gap-5 relative'}>
                <div className={' bg-white '}>

                    <div onClick={() => changeLanguage("en")} className={'flex gap-2  items-center cursor-pointer'}>
                        <img className={''} src={eng} alt=""/>
                        <p className={'hidden lg:block'}>eng</p>
                        <i onClick={conditionChevron}
                           className={`fa-solid relative z-[90] p-3 mt-1 ${condition ? 'fa-chevron-up' : 'fa-chevron-down'} `}></i>
                    </div>

                    {condition && <div onClick={() => changeLanguage("uzb")}
                                          className={'flex gap-2 lg:mt-[-30px] items-center cursor-pointer'}>
                        <img className={''} src={uzb} alt=""/>
                        <p className={'hidden lg:block'}>uzb</p>
                    </div>
                    }


                </div>

              <Profil/>

            </div>
        </div>
    </div>)
}