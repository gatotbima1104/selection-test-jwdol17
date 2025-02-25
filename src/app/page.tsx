"use client";

import Box from "@/components/Box";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useEffect, useState } from "react";

export default function Home() {
  const initVal: number[][] = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
  ];

  const [array, setArray] = useState<number[][]>(initVal);
  const [isDoubleNumber, setIsDoubleNumber] = useState<number>(0)
  const [isRemoved, setIsRemoved] = useState<number>(0)

  const handleSorted = (arr: number[][], isAsc?: boolean) => {
    // console.log([...arr]);
    const resultArr = [...arr].sort((a, b) => {
      const sumA = a.reduce((sum, curr) => sum + curr, 0);
      const sumB = b.reduce((sum, curr) => sum + curr, 0);
      // console.log("from sumA", sumA)
      // console.log("from sumB", sumB)

      if(sumA == sumB) return isAsc? a[0] - b[0] : b[0] - a[0]   //compare first arr if sumA == sumB
      return isAsc ? sumA - sumB : sumB - sumA;
    });
    setArray(resultArr);
  };

  const handleDoubleNumber = (arr: number[][]) => setIsDoubleNumber([...arr].filter(el => el[0] == el[1]).length) //handle double numbers every render
  const handleReset = () => setArray([...initVal.map(el => [...el])]) //shallow copy & deep copy for back to init value, bcs array take as reference
  const handleFlip = (arr: number[][]) => setArray([...arr].map(el => [el[1], el[0]])) //reversed value by arr
  const handleRemove = (arr: number[][], value: number) => setArray([...arr].filter((el) => el[0] + el[1] !== value))
  const handleRemoveDup = () => { 
    setArray(arr => {
      const nonDuplicate = new Set() //make list unique
      return arr.filter(([a,b]) => { 
        const sum = a + b
        if(nonDuplicate.has(sum)) return false //remove if same result
        nonDuplicate.add(sum)
        return true
      })
    })
  }

  useEffect(()=> {
    handleDoubleNumber(array)
  }, [])

  return (
    <div className="h-screen w-full justify-center items-center flex flex-col gap-2">
      <div className="flex flex-col gap-2 mb-5">
        <p className="font-bold text-2xl">Dominoes</p>
        <Box
          label="Source"
          contents="[[6,1],[4,3],[5,1],[3,4],[1,1],[3,4],[1,2]]"
        />
        <Box label="Double Numbers" contents={isDoubleNumber} />
      </div>

      <div className="flex gap-2">
        {array.map((el, _) => (
          <Card key={_} val1={el[0]} val2={el[1]} />
        ))}
      </div>

      <div className="flex gap-5 mb-5">
        <Button label="Sort (ASC)" onClick={() => handleSorted(array, true)} />
        <Button
          label="Sort (DESC)"
          onClick={() => handleSorted(array, false)}
        />
        <Button label="Flip" onClick={()=> handleFlip(array)}/>
        <Button label="Remove Dup" onClick={handleRemoveDup}/>
        <Button label="Reset" onClick={handleReset}/>
      </div>

      <div className="flex flex-col gap-2">
        <input
          type="number"
          className="border min-w-[500] rounded-lg p-2"
          placeholder="Input Number"
          onChange={(e) => setIsRemoved(Number(e.target.value))}
        />
        <Button label="Remove" className="w-[100]" onClick={() => handleRemove(array, isRemoved)}/>
      </div>
    </div>
  );
}
