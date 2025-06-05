"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
const formSchema = z.object({
  userId: z.string().min(2).max(50),
});

export default function Home() {
  const [login, setLogin] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
    },
  });
  function onSubmit(values) {
    if (values.userId === "petcook") {
      sessionStorage.setItem("id", values.userId);
      setLogin(true);
    }
  }
  useEffect(() => {
    if (sessionStorage.getItem("id") === "petcook") {
      setLogin(true);
    }
  }, []);
  return (
    <>
      {login === false && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input placeholder="請輸入ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">送出</Button>
          </form>
        </Form>
      )}
      {login === true && (
        <ul>
          <li>
            <a href="./product/所有版型">所有版型</a>
          </li>
          <li>
            <a href="./product/急凍骰子牛凍乾">急凍骰子牛凍乾</a>
          </li>
          <li>
            <a href="./product/五告順優格雞肉凍乾">五告順優格雞肉凍乾</a>
          </li>
          <li>
            <a href="./product/南方澳白帶魚捲凍乾">南方澳白帶魚捲凍乾</a>
          </li>
          <li>
            <a href="./product/五告ㄎㄧㄤ貓草雞肉凍乾">
              五告ㄎㄧㄤ貓草雞肉凍乾
            </a>
          </li>
          <li>
            <a href="./product/急凍骰子鹿凍乾">急凍骰子鹿凍乾</a>
          </li>
          <li>
            <a href="./product/北歐交響鮭凍乾">北歐交響鮭凍乾</a>
          </li>
          <li>
            <a href="./product/極鮮蝦大廚凍乾">極鮮蝦大廚凍乾</a>
          </li>
          <li>
            <a href="./product/香檳鳥下水凍乾">香檳鳥下水凍乾</a>
          </li>
          <li>
            <a href="./product/酥卵地瓜球凍乾">酥卵地瓜球凍乾</a>
          </li>
          <li>
            <a href="./product/筋肉胸雞丁凍乾">筋肉胸雞丁凍乾</a>
          </li>
          <li>
            <a href="./product/櫻桃鴨柳片凍乾">櫻桃鴨柳片凍乾</a>
          </li>
          <li>
            <a href="./product/虎克鬼頭刀凍乾">虎克鬼頭刀凍乾</a>
          </li>
          <li>
            <a href="./product/酥酥丁香魚凍乾">酥酥丁香魚凍乾</a>
          </li>
          <li>
            <a href="./product/酥胡啦雞佛凍乾">酥胡啦雞佛凍乾</a>
          </li>
          <li>
            <a href="./product/海灣鮮干貝凍乾">海灣鮮干貝凍乾</a>
          </li>
          <li>
            <a href="./product/五告勇羊奶雞肉凍乾">五告勇羊奶雞肉凍乾</a>
          </li>
          <li>
            <a href="./product/溫體大雞佛">溫體大雞佛</a>
          </li>
          <li>
            <a href="./product/廣島牛奶牡蠣">廣島牛奶牡蠣</a>
          </li>
          <li>
            <a href="./product/五告桑舒壓海味凍乾">五告桑舒壓海味凍乾</a>
          </li>
          <li>
            <a href="./product/南海極鮮貝柱">南海極鮮貝柱</a>
          </li>
        </ul>
      )}
    </>
  );
}
