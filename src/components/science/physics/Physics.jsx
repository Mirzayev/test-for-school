

import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import PhysicsTest from "../../quiz/PhysicsTest"

const columns = [
  {
    title: "",
    dataIndex: "name",
  },
];

const theme = [
  "To‘g‘ri chiziqli harakat. Moddiy nuqta. Vektor kattaliklar. Sanoq sistemasi. Kuch birliklari",
 "To‘g‘ri chiziqli tekis harakat. O‘rtacha tezlik. Yo‘l. Tezlik",
 "Tekis tezlanuvchan va tekis sekinlanuvchan harakat. Tezlanish. Yo‘l. Tezlik",
 "Harakat nisbiyligi",
 "Aylana bo‘ylab tekis harakat",
 "Qattiq jismlar bosimi",
 "Arximed qonuni",
 "Paskal qonuni",
 "Gidrostatik bosim",
 "Atmosfera bosimi",
 "Yadro reaksiyalari. Energetik chiqish. Zanjir reaksiyalar",
 "Yadroning bog‘lanish energiyasi",
 "Zarralarni registratsiya qilish asboblari. Radioaktiv yemirilish. Yarim yemirilish davri",
 "Rezerford- Bor atom modeli",
 "Fotoeffekt. Foton. Yorug‘lik bosimi",
 "Nurlanish va spektrlar",
 "Nisbiylik nazariyasi",
 "Dispersiya. Interferensiya. Difraksiya. Polyarizatsiya",
 "Yorug‘lik tezligi. Yorug‘lik to‘lqini",
 "Fotometriya",
 "Linzalar.Ko'z.Optika",
 "Sinish qaytish qonunlari. Yassi ko'zgu. To'la qaytish"
];

const dataSource = theme.map((name, i) => ({
    key: i,
    name: name,
  }));

const Physics = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [testTime, setTestTime] = useState(20)
  const [testAmount, setTestAmount] = useState(10)
  const [startTest, setStartTest] = useState(false)

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleStartTest = () => {

    setStartTest(true)
  }

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
   <div>

{!startTest &&  <Flex gap="middle" vertical>
        <h2 className=" flex justify-center my-3 text-2xl font-bold text-center">Fizika fanidan testlar</h2>
      <Flex align="center" gap="middle">
        <Button
          type="primary"
          onClick={start}
          disabled={!hasSelected}
          loading={loading}
        >
          Reload
        </Button>
        {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
      </Flex>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
        scroll={{ y: 300 }}
      />
     
      <div className="border-[1px]  rounded-md p-3 mt-4 bg-slate-100">
      <p className="font-bold">Savollar soni</p>
       <select className="block my-2 w-full border py-2 rounded-md px-1" name="" id=""
       value={testAmount}
       onChange={(e) => setTestAmount(e.target.value)}
       >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
       </select>
       <p className="font-bold">Umumiy vaqt </p>
       <select className="block my-2 w-full border py-2  rounded-md px-1" name="" id=""
       value={testTime}
       onChange={(e) => setTestTime(e.target.value)}>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
       </select>
      <div className="" onClick={handleStartTest}>
      <Button className="">
        Boshlash
      </Button>
      </div>
      </div>
    </Flex>}

    {startTest && <PhysicsTest testAmount={testAmount} testTime={testTime}  />}

   </div>
  );
};

export default Physics;
