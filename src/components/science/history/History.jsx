import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import HistoryTest from "../../quiz/HistoryTest";

const columns = [
  {
    title: "",
    dataIndex: "name",
  },
];

const theme = [
  "Eng qadimgi tuzumdan sivilizatsiya sari",
  "Qadimgi Sharq va O‘rta Osiyo",
  "Qadimgi Yunoniston",
  "Miloddan avvalgi VI - milodiy IV asrlarda O‘rta Osiyo",
  "Qadimgi Rim",
  "V-XI asrlarda Yevropa",
  "VI- X asrlarda Osiyo xalqlari",
  "O‘rta asrlarda ijtimoiy- siyosiy, iqtisodiy va madaniy hayot",
  "O‘rta Osiyoning Arab xalifalari tomonidan fath etilishi. Xalq qo‘zg‘olonlari",
  "Movarounnahrda mustaqil davlatlarning tashkil topishi. (IX- XIII asrlar)",
  "IX- XIII asrlarda madaniy hayot",
  "Vatanimiz xalqlarining Chingizxon istilosi va zulmiga qarshi ozodlik kurashi",
  "Amir Temur davlati",
  "Temuriylar saltanatida ijtimoiy-iqtisodiy va madaniy hayot",
  "Industrial jamiyatning shakllanishi",
  "O‘rta Osiyo davlatlarida madaniy hayot",
  "XIX asr ikkinchi yarmi- XX asr boshlarida qoraqalpoqlar",
  "1929-1933-yillardagi jahon iqtisodiy inqirozi",
  "Sharqiy Yevropa va Bolqon davlatlari ikkita jahon urushi oralig‘ida",
  "1918-1939- yillarda Osiyo davlatlarining iqtisodiy va siyosiy rivojlanishi",
  "Siyosiy islohotlar. Milliy mustaqillikning barpo etilishi",
  "O‘zbekiston tarkibida suveren Qoraqalpog‘iston",
  "Demokratik fuqarolik jamiyatini shakllanishi",
  "O‘zbekiston taraqqiyotining ijtimoiy-siyosiy aspektlari",
  "Iqtisodiy islohotlar. Bozor iqtisodiyotiga o‘tish",
  "O‘zbekistonda ta’lim va madaniyat",
  "O‘zbekistonni xalqaro hamjamiyatga kirishi"
];

const dataSource = theme.map((name, i) => ({
    key: i,
    name: name,
  }));

const History = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startTest, setStartTest] = useState(false)
  const [testTime, setTestTime] = useState(20)
  const [testAmount, setTestAmount] = useState(10)

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };


  const handleStarTest = () => {

    setStartTest(true)

  }

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
   <div>
    {!startTest && ( <Flex gap="middle" vertical>
        <h2 className=" flex justify-center my-3 text-2xl font-bold">Tarix fanidan testlar</h2>
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
       <select className="block my-2 w-full border py-2 rounded-md px-1" 
       name="" 
       id=""
       value={testAmount}
       onChange={(e) => setTestAmount(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
       </select>
       <p className="font-bold">Umumiy vaqt </p>
       <select className="block my-2 w-full border py-2  rounded-md px-1"
        name=""
         id=""
         value={testTime}
         onChange={(e) => setTestTime(e.target.value)}>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
       </select>
      <Button onClick={handleStarTest}>
        Boshlash
      </Button>
      </div>
    </Flex>)}

    {startTest && <HistoryTest testTime={testTime} testAmount={testAmount}/>}
   </div>
  );
};

export default History;
