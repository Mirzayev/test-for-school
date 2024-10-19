import Test from "../../quiz/Test";
import React, { useState } from "react";
import { Button, Flex, Table } from "antd";

const columns = [
  {
    title: "",
    dataIndex: "name",
  },
];

const theme = [
  "Boshlang‘ich tushunchalar. Hisoblashga oid misollar",
  "Qoldiqli bo‘lish",
  "Bo‘linish belgilari",
  "Umumiy bo‘luvchi va umumiy karrali. EKUB va EKUK",
  "Oxirgi raqam",
  "Butun sonlar Kasrlar",
  "Oddiy kasrlar",
  "Butun va kasr qismli sonlar",
  "O‘nli kasrlar",
  "Cheksiz davriy o‘nli kasrlar",
  "Ildizlarga oid formulalarning qo‘llanilishi",
  "Chiziqli tenglamalar. Proporsiya",
  "Ratsional tenglamalar",
  "Parametrli chiziqli tenglamalar",
  "n- darajali ildiz. Ratsional ko‘rsatkichli daraja",
  "Chiziqli tenglamalar sistemasi",
  "Chiziqli va ikkinchi darajali tenglamalar sistemasi",
  "Ikkinchi va undan yuqori darajali tenglamalar sistemasi",
  "Parametrli tenglamalar sistemasi",
  "Tengsizliklar",
  "Chiziqli tengsizliklar",
  "Funksiyalarning xossalari",
  "Logarifm",
  "Logarifmik ifodalarni shakl almashtirish",
  "Murakkab funksiyaning hosilasi",
  "Geometrik jismlar kombinatsiyalari",
  "Konus va shar",
  "Boshlang‘ich tushunchalar",
  "Trigonometriyaning asosiy ayniyatlari",
  "Keltirish formulalari",
  "Qo‘shish formulalari",
  "Ikkilangan burchak formulalari",
  "Ko‘paytma uchun formulalar",
  "Yig‘indi va ayirmalar uchun formulalar",
  "Yarim burchak formulalari",
  "Arksinus, akrkosinus, arktangens va arkkotangens",
  "Trigonometrik tenglamalar",
  "Aralash bo‘lim",
  "Trigonometrik tengsizliklar",
  "Trigonometrik funksiyalar va ularning xossalari",
  "Geometriya va planimetriya",
  "Burchaklar. Masofalar",
  "Parallel to‘g‘ri chiziqlar",
];


const dataSource = theme.map((name, i) => ({
  key: i,
  name: name,
}));

const Mathematics = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [startTest, setStartTest] = useState(false);
  const [testTime, setTestTime] = useState(20); // boshlang'ich vaqt
  const [testAmount, setTestAmount] = useState(10); // boshlang'ich savol soni

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div>
      {/* Asosiy interfeys */}
      {!startTest && (
        <Flex gap="middle" vertical>
          <h2 className="flex justify-center my-3 text-2xl font-bold">
            Matematika fanidan testlar
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
          <div className="border-[1px] rounded-md p-3 mt-4 bg-slate-100">
            <p className="font-bold">Savollar soni</p>
            <select
              className="block my-2 w-full border py-2 rounded-md px-1"
              value={testAmount} // qiymatni boshqarish
              onChange={(e) => setTestAmount(e.target.value)} // qiymatni yangilash
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
            <p className="font-bold">Umumiy vaqt </p>
            <select
              className="block my-2 w-full border py-2 rounded-md px-1"
              value={testTime} // qiymatni boshqarish
              onChange={(e) => setTestTime(e.target.value)} // qiymatni yangilash
            >
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
            </select>
            <Button onClick={() => setStartTest(true)}>Boshlash</Button>
          </div>
        </Flex>
      )}

      {startTest && <Test testTime={testTime} testAmount={testAmount} />}
    </div>
  );
};

export default Mathematics;
