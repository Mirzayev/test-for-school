import React, { useState } from "react";
import { Button, Flex, Table } from "antd";
import MotherTongueTest from "../../quiz/MotherTongueTest.jsx"

const columns = [
  {
    title: "",
    dataIndex: "name",
  },
];

const theme = [
  "Hozirgi o‘zbek adabiy tili fani haqida ma’lumot",
  "Leksikologiya",
  "Bir ma’noli va ko‘p ma’noli so‘zlar",
  "So‘zlarning shakl va ma’no munosabatiga ko‘ra turlari. Ma’nodosh so'zlar",
  "Zid ma’noli so‘zlar",
  "Shakldosh so‘zlar",
  "Paronim so‘zlar",
  "Yangi paydo bo‘lgan so‘zlar",
  "Iboralar",
  "Tasviriy ifodalar",
  "Sheva va lahjalar",
  "Atamalar",
  "Olmoshning ma’no turlari",
  "Olmoshning tuzilishiga ko‘ra turlari",
  "Fe’l nisbatlari",
  "Fe’llarning vazifa shakllari",
  "Yetakchi va ko‘makchi fe’llar",
  "Fe’llarning yasalishi",
  "Fe’llarning tuzilishiga ko'ra turlari",
];

const dataSource = theme.map((name, i) => ({
  key: i,
  name: name,
}));

const Tongue = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startTest, seStartTest] = useState(false);

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

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
     {!startTest &&  <Flex gap="middle" vertical>
        <h2 className=" flex justify-center my-3 text-2xl font-bold">
          Ona tili fanidan testlar
        </h2>
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
          <select
            className="block my-2 w-full border py-2 rounded-md px-1"
            name=""
            id=""
          >
            <option value="">10</option>
            <option value="">20</option>
            <option value="">30</option>
          </select>
          <p className="font-bold">Umumiy vaqt </p>
          <select
            className="block my-2 w-full border py-2  rounded-md px-1"
            name=""
            id=""
          >
            <option value="">20</option>
            <option value="">30</option>
            <option value="">40</option>
          </select>
          <Button>Boshlash</Button>
        </div>
      </Flex>}

      {startTest && <MotherTongueTest />}
    </div>
  );
};

export default Tongue;
