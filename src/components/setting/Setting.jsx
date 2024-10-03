import {useState} from "react";
import {Switch} from "antd";
import {Button} from "antd";

export default function Setting() {
    const [condition, setCondition] = useState(true);
    const changeCondition = (checked) => {
        setCondition(checked);
    };

    return (
        <div className={'w-full'}>
            <div className={'bg-[#414a4c] w-full py-4 text-white px-3 lg:px-40'}>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>wifi</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Proxy</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Sound</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>VPN</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Mobile hotspot</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Airplane mode</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Learn programming</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Rels</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Short</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Chess</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Qur'on</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Listening</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Speaking</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Namaz</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Play</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'border-b pb-1  border-white flex justify-between  my-4'}>
                    <p className={''}>Music</p>
                    <Switch defaultChecked onChange={changeCondition}/>
                </div>
                <div className={'w-full'}>
                    <Button className={'w-full'}>
                        Save
                    </Button>
                </div>

            </div>
        </div>
    )
}